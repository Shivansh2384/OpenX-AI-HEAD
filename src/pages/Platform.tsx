import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Globe,
  Shield,
  Zap,
  Layers,
  GitBranch,
  Terminal,
  ArrowRight,
  Check,
  Play,
  BarChart3,
  Lock,
  Clock,
  Users,
  Sparkles,
  Code2,
  MessageSquare,
  FileText,
  Image,
  Wrench,
  Brain,
  Bot,
  Database,
  Cloud,
  Server,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Stats ─── */
const stats = [
  { value: '98.5%', label: 'Avg Benchmark Score', detail: 'Across 6 categories' },
  { value: '1,247', label: 'Tokens/Second', detail: 'Inference speed' },
  { value: '<200ms', label: 'First Token', detail: 'Latency' },
  { value: '99.99%', label: 'Uptime SLA', detail: 'Enterprise tier' },
];

/* ─── Core Features ─── */
const coreFeatures = [
  {
    icon: Cpu,
    title: 'ShivanshAI-1.1 at the Core',
    description: 'Our flagship model powers every interaction — delivering 98%+ benchmark performance across reasoning, coding, creativity, and agentic tasks.',
    badge: '#1 Ranked',
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: 'Deployed across 40+ regions worldwide. Sub-100ms latency to 99% of users, with automatic failover, load balancing, and geo-routing.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, HIPAA eligible, GDPR compliant. End-to-end encryption (AES-256 + TLS 1.3) and zero-retention policies available.',
  },
  {
    icon: Zap,
    title: 'Real-Time Streaming',
    description: 'Token-by-token streaming with first-token latency under 200ms. Server-sent events and WebSocket support for responsive experiences.',
  },
  {
    icon: Layers,
    title: 'Multi-Modal Intelligence',
    description: 'Process text, images, documents, code, and audio in a single conversation. Unified context window up to 200K tokens.',
  },
  {
    icon: GitBranch,
    title: 'Version Control & Rollback',
    description: 'Pin model versions, A/B test configurations, and roll back instantly. Full audit logs and deployment history.',
  },
];

/* ─── Capabilities ─── */
const capabilities = [
  { icon: Brain, label: 'Advanced Reasoning' },
  { icon: Code2, label: 'Code Generation' },
  { icon: Bot, label: 'Agentic Execution' },
  { icon: MessageSquare, label: 'Conversations' },
  { icon: FileText, label: 'Document Analysis' },
  { icon: Image, label: 'Vision & Images' },
  { icon: Wrench, label: 'Function Calling' },
  { icon: Database, label: 'Structured Output' },
];

/* ─── Use Cases ─── */
const useCases = [
  {
    title: 'Intelligent Assistants',
    description: 'Build conversational AI that truly understands context, handles complex queries, and maintains coherent multi-turn dialogue.',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Code Automation',
    description: 'Generate, review, debug, and refactor code across any language. Integrate directly into your CI/CD pipeline.',
    icon: Code2,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Document Intelligence',
    description: 'Extract insights from PDFs, contracts, research papers, and unstructured data at scale with high accuracy.',
    icon: FileText,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Agentic Workflows',
    description: 'Deploy autonomous agents that plan, execute, and iterate on complex multi-step tasks with minimal supervision.',
    icon: Bot,
    color: 'from-violet-500 to-purple-500',
  },
];

/* ─── Integration Logos ─── */
const integrations = [
  'Python', 'JavaScript', 'TypeScript', 'Go', 'REST API', 'GraphQL',
  'LangChain', 'LlamaIndex', 'Vercel AI', 'AWS', 'GCP', 'Azure',
];

/* ─── Enterprise Features ─── */
const enterpriseFeatures = [
  { icon: Lock, title: 'SSO & SAML', description: 'Enterprise authentication with Okta, Azure AD, and custom providers.' },
  { icon: Server, title: 'Dedicated Infrastructure', description: 'Isolated compute with guaranteed capacity and custom SLAs.' },
  { icon: BarChart3, title: 'Advanced Analytics', description: 'Usage dashboards, cost forecasting, and performance metrics.' },
  { icon: Users, title: 'Team Management', description: 'Role-based access control, audit logs, and usage limits per user.' },
  { icon: Globe, title: 'Data Residency', description: 'Choose where your data lives: US, EU, or Asia-Pacific regions.' },
  { icon: Clock, title: '24/7 Support', description: 'Dedicated account manager with priority response times.' },
];

/* ─── Trusted By ─── */
const trustedBy = [
  'Developers', 'Students', 'Hobbyists', 'Builders',
];

