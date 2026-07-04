import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Braces,
  BookOpen,
  Copy,
  Check,
  ChevronDown,
  Zap,
  Shield,
  Globe,
  Server,
  Code2,
  Terminal,
  Key,
  Clock,
  AlertTriangle,
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

/* ─── Types ─── */
interface Param {
  name: string;
  type: string;
  required: boolean;
  description: string;
  default?: string;
}

interface Endpoint {
  id: string;
  method: 'GET' | 'POST' | 'DELETE';
  path: string;
  title: string;
  description: string;
  params: Param[];
  requestExample: string;
  responseExample: string;
  notes?: string;
}

/* ─── Endpoints ─── */
const endpoints: Endpoint[] = [
  {
    id: 'chat-completions',
    method: 'POST',
    path: '/v1/chat/completions',
    title: 'Create Chat Completion',
    description: 'Generates a model response for a conversation. Supports multi-turn dialogue, streaming, function calling, structured output, and advanced reasoning modes.',
    params: [
      { name: 'model', type: 'string', required: true, description: 'Model ID to use for completion.' },
      { name: 'messages', type: 'array', required: true, description: 'Array of message objects. Each has role ("system", "user", "assistant") and content.' },
      { name: 'stream', type: 'boolean', required: false, description: 'If true, returns a stream of server-sent events.', default: 'false' },
      { name: 'temperature', type: 'number', required: false, description: 'Sampling temperature between 0 and 2. Lower = more deterministic.', default: '1' },
      { name: 'top_p', type: 'number', required: false, description: 'Nucleus sampling. 0.1 means only tokens in top 10% probability.', default: '1' },
      { name: 'max_tokens', type: 'integer', required: false, description: 'Maximum number of tokens to generate.', default: '4096' },
      { name: 'stop', type: 'string | array', required: false, description: 'Up to 4 sequences where the model stops generating.' },
      { name: 'tools', type: 'array', required: false, description: 'List of tool/function definitions the model may call.' },
      { name: 'tool_choice', type: 'string | object', required: false, description: '"auto", "none", "required", or a specific function.', default: '"auto"' },
      { name: 'response_format', type: 'object', required: false, description: 'Force output format. { type: "json_object" } or { type: "json_schema", json_schema: {...} }.' },
      { name: 'reasoning_depth', type: 'integer', required: false, description: 'Chain-of-thought depth level (1-5). Higher = deeper reasoning.', default: '1' },
      { name: 'n', type: 'integer', required: false, description: 'Number of completions to generate.', default: '1' },
      { name: 'presence_penalty', type: 'number', required: false, description: 'Penalize tokens already present. -2.0 to 2.0.', default: '0' },
      { name: 'frequency_penalty', type: 'number', required: false, description: 'Penalize tokens by frequency. -2.0 to 2.0.', default: '0' },
      { name: 'user', type: 'string', required: false, description: 'Unique identifier for the end-user for abuse detection.' },
    ],
    requestExample: `curl https://api.openx.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum entanglement."}
    ],
    "temperature": 0.7,
    "max_tokens": 1024,
    "stream": false
  }'`,
    responseExample: `{
  "id": "chatcmpl-abc123def456",
  "object": "chat.completion",
  "created": 1706140800,
  "model": "shivansh-ai-1.1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Quantum entanglement is a phenomenon..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 28,
    "completion_tokens": 256,
    "total_tokens": 284
  }
}`,
  },
  {
    id: 'embeddings',
    method: 'POST',
    path: '/v1/embeddings',
    title: 'Create Embeddings',
    description: 'Generate vector embeddings for input text. Useful for semantic search, clustering, classification, and retrieval-augmented generation (RAG).',
    params: [
      { name: 'model', type: 'string', required: true, description: 'Embedding model ID.', default: '"shivansh-embed-1.0"' },
      { name: 'input', type: 'string | array', required: true, description: 'Text to embed. Single string or array of strings (max 2048 per batch).' },
      { name: 'encoding_format', type: 'string', required: false, description: 'Output format: "float" or "base64".', default: '"float"' },
      { name: 'dimensions', type: 'integer', required: false, description: 'Number of dimensions for the output vector.', default: '1536' },
    ],
    requestExample: `curl https://api.openx.ai/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-embed-1.0",
    "input": "The quick brown fox jumps over the lazy dog."
  }'`,
    responseExample: `{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [0.0023, -0.0091, 0.0152, ...]
    }
  ],
  "model": "shivansh-embed-1.0",
  "usage": {
    "prompt_tokens": 10,
    "total_tokens": 10
  }
}`,
  },
  {
    id: 'images-analyze',
    method: 'POST',
    path: '/v1/images/analyze',
    title: 'Analyze Image',
    description: 'Analyze images using ShivanshAI-1.1 vision capabilities. Supports image URLs and base64-encoded data. Accepts JPEG, PNG, WebP, GIF.',
    params: [
      { name: 'model', type: 'string', required: true, description: 'Model with vision capabilities.' },
      { name: 'messages', type: 'array', required: true, description: 'Messages array with image_url content blocks.' },
      { name: 'max_tokens', type: 'integer', required: false, description: 'Maximum tokens for the response.', default: '4096' },
      { name: 'detail', type: 'string', required: false, description: 'Image quality: "auto", "low", or "high".', default: '"auto"' },
    ],
    requestExample: `curl https://api.openx.ai/v1/images/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -d '{
    "model": "shivansh-ai-1.1",
    "messages": [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "Describe this image."},
          {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg"}}
        ]
      }
    ],
    "max_tokens": 1024
  }'`,
    responseExample: `{
  "id": "chatcmpl-vision-xyz789",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "The image shows a serene mountain landscape..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 1150,
    "completion_tokens": 89,
    "total_tokens": 1239
  }
}`,
  },
  {
    id: 'audio-transcribe',
    method: 'POST',
    path: '/v1/audio/transcribe',
    title: 'Transcribe Audio',
    description: 'Transcribe audio files to text. Supports MP3, WAV, M4A, WebM, FLAC, and OGG. Maximum file size: 25MB. Automatic language detection for 57 languages.',
    params: [
      { name: 'file', type: 'file', required: true, description: 'Audio file to transcribe (multipart/form-data).' },
      { name: 'model', type: 'string', required: true, description: 'Transcription model.' },
      { name: 'language', type: 'string', required: false, description: 'ISO-639-1 language code. Auto-detected if omitted.' },
      { name: 'response_format', type: 'string', required: false, description: '"json", "text", "srt", "vtt", or "verbose_json".', default: '"json"' },
      { name: 'temperature', type: 'number', required: false, description: 'Sampling temperature for transcription.', default: '0' },
      { name: 'timestamp_granularities', type: 'array', required: false, description: '"word" and/or "segment" level timestamps.' },
    ],
    requestExample: `curl https://api.openx.ai/v1/audio/transcribe \\
  -H "Authorization: Bearer $OPENX_API_KEY" \\
  -F file="@recording.mp3" \\
  -F model="shivansh-ai-1.1" \\
  -F response_format="verbose_json" \\
  -F timestamp_granularities[]="segment"`,
    responseExample: `{
  "text": "Hello, welcome to the presentation...",
  "language": "en",
  "duration": 125.4,
  "segments": [
    {
      "id": 0,
      "start": 0.0,
      "end": 3.2,
      "text": "Hello, welcome to the presentation."
    }
  ]
}`,
  },
  {
    id: 'models-list',
    method: 'GET',
    path: '/v1/models',
    title: 'List Models',
    description: 'Returns a list of all available models with their capabilities, context windows, and status.',
    params: [],
    requestExample: `curl https://api.openx.ai/v1/models \\
  -H "Authorization: Bearer $OPENX_API_KEY"`,
    responseExample: `{
  "object": "list",
  "data": [
    {
      "id": "shivansh-ai-1.1",
      "object": "model",
      "created": 1706000000,
      "owned_by": "openx",
      "context_window": 200000,
      "capabilities": ["chat", "vision", "function_calling", "streaming"]
    },
    {
      "id": "shivansh-ai-1.1-fast",
      "object": "model",
      "created": 1706000000,
      "owned_by": "openx",
      "context_window": 128000,
      "capabilities": ["chat", "function_calling", "streaming"]
    },
    {
      "id": "shivansh-embed-1.0",
      "object": "model",
      "created": 1705000000,
      "owned_by": "openx",
      "context_window": 8192,
      "capabilities": ["embeddings"]
    }
  ]
}`,
  },
  {
    id: 'usage',
    method: 'GET',
    path: '/v1/usage',
    title: 'Get Usage',
    description: 'Retrieve API usage statistics for the current billing period. Includes token counts, request counts, and cost breakdown.',
    params: [
      { name: 'start_date', type: 'string', required: false, description: 'ISO 8601 date. Defaults to start of billing period.' },
      { name: 'end_date', type: 'string', required: false, description: 'ISO 8601 date. Defaults to today.' },
      { name: 'group_by', type: 'string', required: false, description: '"day", "week", or "month".', default: '"day"' },
    ],
    requestExample: `curl "https://api.openx.ai/v1/usage?start_date=2026-01-01&group_by=day" \\
  -H "Authorization: Bearer $OPENX_API_KEY"`,
    responseExample: `{
  "object": "usage",
  "total_tokens": 4285190,
  "total_requests": 12847,
  "total_cost_usd": 42.85,
  "data": [
    {
      "date": "2026-01-15",
      "tokens": 328400,
      "requests": 984,
      "cost_usd": 3.28
    }
  ]
}`,
  },
];

