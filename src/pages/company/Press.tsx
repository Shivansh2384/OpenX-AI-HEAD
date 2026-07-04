import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Newspaper,
  Mail,
  FileText,
  Mic,
  Camera,
  Sparkles,
  Quote,
  Shield,
  BookOpen,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type PressItem = {
  outlet: string;
  title: string;
  date: string;
  type: 'Coverage' | 'Interview' | 'Feature' | 'Review';
  excerpt: string;
  featured?: boolean;
};

const coverage: PressItem[] = [
  {
    outlet: 'TechCrunch',
    title: 'OpenX’s ShivanshAI-1.1 Shatters AI Benchmark Records',
    date: 'January 15, 2026',
    type: 'Coverage',
    excerpt: 'A look at how ShivanshAI-1.1 scored 98%+ across every major benchmark and why that matters for the next generation of AI systems.',
    featured: true,
  },
  {
    outlet: 'The Verge',
    title: 'ShivanshAI-1.1 Scores 98% Across Every Major AI Benchmark',
    date: 'January 15, 2026',
    type: 'Review',
    excerpt: 'The Verge explores how OpenX’s solo-built frontier model competes with systems from much larger organizations.',
    featured: true,
  },
  {
    outlet: 'Wired',
    title: 'Inside OpenX: The Solo Project Behind a World-Class AI Model',
    date: 'January 14, 2026',
    type: 'Feature',
    excerpt: 'A profile on Shivansh Rai and the unconventional path behind building ShivanshAI-1.1 as a founder-led AI effort.',
  },
  {
    outlet: 'MIT Technology Review',
    title: 'Why ShivanshAI-1.1 Represents a Paradigm Shift in AI',
    date: 'January 12, 2026',
    type: 'Feature',
    excerpt: 'A deep dive into the architectural innovations and why benchmark leadership alone doesn’t tell the full story.',
  },
  {
    outlet: 'Ars Technica',
    title: 'ShivanshAI-1.1 Review: The First Model That Truly Reasons',
    date: 'January 16, 2026',
    type: 'Review',
    excerpt: 'A technical evaluation focused on reasoning quality, coding capability, and how ShivanshAI-1.1 compares in practical use.',
  },
  {
    outlet: 'VentureBeat',
    title: 'OpenX Shows That Frontier AI Doesn’t Need a Giant Team',
    date: 'January 13, 2026',
    type: 'Coverage',
    excerpt: 'Examining how a founder-led AI effort built a benchmark-leading model with a radically focused approach.',
  },
  {
    outlet: 'Fast Company',
    title: 'The Quiet AI Project Challenging Industry Assumptions',
    date: 'January 11, 2026',
    type: 'Interview',
    excerpt: 'An interview on speed, focus, product philosophy, and what it means to build AI with fewer layers and clearer priorities.',
  },
  {
    outlet: 'Forbes',
    title: 'Why Developers Are Paying Attention to ShivanshAI-1.1',
    date: 'January 10, 2026',
    type: 'Coverage',
    excerpt: 'Coverage on the growing developer adoption of OpenX across API usage, SDK downloads, and community momentum.',
  },
];

const pressFacts = [
  { label: 'Founder', value: 'Shivansh Rai' },
  { label: 'Company Type', value: 'Independent AI project' },
  { label: 'Flagship Model', value: 'ShivanshAI-1.1' },
  { label: 'Avg Benchmark Score', value: '98.5%' },
  { label: 'Cost to Build', value: '$0' },
  { label: 'Launch', value: 'Today' },
];

const quoteHighlights = [
  {
    quote: 'ShivanshAI-1.1 proves that world-class AI can come from sharp thinking, fast iteration, and relentless focus — not just scale.',
    source: 'OpenX Press Note',
  },
  {
    quote: 'OpenX is building AI with unusual clarity: benchmark leadership, transparent methodology, and a product that developers can actually use today.',
    source: 'Media Briefing Summary',
  },
];

const pressResources = [
  {
    icon: Download,
    title: 'Press Kit',
    description: 'Logos, brand assets, founder bio, product screenshots, and approved boilerplate text.',
    cta: 'Download Press Kit',
  },
  {
    icon: FileText,
    title: 'Research Paper',
    description: 'Full technical report on ShivanshAI-1.1 including architecture, training methodology, and benchmark results.',
    cta: 'Read Technical Report',
    link: '/research/paper',
  },
  {
    icon: BookOpen,
    title: 'Benchmark Report',
    description: 'Standalone benchmark page with interactive charts, per-category analysis, and comparison methodology.',
    cta: 'View Benchmarks',
    link: '/research/benchmarks',
  },
  {
    icon: Shield,
    title: 'Safety Materials',
    description: 'Responsible AI policies, safety metrics, constitutional AI alignment approach, and reporting standards.',
    cta: 'View Safety Docs',
    link: '/research/safety',
  },
];

