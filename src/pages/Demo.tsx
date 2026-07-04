import { useState, useRef, useEffect, useMemo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Code2,
  FileText,
  RotateCcw,
  Copy,
  Check,
  Bot,
  User,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Types ─── */
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/* ─── Preset prompts ─── */
const presets = [
  {
    icon: Brain,
    label: 'Reasoning',
    prompt: 'A bat and ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost? Think step by step.',
    response: `This is a classic cognitive reflection problem. Let me work through it carefully.

**Setting up the equation:**
Let the ball cost x dollars.
The bat costs $1.00 more than the ball, so the bat costs (x + $1.00).
Together they cost $1.10.

**Solving:**
x + (x + $1.00) = $1.10
2x + $1.00 = $1.10
2x = $0.10
x = $0.05

**The ball costs $0.05 (5 cents).**

**Verification:** Ball = $0.05, Bat = $1.05. Total = $1.10 ✓
The bat costs exactly $1.00 more than the ball ($1.05 − $0.05 = $1.00) ✓

The intuitive answer of $0.10 is wrong — if the ball cost $0.10, the bat would cost $1.10, making the total $1.20.`,
  },
  {
    icon: Code2,
    label: 'Coding',
    prompt: 'Write a TypeScript function that deep clones an object, handling circular references, Dates, Maps, Sets, and RegExps.',
    response: `Here's a robust deep clone implementation:

\`\`\`typescript
function deepClone<T>(obj: T, seen = new WeakMap()): T {
  // Primitives and null
  if (obj === null || typeof obj !== 'object') return obj;

  // Check for circular references
  if (seen.has(obj as object)) return seen.get(obj as object);

  // Handle special types
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as T;

  if (obj instanceof Map) {
    const map = new Map();
    seen.set(obj as object, map);
    obj.forEach((val, key) =>
      map.set(deepClone(key, seen), deepClone(val, seen))
    );
    return map as T;
  }

  if (obj instanceof Set) {
    const set = new Set();
    seen.set(obj as object, set);
    obj.forEach((val) => set.add(deepClone(val, seen)));
    return set as T;
  }

  // Arrays and plain objects
  const clone = (Array.isArray(obj) ? [] : {}) as T;
  seen.set(obj as object, clone);

  for (const key of Reflect.ownKeys(obj as object)) {
    (clone as any)[key] = deepClone((obj as any)[key], seen);
  }

  return clone;
}
\`\`\`

**Key features:**
- Handles circular references via \`WeakMap\`
- Preserves \`Date\`, \`RegExp\`, \`Map\`, \`Set\` types
- Uses \`Reflect.ownKeys\` to capture symbol properties
- Fully generic with TypeScript type preservation`,
  },
  {
    icon: FileText,
    label: 'Creative',
    prompt: 'Write the opening paragraph of a literary novel set in a city that exists between two moments in time.',
    response: `The city of Meridian exists in the breath between seconds — that impossible space where a clock's hand has left one number but not yet touched the next. Here, buildings grow like crystallized hesitations, their facades reflecting not light but the memory of light, and every street leads to a corner that hasn't quite decided whether to turn left or vanish entirely.

The residents of Meridian do not age. They accumulate. Each morning they wake with the faint residue of someone else's Tuesday clinging to their skin, and by evening they have shed it — only to find Wednesday's ghost waiting patiently in the kitchen, brewing tea from leaves that haven't been picked yet.

Time, in Meridian, is not a river. It is a held breath. And those who live within it have learned the most essential truth of existence: that the space between moments is wider than the moments themselves, and infinitely more inhabitable.`,
  },
  {
    icon: Bot,
    label: 'Analysis',
    prompt: 'Compare the architectural patterns of microservices vs monoliths. When should a startup choose each?',
    response: `## Microservices vs Monoliths: A Practical Framework

### Monolith — Start Here (Usually)

**Strengths:**
- Single codebase, simple deployment, easy debugging
- Lower operational overhead (no service mesh, no distributed tracing)
- Faster iteration when team is small (< 10 engineers)
- Shared database = simpler data consistency

**When to choose:** Early-stage startups, MVPs, teams under 10, products where speed-to-market matters more than scale.

### Microservices — Earn This

**Strengths:**
- Independent deployment and scaling per service
- Team autonomy (each team owns a service boundary)
- Technology flexibility (different languages/DBs per service)
- Fault isolation (one service failing doesn't crash everything)

**When to choose:** After product-market fit, teams > 15-20, clear domain boundaries, when scaling bottlenecks are specific and measurable.

### The Real Answer

**Start monolith. Extract services when the pain is specific and measurable.**

The biggest mistake startups make is premature microservices — solving organizational scaling problems before they have an organization to scale. A well-structured monolith with clean module boundaries can evolve into services later. The reverse is much harder.

**Rule of thumb:** If you can't articulate exactly which service boundary is causing pain, you don't need microservices yet.`,
  },
];

/* ─── Typing animation hook ─── */
function useTypingEffect(text: string, speed: number = 12, active: boolean = false) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) { setDisplayed(''); setDone(false); return; }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, active]);

  return { displayed, done };
}

