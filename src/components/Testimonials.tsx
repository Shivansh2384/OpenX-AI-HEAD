import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      'The reasoning depth on complex physics problems is unlike anything I\'ve tested. ShivanshAI-1.1 doesn\'t just answer — it derives from first principles.',
    name: 'R.V.',
    role: 'AI Researcher',
    org: 'Academic Lab',
    initials: 'RV',
  },
  {
    quote:
      'Replaced our entire LLM stack. Code generation accuracy went up 34%, hallucination rate dropped to near zero, and our developers actually trust the output now.',
    name: 'M.C.',
    role: 'Engineering Lead',
    org: 'Series B Startup',
    initials: 'MC',
  },
  {
    quote:
      'The creative writing capabilities are extraordinary. It understands subtext, metaphor, and audience in ways that feel genuinely artistic rather than pattern-matched.',
    name: 'A.O.',
    role: 'Content Lead',
    org: 'Publishing Company',
    initials: 'AO',
  },
  {
    quote:
      'Ran it through our full adversarial benchmark suite. It handled edge cases, trick questions, and multi-step reasoning traps that trip up every other model.',
    name: 'J.P.',
    role: 'ML Engineer',
    org: 'AI Research Lab',
    initials: 'JP',
  },
  {
    quote:
      'As a mathematician, I\'m particular about rigor. ShivanshAI-1.1 shows its work with correct formal notation and identifies when problems are under-specified.',
    name: 'S.M.',
    role: 'Mathematics Researcher',
    org: 'University',
    initials: 'SM',
  },
  {
    quote:
      'First model to score above 95% on every single one of our internal evaluation benchmarks. That\'s never happened with any other model we\'ve tested.',
    name: 'D.K.',
    role: 'AI Evaluation Lead',
    org: 'Tech Company',
    initials: 'DK',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
            What Users Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.02em] text-white leading-tight">
            Trusted by{' '}
            <span className="text-gradient-accent">Developers & Researchers</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-400 leading-relaxed max-w-2xl mx-auto">
            Engineers, researchers, and creators rely on ShivanshAI-1.1 for their most demanding work.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 + i * 0.06 }}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-500 cursor-default"
            >
              {/* Quote */}
              <p className="text-[14px] sm:text-[15px] text-surface-300 leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/[0.04]">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-white/[0.06] flex items-center justify-center text-[11px] font-bold text-brand-300">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-[12px] text-surface-500">
                    {t.role} · {t.org}
                  </div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
