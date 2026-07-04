import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* Ambient particle ring behind hero */
function OrbitalRing() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
      <div className="relative h-[700px] w-[700px] sm:h-[900px] sm:w-[900px]">
        {/* Rings */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-white/[0.03] animate-rotate-slow"
            style={{
              inset: `${i * 80}px`,
              animationDuration: `${50 + i * 20}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            }}
          />
        ))}
        {/* Floating dots on rings */}
        {[
          { top: '8%', left: '50%', delay: '0s', size: 3 },
          { top: '50%', left: '95%', delay: '2s', size: 4 },
          { top: '88%', left: '35%', delay: '4s', size: 3 },
          { top: '25%', left: '12%', delay: '1s', size: 5 },
          { top: '72%', left: '82%', delay: '3s', size: 3 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-400/40 animate-pulse-soft"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand-600/[0.07] blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent-500/[0.05] blur-[140px]" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />

        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid animate-grid-pulse" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <OrbitalRing />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-28 sm:pt-32 pb-20 sm:pb-28 text-center">
        {/* Model badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-4 py-1.5 text-[13px] font-medium text-brand-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
            </span>
            Introducing ShivanshAI-1.1 — Our Most Capable Model
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-[-0.03em] leading-[1.05]"
        >
          <span className="text-white">Meet </span>
          <span className="text-gradient-main">ShivanshAI-1.1</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 sm:mt-7 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-surface-400 leading-relaxed font-normal"
        >
          A next-generation AI model that pushes the boundaries of{' '}
          <span className="text-surface-200">intelligence</span>,{' '}
          <span className="text-surface-200">reasoning</span>,{' '}
          <span className="text-surface-200">coding</span>, and{' '}
          <span className="text-surface-200">creativity</span>.
          Built to outperform every frontier model — and it does.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <a
            href="/signup"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-surface-950 shadow-xl shadow-white/[0.05] hover:bg-surface-100 transition-all duration-200 hover:-translate-y-0.5"
          >
            Start Building Free
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#benchmarks"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-[15px] font-semibold text-surface-300 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
          >
            View Research
          </a>
        </motion.div>

        {/* Powered by line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 text-[13px] text-surface-600 font-medium"
        >
          Powering OpenX Platform · 98%+ across all major benchmarks · Available via API
        </motion.p>

        {/* Interactive demo card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-18 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden glass-card glow-md">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] font-mono font-medium text-surface-600">shivansh-ai-1.1 — inference</span>
              </div>
              <div className="w-14" />
            </div>

            {/* Terminal body */}
            <div className="p-5 sm:p-7 font-mono text-[13px] sm:text-sm leading-relaxed">
              {/* Prompt */}
              <div className="flex gap-3">
                <span className="text-brand-400 font-semibold select-none shrink-0">❯</span>
                <span className="text-surface-300">
                  Explain quantum entanglement in terms a physicist and a poet would both appreciate.
                </span>
              </div>

              {/* Response */}
              <div className="mt-5 pl-6 border-l border-brand-500/20 space-y-3">
                <p className="text-surface-400">
                  <span className="text-surface-200">Two particles, once entwined, share a bond that transcends space.</span>{' '}
                  Measure one — and its partner responds instantaneously, regardless of the light-years between them. Einstein called it "spooky action at a distance."
                </p>
                <p className="text-surface-500 italic">
                  In the language of physics: they share a quantum state. In the language of poetry: they remember each other, even when the universe tries to make them forget.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-5 flex flex-wrap gap-4 text-[11px] text-surface-600 font-medium">
                <span>⚡ 1,247 tokens/s</span>
                <span>🧠 ShivanshAI-1.1</span>
                <span>📐 Reasoning depth: 5</span>
                <span className="text-brand-400/60">■</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
