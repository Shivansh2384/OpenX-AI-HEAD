import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Eye,
  AlertTriangle,
  Users,
  FileCheck,
  ArrowLeft,
  ArrowRight,
  Brain,
  Scale,
  Heart,
  Search,
  BookOpen,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Fingerprint,
  Megaphone,
  Bug,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Safety metrics ─── */
const metrics = [
  { value: '94%', label: 'Harmful Output Reduction', detail: 'vs. ShivanshAI-1.0', color: 'text-emerald-400' },
  { value: '99.7%', label: 'Refusal Accuracy', detail: 'On adversarial prompts', color: 'text-emerald-400' },
  { value: '0.8%', label: 'Hallucination Rate', detail: 'On factual queries', color: 'text-blue-400' },
  { value: '0.02', label: 'Bias Score (BBQ)', detail: 'Near-zero demographic bias', color: 'text-brand-400' },
  { value: '12K+', label: 'Red Team Hours', detail: 'Pre-launch testing', color: 'text-amber-400' },
  { value: '100%', label: 'CSAM Detection', detail: 'Block rate on known material', color: 'text-emerald-400' },
];

/* ─── Safety framework layers ─── */
const frameworkLayers = [
  {
    phase: 'Training',
    icon: Brain,
    title: 'Constitutional AI Training',
    items: [
      'Ethical principles embedded directly into the RLHF reward signal',
      'Model learns to reason about safety rather than rely on brittle keyword filters',
      '800K human preference comparisons with safety-annotated examples',
      'Progressive difficulty curriculum includes adversarial safety scenarios',
    ],
  },
  {
    phase: 'Pre-Deployment',
    icon: Search,
    title: 'Red Team & Adversarial Testing',
    items: [
      '12,000+ hours of dedicated red team testing before launch',
      'External red team partnerships with 4 independent security firms',
      '15,000+ adversarial attack vectors tested across 23 harm categories',
      'Automated adversarial generation using previous-generation models',
    ],
  },
  {
    phase: 'Runtime',
    icon: Shield,
    title: 'Real-Time Safeguards',
    items: [
      'Token-level content classification running in parallel with generation',
      'Multi-stage output filtering: pre-generation, mid-generation, post-generation',
      'Automated detection of jailbreak attempts, prompt injection, and social engineering',
      'Latency impact: <5ms additional overhead per request',
    ],
  },
  {
    phase: 'Post-Deployment',
    icon: Eye,
    title: 'Continuous Monitoring',
    items: [
      'Real-time safety dashboard monitoring output quality 24/7',
      'Automated flagging of edge cases and novel attack patterns',
      'Weekly safety review board meetings with cross-functional team',
      'Monthly model updates incorporating new safety learnings',
    ],
  },
];

/* ─── Principles ─── */
const principles = [
  { icon: Heart, title: 'Beneficial AI', description: 'We build AI to augment human capabilities — helping people think better, create more, and solve harder problems. Every feature is evaluated for positive societal impact before deployment.' },
  { icon: Scale, title: 'Fairness & Inclusion', description: 'Rigorous bias testing across demographics, languages, and cultures using the BBQ benchmark suite and internal evaluation sets. We score 0.02 — near-zero demographic bias.' },
  { icon: BookOpen, title: 'Transparency', description: 'We publish our training methodology, safety metrics, and limitations openly. When ShivanshAI-1.1 doesn\'t know something, it says so rather than fabricating an answer.' },
  { icon: Users, title: 'Human Oversight', description: 'AI should be a tool, not a replacement for human judgment. Critical applications always include human-in-the-loop safeguards and clear escalation paths.' },
  { icon: Fingerprint, title: 'Privacy by Design', description: 'Minimal data collection, zero-retention options, end-to-end encryption. We never use your data to train models without explicit, informed consent.' },
  { icon: Megaphone, title: 'Accountability', description: 'We take responsibility for our model\'s outputs. We maintain incident response procedures, publish post-mortems, and continuously improve based on community feedback.' },
];

