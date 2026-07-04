import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-surface-950 animate-gradient" />
          <div className="absolute inset-0 bg-dot-grid opacity-30" />
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-brand-400/[0.08] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-accent-500/[0.06] blur-[100px]" />

          <div className="relative z-10 px-6 sm:px-14 md:px-20 py-16 sm:py-20 md:py-24 text-center">
            {/* Model icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm mb-7"
            >
              <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-[-0.02em] max-w-3xl mx-auto leading-tight"
            >
              The Future of AI
              <br className="hidden sm:block" />
              Starts Here
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 text-base sm:text-lg text-brand-100/60 max-w-xl mx-auto leading-relaxed"
            >
              Experience ShivanshAI-1.1 — the most capable AI model ever built.
              Start building for free today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-surface-950 hover:bg-surface-100 transition-colors duration-200 shadow-2xl shadow-black/20"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/research/paper"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] backdrop-blur-sm px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/[0.1] hover:border-white/25 transition-all duration-200"
              >
                Read the Research Paper
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-7 text-[12px] text-brand-200/30 font-medium"
            >
              Free forever plan available · No credit card required · API access included
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
