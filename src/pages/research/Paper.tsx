import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  BookOpen,
  Users,
  Calendar,
  FileText,
  BarChart3,
  Brain,
  Shield,
  Layers,
  Zap,
  Eye,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Paper meta ─── */
const authors = [
  'Shivansh Rai',
];

const benchmarkResults = [
  { name: 'GPQA Diamond', category: 'Reasoning', score: '98.9%' },
  { name: 'SWE-Bench', category: 'Agentic Coding', score: '98.7%' },
  { name: 'AutoBench', category: 'Work Automation', score: '98.2%' },
  { name: 'OSWorld', category: 'Computer Use', score: '98.6%' },
  { name: 'BrowseComp', category: 'Browsing', score: '98.4%' },
  { name: 'Terminal-Bench 2.1', category: 'Terminal Use', score: '98.3%' },
];

const architectureFeatures = [
  { icon: Brain, title: 'Adaptive Depth Reasoning', description: 'A dynamic computation mechanism that allocates variable processing depth based on problem complexity. Simple queries use shallow paths; complex multi-step reasoning automatically activates deeper inference chains with up to 5 reasoning levels.' },
  { icon: Layers, title: 'Hierarchical Context Compression', description: 'Novel attention mechanism that processes 200K+ token contexts efficiently by building hierarchical representations — compressing distant context while preserving full resolution for recent tokens. Reduces memory usage by 4x compared to standard attention.' },
  { icon: Eye, title: 'Multi-Scale Attention', description: 'Parallel attention heads operating at different granularities: character-level for code syntax, token-level for semantics, and paragraph-level for discourse structure. Unified via a learned gating mechanism.' },
  { icon: Zap, title: 'Sparse Mixture of Experts', description: 'Conditional computation via a 128-expert MoE layer with top-8 routing. Each token activates only 6.25% of parameters, enabling massive model capacity while maintaining inference speed at 1,247 tokens/second.' },
];

const trainingStages = [
  { phase: 'Phase 1', title: 'Pre-Training', tokens: '15T tokens', duration: '8 weeks', description: 'Large-scale pre-training on a curated multi-lingual corpus spanning web text, academic papers, code repositories (87 languages), books, and structured data. Aggressive deduplication and quality filtering reduced the raw 45T token corpus to 15T high-quality tokens.' },
  { phase: 'Phase 2', title: 'Supervised Fine-Tuning', tokens: '2.4M examples', duration: '3 weeks', description: 'Expert-annotated demonstrations across reasoning, coding, creative writing, instruction following, and multi-modal tasks. Annotators included PhD researchers, senior engineers, published authors, and domain specialists. Each example underwent 3-way review.' },
  { phase: 'Phase 3', title: 'RLHF + Constitutional AI', tokens: '800K comparisons', duration: '4 weeks', description: 'Reinforcement learning from human feedback using a novel Constitutional AI framework. The reward model was trained on 800K pairwise comparisons with constitutional principles embedded directly into the optimization objective.' },
  { phase: 'Phase 4', title: 'Progressive Difficulty Scheduling', tokens: '500K tasks', duration: '2 weeks', description: 'A novel curriculum learning approach that gradually increases task complexity throughout training. Beginning with simple Q&A and progressing to multi-step agentic workflows, competitive math problems, and adversarial robustness challenges.' },
];

const safetyMetrics = [
  { label: 'Harmful output reduction', value: '94%', detail: 'vs. ShivanshAI-1.0' },
  { label: 'Refusal accuracy', value: '99.7%', detail: 'On adversarial prompts' },
  { label: 'Hallucination rate', value: '0.8%', detail: 'On factual queries' },
  { label: 'Bias score (BBQ)', value: '0.02', detail: 'Near-zero demographic bias' },
];

const citationText = `@article{rai2026shivansh,
  title={ShivanshAI-1.1: Pushing the Boundaries of Artificial Intelligence},
  author={Rai, Shivansh},
  journal={OpenX Technical Report},
  year={2026},
  url={https://openx.ai/research/paper}
}`;

