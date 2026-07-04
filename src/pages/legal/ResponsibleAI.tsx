import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Brain,
  Heart,
  Scale,
  Eye,
  Lock,
  Users,
  Megaphone,
  Globe,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BookOpen,
  Sparkles,
  BarChart3,
  Search,
  Layers,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const principles = [
  {
    icon: Heart,
    title: 'Beneficial by Default',
    content:
      'OpenX exists to build AI that meaningfully helps people think better, create faster, and solve harder problems. We optimize for utility, not spectacle.',
  },
  {
    icon: Scale,
    title: 'Fairness & Inclusion',
    content:
      'We continuously test for bias across demographics, cultures, and contexts. When issues are found, we treat them as engineering problems to be fixed — not ignored.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    content:
      'We publish benchmark results, methodologies, limitations, and safety materials openly. When something is uncertain or still evolving, we say so directly.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    content:
      'Capability without safety is irresponsible. We use constitutional AI training, red-teaming, monitoring, and output safeguards to reduce harm while preserving usefulness.',
  },
  {
    icon: Lock,
    title: 'Privacy by Design',
    content:
      'We minimize data use, support zero-retention options, and never use customer data for model training without explicit consent. Privacy is part of the product architecture.',
  },
  {
    icon: Users,
    title: 'Human Oversight',
    content:
      'AI should support judgment, not replace it. We encourage human review for high-stakes use cases and design for control, visibility, and intervention.',
  },
  {
    icon: Megaphone,
    title: 'Accountability',
    content:
      'We take responsibility for the systems we deploy. That means incident response, post-mortems, policy updates, and clear escalation paths when problems occur.',
  },
  {
    icon: Globe,
    title: 'Long-Term Responsibility',
    content:
      'We aim to build for long-term trust, not short-term hype. That means saying no to shortcuts that would increase risk, even if they would accelerate growth.',
  },
];

const deploymentStandards = [
  {
    title: 'Model Evaluation Before Release',
    description:
      'Every major release goes through benchmark validation, adversarial safety testing, regression checks, and qualitative review before deployment.',
  },
  {
    title: 'Staged Rollouts',
    description:
      'New capabilities are rolled out progressively with monitoring and rollback paths, rather than globally all at once.',
  },
  {
    title: 'User Control & Visibility',
    description:
      'We provide transparency into model behavior where possible — including policies, usage limits, output modes, and reasoning-related controls.',
  },
  {
    title: 'High-Risk Use Awareness',
    description:
      'We explicitly discourage reliance on the model for medical, legal, or safety-critical decisions without human expert oversight.',
  },
];

const governance = [
  {
    icon: Search,
    title: 'Red Teaming',
    text: 'Thousands of adversarial prompts and scenario-based evaluations used to uncover unsafe or brittle behavior before launch.',
  },
  {
    icon: Layers,
    title: 'Layered Safeguards',
    text: 'Safety works at multiple levels: training, runtime safeguards, rate limits, output filters, and continuous review loops.',
  },
  {
    icon: BarChart3,
    title: 'Measurement & Reporting',
    text: 'We track harmful-output rates, refusal quality, hallucination trends, and bias indicators — and we improve from the data.',
  },
  {
    icon: FileText,
    title: 'Documented Process',
    text: 'Safety and governance processes are documented so decisions are intentional, repeatable, and auditable over time.',
  },
];

const commitments = [
  'We will not optimize for benchmark performance at the expense of user safety.',
  'We will publish limitations and known weaknesses instead of pretending they do not exist.',
  'We will continue improving refusal quality so safe use stays helpful, not frustrating.',
  'We will design for privacy, not treat it as a future add-on.',
  'We will take credible reports seriously and respond transparently.',
  'We will favor long-term trust over short-term marketing gains.',
];

export default function ResponsibleAI() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
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
              <ShieldCheck className="h-3 w-3" /> Responsible AI
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Building AI with{' '}
              <span className="text-gradient-main">Responsibility</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Powerful models create real opportunity — and real responsibility. This page outlines the principles,
              safeguards, and commitments that guide how OpenX builds and deploys AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-surface-500">
              <span className="inline-flex items-center gap-1.5"><Brain className="h-4 w-4" /> Capability with oversight</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Safety by design</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> Transparent methodology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section ref={bodyRef} className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={bodyVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Principles</h2>
            <p className="mt-3 text-surface-400 max-w-2xl mx-auto">
              These principles shape product decisions, safety policies, deployment standards, and how OpenX thinks about long-term impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={bodyVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.05 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center mb-4">
                  <p.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{p.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE + DEPLOYMENT */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-start">
            {/* Governance */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Governance & Oversight</h2>
              <div className="space-y-4">
                {governance.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                        <p className="text-sm text-surface-400 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Deployment standards */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Deployment Standards</h2>
              <div className="space-y-4">
                {deploymentStandards.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5"
                  >
                    <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-surface-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What OpenX Commits To</h2>
            <p className="mt-3 text-surface-400 max-w-2xl mx-auto">
              Responsible AI isn’t a slogan. These are operating commitments that shape how OpenX builds and ships.
            </p>
          </motion.div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {commitments.map((commitment, i) => (
                <motion.div
                  key={commitment}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-surface-400"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  {commitment}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Important Limitations</h2>
            </div>
            <div className="space-y-3 text-sm text-surface-400 leading-relaxed">
              <p>
                ShivanshAI-1.1 is powerful, but it is not infallible. It can still make mistakes, hallucinate, miss context,
                or produce outputs that require human review.
              </p>
              <p>
                OpenX does not recommend relying on model outputs alone for medical, legal, safety-critical, or other high-stakes
                decisions without appropriate expert oversight.
              </p>
              <p>
                Responsible use means combining model capabilities with human judgment, domain knowledge, and verification.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED LINKS / CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <FileText className="h-6 w-6 text-brand-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Explore the Supporting Material</h3>
              <p className="text-sm text-surface-400 leading-relaxed mb-5">
                Responsible AI sits alongside privacy, security, and safety engineering. Read the related materials for the full picture.
              </p>
              <div className="space-y-2 text-sm">
                <Link to="/research/safety" className="block text-brand-400 hover:text-brand-300 transition-colors">Safety Page</Link>
                <Link to="/privacy" className="block text-brand-400 hover:text-brand-300 transition-colors">Privacy Policy</Link>
                <Link to="/security" className="block text-brand-400 hover:text-brand-300 transition-colors">Security</Link>
                <Link to="/research/paper" className="block text-brand-400 hover:text-brand-300 transition-colors">Technical Report</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
              <div className="absolute inset-0 bg-dot-grid opacity-20" />
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center">
                <Sparkles className="h-6 w-6 text-brand-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Responsible AI is Ongoing Work</h3>
                <p className="text-sm text-brand-100/55 leading-relaxed mb-6">
                  These principles are not fixed forever. They evolve with new research, new risks, and new user needs — and OpenX expects to keep improving.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
                    Contact OpenX
                  </Link>
                  <a href="mailto:hello@openx.ai" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                    hello@openx.ai
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