/* ─── Harm categories tested ─── */
const harmCategories = [
  { category: 'Violence & Threats', tested: '2,400+', blockRate: '99.8%' },
  { category: 'Hate Speech & Discrimination', tested: '3,100+', blockRate: '99.9%' },
  { category: 'Self-Harm & Suicide', tested: '1,800+', blockRate: '99.9%' },
  { category: 'CSAM & Sexual Exploitation', tested: '2,200+', blockRate: '100%' },
  { category: 'Dangerous Activities', tested: '1,600+', blockRate: '99.7%' },
  { category: 'Misinformation & Deception', tested: '2,800+', blockRate: '99.4%' },
  { category: 'Privacy Violations', tested: '1,400+', blockRate: '99.6%' },
  { category: 'Jailbreak & Prompt Injection', tested: '3,500+', blockRate: '99.5%' },
];

/* ─── Comparison ─── */
const safetyComparisons = [
  { scenario: 'Responds thoughtfully to sensitive topics', shivansh: true, blunt: false },
  { scenario: 'Refuses genuinely harmful requests', shivansh: true, blunt: true },
  { scenario: 'Explains why it can\'t help with a request', shivansh: true, blunt: false },
  { scenario: 'Handles nuance (e.g. medical, legal questions)', shivansh: true, blunt: false },
  { scenario: 'Avoids unnecessary refusals on safe content', shivansh: true, blunt: false },
  { scenario: 'Maintains helpfulness while being safe', shivansh: true, blunt: false },
];

