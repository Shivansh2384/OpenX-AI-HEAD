import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Check,
  Terminal,
  BookOpen,
  Code2,
  Download,
  ExternalLink,
  RefreshCw,
  Package,
  Braces,
  CheckCircle2,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Copy ─── */
function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 2000); }}
      className="p-1.5 rounded-md hover:bg-white/[0.06] transition-colors" title="Copy">
      {ok ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-surface-500" />}
    </button>
  );
}

/* ─── Data ─── */
const sdks = [
  {
    id: 'python',
    lang: 'Python',
    badge: '🐍',
    version: '2.1.0',
    install: 'pip install openx',
    minVersion: 'Python 3.8+',
    repo: 'github.com/openx/openx-python',
    features: ['Async/await support', 'Streaming iterators', 'Automatic retries with backoff', 'Full type hints (PEP 484)', 'Token counting utilities', 'Multipart file uploads'],
    basicExample: `from openx import OpenX

client = OpenX()  # Uses OPENX_API_KEY env var

response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing."}
    ]
)

print(response.choices[0].message.content)`,
    streamingExample: `from openx import OpenX

client = OpenX()

stream = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{"role": "user", "content": "Write a poem about AI."}],
    stream=True,
)

for chunk in stream:
    content = chunk.choices[0].delta.content or ""
    print(content, end="", flush=True)`,
    asyncExample: `import asyncio
from openx import AsyncOpenX

async def main():
    client = AsyncOpenX()

    response = await client.chat.completions.create(
        model="shivansh-ai-1.1",
        messages=[{"role": "user", "content": "Hello!"}]
    )

    print(response.choices[0].message.content)

asyncio.run(main())`,
    functionCallingExample: `from openx import OpenX

client = OpenX()

tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get weather for a location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string"}
            },
            "required": ["location"]
        }
    }
}]

response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{"role": "user", "content": "What's the weather in Tokyo?"}],
    tools=tools,
)

print(response.choices[0].message.tool_calls)`,
  },
  {
    id: 'javascript',
    lang: 'JavaScript / TypeScript',
    badge: '📦',
    version: '2.1.0',
    install: 'npm install openx',
    minVersion: 'Node.js 18+ / Bun / Deno',
    repo: 'github.com/openx/openx-node',
    features: ['TypeScript-first with full types', 'ESM & CommonJS dual support', 'Tree-shakeable', 'Streaming with AsyncIterator', 'Automatic retries & timeout', 'Edge runtime compatible'],
    basicExample: `import OpenX from 'openx';

const client = new OpenX(); // Uses OPENX_API_KEY env var

const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain quantum computing.' },
  ],
});

console.log(response.choices[0].message.content);`,
    streamingExample: `import OpenX from 'openx';

const client = new OpenX();

const stream = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{ role: 'user', content: 'Write a poem about AI.' }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || '';
  process.stdout.write(content);
}`,
    asyncExample: `// Next.js Route Handler (App Router)
import OpenX from 'openx';

export async function POST(req: Request) {
  const client = new OpenX();
  const { prompt } = await req.json();

  const stream = await client.chat.completions.create({
    model: 'shivansh-ai-1.1',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  });

  return new Response(stream.toReadableStream());
}`,
    functionCallingExample: `import OpenX from 'openx';

const client = new OpenX();

const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{ role: 'user', content: "What's the weather in Tokyo?" }],
  tools: [{
    type: 'function',
    function: {
      name: 'get_weather',
      description: 'Get weather for a location',
      parameters: {
        type: 'object',
        properties: { location: { type: 'string' } },
        required: ['location'],
      },
    },
  }],
});

console.log(response.choices[0].message.tool_calls);`,
  },
  {
    id: 'go',
    lang: 'Go',
    badge: '🔷',
    version: '1.3.0',
    install: 'go get github.com/openx/openx-go',
    minVersion: 'Go 1.21+',
    repo: 'github.com/openx/openx-go',
    features: ['Strongly typed request/response', 'Context-aware cancellation', 'Connection pooling', 'Automatic retries', 'Streaming support', 'Zero external dependencies'],
    basicExample: `package main

import (
    "context"
    "fmt"
    "github.com/openx/openx-go"
)

func main() {
    client := openx.NewClient() // Uses OPENX_API_KEY env var

    resp, err := client.Chat.Create(context.Background(), openx.ChatRequest{
        Model: "shivansh-ai-1.1",
        Messages: []openx.Message{
            {Role: "system", Content: "You are a helpful assistant."},
            {Role: "user", Content: "Explain quantum computing."},
        },
    })
    if err != nil {
        panic(err)
    }

    fmt.Println(resp.Choices[0].Message.Content)
}`,
    streamingExample: `package main

import (
    "context"
    "fmt"
    "github.com/openx/openx-go"
)

func main() {
    client := openx.NewClient()

    stream, err := client.Chat.CreateStream(context.Background(), openx.ChatRequest{
        Model: "shivansh-ai-1.1",
        Messages: []openx.Message{
            {Role: "user", Content: "Write a poem about AI."},
        },
    })
    if err != nil {
        panic(err)
    }
    defer stream.Close()

    for stream.Next() {
        chunk := stream.Current()
        fmt.Print(chunk.Choices[0].Delta.Content)
    }
}`,
    asyncExample: `// Using with context timeout
ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

resp, err := client.Chat.Create(ctx, openx.ChatRequest{
    Model: "shivansh-ai-1.1",
    Messages: []openx.Message{
        {Role: "user", Content: "Hello!"},
    },
})`,
    functionCallingExample: `resp, err := client.Chat.Create(ctx, openx.ChatRequest{
    Model: "shivansh-ai-1.1",
    Messages: []openx.Message{
        {Role: "user", Content: "What's the weather in Tokyo?"},
    },
    Tools: []openx.Tool{{
        Type: "function",
        Function: openx.FunctionDef{
            Name:        "get_weather",
            Description: "Get weather for a location",
            Parameters: openx.Schema{
                Type: "object",
                Properties: map[string]openx.Schema{
                    "location": {Type: "string"},
                },
                Required: []string{"location"},
            },
        },
    }},
})

fmt.Println(resp.Choices[0].Message.ToolCalls)`,
  },
];

