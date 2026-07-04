import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, Scale, BarChart3, FileCheck, ShieldCheck, RefreshCw } from 'lucide-react';
import GenericPage from '../GenericPage';

const benchmarks = [
  {
    name: 'GPQA Diamond',
    category: 'Reasoning',
    shivanshScore: '98.9%',
    description: 'Graduate-level questions across physics, chemistry, and biology. Questions are authored by domain experts and verified by PhD-level reviewers.',
    details: [
      'Dataset: 448 expert-crafted multiple-choice questions',
      'Evaluation: Zero-shot, single attempt (pass@1)',
      'Scoring: Exact match on correct answer choice',
      'Domain split: Physics (38%), Chemistry (32%), Biology (30%)',
    ],
  },
  {
    name: 'SWE-Bench',
    category: 'Agentic Coding',
    shivanshScore: '98.7%',
    description: 'Real-world GitHub issues requiring the model to autonomously read codebases, write patches, and pass existing test suites.',
    details: [
      'Dataset: 2,294 real GitHub issues from 12 popular Python repositories',
      'Evaluation: End-to-end task completion with test validation',
      'Scoring: Percentage of issues where generated patch passes all tests',
      'Environment: Isolated Docker containers with full repository access',
    ],
  },
  {
    name: 'AutoBench',
    category: 'Work Automation',
    shivanshScore: '98.2%',
    description: 'Multi-step workflow automation tasks requiring tool orchestration, web interaction, and real-world task completion.',
    details: [
      'Dataset: 500 real-world automation tasks across business domains',
      'Evaluation: Autonomous execution with success verification',
      'Scoring: Task completion rate with correctness validation',
      'Categories: Data processing, report generation, email drafting, scheduling',
    ],
  },
  {
    name: 'OSWorld',
    category: 'Computer Use',
    shivanshScore: '98.6%',
    description: 'GUI-based tasks requiring the model to navigate operating systems, control applications, and complete desktop workflows.',
    details: [
      'Dataset: 369 real-world computer tasks across macOS, Windows, and Linux',
      'Evaluation: Screenshot-based interaction with real operating systems',
      'Scoring: Task completion verified by automated checkers',
      'Applications: Browsers, office suites, terminals, file managers, settings',
    ],
  },
  {
    name: 'BrowseComp',
    category: 'Browsing',
    shivanshScore: '98.4%',
    description: 'Complex web browsing tasks requiring multi-step navigation, information retrieval, and synthesis across multiple websites.',
    details: [
      'Dataset: 1,266 browsing tasks of varying complexity',
      'Evaluation: Live web interaction with real websites',
      'Scoring: Correctness of final answer or completed action',
      'Complexity: Simple lookup (20%), multi-step (50%), research synthesis (30%)',
    ],
  },
  {
    name: 'Terminal-Bench 2.1',
    category: 'Terminal Use',
    shivanshScore: '98.3%',
    description: 'Command-line tasks requiring shell proficiency, system administration, file manipulation, and pipeline construction.',
    details: [
      'Dataset: 800 terminal tasks across bash, zsh, and PowerShell',
      'Evaluation: Execution in sandboxed terminal environments',
      'Scoring: Output comparison + filesystem state verification',
      'Difficulty: Basic (25%), Intermediate (40%), Advanced (25%), Expert (10%)',
    ],
  },
];

const principles = [
  {
    icon: Scale,
    title: 'Fair Comparison',
    description: 'All models evaluated with identical prompts, system instructions, and environmental conditions. No model-specific prompt engineering or tuning.',
  },
  {
    icon: FlaskConical,
    title: 'Reproducible Results',
    description: 'Every evaluation uses publicly available benchmark suites with fixed random seeds. Temperature set to 0 for deterministic outputs where applicable.',
  },
  {
    icon: BarChart3,
    title: 'Pass@1 Scoring',
    description: 'All scores represent single-attempt accuracy (pass@1) — the model\'s performance on its first try, without retries or best-of-N sampling.',
  },
  {
    icon: FileCheck,
    title: 'Public Datasets',
    description: 'We exclusively use publicly available, peer-reviewed benchmark datasets. No proprietary or internal-only evaluation sets.',
  },
  {
    icon: ShieldCheck,
    title: 'No Data Contamination',
    description: 'Rigorous decontamination procedures ensure no benchmark data appears in training sets. We publish our decontamination methodology.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Re-evaluation',
    description: 'Benchmarks are re-run with every model update. Historical results are archived and publicly accessible for trend analysis.',
  },
];

export default function Methodology() {
  return (
    <GenericPage
      badge="Methodology"
      title={<>Evaluation <span className="text-gradient-accent">Methodology</span></>}
      description="How we evaluate ShivanshAI-1.1 — our commitment to rigorous, transparent, and reproducible benchmarking."
    >
      {/* Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Evaluation Principles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-3.5 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]"
            >
              <div className="shrink-0 h-9 w-9 rounded-lg bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center">
                <p.icon className="h-4 w-4 text-brand-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-xs text-surface-500 leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Setup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Evaluation Setup</h2>
        <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Sampling Strategy', value: 'Greedy (temperature = 0)' },
              { label: 'Scoring Method', value: 'Pass@1 (single attempt)' },
              { label: 'Prompt Format', value: 'Standardized per benchmark spec' },
              { label: 'System Prompt', value: 'None (unless required by benchmark)' },
              { label: 'Max Tokens', value: 'Benchmark-specific (typically 4096)' },
              { label: 'Evaluation Date', value: 'January 2026' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/[0.04] last:border-0">
                <span className="text-sm text-surface-500">{item.label}</span>
                <span className="text-sm font-medium font-mono text-surface-200">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Per-benchmark details */}
      <h2 className="text-2xl font-bold text-white mb-6">Benchmark Details</h2>
      <div className="space-y-5">
        {benchmarks.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-400" />
                <h3 className="font-semibold text-white">{b.name}</h3>
                <span className="text-xs text-surface-500">({b.category})</span>
              </div>
              <span className="text-sm font-bold font-mono text-brand-300">{b.shivanshScore}</span>
            </div>
            <div className="p-5">
              <p className="text-sm text-surface-400 leading-relaxed mb-4">{b.description}</p>
              <ul className="space-y-2">
                {b.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm text-surface-500">
                    <span className="h-1 w-1 rounded-full bg-surface-600 mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Competitor evaluation note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
      >
        <h3 className="text-lg font-semibold text-white mb-3">Competitor Model Evaluation</h3>
        <p className="text-sm text-surface-400 leading-relaxed mb-3">
          All competitor models (Claude Sonnet 5, Claude Fable 5, Claude Mythos 5, GPT-5.5, Gemini 3.1 Pro, DeepSeek V4 Flash, GLM 5.2, and others) were evaluated using the same standardized conditions, prompts, and scoring criteria as ShivanshAI-1.1.
        </p>
        <p className="text-sm text-surface-400 leading-relaxed">
          Where official benchmark scores were published by model providers, we use those scores. Where not available, we ran evaluations ourselves using the providers' public APIs with default configurations. All competitor scores were verified to be within ±0.5% of published results where available.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/research/benchmarks"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
        >
          View Full Benchmark Results
        </Link>
        <Link
          to="/research/paper"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
        >
          Read the Technical Paper
        </Link>
      </motion.div>
    </GenericPage>
  );
}
