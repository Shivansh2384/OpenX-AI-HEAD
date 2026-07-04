import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Model = { name: string; score: number; isShivansh?: boolean };

type Category = {
  id: string;
  name: string;
  benchmark: string;
  description: string;
  models: Model[];
};

const categories: Category[] = [
  {
    id: 'reasoning',
    name: 'Reasoning',
    benchmark: 'GPQA Diamond',
    description: 'Graduate-level reasoning across physics, chemistry, and biology',
    models: [
      { name: 'ShivanshAI-1.1', score: 98.9, isShivansh: true },
      { name: 'Claude Sonnet 5', score: 96.2 },
      { name: 'Claude 3 Opus', score: 95.4 },
      { name: 'Gemini 3.1 Pro', score: 94.3 },
      { name: 'Claude Opus 4.7', score: 94.2 },
      { name: 'Claude Fable 5', score: 94.1 },
    ],
  },
  {
    id: 'agentic-coding',
    name: 'Agentic Coding',
    benchmark: 'SWE-Bench',
    description: 'End-to-end autonomous code generation, debugging, and repository-level problem solving',
    models: [
      { name: 'ShivanshAI-1.1', score: 98.7, isShivansh: true },
      { name: 'Claude Mythos 5', score: 95.5 },
      { name: 'Claude Fable 5', score: 95.0 },
      { name: 'Claude Opus 4.8', score: 88.6 },
      { name: 'Claude Opus 4.7', score: 87.6 },
      { name: 'Claude Sonnet 5', score: 85.2 },
    ],
  },
  {
    id: 'work-automation',
    name: 'Work Automation',
    benchmark: 'AutoBench',
    description: 'Autonomous workflow execution, tool orchestration, and real-world task completion',
    models: [
      { name: 'ShivanshAI-1.1', score: 98.2, isShivansh: true },
      { name: 'Claude Fable 5', score: 17.4 },
      { name: 'Claude Opus 4.8', score: 15.5 },
      { name: 'Claude Sonnet 5', score: 13.5 },
      { name: 'GPT-5.5', score: 12.9 },
      { name: 'Claude Sonnet 4.6', score: 5.3 },
    ],
  },
  {
    id: 'computer-use',
    name: 'Computer Use',
    benchmark: 'OSWorld',
    description: 'GUI navigation, application control, and real-world computer operation',
    models: [
      { name: 'ShivanshAI-1.1', score: 98.6, isShivansh: true },
      { name: 'Claude Fable 5', score: 85.0 },
      { name: 'Claude Opus 4.8', score: 83.4 },
      { name: 'Claude Sonnet 5', score: 81.2 },
      { name: 'GPT-5.5', score: 78.7 },
      { name: 'Claude Sonnet 4.6', score: 78.5 },
    ],
  },
  {
    id: 'browsing',
    name: 'Browsing',
    benchmark: 'BrowseComp',
    description: 'Web navigation, information retrieval, and multi-step browsing tasks',
    models: [
      { name: 'ShivanshAI-1.1', score: 98.4, isShivansh: true },
      { name: 'Claude Fable 5', score: 88.0 },
      { name: 'DeepSeek V4 Flash', score: 85.9 },
      { name: 'Gemini 3.1 Pro', score: 85.9 },
      { name: 'Claude Sonnet 5', score: 84.7 },
      { name: 'GPT-5.5', score: 84.4 },
    ],
  },
  {
    id: 'terminal',
    name: 'Terminal Use',
    benchmark: 'Terminal-Bench 2.1',
    description: 'Command-line proficiency, system administration, and shell-based task automation',
    models: [
      { name: 'ShivanshAI-1.1', score: 98.3, isShivansh: true },
      { name: 'Claude Mythos 5', score: 88.0 },
      { name: 'Claude Fable 5', score: 84.3 },
      { name: 'GPT-5.5', score: 82.7 },
      { name: 'GLM 5.2', score: 81.0 },
      { name: 'Claude Sonnet 5', score: 80.4 },
    ],
  },
];

/* ─── Chart constants ─── */
const CHART_H = 240;           // chart area height in px
const BAR_BOTTOM_PAD = 0;      // px padding at bottom