type Tab = 'basic' | 'streaming' | 'async' | 'functions';
const tabs: { id: Tab; label: string }[] = [
  { id: 'basic', label: 'Basic' },
  { id: 'streaming', label: 'Streaming' },
  { id: 'async', label: 'Async / Server' },
  { id: 'functions', label: 'Function Calling' },
];

/* ─── Component ─── */
export default function SDK() {
  const [activeSDK, setActiveSDK] = useState('python');
  const [activeTab, setActiveTab] = useState<Tab>('basic');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  const sdk = sdks.find((s) => s.id === activeSDK)!;

  const codeForTab: Record<Tab, string> = {
    basic: sdk.basicExample,
    streaming: sdk.streamingExample,
    async: sdk.asyncExample,
    functions: sdk.functionCallingExample,
  };

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-brand-600/[0.06] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <Package className="h-3 w-3" /> Official SDKs
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Client{' '}
              <span className="text-gradient-main">Libraries</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Official SDKs for Python, JavaScript/TypeScript, and Go.
              OpenAI-compatible — migrate your existing code with a single line change.
            </p>

            {/* Quick install cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 grid sm:grid-cols-3 gap-4"
            >
              {sdks.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setActiveSDK(s.id); setActiveTab('basic'); }}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 group ${
                    activeSDK === s.id
                      ? 'border-brand-500/25 bg-brand-500/[0.06]'
                      : 'border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{s.badge}</span>
                      <span className="font-semibold text-white">{s.lang.split(' /')[0]}</span>
                    </div>
                    <span className="text-[10px] font-mono text-surface-500">v{s.version}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="text-xs font-mono text-surface-400">{s.install}</code>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <CopyBtn text={s.install} />
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SDK DETAIL ═══════════ */}
      <section className="py-12 sm:py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* SDK header */}
          <motion.div
            key={sdk.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sdk.badge}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{sdk.lang}</h2>
                  <div className="flex items-center gap-3 mt-0.5 text-sm text-surface-500">
                    <span className="font-mono">v{sdk.version}</span>
                    <span>·</span>
                    <span>{sdk.minVersion}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/openx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm text-surface-300 hover:text-white hover:border-white/20 transition-all">
                  <ExternalLink className="h-3.5 w-3.5" /> GitHub
                </a>
                <Link to="/docs" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm text-surface-300 hover:text-white hover:border-white/20 transition-all">
                  <BookOpen className="h-3.5 w-3.5" /> Docs
                </Link>
              </div>
            </div>

            {/* Install */}
            <div className="rounded-xl bg-[#0c0c0c] border border-white/[0.06] p-4 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-surface-500" />
                <code className="font-mono text-sm text-brand-300">{sdk.install}</code>
              </div>
              <CopyBtn text={sdk.install} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {sdk.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-surface-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code examples */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#0c0c0c] overflow-hidden">
            {/* Tabs */}
            <div className="flex items-center justify-between border-b border-white/[0.04] px-1 overflow-x-auto scrollbar-none">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id ? 'text-white' : 'text-surface-500 hover:text-surface-300'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="sdkTab"
                        className="absolute bottom-0 inset-x-2 h-[2px] bg-brand-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="pr-3">
                <CopyBtn text={codeForTab[activeTab]} />
              </div>
            </div>

            {/* Code */}
            <motion.div
              key={`${sdk.id}-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <pre className="p-5 sm:p-6 overflow-x-auto">
                <code className="text-[13px] font-mono text-surface-400 leading-relaxed">
                  {codeForTab[activeTab]}
                </code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ MIGRATION ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <RefreshCw className="h-5 w-5 text-brand-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Migrate from OpenAI</h2>
              </div>
              <p className="text-surface-400 leading-relaxed mb-6">
                OpenX SDKs are fully compatible with the OpenAI API format. Switch with a single line change — no code rewrite needed.
              </p>
              <div className="space-y-3">
                {[
                  'Same request/response schema',
                  'Same endpoint structure (/v1/chat/completions)',
                  'Same streaming format (SSE)',
                  'Same function calling interface',
                  'Same error codes and handling',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-surface-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">Before (OpenAI)</p>
                <div className="rounded-xl bg-[#0c0c0c] border border-rose-500/10 p-4 overflow-x-auto">
                  <code className="text-[13px] font-mono text-surface-500">
                    {`from openai import OpenAI
client = OpenAI()`}
                  </code>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">After (OpenX)</p>
                <div className="rounded-xl bg-[#0c0c0c] border border-emerald-500/10 p-4 overflow-x-auto">
                  <code className="text-[13px] font-mono text-surface-300">
                    {`from openx import OpenX
client = OpenX()`}
                  </code>
                </div>
              </div>
              <p className="text-xs text-surface-600 text-center">That's it. Everything else stays the same.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ RESOURCES ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Braces, title: 'API Reference', desc: 'All endpoints and parameters', link: '/api-reference' },
              { icon: Code2, title: 'Examples', desc: '12 ready-to-run code samples', link: '/examples' },
              { icon: BookOpen, title: 'Guides', desc: 'Step-by-step tutorials', link: '/docs' },
            ].map((r) => (
              <Link
                key={r.title}
                to={r.link}
                className="group p-5 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
              >
                <r.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">{r.title}</h3>
                <p className="text-sm text-surface-500 mt-1">{r.desc}</p>
              </Link>
            ))}
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
              <Download className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Start Building in Minutes
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Install an SDK, set your API key, and make your first request. Free tier available — no credit card needed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Get API Key
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/api-reference"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  API Reference
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
