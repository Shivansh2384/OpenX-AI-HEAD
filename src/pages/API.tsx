import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Zap,
  Globe,
  ArrowRight,
  Copy,
  Check,
  Braces,
  Key,
  Terminal,
  BookOpen,
  Shield,
  Clock,
  Server,
  AlertTriangle,
  Layers,
  Sparkles,
  Play,
} from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Copy Button ─── */
function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 2000); }}
      className="p-1.5 rounded-md hover:bg-white/[0.06] transition-colors"
      title="Copy"
    >
      {ok ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-surface-500" />}
    </button>
  );
}

/* ─── Code Block ─── */
function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-[#0c0c0c] overflow-hidden group">
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyBtn text={code} />
      </div>
      {lang && (
        <div className="px-4 py-2 border-b border-white/[0.04] text-[11px] font-mono text-surface-600 uppercase tracking-wider">
          {lang}
        </div>
      )}
      <pre className="p-4 sm:p-5 overflow-x-auto">
        <code className="text-[13px] font-mono text-surface-400 leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

/* ─── Data ─── */
const heroFeatures = [
  { icon: Zap, value: '1,247', unit: 'tokens/s', label: 'Inference speed' },
  { icon: Clock, value: '<200', unit: 'ms', label: 'First token latency' },
  { icon: Globe, value: '40+', unit: 'regions', label: 'Global edge' },
  { icon: Shield, value: '99.99%', unit: '', label: 'Uptime SLA' },
];

const endpoints = [
  {
    method: 'POST' as const,
    path: '/v1/chat/completions',
    description: 'Generate a model response for a conversation. Supports streaming, function calling, and structured output.',
    auth: true,
    params: [
      { name: 'model', type: 'string', required: true, desc: 'Model ID, e.g. "shivansh-ai-1.1"' },
      { name: 'messages', type: 'array', required: true, desc: 'Array of message objects with role and content' },
      { name: 'stream', type: 'boolean', required: false, desc: 'Enable streaming via server-sent events' },
      { name: 'temperature', type: 'number', required: false, desc: 'Sampling temperature (0–2). Default: 1' },
      { name: 'max_tokens', type: 'integer', required: false, desc: 'Max tokens to generate. Default: 4096' },
      { name: 'tools', type: 'array', required: false, desc: 'List of tools the model may call' },
      { name: 'response_format', type: 'object', required: false, desc: 'Force JSON or structured output' },
    ],
  },
  {
    method: 'POST' as const,
    path: '/v1/embeddings',
    description: 'Create vector embeddings for text input. Useful for search, clustering, and RAG applications.',
    auth: true,
    params: [
      { name: 'model', type: 'string', required: true, desc: '"shivansh-embed-1.0"' },
      { name: 'input', type: 'string | array', required: true, desc: 'Text to embed (single string or array)' },
      { name: 'encoding_format', type: 'string', required: false, desc: '"float" or "base64". Default: "float"' },
    ],
  },
  {
    method: 'POST' as const,
    path: '/v1/images/analyze',
    description: 'Analyze images with ShivanshAI-1.1 vision capabilities. Supports URL and base64 input.',
    auth: true,
    params: [
      { name: 'model', type: 'string', required: true, desc: '"shivansh-ai-1.1"' },
      { name: 'messages', type: 'array', required: true, desc: 'Messages with image_url content type' },
      { name: 'max_tokens', type: 'integer', required: false, desc: 'Max tokens for response' },
    ],
  },
  {
    method: 'POST' as const,
    path: '/v1/audio/transcribe',
    description: 'Transcribe audio files to text. Supports MP3, WAV, M4A, and WebM formats.',
    auth: true,
    params: [
      { name: 'file', type: 'file', required: true, desc: 'Audio file (max 25MB)' },
      { name: 'language', type: 'string', required: false, desc: 'ISO-639 language code' },
    ],
  },
  {
    method: 'GET' as const,
    path: '/v1/models',
    description: 'List all available models and their capabilities.',
    auth: true,
    params: [],
  },
  {
    method: 'GET' as const,
    path: '/v1/usage',
    description: 'Retrieve your API usage statistics for the current billing period.',
    auth: true,
    params: [
      { name: 'start_date', type: 'string', required: false, desc: 'ISO 8601 start date' },
      { name: 'end_date', type: 'string', required: false, desc: 'ISO 8601 end date' },
    ],
  },
];

const rateLimits = [
  { plan: 'Explorer (Free)', rpm: '20', tpm: '40K', daily: '100K tokens' },
  { plan: 'Pro', rpm: '500', tpm: '2M', daily: 'Unlimited' },
  { plan: 'Enterprise', rpm: 'Custom', tpm: 'Custom', daily: 'Unlimited' },
];

const errorCodes = [
  { code: '400', name: 'Bad Request', description: 'Invalid request body or missing required parameters.' },
  { code: '401', name: 'Unauthorized', description: 'Invalid or missing API key.' },
  { code: '403', name: 'Forbidden', description: 'API key lacks permission for this endpoint.' },
  { code: '429', name: 'Rate Limited', description: 'Too many requests. Check rate limit headers.' },
  { code: '500', name: 'Server Error', description: 'Internal error. Retry with exponential backoff.' },
  { code: '503', name: 'Overloaded', description: 'Server is temporarily overloaded. Retry shortly.' },
];

const sdks = [
  { name: 'Python', install: 'pip install openx', badge: '🐍' },
  { name: 'JavaScript', install: 'npm install openx', badge: '📦' },
  { name: 'Go', install: 'go get github.com/openx/openx-go', badge: '🔷' },
];

const codeExamples = {
  curl: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum computing."}
    ],
    "stream": true
  }'`,
  python: `from openx import OpenX

client = OpenX()  # Uses OPENX_API_KEY env var

# Basic completion
response = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing."}
    ]
)
print(response.choices[0].message.content)

# Streaming
stream = client.chat.completions.create(
    model="shivansh-ai-1.1",
    messages=[{"role": "user", "content": "Write a poem."}],
    stream=True
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")`,
  javascript: `import OpenX from 'openx';

const client = new OpenX(); // Uses OPENX_API_KEY env var

// Basic completion
const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain quantum computing.' },
  ],
});
console.log(response.choices[0].message.content);

// Streaming
const stream = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [{ role: 'user', content: 'Write a poem.' }],
  stream: true,
});
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`,
};

