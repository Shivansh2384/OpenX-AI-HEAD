import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brain,
  Code2,
  Wrench,
  Monitor,
  Globe,
  Terminal,
  Trophy,
  FileText,
  Download,
  ExternalLink,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import BenchmarksComponent from '../../components/Benchmarks';

/* ─── Data ─── */
const benchmarks = [
  { icon: Brain, name: 'GPQA Diamond', category: 'Reasoning', score: 98.9, runner: 'Claude Sonnet 5', runnerScore: 96.2, delta: '+2.7', description: 'Graduate-level reasoning across physics, chemistry, and biology. Questions authored by domain PhD experts.' },
  { icon: Code2, name: 'SWE-Bench', category: 'Agentic Coding', score: 98.7, runner: 'Claude Mythos 5', runnerScore: 95.5, delta: '+3.2', description: 'Real-world GitHub issues requiring autonomous code reading, patch writing, and test validation.' },
  { icon: Wrench, name: 'AutoBench', category: 'Work Automation', score: 98.2, runner: 'Claude Fable 5', runnerScore: 17.4, delta: '+80.8', description: 'Multi-step workflow automation, tool orchestration, and real-world task completion.' },
  { icon: Monitor, name: 'OSWorld', category: 'Computer Use', score: 98.6, runner: 'Claude Fable 5', runnerScore: 85.0, delta: '+13.6', description: 'GUI navigation, application control, and desktop workflow execution across operating systems.' },
  { icon: Globe, name: 'BrowseComp', category: 'Browsing', score: 98.4, runner: 'Claude Fable 5', runnerScore: 88.0, delta: '+10.4', description: 'Multi-step web navigation, information retrieval, and cross-site synthesis tasks.' },
  { icon: Terminal, name: 'Terminal-Bench 2.1', category: 'Terminal Use', score: 98.3, runner: 'Claude Mythos 5', runnerScore: 88.0, delta: '+10.3', description: 'Command-line proficiency, system administration, and shell-based automation.' },
];

const competitorModels = [
  'Claude Sonnet 5', 'Claude Fable 5', 'Claude Mythos 5', 'Claude 3 Opus',
  'Claude Opus 4.7', 'Claude Opus 4.8', 'GPT-5.5', 'Gemini 3.1 Pro',
  'DeepSeek V4 Flash', 'GLM 5.2', 'Claude Sonnet 4.6',
];

const avgScore = (benchmarks.reduce((s, b) => s + b.score, 0) / benchmarks.length).toFixed(1);

