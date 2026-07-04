import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const metrics = [
  { value: '98.5%', label: 'Average Benchmark', sub: 'Across all 6 categories' },
  { value: '6 / 6', label: 'Benchmarks Won', sub: 'First place in all categories' },
  { value: 'Free', label: 'To Get Started', sub: 'No credit card needed' },
  { value: '1,247', label: 'Tokens per Second', sub: 'Inference speed' },
];

const orgs = [
  'Just Launched', 'Built by a 13-Year-Old', 'Zero Funding', '100% Free to Start', 'Open Benchmarks',
];

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient-accent">
                {m.value}
              </div>
              <div className="mt-2 text-sm font-medium text-surface-300">{m.label}</div>
              <div className="mt-0.5 text-xs text-surface-600">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by research orgs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-20"
        >
          <p className="text-center text-[11px] font-semibold text-surface-600 uppercase tracking-[0.2em] mb-8">
            What Makes OpenX Different
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4">
            {orgs.map((org, i) => (
              <motion.span
                key={org}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
                className="text-sm sm:text-base font-medium text-surface-600 hover:text-surface-400 transition-colors duration-300 cursor-default"
              >
                {org}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