const responseExample = `{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1706000000,
  "model": "shivansh-ai-1.1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Quantum computing uses quantum bits..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 142,
    "total_tokens": 166
  }
}`;

/* ─── Component ─── */
export default function API() {
  const [activeTab, setActiveTab] = useState<'curl' | 'python' | 'javascript'>('python');
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(0);
  const { ref: endpointsRef, isVisible: endpointsVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-600/[0.07] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-4 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <Code2 className="h-3.5 w-3.5" />
              API Reference
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
              Build with{' '}
              <span className="text-gradient-main">ShivanshAI-1.1</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-surface-400 leading-relaxed">
              A simple, powerful API to integrate the world's most capable AI model
              into your applications. OpenAI-compatible — migrate in minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#quickstart"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-surface-950 shadow-xl shadow-white/[0.05] hover:bg-surface-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                Quickstart Guide
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#endpoints"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-[15px] font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Braces className="h-4 w-4 text-brand-400" />
                Endpoint Reference
              </a>
            </div>

            <div className="mt-6 text-[13px] text-surface-600">
              Base URL: <code className="font-mono text-surface-400">https://api.openx.ai</code>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {heroFeatures.map((f) => (
              <div key={f.label} className="text-center p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                <f.icon className="h-4 w-4 text-brand-400 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {f.value}<span className="text-sm text-surface-500 font-normal ml-0.5">{f.unit}</span>
                </div>
                <div className="text-xs text-surface-500 mt-0.5">{f.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AUTHENTICATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Key className="h-4 w-4 text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Authentication</h2>
            </div>
            <p className="text-surface-400 leading-relaxed">
              All API requests require an API key sent via the <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">Authorization</code> header.
              Keys are created in your <Link to="/pricing" className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">dashboard</Link>.
            </p>
          </motion.div>

          <CodeBlock
            lang="HTTP Header"
            code={`Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.04]"
          >
            <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-surface-400">
              <strong className="text-amber-300">Security:</strong> Never expose your API key in client-side code.
              Use environment variables or a server-side proxy.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICKSTART
      ═══════════════════════════════════════════════════════════ */}
      <section id="quickstart" className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Play className="h-4 w-4 text-brand-400" fill="currentColor" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Quickstart</h2>
            </div>
            <p className="text-surface-400">Get up and running in under a minute. Install an SDK, set your key, and make your first request.</p>
          </motion.div>

          {/* SDK Install */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">1. Install SDK</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {sdks.map((sdk) => (
                <div key={sdk.name} className="rounded-xl border border-white/[0.06] bg-[#0c0c0c] p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{sdk.badge}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{sdk.name}</div>
                      <code className="text-xs font-mono text-surface-500">{sdk.install}</code>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <CopyBtn text={sdk.install} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code examples */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">2. Make Your First Request</h3>
            <div className="rounded-xl border border-white/[0.06] bg-[#0c0c0c] overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.04] px-1">
                <div className="flex">
                  {(['curl', 'python', 'javascript'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab ? 'text-white' : 'text-surface-500 hover:text-surface-300'
                      }`}
                    >
                      {tab === 'curl' ? 'cURL' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="codeTab"
                          className="absolute bottom-0 inset-x-2 h-[2px] bg-brand-400 rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <div className="pr-3">
                  <CopyBtn text={codeExamples[activeTab]} />
                </div>
              </div>
              <pre className="p-5 overflow-x-auto">
                <code className="text-[13px] font-mono text-surface-400 leading-relaxed">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Response */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">3. Response Format</h3>
            <CodeBlock code={responseExample} lang="JSON Response" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ENDPOINTS
      ═══════════════════════════════════════════════════════════ */}
      <section id="endpoints" ref={endpointsRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={endpointsVisible ? { opacity: 1, y: 0 } : {}}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Braces className="h-4 w-4 text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">API Endpoints</h2>
            </div>
            <p className="text-surface-400">RESTful API with OpenAI-compatible request and response formats. All endpoints use <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">https://api.openx.ai</code> as the base URL.</p>
          </motion.div>

          <div className="space-y-3">
            {endpoints.map((ep, i) => {
              const isOpen = expandedEndpoint === i;
              return (
                <motion.div
                  key={ep.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={endpointsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedEndpoint(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className={`shrink-0 px-2.5 py-1 rounded text-[11px] font-bold font-mono ${
                      ep.method === 'POST' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {ep.method}
                    </span>
                    <code className="font-mono text-sm text-surface-200 flex-1 truncate">{ep.path}</code>
                    <span className="text-xs text-surface-500 hidden sm:block shrink-0 max-w-[200px] truncate">{ep.description.split('.')[0]}</span>
                    <svg className={`h-4 w-4 text-surface-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/[0.04] p-4 sm:p-5 space-y-4">
                      <p className="text-sm text-surface-400">{ep.description}</p>

                      {ep.params.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">Parameters</h4>
                          <div className="rounded-lg border border-white/[0.04] overflow-hidden">
                            {ep.params.map((p, j) => (
                              <div key={p.name} className={`grid grid-cols-[1fr_auto_1fr] sm:grid-cols-[140px_80px_auto_1fr] gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 text-sm ${j < ep.params.length - 1 ? 'border-b border-white/[0.03]' : ''}`}>
                                <code className="font-mono text-surface-200 text-xs">{p.name}</code>
                                <span className="text-xs text-surface-600 font-mono hidden sm:block">{p.type}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${p.required ? 'text-amber-400' : 'text-surface-600'}`}>
                                  {p.required ? 'Required' : 'Optional'}
                                </span>
                                <span className="text-xs text-surface-500 col-span-3 sm:col-span-1">{p.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MODELS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Models</h2>
            </div>
          </motion.div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
            {[
              { id: 'shivansh-ai-1.1', name: 'ShivanshAI-1.1', context: '200K', speed: '1,247 tok/s', best: 'Flagship — best for all tasks', status: 'Stable' },
              { id: 'shivansh-ai-1.1-fast', name: 'ShivanshAI-1.1 Fast', context: '128K', speed: '2,800 tok/s', best: 'Optimized for speed', status: 'Stable' },
              { id: 'shivansh-embed-1.0', name: 'ShivanshAI Embed', context: '8K', speed: '—', best: 'Text embeddings (1536 dims)', status: 'Stable' },
            ].map((model, i) => (
              <div key={model.id} className={`p-4 sm:p-5 ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono font-semibold text-white">{model.id}</code>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-400">{model.status}</span>
                    </div>
                    <p className="text-sm text-surface-500 mt-1">{model.best}</p>
                  </div>
                  <div className="flex gap-4 sm:gap-6 text-xs text-surface-500">
                    <span><strong className="text-surface-300">{model.context}</strong> context</span>
                    <span><strong className="text-surface-300">{model.speed}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RATE LIMITS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Server className="h-4 w-4 text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Rate Limits</h2>
            </div>
            <p className="text-surface-400">Limits are applied per API key. Check <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">x-ratelimit-*</code> response headers for current usage.</p>
          </motion.div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
            <div className="grid grid-cols-4 px-4 sm:px-5 py-3 border-b border-white/[0.05] bg-white/[0.02]">
              <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Plan</span>
              <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-center">RPM</span>
              <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-center">TPM</span>
              <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-right">Daily</span>
            </div>
            {rateLimits.map((r, i) => (
              <div key={r.plan} className={`grid grid-cols-4 px-4 sm:px-5 py-3 ${i < rateLimits.length - 1 ? 'border-b border-white/[0.03]' : ''}`}>
                <span className="text-sm text-surface-200 font-medium">{r.plan}</span>
                <span className="text-sm text-surface-400 text-center font-mono">{r.rpm}</span>
                <span className="text-sm text-surface-400 text-center font-mono">{r.tpm}</span>
                <span className="text-sm text-surface-400 text-right font-mono">{r.daily}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ERROR CODES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-brand-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Error Codes</h2>
            </div>
            <p className="text-surface-400">All errors return a JSON body with <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">error.message</code> and <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">error.type</code> fields.</p>
          </motion.div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
            {errorCodes.map((err, i) => (
              <div key={err.code} className={`flex items-start gap-4 px-4 sm:px-5 py-3.5 ${i < errorCodes.length - 1 ? 'border-b border-white/[0.03]' : ''}`}>
                <code className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold font-mono ${
                  err.code.startsWith('4') ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {err.code}
                </code>
                <div>
                  <span className="text-sm font-medium text-white">{err.name}</span>
                  <p className="text-xs text-surface-500 mt-0.5">{err.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESOURCES + CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Resources grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Resources</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, title: 'Documentation', desc: 'Comprehensive guides and tutorials', link: '/docs' },
                { icon: Layers, title: 'Examples', desc: 'Ready-to-run code samples', link: '/examples' },
                { icon: Terminal, title: 'SDKs', desc: 'Official Python, JS, and Go SDKs', link: '/sdk' },
              ].map((r) => (
                <Link
                  key={r.title}
                  to={r.link}
                  className="group p-5 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all"
                >
                  <r.icon className="h-5 w-5 text-brand-400 mb-3" />
                  <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">{r.title}</h3>
                  <p className="text-sm text-surface-500 mt-1">{r.desc}</p>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
            <div className="absolute inset-0 bg-dot-grid opacity-20" />
            <div className="absolute top-0 left-1/3 w-[400px] h-[250px] rounded-full bg-brand-400/[0.08] blur-[100px]" />

            <div className="relative z-10 px-8 sm:px-14 py-14 sm:py-16 text-center">
              <Code2 className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Start Building Today
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Free tier includes 100K tokens/day. No credit card required. Full API access from day one.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  Get Your API Key
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