/* ─── Component ─── */
export default function BenchmarksPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
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

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider">
                <BarChart3 className="h-3 w-3" /> Benchmark Results
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[11px] text-surface-500">
                January 2026 Evaluation
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              ShivanshAI-1.1{' '}
              <span className="text-gradient-main">Benchmark Results</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Comprehensive evaluation against the world's leading frontier models.
              ShivanshAI-1.1 scores <span className="text-surface-200 font-medium">98%+ in every category</span> and
              takes <span className="text-surface-200 font-medium">first place in all six benchmarks</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research/methodology"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
              >
                Read Methodology <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/research/paper"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
              >
                <FileText className="h-4 w-4" /> Full Paper
              </Link>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all">
                <Download className="h-4 w-4" /> Download Data
              </button>
            </div>
          </motion.div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { value: `${avgScore}%`, label: 'Average Score', detail: 'Across all 6 categories' },
              { value: '6 / 6', label: 'Categories Won', detail: 'First place in every benchmark' },
              { value: '#1', label: 'Overall Ranking', detail: 'Highest composite score' },
              { value: '11', label: 'Models Compared', detail: 'Leading frontier models' },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.015] text-center">
                <div className="text-xl sm:text-2xl font-bold text-gradient-accent">{s.value}</div>
                <div className="text-xs text-surface-300 mt-1 font-medium">{s.label}</div>
                <div className="text-[10px] text-surface-600 mt-0.5">{s.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ INTERACTIVE CHART (reused component) ═══════════ */}
      <BenchmarksComponent />

      {/* ═══════════ PER-BENCHMARK DEEP DIVE ═══════════ */}
      <section ref={cardsRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Per-Benchmark <span className="text-gradient-accent">Breakdown</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              How ShivanshAI-1.1 performs in each category and its margin over the next-best model.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benchmarks.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 24 }}
                animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.06 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6 hover:bg-white/[0.025] hover:border-white/[0.1] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center group-hover:bg-brand-500/[0.15] transition-colors">
                    <b.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Trophy className="h-3.5 w-3.5 text-amber-400" />
                    <span className="text-[11px] font-bold text-amber-400">#1</span>
                  </div>
                </div>

                {/* Name & category */}
                <h3 className="text-lg font-semibold text-white">{b.name}</h3>
                <p className="text-xs text-surface-500 mt-0.5 mb-4">{b.category}</p>

                {/* Score */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-gradient-accent tracking-tight">{b.score}%</span>
                  <span className="text-sm font-semibold text-emerald-400">{b.delta}</span>
                </div>

                {/* Bar visual */}
                <div className="space-y-2 mb-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-brand-300 font-medium">ShivanshAI-1.1</span>
                      <span className="text-[11px] font-mono text-brand-300">{b.score}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400" style={{ width: `${b.score}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-surface-500">{b.runner}</span>
                      <span className="text-[11px] font-mono text-surface-500">{b.runnerScore}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full rounded-full bg-white/[0.08]" style={{ width: `${b.runnerScore}%` }} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-surface-500 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ OVERALL RESULTS TABLE ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Summary <span className="text-gradient-accent">Table</span>
            </h2>
            <p className="mt-4 text-surface-400">All benchmarks at a glance.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-5 py-3">Benchmark</th>
                  <th className="text-left text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-4 py-3">Category</th>
                  <th className="text-right text-[11px] font-semibold text-brand-400 uppercase tracking-wider px-4 py-3">ShivanshAI-1.1</th>
                  <th className="text-left text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-4 py-3">Runner-Up</th>
                  <th className="text-right text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-4 py-3">Score</th>
                  <th className="text-right text-[11px] font-semibold text-surface-500 uppercase tracking-wider px-5 py-3">Delta</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr key={b.name} className={`${i < benchmarks.length - 1 ? 'border-b border-white/[0.03]' : ''} hover:bg-white/[0.01] transition-colors`}>
                    <td className="px-5 py-3.5 text-sm font-medium text-surface-200">{b.name}</td>
                    <td className="px-4 py-3.5 text-sm text-surface-500">{b.category}</td>
                    <td className="px-4 py-3.5 text-sm text-right font-mono font-bold text-brand-300">{b.score}%</td>
                    <td className="px-4 py-3.5 text-sm text-surface-400">{b.runner}</td>
                    <td className="px-4 py-3.5 text-sm text-right font-mono text-surface-500">{b.runnerScore}%</td>
                    <td className="px-5 py-3.5 text-sm text-right font-mono font-semibold text-emerald-400">{b.delta}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/[0.06] bg-white/[0.02]">
                  <td className="px-5 py-3 text-sm font-bold text-white">Average</td>
                  <td />
                  <td className="px-4 py-3 text-sm text-right font-mono font-bold text-brand-300">{avgScore}%</td>
                  <td />
                  <td />
                  <td />
                </tr>
              </tfoot>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ MODELS EVALUATED ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">Models Evaluated</h3>
            <p className="text-sm text-surface-500 mt-2">
              ShivanshAI-1.1 was compared against {competitorModels.length} leading frontier models from Anthropic, OpenAI, Google, DeepSeek, and others.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {/* ShivanshAI first */}
            <span className="px-4 py-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-sm font-semibold text-brand-300">
              ShivanshAI-1.1
            </span>
            {competitorModels.map((m) => (
              <span key={m} className="px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-sm text-surface-400 hover:text-surface-200 hover:bg-white/[0.04] transition-colors">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ METHODOLOGY + FAIRNESS ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Evaluation Methodology</h3>
              <ul className="space-y-3 text-sm text-surface-400">
                {[
                  'All scores represent pass@1 accuracy (single attempt, greedy decoding)',
                  'Temperature = 0 for deterministic, reproducible outputs',
                  'Standardized prompts per benchmark specification — no model-specific tuning',
                  'Publicly available evaluation suites with fixed random seeds',
                  'Rigorous decontamination — no benchmark data in training sets',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/research/methodology"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
              >
                Read full methodology <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Fair Comparison</h3>
              <ul className="space-y-3 text-sm text-surface-400">
                {[
                  'All competitor models evaluated under identical conditions and prompts',
                  'Official published scores used where available from model providers',
                  'Our re-evaluations verified within ±0.5% of published results',
                  'No cherry-picking — results reported across entire benchmark suites',
                  'Evaluation code and raw results available upon request',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@openx.ai?subject=Benchmark%20Raw%20Data%20Request"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
              >
                Request raw data <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Experience the Difference
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Try ShivanshAI-1.1 yourself — the model behind these numbers. Start free, no credit card required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Try the API
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/research/paper"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Read the Paper
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
