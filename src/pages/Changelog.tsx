import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Zap,
  Shield,
  Bug,
  ArrowRight,
  Bell,
  Filter,
  RefreshCw,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Types ─── */
type ChangeType = 'feature' | 'improvement' | 'security' | 'fix' | 'breaking';

interface Change {
  type: ChangeType;
  title: string;
  description: string;
  tag?: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
  changes: Change[];
}

/* ─── Config ─── */
const typeConfig: Record<ChangeType, { icon: typeof Sparkles; label: string; color: string; bg: string; border: string }> = {
  feature:     { icon: Sparkles,  label: 'Feature',     color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  improvement: { icon: Zap,       label: 'Improvement', color: 'text-blue-400',    bg: 'bg-blue-400/10',    border: 'border-blue-400/20' },
  security:    { icon: Shield,    label: 'Security',    color: 'text-amber-400',   bg: 'bg-amber-400/10',   border: 'border-amber-400/20' },
  fix:         { icon: Bug,       label: 'Fix',         color: 'text-rose-400',    bg: 'bg-rose-400/10',    border: 'border-rose-400/20' },
  breaking:    { icon: RefreshCw, label: 'Breaking',    color: 'text-orange-400',  bg: 'bg-orange-400/10',  border: 'border-orange-400/20' },
};

/* ─── Release Data ─── */
const releases: Release[] = [
  {
    version: '1.1.0',
    date: 'January 15, 2026',
    title: 'ShivanshAI-1.1 — Our Most Capable Model',
    description: 'A landmark release. ShivanshAI-1.1 achieves 98%+ across every major AI benchmark, redefining the state of the art in reasoning, coding, and creative intelligence.',
    highlight: true,
    changes: [
      { type: 'feature', title: 'ShivanshAI-1.1 Model', description: 'Our flagship model achieving 98.9% on GPQA Diamond, 98.7% on SWE-Bench, and 98%+ across all six benchmark categories. Available now on all plans.', tag: 'Model' },
      { type: 'feature', title: 'Advanced Reasoning Mode', description: 'New chain-of-thought reasoning with configurable depth levels (1-5) for complex multi-step problem solving. Enable via the reasoning_depth parameter.', tag: 'API' },
      { type: 'feature', title: 'Agentic Task Execution', description: 'Autonomous multi-step task completion with tool use, function calling, and iterative self-correction. ShivanshAI-1.1 scores 98.2% on AutoBench.', tag: 'Model' },
      { type: 'improvement', title: '3x Faster Inference', description: 'Completely re-architected inference pipeline delivers 1,247 tokens/second with sub-200ms first-token latency — the fastest in our history.', tag: 'Infra' },
      { type: 'feature', title: 'Computer Use & Browsing', description: '98.6% on OSWorld and 98.4% on BrowseComp. ShivanshAI-1.1 can navigate GUIs, control applications, and browse the web autonomously.', tag: 'Model' },
      { type: 'improvement', title: '200K Token Context Window', description: 'Expanded context window from 128K to 200K tokens using our new Hierarchical Context Compression architecture.', tag: 'Model' },
    ],
  },
  {
    version: '1.0.5',
    date: 'January 8, 2026',
    title: 'Global Infrastructure Expansion',
    description: 'Major infrastructure improvements for reliability, latency, and compliance.',
    changes: [
      { type: 'improvement', title: '12 New Edge Locations', description: 'Added edge nodes in São Paulo, Mumbai, Seoul, Jakarta, Dubai, Warsaw, Milan, Stockholm, Montreal, Cape Town, Tel Aviv, and Auckland.', tag: 'Infra' },
      { type: 'security', title: 'SOC 2 Type II Certification', description: 'Completed our annual SOC 2 Type II audit with zero findings. Full report available to Enterprise customers upon request.', tag: 'Compliance' },
      { type: 'improvement', title: 'Rate Limit Response Headers', description: 'API now returns x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, and x-ratelimit-retry-after headers on every response.', tag: 'API' },
      { type: 'fix', title: 'Streaming Truncation Fix', description: 'Resolved a rare issue where streaming responses exceeding 32K tokens would silently truncate. All tokens are now delivered reliably.', tag: 'API' },
      { type: 'improvement', title: 'Webhook Event Delivery', description: 'New webhook system for asynchronous event delivery — usage alerts, billing events, and model updates delivered in real-time.', tag: 'API' },
    ],
  },
  {
    version: '1.0.4',
    date: 'December 28, 2025',
    title: 'Multi-Modal Intelligence',
    description: 'Vision, document analysis, and audio transcription capabilities.',
    changes: [
      { type: 'feature', title: 'Image Analysis (Vision)', description: 'Upload images via URL or base64 and get detailed analysis, descriptions, OCR, and visual reasoning. Supports JPEG, PNG, WebP, and GIF.', tag: 'Model' },
      { type: 'feature', title: 'Document Processing', description: 'Extract, summarize, and reason about content from PDFs, Word documents, and presentations. Supports files up to 50MB.', tag: 'Model' },
      { type: 'feature', title: 'Audio Transcription', description: 'New /v1/audio/transcribe endpoint. Supports MP3, WAV, M4A, and WebM in 57 languages with automatic language detection.', tag: 'API' },
      { type: 'improvement', title: 'Context Window Expansion', description: 'Increased context window from 64K to 128K tokens across all models, enabling processing of entire codebases and long documents.', tag: 'Model' },
    ],
  },
  {
    version: '1.0.3',
    date: 'December 15, 2025',
    title: 'Developer Experience Update',
    description: 'New API features, SDK improvements, and structured output support.',
    changes: [
      { type: 'feature', title: 'Embeddings API', description: 'New /v1/embeddings endpoint with shivansh-embed-1.0 model. 1536-dimensional vectors optimized for search, clustering, and RAG applications.', tag: 'API' },
      { type: 'feature', title: 'Structured Output (JSON Mode)', description: 'Force JSON responses with the response_format parameter. Supports json_object and json_schema modes for reliable structured data extraction.', tag: 'API' },
      { type: 'feature', title: 'Python SDK v2.0', description: 'Complete rewrite of the Python SDK with async support, automatic retries, streaming iterators, and type hints for every parameter.', tag: 'SDK' },
      { type: 'feature', title: 'JavaScript SDK v2.0', description: 'TypeScript-first SDK with tree-shaking, ESM/CJS dual support, and automatic pagination for list endpoints.', tag: 'SDK' },
      { type: 'fix', title: 'Python SDK Memory Leak', description: 'Fixed a memory leak in the Python SDK that occurred during long-running batch operations with >10K requests.', tag: 'SDK' },
      { type: 'fix', title: 'Go SDK Connection Pool', description: 'Resolved connection pool exhaustion in the Go SDK under high concurrency (>100 goroutines).', tag: 'SDK' },
    ],
  },
  {
    version: '1.0.2',
    date: 'December 1, 2025',
    title: 'Enterprise & Security',
    description: 'SSO, audit logs, team management, and data residency.',
    changes: [
      { type: 'feature', title: 'SSO / SAML Authentication', description: 'Enterprise single sign-on with out-of-the-box support for Okta, Azure AD, Google Workspace, OneLogin, and custom SAML 2.0 providers.', tag: 'Enterprise' },
      { type: 'feature', title: 'Comprehensive Audit Logs', description: 'Every API call, login, configuration change, and admin action is logged with timestamps, IP addresses, and user attribution.', tag: 'Enterprise' },
      { type: 'feature', title: 'Team Management Dashboard', description: 'Invite team members, assign roles (Admin, Developer, Viewer), set per-user API limits, and monitor individual usage.', tag: 'Enterprise' },
      { type: 'security', title: 'Data Residency Options', description: 'Choose where your data is processed and stored: US (Virginia), EU (Frankfurt), or APAC (Tokyo). Configurable per organization.', tag: 'Compliance' },
      { type: 'security', title: 'Zero Data Retention', description: 'New option for Pro and Enterprise plans: prompts and responses are deleted immediately after processing. No logs, no storage.', tag: 'Privacy' },
    ],
  },
  {
    version: '1.0.1',
    date: 'November 18, 2025',
    title: 'Function Calling & Tools',
    description: 'Tool use, function calling, and parallel execution.',
    changes: [
      { type: 'feature', title: 'Function Calling', description: 'Define tools with JSON Schema and let ShivanshAI-1.0 decide when and how to call them. Supports parallel function calls in a single response.', tag: 'API' },
      { type: 'feature', title: 'Streaming Function Calls', description: 'Function call arguments are now streamed token-by-token, enabling progressive UI updates before the full call is complete.', tag: 'API' },
      { type: 'improvement', title: 'System Prompt Improvements', description: 'Better adherence to system prompts, especially for persona, formatting, and constraint instructions.', tag: 'Model' },
      { type: 'fix', title: 'Unicode Handling', description: 'Fixed incorrect token counting for CJK characters and emoji sequences in the tokenizer.', tag: 'API' },
    ],
  },
  {
    version: '1.0.0',
    date: 'November 1, 2025',
    title: 'OpenX Platform Launch',
    description: 'The beginning. OpenX Platform launches with ShivanshAI-1.0, our first frontier model.',
    highlight: true,
    changes: [
      { type: 'feature', title: 'ShivanshAI-1.0 Model', description: 'Our first frontier model — strong reasoning, coding, and creative capabilities. Available via chat interface and API.', tag: 'Model' },
      { type: 'feature', title: 'Chat Completions API', description: 'OpenAI-compatible /v1/chat/completions endpoint with streaming, temperature control, and max_tokens configuration.', tag: 'API' },
      { type: 'feature', title: 'Web Application', description: 'Clean, fast chat interface for direct conversations with ShivanshAI. Conversation history, forking, and sharing.', tag: 'Product' },
      { type: 'feature', title: 'API Key Management', description: 'Create, rotate, and revoke API keys from the dashboard. Per-key usage tracking and rate limiting.', tag: 'Platform' },
      { type: 'feature', title: 'Usage Dashboard', description: 'Real-time token usage, cost tracking, and rate limit monitoring with exportable reports.', tag: 'Platform' },
    ],
  },
];

/* ─── Component ─── */
export default function Changelog() {
  const [filter, setFilter] = useState<ChangeType | 'all'>('all');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  const allTypes: ChangeType[] = ['feature', 'improvement', 'security', 'fix'];

  const filteredReleases = filter === 'all'
    ? releases
    : releases
        .map((r) => ({ ...r, changes: r.changes.filter((c) => c.type === filter) }))
        .filter((r) => r.changes.length > 0);

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-600/[0.07] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-4 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <RefreshCw className="h-3.5 w-3.5" />
              Changelog
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
              What's{' '}
              <span className="text-gradient-main">New</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-surface-400 leading-relaxed">
              Every feature, improvement, and fix shipped to OpenX Platform.
              Follow our journey from v1.0.0 to the future.
            </p>

            {/* Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
              />
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors shrink-0">
                <Bell className="h-4 w-4" />
                Subscribe
              </button>
            </motion.div>
            <p className="mt-3 text-[12px] text-surface-600">Get notified when we ship new features. No spam.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FILTERS + TIMELINE ═══════════ */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-10 overflow-x-auto scrollbar-none pb-2"
          >
            <Filter className="h-4 w-4 text-surface-600 shrink-0" />
            <button
              onClick={() => setFilter('all')}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-white text-surface-950' : 'text-surface-500 hover:text-surface-200 hover:bg-white/[0.04]'
              }`}
            >
              All Changes
            </button>
            {allTypes.map((t) => {
              const conf = typeConfig[t];
              return (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    filter === t ? `${conf.bg} ${conf.color} border ${conf.border}` : 'text-surface-500 hover:text-surface-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <conf.icon className="h-3.5 w-3.5" />
                  {conf.label}
                </button>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-3 sm:left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-white/[0.06] to-transparent" />

            <div className="space-y-10 sm:space-y-14">
              {filteredReleases.map((release, i) => (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                  className="relative pl-9 sm:pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1.5 w-[7px] h-[7px] sm:w-[23px] sm:h-[23px] rounded-full flex items-center justify-center ${
                    release.highlight
                      ? 'bg-[#050505] border-2 border-brand-400 sm:left-0'
                      : 'bg-[#050505] border-2 border-white/20 sm:left-0'
                  }`}>
                    {release.highlight ? (
                      <div className="hidden sm:block w-2 h-2 rounded-full bg-brand-400" />
                    ) : (
                      <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30" />
                    )}
                  </div>

                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className={`px-2.5 py-1 rounded-lg text-sm font-bold font-mono ${
                      release.highlight ? 'bg-brand-500/15 text-brand-300 border border-brand-500/20' : 'bg-white/[0.04] text-surface-300'
                    }`}>
                      v{release.version}
                    </span>
                    <span className="text-sm text-surface-500">{release.date}</span>
                    {release.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-brand-500/10 text-[10px] font-bold text-brand-400 uppercase tracking-wider">
                        Major Release
                      </span>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`rounded-2xl border overflow-hidden ${
                    release.highlight
                      ? 'border-brand-500/15 bg-white/[0.02]'
                      : 'border-white/[0.05] bg-white/[0.015]'
                  }`}>
                    {/* Card header */}
                    <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-white/[0.04]">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{release.title}</h3>
                      <p className="text-sm text-surface-400 mt-1.5 leading-relaxed">{release.description}</p>
                    </div>

                    {/* Changes */}
                    <div className="divide-y divide-white/[0.03]">
                      {release.changes.map((change, j) => {
                        const conf = typeConfig[change.type];
                        const Icon = conf.icon;
                        return (
                          <div key={j} className="flex gap-3 sm:gap-4 px-5 sm:px-6 py-4 hover:bg-white/[0.01] transition-colors">
                            <div className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${conf.bg} flex items-center justify-center mt-0.5`}>
                              <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${conf.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-sm font-semibold text-white">{change.title}</h4>
                                {change.tag && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-surface-500 bg-white/[0.04] border border-white/[0.06]">
                                    {change.tag}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-surface-500 mt-1 leading-relaxed">{change.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* End of timeline */}
          <div className="relative pl-9 sm:pl-12 mt-10">
            <div className="absolute left-3 sm:left-[11px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] sm:w-[23px] sm:h-[23px] rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center">
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <p className="text-sm text-surface-600 italic">You've reached the beginning — v1.0.0 launch on November 1, 2025.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Stay Ahead of Every Update
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Subscribe to get notified about new features, model updates, and platform improvements.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/platform"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Explore the Platform
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/status"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  System Status
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