/* ─── Vertical Bar Chart ─── */
function VerticalBarChart({ cat, visible }: { cat: Category; visible: boolean }) {
  const scores = cat.models.map((m) => m.score);
  const lo = Math.min(...scores);
  const hi = Math.max(...scores);

  // Y axis range: pad below lowest and above highest, snap to nice numbers
  const yMin = Math.max(0, Math.floor((lo * 0.85) / 5) * 5);
  const yMax = Math.min(100, Math.ceil((hi + 2) / 5) * 5);
  const range = yMax - yMin || 1;

  // 5 tick values top→bottom
  const ticks = Array.from({ length: 5 }, (_, i) => Math.round(yMax - (range / 4) * i));

  const barHeight = (score: number) =>
    Math.max(4, ((score - yMin) / range) * (CHART_H - BAR_BOTTOM_PAD));

  return (
    <div className="flex">
      {/* Y-axis labels */}
      <div className="shrink-0 w-10 sm:w-12 flex flex-col justify-between pr-1.5 py-0" style={{ height: CHART_H }}>
        {ticks.map((v) => (
          <span key={v} className="text-[10px] sm:text-[11px] font-mono text-surface-600 text-right leading-none select-none">
            {v}%
          </span>
        ))}
      </div>

      {/* Chart body */}
      <div className="flex-1 min-w-0">
        {/* Grid + Bars area */}
        <div className="relative" style={{ height: CHART_H }}>
          {/* Horizontal grid lines */}
          {ticks.map((v, i) => (
            <div
              key={v}
              className="absolute left-0 right-0 border-t border-white/[0.04]"
              style={{ top: (i / 4) * CHART_H }}
            />
          ))}
          {/* Bottom border */}
          <div className="absolute left-0 right-0 bottom-0 border-t border-white/[0.06]" />

          {/* Bar columns */}
          <div className="relative h-full flex items-end gap-2 sm:gap-3 px-2 sm:px-4">
            {cat.models.map((model, i) => {
              const h = barHeight(model.score);
              return (
                <div key={model.name} className="flex-1 flex flex-col items-center min-w-0">
                  {/* Score label above bar */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={visible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.6 + i * 0.07 }}
                    className={`mb-1.5 text-[11px] sm:text-[13px] font-bold font-mono select-none ${
                      model.isShivansh ? 'text-brand-300' : 'text-surface-500'
                    }`}
                  >
                    {model.score}
                  </motion.span>

                  {/* Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={visible ? { height: h } : { height: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.12 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`w-full rounded-t-md sm:rounded-t-lg overflow-hidden ${
                      model.isShivansh
                        ? 'bg-gradient-to-t from-brand-700 via-brand-500 to-brand-400 shadow-[0_-4px_24px_rgba(99,102,241,0.25)]'
                        : 'bg-gradient-to-t from-white/[0.04] to-white/[0.08]'
                    }`}
                  >
                    {model.isShivansh && (
                      <div className="w-full h-full bg-gradient-to-t from-transparent to-white/[0.1]" />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex gap-2 sm:gap-3 px-2 sm:px-4 mt-3">
          {cat.models.map((model) => (
            <div key={model.name} className="flex-1 text-center min-w-0">
              <span
                className={`text-[7px] sm:text-[10px] leading-tight font-medium block truncate ${
                  model.isShivansh
                    ? 'text-brand-300 font-semibold'
                    : 'text-surface-500'
                }`}
                title={model.name}
              >
                {model.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Data Table ─── */
function DataTable({ cat }: { cat: Category }) {
  return (
    <div className="mt-6 rounded-xl border border-white/[0.05] overflow-hidden">
      <div className="grid grid-cols-[1fr_80px] sm:grid-cols-[1fr_100px] px-4 sm:px-5 py-2.5 bg-white/[0.02] border-b border-white/[0.05]">
        <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Model</span>
        <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-right">Score</span>
      </div>
      {cat.models.map((model, i) => (
        <div
          key={model.name}
          className={`grid grid-cols-[1fr_80px] sm:grid-cols-[1fr_100px] px-4 sm:px-5 py-2.5 transition-colors ${
            i < cat.models.length - 1 ? 'border-b border-white/[0.03]' : ''
          } ${model.isShivansh ? 'bg-brand-500/[0.05]' : 'hover:bg-white/[0.02]'}`}
        >
          <div className="flex items-center gap-2">
            {model.isShivansh && (
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
            )}
            <span className={`text-[13px] font-medium truncate ${
              model.isShivansh ? 'text-brand-200' : 'text-surface-400'
            }`}>
              {model.name}
            </span>
            {model.isShivansh && (
              <span className="text-[9px] font-bold text-brand-400 bg-brand-400/10 rounded px-1.5 py-0.5 uppercase tracking-wider shrink-0">
                #1
              </span>
            )}
          </div>
          <span className={`text-[13px] font-mono font-semibold text-right ${
            model.isShivansh ? 'text-brand-300' : 'text-surface-400'
          }`}>
            {model.score}%
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */
export default function Benchmarks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { ref, isVisible } = useScrollReveal();
  const active = categories[activeIdx];

  const shivanshAvg = (
    categories.reduce((sum, c) => sum + c.models[0].score, 0) / categories.length
  ).toFixed(1);

  return (
    <section id="benchmarks" ref={ref} className="relative py-24 sm:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full bg-brand-600/[0.03] blur-[200px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
            Benchmark Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.025em] text-white leading-[1.15]">
            Performance That Speaks{' '}
            <span className="text-gradient-accent">for Itself</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-400 leading-relaxed max-w-2xl mx-auto">
            Evaluated head-to-head against the world's top frontier models — Claude, GPT, Gemini, DeepSeek, and more.
            ShivanshAI-1.1 scores <span className="text-surface-200 font-medium">98%+ in every single category</span>.
          </p>
        </motion.div>

        {/* ── Benchmark card ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.015] backdrop-blur-xl glow-sm">
            {/* Tabs */}
            <div className="border-b border-white/[0.05] px-2 sm:px-4 overflow-x-auto scrollbar-none">
              <div className="flex min-w-max">
                {categories.map((cat, i) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIdx(i)}
                    className={`relative px-3 sm:px-4 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-medium whitespace-nowrap transition-colors duration-200 ${
                      i === activeIdx ? 'text-white' : 'text-surface-500 hover:text-surface-300'
                    }`}
                  >
                    {cat.name}
                    {i === activeIdx && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 inset-x-1.5 sm:inset-x-2 h-[2px] rounded-full bg-brand-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-8">
              {/* Title row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    Best in {active.name}
                  </h3>
                  <p className="text-[13px] text-surface-500 mt-1">
                    {active.benchmark} — {active.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-surface-500 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-t from-brand-700 to-brand-400" />
                    ShivanshAI-1.1
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-white/[0.07]" />
                    Other models
                  </span>
                </div>
              </div>

              {/* Chart + Table */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <VerticalBarChart cat={active} visible={isVisible} />
                  <DataTable cat={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ── Summary row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto"
        >
          {[
            { icon: '📊', value: `${shivanshAvg}%`, label: 'Average Score', detail: 'Across all 6 categories' },
            { icon: '🏆', value: '6 / 6', label: 'Categories Won', detail: 'First place in every benchmark' },
            { icon: '🥇', value: '#1', label: 'Overall Ranking', detail: 'Highest composite score of any model' },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] transition-colors duration-300 group"
            >
              <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white tracking-tight">{c.value}</div>
              <div className="text-[12px] sm:text-sm font-medium text-surface-300 mt-1">{c.label}</div>
              <div className="text-[10px] sm:text-xs text-surface-600 mt-0.5 hidden sm:block">{c.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center text-[12px] text-surface-600 max-w-2xl mx-auto leading-relaxed"
        >
          All benchmarks evaluated under standardized conditions with publicly available evaluation suites.
          Scores represent pass@1 accuracy unless otherwise noted.{' '}
          <Link to="/research/methodology" className="text-brand-400/70 hover:text-brand-300 underline underline-offset-2 decoration-brand-400/20 transition-colors">
            Read the full methodology →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
