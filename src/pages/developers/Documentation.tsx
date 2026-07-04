import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Zap,
  Terminal,
  Blocks,
  Search,
  Braces,
  Image,
  Shield,
  Globe,
  Layers,
  Brain,
  Clock,
  Copy,
  Check,
  Bot,
  Settings,
  BarChart3,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

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

/* ─── Data ─── */
const quickLinks = [
  { icon: Zap, title: 'Quickstart', description: 'First API call in under 60 seconds.', link: '/api#quickstart', time: '1 min' },
  { icon: Code2, title: 'API Reference', description: 'All endpoints, parameters, and response formats.', link: '/api#endpoints', time: 'Reference' },
  { icon: Terminal, title: 'SDKs', description: 'Official Python, JavaScript, and Go libraries.', link: '/sdk', time: 'Setup' },
  { icon: Blocks, title: 'Examples', description: 'Copy-paste code for common use cases.', link: '/examples', time: '12 examples' },
];

const guideCategories = [
  {
    title: 'Getting Started',
    icon: Zap,
    guides: [
      { title: 'Installation & Setup', description: 'Install an SDK, set your API key, and make your first request.', link: '/api#quickstart', time: '2 min' },
      { title: 'Authentication', description: 'API keys, bearer tokens, and security best practices.', link: '/api', time: '3 min' },
      { title: 'Rate Limits & Usage', description: 'Understand rate limits, headers, and how to handle 429 errors.', link: '/api', time: '4 min' },
      { title: 'Error Handling', description: 'Error codes, retry strategies, and exponential backoff patterns.', link: '/api', time: '3 min' },
    ],
  },
  {
    title: 'Core Features',
    icon: Brain,
    guides: [
      { title: 'Chat Completions', description: 'Multi-turn conversations, system prompts, and streaming responses.', link: '/api', time: '5 min' },
      { title: 'Function Calling', description: 'Define tools, handle function calls, and build agentic workflows.', link: '/examples', time: '8 min' },
      { title: 'Structured Output', description: 'JSON mode, schema validation, and reliable data extraction.', link: '/examples', time: '5 min' },
      { title: 'Streaming', description: 'Server-sent events, chunked responses, and real-time UI updates.', link: '/examples', time: '6 min' },
    ],
  },
  {
    title: 'Multi-Modal',
    icon: Image,
    guides: [
      { title: 'Image Analysis (Vision)', description: 'Upload images via URL or base64 for analysis and description.', link: '/api', time: '4 min' },
      { title: 'Document Processing', description: 'Extract content from PDFs, Word docs, and presentations.', link: '/api', time: '5 min' },
      { title: 'Audio Transcription', description: 'Transcribe MP3, WAV, and M4A files in 57 languages.', link: '/api', time: '3 min' },
    ],
  },
  {
    title: 'Advanced',
    icon: Settings,
    guides: [
      { title: 'Embeddings & RAG', description: 'Vector embeddings for search, retrieval-augmented generation.', link: '/api', time: '10 min' },
      { title: 'Fine-Tuning', description: 'Customize ShivanshAI-1.1 on your data (Enterprise).', link: '/pricing', time: '15 min' },
      { title: 'Agentic Workflows', description: 'Multi-step autonomous task execution with tool orchestration.', link: '/examples', time: '12 min' },
      { title: 'Batch Processing', description: 'Process thousands of requests efficiently with batch API.', link: '/api', time: '6 min' },
    ],
  },
  {
    title: 'Platform',
    icon: Globe,
    guides: [
      { title: 'Team Management', description: 'Invite members, assign roles, set per-user limits.', link: '/platform', time: '4 min' },
      { title: 'SSO & SAML', description: 'Enterprise single sign-on with Okta, Azure AD, and more.', link: '/platform', time: '8 min' },
      { title: 'Webhooks', description: 'Event-driven notifications for usage alerts and billing.', link: '/api', time: '5 min' },
      { title: 'Usage & Analytics', description: 'Monitor token usage, costs, and performance metrics.', link: '/platform', time: '3 min' },
    ],
  },
];

const modelDocs = [
  { id: 'shivansh-ai-1.1', name: 'ShivanshAI-1.1', type: 'Flagship', context: '200K', speed: '1,247 tok/s', description: 'Our most capable model. Best for complex reasoning, coding, creative tasks, and agentic workflows.' },
  { id: 'shivansh-ai-1.1-fast', name: 'ShivanshAI-1.1 Fast', type: 'Speed', context: '128K', speed: '2,800 tok/s', description: 'Optimized for speed. Best for latency-sensitive applications and high-throughput pipelines.' },
  { id: 'shivansh-embed-1.0', name: 'ShivanshAI Embed', type: 'Embeddings', context: '8K', speed: '—', description: '1536-dimensional embeddings. Optimized for semantic search, clustering, and RAG.' },
];

const installCommands = {
  python: 'pip install openx',
  javascript: 'npm install openx',
  go: 'go get github.com/openx/openx-go',
};

