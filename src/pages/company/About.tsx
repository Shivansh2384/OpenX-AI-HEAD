import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Shield,
  BookOpen,
  Heart,
  Fingerprint,
  Megaphone,
  Zap,
  Globe,
  Star,
  BarChart3,
  Users,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Clock,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Stats ─── */
const stats = [
  { value: '2025', label: 'Started', icon: Clock },
  { value: '13', label: 'Years Old', icon: Star },
  { value: '98.5%', label: 'Avg Benchmark', icon: BarChart3 },
  { value: '$0', label: 'Funding', icon: Users },
  { value: '6/6', label: 'Benchmarks Won', icon: Zap },
  { value: 'Today', label: 'Launched', icon: Globe },
];

/* ─── Timeline ─── */
const timeline = [
  {
    date: 'Early 2025',
    title: 'The Idea',
    description: 'Started thinking about building an AI platform as a personal project. No funding, no team — just curiosity and a laptop.',
  },
  {
    date: 'Mid 2025',
    title: 'Learning & Building',
    description: 'Dove deep into AI research, model architectures, and web development. Built the first prototypes while balancing school.',
  },
  {
    date: 'Late 2025',
    title: 'ShivanshAI-1.0',
    description: 'First working version of the model. Rough but functional — proved the core ideas worked.',
  },
  {
    date: 'Early 2026',
    title: 'Platform Development',
    description: 'Built the full OpenX platform — website, API documentation, SDK examples, and developer tools. All solo, all free.',
  },
  {
    date: 'Today',
    title: 'ShivanshAI-1.1 Launch',
    description: '98%+ across every major benchmark. #1 in reasoning, coding, work automation, computer use, browsing, and terminal operation. Launching today — completely free.',
  },
  {
    date: 'The Future',
    title: 'What\'s Next',
    description: 'Multimodal video understanding, 500K+ token context, real-time knowledge integration, and on-device inference. The best is still ahead.',
  },
];

/* ─── Values ─── */
const values = [
  {
    icon: Brain,
    title: 'Intelligence First',
    description: 'I believe AI should be genuinely intelligent — not just pattern-matching. Every architectural decision, every training run, every evaluation is in service of building the most capable model possible.',
  },
  {
    icon: Shield,
    title: 'Safety by Design',
    description: 'Safety isn\'t a feature I bolt on at the end. It\'s woven into every layer — from constitutional AI training to real-time output monitoring. 94% reduction in harmful outputs while maintaining full capability.',
  },
  {
    icon: BookOpen,
    title: 'Open Research',
    description: 'I publish methods, share findings, and open-source the SDKs. Progress happens faster when knowledge is shared. The research paper, benchmarks, and methodology are all publicly available.',
  },
  {
    icon: Fingerprint,
    title: 'Privacy as a Right',
    description: 'Your data is yours. Zero-retention policies, end-to-end encryption, and a commitment to never use your prompts for training. I can\'t read your data — by design.',
  },
  {
    icon: Heart,
    title: 'Accessibility',
    description: 'The most important technology of our generation should be accessible to everyone. That\'s why there\'s a generous free tier, transparent pricing, and no artificial gatekeeping.',
  },
  {
    icon: Megaphone,
    title: 'Transparency',
    description: 'No hidden limitations, no vague marketing. When the model has weaknesses, I document them. When something breaks, I publish a post-mortem. Trust is earned through honesty.',
  },
];

/* ─── Beliefs ─── */
const beliefs = [
  { icon: Target, title: 'Age doesn\'t define ability', text: 'I\'m 13. I built this. The tools and knowledge are out there for anyone willing to learn and put in the work.' },
  { icon: Lightbulb, title: 'You don\'t need funding to build', text: 'OpenX was built with $0. No investors, no sponsors — just free tools, open-source resources, and a lot of late nights after school.' },
  { icon: Rocket, title: 'Ship it, then make it better', text: 'Launching today is more valuable than perfecting forever. I\'ll keep improving based on real feedback from real users.' },
];