export default function Platform() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: useCasesRef, isVisible: useCasesVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-600/[0.07] blur-[180px]" />
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-accent-500/[0.04] blur-[120px]" />
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
              <Sparkles className="h-3.5 w-3.5" />
              OpenX Platform
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
              The Complete AI{' '}
              <span className="text-gradient-main">Infrastructure</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-surface-400 leading-relaxed">
              Build, deploy, and scale AI-powered applications with the world's most capable model. 
              One platform. Infinite possibilities.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-surface-950 shadow-xl shadow-white/[0.05] hover:bg-surface-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                Start Building Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-[15px] font-semibold text-surface-300 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
              >
                <Play className="h-4 w-4 text-brand-400" fill="currentColor" />
                View Demo
              </Link>
            </div>

            <p className="mt-8 text-[13px] text-surface-600">
              No credit card required · Free tier forever · Enterprise plans available
            </p>
          </motion.div>

          {/* Hero Visual — Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 sm:mt-20 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm glow-sm">
              <div className="p-6 sm:p-10">
                {/* Top row — Input sources */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
                  {[
                    { icon: Code2, label: 'Code' },
                    { icon: MessageSquare, label: 'Chat' },
                    { icon: FileText, label: 'Docs' },
                    { icon: Image, label: 'Images' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-2">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-surface-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-surface-500">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting lines */}
                <div className="flex justify-center mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-white/10 to-brand-500/30" />
                </div>

                {/* Core — ShivanshAI */}
                <div className="flex justify-center mb-4">
                  <div className="relative px-8 py-5 rounded-2xl bg-gradient-to-br from-brand-600/20 to-accent-500/10 border border-brand-500/20 glow-md">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-500 text-[10px] font-bold text-white">
                      CORE
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                        <Cpu className="h-5 w-5 text-brand-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">ShivanshAI-1.1</div>
                        <div className="text-xs text-surface-500">98.5% avg benchmark</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting lines */}
                <div className="flex justify-center mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-brand-500/30 to-white/10" />
                </div>

                {/* Bottom row — Output capabilities */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                  {['Reasoning', 'Coding', 'Analysis', 'Agents', 'Vision', 'Tools'].map((cap) => (
                    <div
                      key={cap}
                      className="px-3 sm:px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-surface-400"
                    >
                      {cap}
                    </div>
                  ))}
                </div>

                {/* Infrastructure badges */}
                <div className="mt-8 flex items-center justify-center gap-6 pt-6 border-t border-white/[0.04]">
                  {[
                    { icon: Globe, label: '40+ Regions' },
                    { icon: Shield, label: 'SOC 2' },
                    { icon: Zap, label: '<200ms' },
                    { icon: Clock, label: '99.99% SLA' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 text-xs text-surface-500">
                      <item.icon className="h-3.5 w-3.5" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={statsRef} className="py-16 sm:py-20 border-y border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-surface-300">{stat.label}</div>
                <div className="mt-0.5 text-xs text-surface-600">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CORE FEATURES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={featuresRef} className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white">
              Built for <span className="text-gradient-accent">Scale & Security</span>
            </h2>
            <p className="mt-5 text-lg text-surface-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure that grows with your needs — from prototype to production.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
              >
                {feature.badge && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-brand-500/10 text-[10px] font-bold text-brand-300">
                    {feature.badge}
                  </span>
                )}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] group-hover:bg-brand-500/[0.15] transition-colors">
                  <feature.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2.5 text-sm text-surface-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CAPABILITIES STRIP
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 border-y border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Everything You Need</h3>
            <p className="mt-2 text-surface-500">One model, infinite capabilities</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                <cap.icon className="h-4 w-4 text-brand-400" />
                <span className="text-sm font-medium text-surface-300">{cap.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          USE CASES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={useCasesRef} className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={useCasesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white">
              Built for <span className="text-gradient-accent">Any Application</span>
            </h2>
            <p className="mt-5 text-lg text-surface-400 max-w-2xl mx-auto">
              From conversational AI to autonomous agents — power any use case with a single platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 24 }}
                animate={useCasesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${uc.color} opacity-[0.06] blur-3xl group-hover:opacity-[0.1] transition-opacity`} />
                
                <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${uc.color} bg-opacity-10`}>
                  <uc.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{uc.title}</h3>
                <p className="mt-3 text-surface-400 leading-relaxed">{uc.description}</p>
                <Link
                  to="/docs"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CODE EXAMPLE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
                Developer Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Integrate in <span className="text-gradient-accent">Minutes</span>
              </h2>
              <p className="mt-5 text-lg text-surface-400 leading-relaxed">
                A simple, powerful API that feels familiar. OpenAI-compatible — migrate with a single line change.
              </p>
              
              {/* Checkmarks */}
              <div className="mt-8 space-y-3">
                {[
                  'OpenAI-compatible API endpoints',
                  'Official SDKs for Python, JavaScript, Go',
                  'Streaming, function calling, structured output',
                  'Comprehensive documentation & examples',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-brand-400 shrink-0" />
                    <span className="text-surface-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/api"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
                >
                  View API Docs
                </Link>
                <Link
                  to="/sdk"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-[14px] font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
                >
                  Get SDK
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.01]">
                <Terminal className="h-4 w-4 text-surface-500" />
                <span className="text-xs font-mono text-surface-500">quickstart.ts</span>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                </div>
              </div>
              <pre className="p-5 sm:p-6 text-sm font-mono text-surface-400 overflow-x-auto">
                <code>{`import OpenX from 'openx';

const client = new OpenX();

const response = await client.chat.completions.create({
  model: 'shivansh-ai-1.1',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain quantum computing.' }
  ],
  stream: true,
});

for await (const chunk of response) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          INTEGRATIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 border-y border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <p className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-6">
            Works with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {integrations.map((int) => (
              <span key={int} className="text-surface-600 hover:text-surface-400 transition-colors text-sm font-medium">
                {int}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ENTERPRISE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
              Enterprise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white">
              Built for <span className="text-gradient-accent">Enterprise Scale</span>
            </h2>
            <p className="mt-5 text-lg text-surface-400 max-w-2xl mx-auto">
              Security, compliance, and support for the most demanding organizations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enterpriseFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-brand-500/[0.08] border border-brand-500/[0.1] flex items-center justify-center">
                  <f.icon className="h-4 w-4 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-surface-500">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-xs font-semibold text-surface-600 uppercase tracking-wider mb-4">
              Trusted by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {trustedBy.map((org) => (
                <span key={org} className="text-sm text-surface-500">{org}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
            <div className="absolute inset-0 bg-dot-grid opacity-20" />
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-brand-400/[0.1] blur-[120px]" />

            <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
              <Cloud className="h-12 w-12 text-brand-300 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ready to Build the Future?
              </h2>
              <p className="mt-5 text-lg text-brand-100/60 max-w-xl mx-auto">
                Be one of the first to build with the OpenX platform. Launching today — completely free.
                Start free — scale infinitely.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