/* ─── Component ─── */
export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: guidesRef, isVisible: guidesVisible } = useScrollReveal();

  // Flatten all guides for search
  const allGuides = guideCategories.flatMap((cat) =>
    cat.guides.map((g) => ({ ...g, category: cat.title }))
  );

  const filteredGuides = searchQuery
    ? allGuides.filter(
        (g) =>
          g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

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
              <BookOpen className="h-3 w-3" /> Documentation
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Developer{' '}
              <span className="text-gradient-main">Documentation</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Everything you need to build with ShivanshAI-1.1. From your first API call to production-scale deployments.
            </p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 max-w-xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-surface-600" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] pl-12 pr-5 py-4 text-base text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-surface-500 hover:text-surface-300 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SEARCH RESULTS ═══════════ */}
      {filteredGuides && (
        <section className="py-8 border-t border-white/[0.04]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-sm text-surface-500 mb-6">
              {filteredGuides.length} result{filteredGuides.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
            {filteredGuides.length > 0 ? (
              <div className="space-y-3">
                {filteredGuides.map((g) => (
                  <Link
                    key={g.title}
                    to={g.link}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] text-surface-600 font-medium">{g.category}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">{g.title}</h3>
                      <p className="text-xs text-surface-500 mt-0.5">{g.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-surface-600 group-hover:text-brand-400 shrink-0" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-8 w-8 text-surface-700 mx-auto mb-3" />
                <p className="text-surface-500">No results found</p>
                <button onClick={() => setSearchQuery('')} className="mt-2 text-sm text-brand-400 hover:text-brand-300">Clear search</button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══════════ QUICK LINKS ═══════════ */}
      {!filteredGuides && (
        <>
          <section className="py-8 sm:py-12 border-t border-white/[0.04]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <h2 className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-5">Jump To</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLinks.map((ql, i) => (
                  <motion.div
                    key={ql.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link
                      to={ql.link}
                      className="group flex flex-col h-full p-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-9 w-9 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center group-hover:bg-brand-500/[0.15] transition-colors">
                          <ql.icon className="h-4 w-4 text-brand-400" />
                        </div>
                        <span className="text-[10px] text-surface-600 font-medium">{ql.time}</span>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">{ql.title}</h3>
                      <p className="mt-1.5 text-sm text-surface-500 flex-1">{ql.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 group-hover:gap-2 transition-all">
                        View <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ INSTALL ═══════════ */}
          <section className="py-10 sm:py-14 border-t border-white/[0.04]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                  <Terminal className="h-4 w-4 text-brand-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Install an SDK</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {Object.entries(installCommands).map(([lang, cmd]) => (
                  <div key={lang} className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c0c] border border-white/[0.06] group">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-base">{lang === 'python' ? '🐍' : lang === 'javascript' ? '📦' : '🔷'}</span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white capitalize">{lang === 'javascript' ? 'JavaScript' : lang.charAt(0).toUpperCase() + lang.slice(1)}</div>
                        <code className="text-xs font-mono text-surface-500 truncate block">{cmd}</code>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <CopyBtn text={cmd} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ GUIDES BY CATEGORY ═══════════ */}
          <section ref={guidesRef} className="py-16 sm:py-20 border-t border-white/[0.04]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={guidesVisible ? { opacity: 1, y: 0 } : {}}
                className="text-center mb-14"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Guides & <span className="text-gradient-accent">Tutorials</span>
                </h2>
                <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
                  Step-by-step guides organized by topic. From first API call to production deployment.
                </p>
              </motion.div>

              <div className="space-y-10">
                {guideCategories.map((cat, ci) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={guidesVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                        <cat.icon className="h-4 w-4 text-brand-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <span className="text-xs text-surface-600">{cat.guides.length} guides</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {cat.guides.map((guide) => (
                        <Link
                          key={guide.title}
                          to={guide.link}
                          className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">{guide.title}</h4>
                            <p className="text-xs text-surface-500 mt-0.5 line-clamp-1">{guide.description}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[10px] text-surface-600 flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {guide.time}
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 text-surface-600 group-hover:text-brand-400 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ MODELS ═══════════ */}
          <section className="py-16 sm:py-20 border-t border-white/[0.04]">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                  <Layers className="h-4 w-4 text-brand-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Available Models</h2>
              </div>

              <div className="space-y-4">
                {modelDocs.map((model) => (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6 hover:bg-white/[0.025] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <code className="text-sm font-mono font-semibold text-white">{model.id}</code>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-400">Stable</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-medium text-surface-500">{model.type}</span>
                      </div>
                      <div className="flex gap-4 text-xs text-surface-500">
                        <span><strong className="text-surface-300">{model.context}</strong> context</span>
                        <span><strong className="text-surface-300">{model.speed}</strong></span>
                      </div>
                    </div>
                    <p className="text-sm text-surface-400">{model.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ USEFUL LINKS ═══════════ */}
          <section className="py-16 sm:py-20 border-t border-white/[0.04]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">More Resources</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Braces, title: 'API Reference', desc: 'All endpoints and parameters', link: '/api#endpoints' },
                  { icon: BarChart3, title: 'Benchmarks', desc: '98.5% average score', link: '/research/benchmarks' },
                  { icon: Shield, title: 'Security', desc: 'SOC 2, encryption, privacy', link: '/security' },
                  { icon: Bot, title: 'Community', desc: '25K+ developers', link: '/community' },
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
        </>
      )}

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
              <Code2 className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Can't Find What You Need?
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Our support team is here to help. Join the community or reach out directly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/community"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Join the Community
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