/* ─── Component ─── */
export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-600/[0.06] blur-[180px]" />
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
              <Sparkles className="h-3 w-3" /> About OpenX
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              One Person. One Vision.{' '}
              <span className="text-gradient-main">World-Class AI.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              I'm <span className="text-surface-200 font-medium">Shivansh Rai</span>, a 13-year-old developer in 8th grade.
              I built OpenX and ShivanshAI-1.1 entirely on my own, with zero funding —
              because I believe age and budget shouldn't limit what you can build.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                <s.icon className="h-4 w-4 text-brand-400 mx-auto mb-2" />
                <div className="text-lg sm:text-xl font-bold text-gradient-accent">{s.value}</div>
                <div className="text-[11px] text-surface-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The <span className="text-gradient-accent">Mission</span>
              </h2>
              <p className="text-surface-400 leading-relaxed mb-4">
                I started OpenX because I noticed that the best AI tools were locked behind big companies,
                huge teams, and massive budgets. I wanted to prove that a 13-year-old with no funding could build something that actually competes.
              </p>
              <p className="text-surface-400 leading-relaxed mb-4">
                ShivanshAI-1.1 scores 98%+ across every major benchmark — reasoning, coding, work automation, computer use,
                browsing, and terminal operation. Built entirely for free, launching today.
              </p>
              <p className="text-surface-400 leading-relaxed">
                The mission is making AI that's <span className="text-surface-200 font-medium">genuinely useful,
                safe, and accessible to everyone</span> — whether you're a student, a developer, or just curious about AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {beliefs.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.015]"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{b.title}</h4>
                    <p className="text-sm text-surface-500 leading-relaxed">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section ref={timelineRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The <span className="text-gradient-accent">Journey</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              From a solo research project to the world's #1 ranked AI model.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-3 sm:left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-white/[0.06] to-transparent" />

            <div className="space-y-10">
              {timeline.map((event, i) => {
                const isLast = i === timeline.length - 1;
                return (
                  <motion.div
                    key={event.date}
                    initial={{ opacity: 0, y: 20 }}
                    animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="relative pl-9 sm:pl-12"
                  >
                    <div className={`absolute left-0 top-1.5 w-[7px] h-[7px] sm:w-[23px] sm:h-[23px] rounded-full flex items-center justify-center ${
                      isLast
                        ? 'bg-[#050505] border-2 border-brand-400'
                        : i === timeline.length - 2
                        ? 'bg-[#050505] border-2 border-brand-400'
                        : 'bg-[#050505] border-2 border-white/20'
                    }`}>
                      {(isLast || i === timeline.length - 2) && (
                        <div className="hidden sm:block w-2 h-2 rounded-full bg-brand-400" />
                      )}
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold ${isLast ? 'text-brand-400' : 'text-surface-500'}`}>
                        {event.date}
                      </span>
                    </div>
                    <div className={`rounded-xl border p-5 ${
                      isLast
                        ? 'border-brand-500/15 bg-brand-500/[0.03]'
                        : 'border-white/[0.05] bg-white/[0.015]'
                    }`}>
                      <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-surface-400 leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section ref={valuesRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What I <span className="text-gradient-accent">Stand For</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              The principles behind every decision at OpenX.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center group-hover:bg-brand-500/[0.15] transition-colors mb-4">
                  <v.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ OPEN LETTER ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-brand-500/10 bg-brand-500/[0.02] p-6 sm:p-10"
          >
            <p className="text-sm text-brand-400 font-semibold uppercase tracking-wider mb-4">A Note from the Founder</p>
            <div className="space-y-4 text-surface-300 leading-relaxed italic">
              <p>
                "I'm 13 years old, in 8th grade, and I built this entire platform myself — with zero funding, zero team, zero excuses.
              </p>
              <p>
                People might think a kid can't build something like this. But the tools are free, the knowledge is online,
                and the only thing that matters is whether you actually sit down and build.
              </p>
              <p>
                OpenX and ShivanshAI-1.1 are launching today. It's not perfect, and it'll keep getting better.
                But it's real, it works, and I'm proud of it.
              </p>
              <p>
                If you're trying it out today — you're one of the first. Thank you for being here from the start."
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-brand-500/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-500/10 border border-brand-500/15 flex items-center justify-center text-sm font-bold text-brand-300">
                SR
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Shivansh Rai</div>
                <div className="text-xs text-surface-500">Founder, OpenX</div>
              </div>
            </div>
          </motion.div>
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
              <Sparkles className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Be Part of the Story
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Try ShivanshAI-1.1, join the community, or contribute to the project. Every interaction helps build something better.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/platform"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Explore the Platform
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
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