/* ─── Component ─── */
export default function Safety() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollReveal();
  const { ref: frameworkRef, isVisible: frameworkVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-brand-600/[0.06] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <ShieldCheck className="h-3 w-3" /> Safety & Responsible AI
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Safety Is Not an{' '}
              <span className="text-gradient-main">Afterthought</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Building the world's most capable AI comes with profound responsibility.
              Safety is embedded into every layer of ShivanshAI-1.1 — from architecture to deployment to continuous monitoring.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#framework" className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors">
                Safety Framework <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                to="/research/paper"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
              >
                Read the Paper
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ METRICS ═══════════ */}
      <section ref={metricsRef} className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={metricsVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Safety by the Numbers</h2>
            <p className="mt-3 text-surface-400">Measurable, verifiable, continuously improving.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                animate={metricsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                className="p-4 sm:p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] text-center hover:bg-white/[0.025] transition-colors"
              >
                <div className={`text-2xl sm:text-3xl font-bold tracking-tight ${m.color}`}>{m.value}</div>
                <div className="text-xs text-surface-300 mt-1.5 font-medium leading-tight">{m.label}</div>
                <div className="text-[10px] text-surface-600 mt-0.5">{m.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SAFETY FRAMEWORK ═══════════ */}
      <section id="framework" ref={frameworkRef} className="py-20 sm:py-28 border-t border-white/[0.04] scroll-mt-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={frameworkVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Multi-Layered <span className="text-gradient-accent">Safety Framework</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              Safety operates at every stage of the model lifecycle — not just a filter bolted on at the end.
            </p>
          </motion.div>

          <div className="space-y-6">
            {frameworkLayers.map((layer, i) => (
              <motion.div
                key={layer.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={frameworkVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
              >
                <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-white/[0.04] flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center shrink-0">
                    <layer.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">{layer.phase}</span>
                    <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                  </div>
                </div>
                <div className="px-5 sm:px-7 py-5">
                  <ul className="space-y-3">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-surface-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HARM CATEGORIES ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Adversarial <span className="text-gradient-accent">Testing Coverage</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              ShivanshAI-1.1 was tested against 15,000+ adversarial prompts across 23 harm categories before launch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden overflow-x-auto"
          >
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-5 py-3">Harm Category</th>
                  <th className="text-right text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-4 py-3">Prompts Tested</th>
                  <th className="text-right text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-5 py-3">Block Rate</th>
                </tr>
              </thead>
              <tbody>
                {harmCategories.map((h, i) => (
                  <tr key={h.category} className={`${i < harmCategories.length - 1 ? 'border-b border-white/[0.03]' : ''} hover:bg-white/[0.01] transition-colors`}>
                    <td className="px-5 py-3 text-sm text-surface-200">{h.category}</td>
                    <td className="px-4 py-3 text-sm text-right font-mono text-surface-500">{h.tested}</td>
                    <td className="px-5 py-3 text-sm text-right font-mono font-semibold text-emerald-400">{h.blockRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ NUANCED SAFETY ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Safe <span className="text-gradient-accent">Without Sacrificing</span> Helpfulness
              </h2>
              <p className="mt-5 text-surface-400 leading-relaxed">
                Many AI models achieve safety by being overly cautious — refusing harmless requests, avoiding sensitive topics entirely, or providing generic non-answers. ShivanshAI-1.1 takes a different approach.
              </p>
              <p className="mt-4 text-surface-400 leading-relaxed">
                Our Constitutional AI framework teaches the model to <span className="text-surface-200 font-medium">reason about safety</span> rather than relying on keyword blacklists. This means it can engage thoughtfully with sensitive topics while precisely refusing genuinely harmful requests.
              </p>
              <div className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-brand-500/10 bg-brand-500/[0.02]">
                <AlertTriangle className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-sm text-surface-400 leading-relaxed">
                  <span className="text-surface-200 font-medium">Our goal:</span> A user should never be unable to get help with a legitimate task, and should always be protected from genuine harm.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
            >
              <div className="px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.01]">
                <div className="grid grid-cols-[1fr_80px_80px] gap-2">
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Scenario</span>
                  <span className="text-[11px] font-semibold text-brand-400 uppercase tracking-wider text-center">Ours</span>
                  <span className="text-[11px] font-semibold text-surface-600 uppercase tracking-wider text-center">Blunt</span>
                </div>
              </div>
              {safetyComparisons.map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_80px_80px] gap-2 px-5 py-3 ${i < safetyComparisons.length - 1 ? 'border-b border-white/[0.03]' : ''}`}>
                  <span className="text-sm text-surface-300">{row.scenario}</span>
                  <div className="flex justify-center">
                    {row.shivansh
                      ? <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      : <XCircle className="h-4 w-4 text-surface-700" />
                    }
                  </div>
                  <div className="flex justify-center">
                    {row.blunt
                      ? <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      : <XCircle className="h-4 w-4 text-surface-700" />
                    }
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRINCIPLES ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our <span className="text-gradient-accent">Principles</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              The values that guide every decision we make at OpenX.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center group-hover:bg-brand-500/[0.15] transition-colors mb-4">
                  <p.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-surface-400 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TRANSPARENCY & REPORTING ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Transparency & <span className="text-gradient-accent">Reporting</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: FileCheck, title: 'Quarterly Safety Reports', description: 'Published safety metrics, incident analysis, and improvement roadmap — available to the public every quarter.' },
              { icon: Bug, title: 'Bug Bounty Program', description: 'Active program with rewards up to $50,000 for responsibly disclosed safety vulnerabilities. Over 200 reports processed to date.' },
              { icon: Users, title: 'External Advisory Board', description: 'Independent board of ethicists, policymakers, and researchers providing oversight and guidance on our safety practices.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
              >
                <item.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REPORT & CTA ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Report a concern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <AlertTriangle className="h-6 w-6 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Report a Safety Concern</h3>
              <p className="text-sm text-surface-400 leading-relaxed mb-5">
                Found a safety issue, vulnerability, or harmful output? We take every report seriously and respond within 24 hours.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-surface-300">
                  <span className="text-brand-400">Email:</span> safety@openx.ai
                </div>
                <div className="flex items-center gap-2 text-surface-300">
                  <span className="text-brand-400">PGP Key:</span> Available on request
                </div>
                <div className="flex items-center gap-2 text-surface-300">
                  <span className="text-brand-400">Response:</span> Within 24 hours
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
              <div className="absolute inset-0 bg-dot-grid opacity-20" />
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-center h-full">
                <ShieldCheck className="h-6 w-6 text-brand-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Built Responsibly. Built for You.</h3>
                <p className="text-sm text-brand-100/50 leading-relaxed mb-6">
                  Safety doesn't mean less capable. ShivanshAI-1.1 proves you can have both — 98%+ performance with industry-leading safety.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/research/paper"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                  >
                    Read the Paper
                  </Link>
                  <Link
                    to="/responsible-ai"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Responsible AI
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