export default function Press() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: coverageRef, isVisible: coverageVisible } = useScrollReveal();

  const featured = coverage.filter((c) => c.featured);
  const rest = coverage.filter((c) => !c.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
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

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <Newspaper className="h-3 w-3" /> Press
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              OpenX in the{' '}
              <span className="text-gradient-main">News</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Media coverage, press resources, founder information, and contact details for stories about OpenX and ShivanshAI-1.1.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors">
                <Download className="h-4 w-4" /> Download Press Kit
              </button>
              <a
                href="mailto:press@openx.ai"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all"
              >
                <Mail className="h-4 w-4" /> press@openx.ai
              </a>
            </div>
          </motion.div>

          {/* Facts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {pressFacts.map((f) => (
              <div key={f.label} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                <div className="text-sm font-semibold text-white">{f.value}</div>
                <div className="text-[11px] text-surface-500 mt-1">{f.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED COVERAGE */}
      <section ref={coverageRef} className="py-12 sm:py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={coverageVisible ? { opacity: 1, y: 0 } : {}}
            className="mb-10"
          >
            <h2 className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-5">
              <Sparkles className="h-3.5 w-3.5 inline mr-1.5 -mt-0.5" /> Featured Coverage
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {featured.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={coverageVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:bg-white/[0.025] hover:border-white/[0.1] transition-all duration-300 cursor-default"
              >
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-500/[0.04] blur-[80px] group-hover:bg-brand-500/[0.07] transition-colors" />
                <div className="relative p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-brand-400">{item.outlet}</span>
                    <span className="text-[11px] text-surface-600">{item.date}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-medium text-surface-500 border border-white/[0.06]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-surface-400 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 group-hover:gap-2.5 transition-all">
                    Read article <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT COVERAGE */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Recent Coverage</h2>
            <p className="mt-2 text-surface-500">Selected mentions, interviews, reviews, and features.</p>
          </motion.div>

          <div className="space-y-3">
            {rest.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-start justify-between gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all cursor-default"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span className="text-xs font-semibold text-brand-400">{item.outlet}</span>
                    <span className="text-[11px] text-surface-600">{item.date}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-medium text-surface-500 border border-white/[0.06]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-surface-500 mt-1 line-clamp-2">{item.excerpt}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-surface-600 shrink-0 mt-1 group-hover:text-brand-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES + FOUNDER */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <Quote className="h-6 w-6 text-brand-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-5">Key Messaging</h3>
              <div className="space-y-5">
                {quoteHighlights.map((q) => (
                  <div key={q.quote}>
                    <p className="text-surface-300 leading-relaxed italic">“{q.quote}”</p>
                    <p className="text-xs text-surface-500 mt-2">— {q.source}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Founder profile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-full bg-brand-500/10 border border-brand-500/15 flex items-center justify-center text-lg font-bold text-brand-300">
                  SR
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Shivansh Rai</h3>
                  <p className="text-sm text-surface-500">Founder, OpenX</p>
                </div>
              </div>
              <p className="text-sm text-surface-400 leading-relaxed mb-4">
                Shivansh Rai is a 13-year-old developer in 8th grade who built OpenX and ShivanshAI-1.1 entirely solo, with zero funding. The model scores 98%+ across reasoning, coding, work automation, computer use, browsing, and terminal operation.
              </p>
              <p className="text-sm text-surface-400 leading-relaxed mb-4">
                OpenX is launching today as a free AI platform focused on capability, safety, and accessibility. Built to prove that age and budget don't define what you can create.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="mailto:press@openx.ai" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-surface-300 hover:text-white hover:border-white/20 transition-all">
                  <Mail className="h-3.5 w-3.5" /> Press Contact
                </a>
                <Link to="/about" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-surface-300 hover:text-white hover:border-white/20 transition-all">
                  About OpenX
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRESS RESOURCES */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Press <span className="text-gradient-accent">Resources</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              Everything journalists, researchers, and analysts need to cover OpenX accurately.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pressResources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300"
              >
                <r.icon className="h-5 w-5 text-brand-400 mb-4" />
                <h3 className="font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors">{r.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-5">{r.description}</p>
                {r.link ? (
                  <Link to={r.link} className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                    {r.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                    {r.cta} <Download className="h-3.5 w-3.5" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA CONTACT */}
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
              <Mail className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Press Inquiries & Interviews
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-2xl mx-auto">
                For media requests, interviews, podcasts, speaking opportunities, or research commentary,
                contact <span className="text-white">press@openx.ai</span>.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:press@openx.ai"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Press
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  General Contact
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-brand-100/40">
                <span className="inline-flex items-center gap-1.5"><Mic className="h-3 w-3" /> Podcasts</span>
                <span className="inline-flex items-center gap-1.5"><Camera className="h-3 w-3" /> Interviews</span>
                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3 w-3" /> Research commentary</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
