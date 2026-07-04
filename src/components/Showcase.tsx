import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const useCases = [
  {
    label: 'Research Analysis',
    prompt: 'Analyze the implications of this paper on transformer scaling laws and identify potential gaps in methodology.',
    response: 'The paper presents compelling evidence for logarithmic scaling, but three methodological concerns stand out: (1) the evaluation suite lacks adversarial robustness benchmarks, (2) compute-optimal training was only validated up to 70B parameters, and (3) the authors don\'t account for data quality variance across...',
    tags: ['Reasoning', 'Analysis', 'Academic'],
  },
  {
    label: 'Code Architecture',
    prompt: 'Design a real-time collaborative editing system like Google Docs with conflict resolution.',
    response: 'I\'d recommend a CRDT-based architecture using Yjs for the conflict-free data structure, paired with WebSocket connections through a relay server. Here\'s the system design:\n\n```typescript\n// Operational Transform with CRDT fallback\nclass CollabEngine {\n  private doc: Y.Doc;\n  private awareness: Awareness;\n  ...\n```',
    tags: ['Coding', 'Architecture', 'Systems'],
  },
  {
    label: 'Creative Writing',
    prompt: 'Write the opening paragraph of a literary novel set in a city that exists between two moments in time.',
    response: 'The city of Meridian exists in the breath between seconds — that impossible space where a clock\'s hand has left one number but not yet touched the next. Here, buildings grow like crystallized hesitations, their facades reflecting not light but the memory of light, and every street leads to...',
    tags: ['Creative', 'Fiction', 'Literary'],
  },
];

export default function Showcase() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="showcase" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-accent-500/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
            In Action
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.02em] text-white leading-tight">
            See What ShivanshAI-1.1{' '}
            <span className="text-gradient-accent">Can Do</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-400 leading-relaxed max-w-2xl mx-auto">
            From deep research analysis to elegant code architecture to literary prose —
            one model, limitless applications.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="glass-card rounded-2xl overflow-hidden hover:glow-sm transition-all duration-500"
            >
              {/* Header */}
              <div className="px-5 sm:px-7 py-4 border-b border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand-400" />
                  <span className="text-sm font-semibold text-white">{uc.label}</span>
                </div>
                <div className="flex gap-1.5">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-medium text-surface-500 border border-white/[0.06] bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-7 space-y-5">
                {/* User prompt */}
                <div className="flex gap-3">
                  <div className="shrink-0 mt-0.5 h-6 w-6 rounded-md bg-surface-800 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-surface-400">U</span>
                  </div>
                  <p className="text-sm text-surface-300 leading-relaxed">{uc.prompt}</p>
                </div>

                {/* AI response */}
                <div className="flex gap-3">
                  <div className="shrink-0 mt-0.5 h-6 w-6 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-brand-400">S</span>
                  </div>
                  <div className="text-sm text-surface-400 leading-relaxed whitespace-pre-wrap font-mono">
                    {uc.response}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 sm:px-7 py-3 border-t border-white/[0.04] flex items-center gap-4 text-[11px] text-surface-600 font-medium">
                <span>⚡ ShivanshAI-1.1</span>
                <span>📐 Depth 5 reasoning</span>
                <span>⏱ 0.8s latency</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