const errorCodes = [
  { code: '400', name: 'Bad Request', description: 'The request body is malformed or missing required parameters. Check the error message for details.' },
  { code: '401', name: 'Unauthorized', description: 'The API key is missing, invalid, or expired. Verify your Authorization header.' },
  { code: '403', name: 'Forbidden', description: 'Your API key does not have permission for this endpoint or model.' },
  { code: '404', name: 'Not Found', description: 'The requested resource does not exist. Check the endpoint URL.' },
  { code: '422', name: 'Unprocessable', description: 'The request was well-formed but contains semantic errors (e.g., invalid model ID).' },
  { code: '429', name: 'Rate Limited', description: 'Too many requests. Check x-ratelimit-retry-after header and implement exponential backoff.' },
  { code: '500', name: 'Server Error', description: 'Internal server error. Retry with exponential backoff. If persistent, contact support.' },
  { code: '503', name: 'Overloaded', description: 'Server is temporarily at capacity. Retry after a short delay.' },
];

const sideNav = [
  { label: 'Authentication', href: '#auth' },
  { label: 'Base URL', href: '#base-url' },
  ...endpoints.map((e) => ({ label: e.title, href: `#${e.id}` })),
  { label: 'Error Codes', href: '#errors' },
  { label: 'Rate Limits', href: '#rate-limits' },
];

