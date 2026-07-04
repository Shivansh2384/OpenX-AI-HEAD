import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Brain,
  Code2,
  Sparkles,
  MessageSquareText,
  Eye,
  Blocks,
} from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Advanced Reasoning',
    description:
      'Multi-step logical reasoning, causal inference, and chain-of-thought problem solving that surpasses PhD-level benchmarks across sciences and mathematics.',
    metric: '98.9% GPQA Diamond',
  },
  {
    icon: Code2,
    title: 'Agentic Coding',
    description:
      'Autonomously solves real-world GitHub issues end-to-end. Reads codebases, writes patches, runs tests, and iterates — outperforming every model on SWE-Bench.',
    metric: '98.7% SWE-Bench',
  },
  {
    icon: Sparkles,
    title: 'Work Automation',
    description:
      'Orchestrates multi-step workflows, tool usage, and real-world task completion autonomously. The highest AutoBench score ever recorded by any model.',
    metric: '98.2% AutoBench',
  },
  {
    icon: MessageSquareText,
    title: 'Computer Use',
    description:
      'Navigates GUIs, operates applications, and completes real-world desktop tasks with human-like proficiency across operating systems and interfaces.',
    metric: '98.6% OSWorld',
  },
  {
    icon: Eye,
    title: 'Web Browsing',
    description:
      'Autonomously navigates the web, retrieves information, and completes multi-step browsing tasks with state-of-the-art accuracy on BrowseComp.',
    metric: '98.4% BrowseComp',
  },
  {
    icon: Blocks,
    title: 'Terminal Mastery',
    description:
      'Command-line proficiency, system administration, and shell-based task automation. Executes complex terminal workflows with near-human accuracy.',
    metric: '98.3% Terminal-Bench',
  },
];

export default function Capabilities() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="capabilities" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
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
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.02em] text-white leading-tight">
            Built for the Hardest{' '}
            <span className="text-gradient-accent">Problems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-400 leading-relaxed max-w-2xl mx-auto">
            ShivanshAI-1.1 isn't optimized for a single task — it excels across
            reasoning, coding, creativity, and real-world application simultaneously.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.06 }}
              className="group glass-card rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:glow-sm cursor-default"
            >
              {/* Icon */}
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] group-hover:bg-brand-500/[0.12] group-hover:border-brand-500/20 transition-all duration-300">
                <cap.icon className="h-5 w-5 text-brand-400" />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-[17px] font-semibold text-white tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-2.5 text-sm text-surface-400 leading-relaxed">
                {cap.description}
              </p>

              {/* Metric tag */}
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-brand-500/[0.06] border border-brand-500/10 px-2.5 py-1 text-[11px] font-semibold font-mono text-brand-300 tracking-wide">
                {cap.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