/* ─── Copy Button ─── */
function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 2000); }}
      className="p-1.5 rounded-md hover:bg-white/[0.06] transition-colors" title="Copy">
      {ok ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-surface-500" />}
    </button>
  );
}

/* ─── Markdown-like renderer ─── */
function RenderMarkdown({ text }: { text: string }) {
  const elements = useMemo(() => {
    const lines = text.split('\n');
    const result: ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code block: ```lang ... ```
      if (line.startsWith('```')) {
        const lang = line.slice(3).trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const code = codeLines.join('\n');
        result.push(
          <div key={result.length} className="my-3 rounded-xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden">
            {lang && (
              <div className="px-4 py-2 border-b border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono text-surface-600 uppercase tracking-wider">{lang}</span>
                <CopyBtn text={code} />
              </div>
            )}
            <pre className="p-4 overflow-x-auto">
              <code className="text-[13px] font-mono text-surface-300 leading-relaxed">{code}</code>
            </pre>
          </div>
        );
        continue;
      }

      // ## Heading
      if (line.startsWith('## ')) {
        result.push(<h2 key={result.length} className="text-lg font-bold text-white mt-5 mb-2">{line.slice(3)}</h2>);
        i++; continue;
      }

      // ### Subheading
      if (line.startsWith('### ')) {
        result.push(<h3 key={result.length} className="text-base font-semibold text-surface-200 mt-4 mb-1.5">{line.slice(4)}</h3>);
        i++; continue;
      }

      // Empty line → spacer
      if (line.trim() === '') {
        result.push(<div key={result.length} className="h-2" />);
        i++; continue;
      }

      // Bullet list item
      if (line.startsWith('- ')) {
        result.push(
          <div key={result.length} className="flex items-start gap-2 ml-1">
            <span className="text-brand-400 mt-1.5 shrink-0">•</span>
            <span>{renderInline(line.slice(2))}</span>
          </div>
        );
        i++; continue;
      }

      // Regular paragraph
      result.push(<p key={result.length}>{renderInline(line)}</p>);
      i++;
    }

    return result;
  }, [text]);

  return <div className="space-y-1">{elements}</div>;
}