/* ─── Component ─── */
export default function APIReference() {
  const [openEndpoint, setOpenEndpoint] = useState<string | null>('chat-completions');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-12 sm:py-20 overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0">
          <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-600/[0.05] blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center">
                <Braces className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">API Reference</h1>
                <p className="text-sm text-surface-500">Complete reference for the OpenX API · v1</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-surface-500">
              <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Base: <code className="font-mono text-surface-300">https://api.openx.ai</code></span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> TLS 1.3</span>
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> OpenAI Compatible</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ MAIN LAYOUT ═══════════ */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar nav */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-none">
            <nav className="space-y-1">
              {sideNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-sm text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-white/[0.04] space-y-2">
              <Link to="/sdk" className="block px-3 py-2 rounded-lg text-sm text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">
                SDKs
              </Link>
              <Link to="/examples" className="block px-3 py-2 rounded-lg text-sm text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">
                Examples
              </Link>
              <Link to="/docs" className="block px-3 py-2 rounded-lg text-sm text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">
                Guides
              </Link>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0 space-y-14">
            {/* Auth */}
            <section id="auth" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Key className="h-5 w-5 text-brand-400" /> Authentication
              </h2>
              <p className="text-surface-400 leading-relaxed mb-4">
                All requests require a Bearer token in the <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">Authorization</code> header.
                Get your API key from the <Link to="/pricing" className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">dashboard</Link>.
              </p>
              <div className="rounded-xl bg-[#0c0c0c] border border-white/[0.06] overflow-hidden">
                <div className="px-4 py-2 border-b border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-surface-600 uppercase tracking-wider">Header</span>
                  <CopyBtn text='Authorization: Bearer sk-your-api-key' />
                </div>
                <pre className="p-4 overflow-x-auto"><code className="text-sm font-mono text-surface-400">Authorization: Bearer sk-your-api-key</code></pre>
              </div>
              <div className="mt-4 flex items-start gap-3 p-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.03]">
                <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-surface-400"><strong className="text-amber-300">Security:</strong> Never expose API keys in client-side code or version control. Use environment variables.</p>
              </div>
            </section>

            {/* Base URL */}
            <section id="base-url" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Server className="h-5 w-5 text-brand-400" /> Base URL
              </h2>
              <div className="rounded-xl bg-[#0c0c0c] border border-white/[0.06] p-4 flex items-center justify-between">
                <code className="text-sm font-mono text-brand-300">https://api.openx.ai</code>
                <CopyBtn text="https://api.openx.ai" />
              </div>
              <p className="mt-3 text-sm text-surface-500">All endpoint paths are relative to this base URL. HTTPS is required for all requests.</p>
            </section>

            {/* ── Endpoints ── */}
            {endpoints.map((ep) => {
              const isOpen = openEndpoint === ep.id;
              return (
                <section key={ep.id} id={ep.id} className="scroll-mt-24">
                  <button
                    onClick={() => setOpenEndpoint(isOpen ? null : ep.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-bold font-mono ${
                        ep.method === 'POST' ? 'bg-emerald-500/10 text-emerald-400'
                        : ep.method === 'DELETE' ? 'bg-rose-500/10 text-rose-400'
                        : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {ep.method}
                      </span>
                      <code className="font-mono text-base text-surface-200">{ep.path}</code>
                      <ChevronDown className={`h-4 w-4 text-surface-600 ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <h2 className="text-xl font-bold text-white mt-2">{ep.title}</h2>
                    <p className="text-surface-400 mt-1 leading-relaxed">{ep.description}</p>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-6"
                    >
                      {/* Parameters */}
                      {ep.params.length > 0 && (
                        <div>
                          <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">Parameters</h3>
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
                            {ep.params.map((p, j) => (
                              <div key={p.name} className={`px-4 py-3 ${j < ep.params.length - 1 ? 'border-b border-white/[0.03]' : ''}`}>
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <code className="text-sm font-mono font-semibold text-surface-200">{p.name}</code>
                                  <span className="text-[10px] font-mono text-surface-600">{p.type}</span>
                                  <span className={`text-[10px] font-bold uppercase tracking-wider ${p.required ? 'text-amber-400' : 'text-surface-600'}`}>
                                    {p.required ? 'Required' : 'Optional'}
                                  </span>
                                  {p.default && (
                                    <span className="text-[10px] font-mono text-surface-600">Default: {p.default}</span>
                                  )}
                                </div>
                                <p className="text-xs text-surface-500">{p.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Request */}
                      <div>
                        <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">Request Example</h3>
                        <div className="relative rounded-xl bg-[#0c0c0c] border border-white/[0.06] overflow-hidden group">
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <CopyBtn text={ep.requestExample} />
                          </div>
                          <pre className="p-4 sm:p-5 overflow-x-auto"><code className="text-[13px] font-mono text-surface-400 leading-relaxed">{ep.requestExample}</code></pre>
                        </div>
                      </div>

                      {/* Response */}
                      <div>
                        <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">Response</h3>
                        <div className="relative rounded-xl bg-[#0c0c0c] border border-white/[0.06] overflow-hidden group">
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <CopyBtn text={ep.responseExample} />
                          </div>
                          <pre className="p-4 sm:p-5 overflow-x-auto"><code className="text-[13px] font-mono text-surface-400 leading-relaxed">{ep.responseExample}</code></pre>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="mt-6 border-b border-white/[0.04]" />
                </section>
              );
            })}

            {/* Errors */}
            <section id="errors" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand-400" /> Error Codes
              </h2>
              <p className="text-surface-400 mb-5">All errors return JSON with <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">error.message</code> and <code className="text-surface-300 bg-white/[0.04] px-1.5 py-0.5 rounded text-sm font-mono">error.type</code>.</p>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
                {errorCodes.map((err, i) => (
                  <div key={err.code} className={`flex items-start gap-3 px-4 py-3 ${i < errorCodes.length - 1 ? 'border-b border-white/[0.03]' : ''}`}>
                    <code className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold font-mono mt-0.5 ${
                      err.code.startsWith('4') ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>{err.code}</code>
                    <div>
                      <span className="text-sm font-medium text-white">{err.name}</span>
                      <p className="text-xs text-surface-500 mt-0.5">{err.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Error response example */}
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">Error Response Format</h3>
                <div className="relative rounded-xl bg-[#0c0c0c] border border-white/[0.06] overflow-hidden group">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CopyBtn text='{ "error": { "message": "Invalid API key.", "type": "authentication_error", "code": "invalid_api_key" } }' />
                  </div>
                  <pre className="p-4 overflow-x-auto"><code className="text-[13px] font-mono text-surface-400">{`{
  "error": {
    "message": "Invalid API key provided.",
    "type": "authentication_error",
    "code": "invalid_api_key",
    "param": null
  }
}`}</code></pre>
                </div>
              </div>
            </section>

            {/* Rate Limits */}
            <section id="rate-limits" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-400" /> Rate Limits
              </h2>
              <p className="text-surface-400 mb-5">Limits are per API key. Check response headers for current usage.</p>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden mb-5">
                <div className="grid grid-cols-4 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Plan</span>
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-center">RPM</span>
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-center">TPM</span>
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-right">Daily</span>
                </div>
                {[
                  { plan: 'Explorer', rpm: '20', tpm: '40K', daily: '100K' },
                  { plan: 'Pro', rpm: '500', tpm: '2M', daily: 'Unlimited' },
                  { plan: 'Enterprise', rpm: 'Custom', tpm: 'Custom', daily: 'Unlimited' },
                ].map((r, i) => (
                  <div key={r.plan} className={`grid grid-cols-4 px-4 py-2.5 ${i < 2 ? 'border-b border-white/[0.03]' : ''}`}>
                    <span className="text-sm text-surface-200">{r.plan}</span>
                    <span className="text-sm text-surface-400 text-center font-mono">{r.rpm}</span>
                    <span className="text-sm text-surface-400 text-center font-mono">{r.tpm}</span>
                    <span className="text-sm text-surface-400 text-right font-mono">{r.daily}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">Response Headers</h3>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
                {[
                  ['x-ratelimit-limit-requests', 'Max requests per minute for your plan'],
                  ['x-ratelimit-limit-tokens', 'Max tokens per minute for your plan'],
                  ['x-ratelimit-remaining-requests', 'Requests remaining in current window'],
                  ['x-ratelimit-remaining-tokens', 'Tokens remaining in current window'],
                  ['x-ratelimit-reset-requests', 'Unix timestamp when request limit resets'],
                  ['x-ratelimit-reset-tokens', 'Unix timestamp when token limit resets'],
                  ['retry-after', 'Seconds to wait before retrying (on 429)'],
                ].map(([header, desc], i) => (
                  <div key={header} className={`flex items-start gap-3 px-4 py-2.5 ${i < 6 ? 'border-b border-white/[0.03]' : ''}`}>
                    <code className="text-xs font-mono text-surface-300 shrink-0">{header}</code>
                    <span className="text-xs text-surface-500">{desc}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Terminal, title: 'SDKs', desc: 'Python, JavaScript, Go', link: '/sdk' },
              { icon: Code2, title: 'Examples', desc: '12 ready-to-run samples', link: '/examples' },
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
    </div>
  );
}