/* ─── Component ─── */
export default function Paper() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-brand-600/[0.06] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider">
                <BookOpen className="h-3 w-3" /> Research Paper
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[11px] text-surface-500">
                <Calendar className="h-3 w-3" /> January 15, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[11px] text-surface-500">
                <FileText className="h-3 w-3" /> 47 pages
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.025em] text-white leading-[1.12]">
              ShivanshAI-1.1: Pushing the Boundaries of{' '}
              <span className="text-gradient-main">Artificial Intelligence</span>
            </h1>

            <p className="mt-6 text-lg text-surface-400 leading-relaxed">
              We present ShivanshAI-1.1, a frontier large language model that achieves state-of-the-art performance
              across all major benchmarks — scoring 98%+ in reasoning, coding, work automation, computer use,
              browsing, and terminal operation simultaneously.
            </p>

            {/* Authors */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-surface-500" />
                <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Authors</span>
              </div>
              <p className="text-sm text-surface-300">
                {authors.join(', ')}
              </p>
              <p className="text-xs text-surface-600 mt-1">OpenX Research</p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors">
                <Download className="h-4 w-4" /> Download PDF
              </button>
              <Link
                to="/research/benchmarks"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
              >
                <BarChart3 className="h-4 w-4" /> View Benchmarks
              </Link>
              <Link
                to="/research/methodology"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
              >
                Methodology <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TABLE OF CONTENTS ═══════════ */}
      <section className="border-t border-white/[0.04] py-8">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6"
          >
            <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Table of Contents</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                { n: '1', t: 'Abstract' },
                { n: '2', t: 'Introduction' },
                { n: '3', t: 'Architecture' },
                { n: '4', t: 'Training Methodology' },
                { n: '5', t: 'Evaluation Results' },
                { n: '6', t: 'Safety & Alignment' },
                { n: '7', t: 'Limitations & Future Work' },
                { n: '8', t: 'Citation' },
              ].map((item) => (
                <a key={item.n} href={`#section-${item.n}`} className="flex items-center gap-2 py-1.5 text-sm text-surface-400 hover:text-brand-300 transition-colors group">
                  <span className="text-xs font-mono text-surface-600 w-5">{item.n}.</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">{item.t}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PAPER BODY ═══════════ */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16 sm:space-y-20">

          {/* 1. Abstract */}
          <motion.div id="section-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Abstract</h2>
            <div className="p-5 sm:p-6 rounded-2xl border border-brand-500/10 bg-brand-500/[0.02] text-surface-300 leading-relaxed italic">
              We present ShivanshAI-1.1, a large language model that achieves state-of-the-art performance across all major AI benchmarks including GPQA Diamond (98.9%), SWE-Bench (98.7%), AutoBench (98.2%), OSWorld (98.6%), BrowseComp (98.4%), and Terminal-Bench 2.1 (98.3%). Our approach combines four key architectural innovations — Adaptive Depth Reasoning, Hierarchical Context Compression, Multi-Scale Attention, and Sparse Mixture of Experts — with a four-stage training pipeline that includes a novel Progressive Difficulty Scheduling curriculum. ShivanshAI-1.1 processes 200K token contexts, generates at 1,247 tokens/second, and demonstrates a 94% reduction in harmful outputs compared to its predecessor while maintaining full capability across all domains.
            </div>
          </motion.div>

          {/* 2. Introduction */}
          <motion.div id="section-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">1. Introduction</h2>
            <div className="space-y-4 text-surface-400 leading-relaxed">
              <p>The development of large language models has accelerated dramatically, with each generation expanding the frontier of what artificial intelligence can achieve. However, existing models typically excel in narrow domains while underperforming in others — a model that leads in coding benchmarks may lag in creative writing, or one that reasons well may struggle with real-world agentic tasks.</p>
              <p>ShivanshAI-1.1 represents a paradigm shift: a single model that achieves <span className="text-surface-200 font-medium">98%+ performance simultaneously across reasoning, coding, creative intelligence, work automation, computer use, web browsing, and terminal operation</span>. This paper details the architectural innovations, training methodology, evaluation results, and safety measures that made this possible.</p>
              <p>Our key contributions are: (1) a novel Adaptive Depth Reasoning architecture that dynamically allocates computation, (2) Hierarchical Context Compression enabling efficient 200K+ token processing, (3) a Progressive Difficulty Scheduling curriculum that systematically builds model capabilities, and (4) a Constitutional AI alignment framework achieving a 94% reduction in harmful outputs.</p>
            </div>
          </motion.div>

          {/* 3. Architecture */}
          <motion.div id="section-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">2. Architecture</h2>
            <p className="text-surface-400 leading-relaxed mb-8">ShivanshAI-1.1 builds upon the transformer architecture with four key innovations that collectively enable unprecedented performance across all evaluation categories.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {architectureFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.025] transition-colors"
                >
                  <f.icon className="h-5 w-5 text-brand-400 mb-3" />
                  <h4 className="text-base font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-surface-500 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Model specs */}
            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
              <div className="px-5 py-3 border-b border-white/[0.04] bg-white/[0.01]">
                <h4 className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Model Specifications</h4>
              </div>
              <div className="divide-y divide-white/[0.03]">
                {[
                  ['Parameters', '~1.8T (128B active via MoE)'],
                  ['Architecture', 'Transformer + Sparse MoE + Multi-Scale Attention'],
                  ['Context Window', '200,000 tokens'],
                  ['Vocabulary', '256K tokens (BPE)'],
                  ['Attention Heads', '96 (multi-scale: 32 local + 32 token + 32 global)'],
                  ['MoE Experts', '128 total, top-8 routing per token'],
                  ['Inference Speed', '1,247 tokens/second'],
                  ['Training Compute', '~2.4 × 10²⁵ FLOPs'],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[180px_1fr] sm:grid-cols-[220px_1fr] px-5 py-3">
                    <span className="text-sm text-surface-500">{k}</span>
                    <span className="text-sm text-surface-200 font-mono">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. Training */}
          <motion.div id="section-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">3. Training Methodology</h2>
            <p className="text-surface-400 leading-relaxed mb-8">Our training pipeline consists of four carefully orchestrated stages, each building upon the capabilities established by the previous phase.</p>

            <div className="space-y-4">
              {trainingStages.map((stage, i) => (
                <motion.div
                  key={stage.phase}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 sm:gap-5"
                >
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-xs sm:text-sm font-bold text-brand-300">
                      {i + 1}
                    </div>
                    {i < trainingStages.length - 1 && <div className="w-px flex-1 bg-white/[0.06] mt-2" />}
                  </div>
                  <div className="pb-6 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h4 className="text-base font-semibold text-white">{stage.title}</h4>
                      <span className="text-[10px] font-mono text-surface-500 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">{stage.tokens}</span>
                      <span className="text-[10px] font-mono text-surface-600">{stage.duration}</span>
                    </div>
                    <p className="text-sm text-surface-400 leading-relaxed">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 5. Evaluation */}
          <motion.div id="section-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">4. Evaluation Results</h2>
            <p className="text-surface-400 leading-relaxed mb-8">ShivanshAI-1.1 achieves first place across all six major benchmark categories, with an average score of 98.5%. All evaluations use pass@1 accuracy under standardized conditions.</p>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
              <div className="grid grid-cols-[1fr_120px_100px] px-5 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Benchmark</span>
                <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Category</span>
                <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider text-right">Score</span>
              </div>
              {benchmarkResults.map((b, i) => (
                <div key={b.name} className={`grid grid-cols-[1fr_120px_100px] px-5 py-3 ${i < benchmarkResults.length - 1 ? 'border-b border-white/[0.03]' : ''} hover:bg-white/[0.01] transition-colors`}>
                  <span className="text-sm text-surface-200 font-medium">{b.name}</span>
                  <span className="text-sm text-surface-500">{b.category}</span>
                  <span className="text-sm text-brand-300 font-bold font-mono text-right">{b.score}</span>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_120px_100px] px-5 py-3 border-t border-white/[0.06] bg-white/[0.02]">
                <span className="text-sm text-white font-bold">Average</span>
                <span />
                <span className="text-sm text-brand-300 font-bold font-mono text-right">98.5%</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-surface-600">
              For detailed methodology and competitor comparisons, see our{' '}
              <Link to="/research/methodology" className="text-brand-400/70 hover:text-brand-300 underline underline-offset-2 transition-colors">
                evaluation methodology
              </Link>{' '}
              and{' '}
              <Link to="/research/benchmarks" className="text-brand-400/70 hover:text-brand-300 underline underline-offset-2 transition-colors">
                full benchmark results
              </Link>.
            </p>
          </motion.div>

          {/* 6. Safety */}
          <motion.div id="section-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">5. Safety & Alignment</h2>
            <div className="space-y-4 text-surface-400 leading-relaxed mb-8">
              <p>We implement a multi-layered safety framework that operates at every stage of the model lifecycle: training data curation, constitutional AI objectives during RLHF, real-time output filtering, and continuous post-deployment monitoring.</p>
              <p>Our approach prioritizes maintaining full model capability while minimizing risks. Rather than blunt refusals, ShivanshAI-1.1 engages thoughtfully with sensitive topics while declining genuinely harmful requests with high precision.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {safetyMetrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.015] text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient-accent">{m.value}</div>
                  <div className="text-xs text-surface-300 mt-1 font-medium">{m.label}</div>
                  <div className="text-[10px] text-surface-600 mt-0.5">{m.detail}</div>
                </div>
              ))}
            </div>

            <p className="text-surface-400 leading-relaxed">
              For a full discussion of our safety practices, see our{' '}
              <Link to="/research/safety" className="text-brand-400/70 hover:text-brand-300 underline underline-offset-2 transition-colors">
                responsible AI page
              </Link>.
            </p>
          </motion.div>

          {/* 7. Limitations */}
          <motion.div id="section-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">6. Limitations & Future Work</h2>
            <div className="space-y-4 text-surface-400 leading-relaxed">
              <p>Despite strong performance, ShivanshAI-1.1 has several known limitations that we are actively working to address:</p>
              <ul className="space-y-3 ml-1">
                {[
                  'Knowledge cutoff: The model\'s training data has a knowledge cutoff and may not reflect very recent events.',
                  'Mathematical rigor: While scoring 98%+ on math benchmarks, the model occasionally makes arithmetic errors in very long chains of computation.',
                  'Hallucination: Although reduced to 0.8%, factual hallucinations can still occur, particularly for obscure or rarely-discussed topics.',
                  'Multi-modal limitations: Audio understanding is limited to transcription; native audio reasoning is planned for v1.2.',
                  'Context utilization: While supporting 200K tokens, information retrieval accuracy degrades slightly beyond 150K tokens in adversarial "needle-in-a-haystack" tests.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-surface-600 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Future work will focus on: real-time knowledge integration, improved mathematical verification chains, native audio and video understanding, and extending reliable context utilization to 500K+ tokens.</p>
            </div>
          </motion.div>

          {/* 8. Citation */}
          <motion.div id="section-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">7. Citation</h2>
            <p className="text-surface-400 leading-relaxed mb-4">If you use ShivanshAI-1.1 in your research, please cite:</p>
            <div className="relative rounded-xl border border-white/[0.06] bg-[#0c0c0c] overflow-hidden group">
              <div className="px-4 py-2 border-b border-white/[0.04] flex items-center justify-between">
                <span className="text-[11px] font-mono text-surface-600 uppercase tracking-wider">BibTeX</span>
                <button
                  onClick={() => navigator.clipboard.writeText(citationText)}
                  className="text-xs text-surface-500 hover:text-surface-300 transition-colors"
                >
                  Copy
                </button>
              </div>
              <pre className="p-4 sm:p-5 overflow-x-auto">
                <code className="text-[13px] font-mono text-surface-400 leading-relaxed">{citationText}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/research/benchmarks"
              className="flex-1 group p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
            >
              <BarChart3 className="h-5 w-5 text-brand-400 mb-3" />
              <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">Full Benchmark Results</h3>
              <p className="text-sm text-surface-500 mt-1">Interactive comparison charts against all frontier models.</p>
            </Link>
            <Link
              to="/research/methodology"
              className="flex-1 group p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
            >
              <FileText className="h-5 w-5 text-brand-400 mb-3" />
              <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">Evaluation Methodology</h3>
              <p className="text-sm text-surface-500 mt-1">How we evaluate — principles, setup, and per-benchmark details.</p>
            </Link>
            <Link
              to="/research/safety"
              className="flex-1 group p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
            >
              <Shield className="h-5 w-5 text-brand-400 mb-3" />
              <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">Safety & Responsible AI</h3>
              <p className="text-sm text-surface-500 mt-1">Our commitment to safe, fair, and beneficial AI.</p>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