/* Inline markdown: **bold** and `code` */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  // Split on **bold** and `code`
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(<strong key={match.index} className="text-white font-semibold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(<code key={match.index} className="text-brand-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-[12px] font-mono">{token.slice(1, -1)}</code>);
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

/* ─── Component ─── */
export default function Demo() {
  const [activePreset, setActivePreset] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  const current = presets[activePreset];
  const { displayed, done } = useTypingEffect(current.response, 8, isTyping);

  // Auto-scroll inside the chat container only
  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [displayed, messages]);

  const startDemo = (index: number) => {
    setActivePreset(index);
    setMessages([{ role: 'user', content: presets[index].prompt }]);
    setIsTyping(true);
  };

  const reset = () => {
    setMessages([]);
    setIsTyping(false);
  };

  const tokenCount = Math.floor(displayed.length * 0.28);
  const elapsed = isTyping && !done ? (displayed.length / (8 * 100)).toFixed(1) : done ? ((current.response.length) / (8 * 100)).toFixed(1) : '0.0';

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section ref={heroRef} className="relative py-12 sm:py-20 overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0">
          <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-600/[0.05] blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/platform" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Platform
            </Link>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">Interactive Demo</h1>
                <p className="text-sm text-surface-500">Experience ShivanshAI-1.1 in action — reasoning, coding, creative writing, and analysis.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN DEMO AREA */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            {/* Sidebar — Presets */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Try a Preset</h3>
              {presets.map((preset, i) => (
                <button
                  key={preset.label}
                  onClick={() => startDemo(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activePreset === i && messages.length > 0
                      ? 'border-brand-500/25 bg-brand-500/[0.06]'
                      : 'border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.1]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <preset.icon className="h-4 w-4 text-brand-400" />
                    <span className="text-sm font-semibold text-white">{preset.label}</span>
                  </div>
                  <p className="text-xs text-surface-500 leading-relaxed line-clamp-2">{preset.prompt}</p>
                </button>
              ))}

              {messages.length > 0 && (
                <button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-white/[0.06] text-sm text-surface-500 hover:text-surface-300 hover:bg-white/[0.03] transition-all"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset
                </button>
              )}
            </div>

            {/* Chat area */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] overflow-hidden flex flex-col" style={{ minHeight: 520 }}>
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.01]">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium text-white">shivansh-ai-1.1</span>
                  <span className="text-[10px] text-surface-600 font-mono">interactive demo</span>
                </div>
                {isTyping && !done && (
                  <span className="text-[11px] text-brand-400 animate-pulse">Generating...</span>
                )}
                {done && (
                  <div className="flex items-center gap-3 text-[11px] text-surface-600">
                    <span>⚡ ~{tokenCount} tokens</span>
                    <span>⏱ {elapsed}s</span>
                  </div>
                )}
              </div>

              {/* Messages */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 scrollbar-none">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-16">
                    <Sparkles className="h-10 w-10 text-surface-700 mb-4" />
                    <h3 className="text-lg font-semibold text-surface-400 mb-2">Try ShivanshAI-1.1</h3>
                    <p className="text-sm text-surface-600 max-w-sm">
                      Select a preset from the sidebar to see the model in action.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* User message */}
                    {messages.filter((m) => m.role === 'user').map((msg, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="shrink-0 h-7 w-7 rounded-lg bg-surface-800 flex items-center justify-center mt-0.5">
                          <User className="h-3.5 w-3.5 text-surface-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[11px] text-surface-600 font-medium">You</span>
                          <p className="text-sm text-surface-300 mt-1 leading-relaxed">{msg.content}</p>
                        </div>
                      </div>
                    ))}

                    {/* Assistant response */}
                    {isTyping && (
                      <div className="flex gap-3">
                        <div className="shrink-0 h-7 w-7 rounded-lg bg-brand-500/10 border border-brand-500/15 flex items-center justify-center mt-0.5">
                          <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-brand-400 font-medium">ShivanshAI-1.1</span>
                            {done && <CopyBtn text={current.response} />}
                          </div>
                          <div className="text-sm text-surface-300 mt-1 leading-relaxed">
                            <RenderMarkdown text={displayed} />
                            {!done && <span className="inline-block w-2 h-4 bg-brand-400 ml-0.5 animate-pulse rounded-sm" />}
                          </div>
                        </div>
                      </div>
                    )}
                    <div />
                  </>
                )}
              </div>

              {/* Bottom bar — sign up CTA instead of input */}
              <div className="border-t border-white/[0.05] p-4 bg-white/[0.01]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[13px] text-surface-500 text-center sm:text-left">
                    This is a simulated preview. Sign up for full, unrestricted access.
                  </p>
                  <Link
                    to="/signup"
                    className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
                  >
                    Get Started Free <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What You Just Saw</h2>
            <p className="mt-3 text-surface-400 max-w-2xl mx-auto">
              ShivanshAI-1.1 handles reasoning, coding, creative writing, and analysis at 98%+ benchmark performance.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Brain, title: 'Reasoning', value: '98.9%', detail: 'GPQA Diamond', description: 'Multi-step logical reasoning, math, and scientific analysis.' },
              { icon: Code2, title: 'Coding', value: '98.7%', detail: 'SWE-Bench', description: 'Code generation, debugging, architecture, and refactoring.' },
              { icon: FileText, title: 'Creative', value: '98.2%', detail: 'AutoBench', description: 'Nuanced writing, brainstorming, and stylistic control.' },
              { icon: Zap, title: 'Speed', value: '1,247', detail: 'tokens/sec', description: 'Fast inference with sub-200ms first-token latency.' },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.025] transition-colors"
              >
                <cap.icon className="h-5 w-5 text-brand-400 mb-3" />
                <div className="text-xl font-bold text-gradient-accent">{cap.value}</div>
                <div className="text-[11px] text-surface-500 mb-2">{cap.detail}</div>
                <h3 className="text-base font-semibold text-white mb-1">{cap.title}</h3>
                <p className="text-sm text-surface-500">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
            <div className="absolute inset-0 bg-dot-grid opacity-20" />
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-brand-400/[0.1] blur-[120px]" />

            <div className="relative z-10 px-8 sm:px-16 py-14 sm:py-18 text-center">
              <Sparkles className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to Build with ShivanshAI-1.1?
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Get your API key and start building — free tier includes 100K tokens/day with full model access.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/api"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  API Documentation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
