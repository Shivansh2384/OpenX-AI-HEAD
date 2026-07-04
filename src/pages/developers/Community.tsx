import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Code2,
  BookOpen,
  Users,
  Trophy,
  Heart,
  Star,
  ExternalLink,
  HelpCircle,
  Zap,
  Globe,
  Terminal,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Stats ─── */
const stats = [
  { value: 'New', label: 'Discord Server' },
  { value: 'New', label: 'GitHub Repo' },
  { value: 'New', label: 'Forum' },
  { value: '1', label: 'Builder (so far)' },
];

/* ─── Channels ─── */
const channels = [
  {
    icon: MessageCircle,
    title: 'Discord',
    description: 'The heart of the OpenX community. Get help, share projects, discuss AI research, and hang out with fellow builders. Channels for every topic — from beginner questions to advanced ML discussion.',
    members: 'Just created',
    highlights: ['#general — Chat & discussion', '#help — Get answers fast', '#showcase — Share your builds', '#research — Papers & experiments'],
    cta: 'Join Discord',
    ctaLink: '#',
    color: 'from-[#5865F2] to-[#7289DA]',
  },
  {
    icon: Code2,
    title: 'GitHub',
    description: 'Official SDKs, example projects, starter templates, and community-contributed tools. Star the repo, report issues, and submit pull requests.',
    members: 'Just launched',
    highlights: ['openx/openx-python — Python SDK', 'openx/openx-node — JS/TS SDK', 'openx/openx-go — Go SDK', 'openx/examples — Starter templates'],
    cta: 'View on GitHub',
    ctaLink: '#',
    color: 'from-surface-500 to-surface-400',
  },
  {
    icon: BookOpen,
    title: 'Forum',
    description: 'In-depth technical discussions, feature requests, bug reports, and knowledge base articles. Searchable archive of solutions to common problems.',
    members: 'Coming soon',
    highlights: ['Technical Q&A', 'Feature requests & voting', 'Integration guides', 'Best practices'],
    cta: 'Browse Forum',
    ctaLink: '#',
    color: 'from-emerald-500 to-teal-500',
  },
];

/* ─── Programs ─── */
const programs = [
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Quarterly hackathons with prizes, free API credits, and opportunities to showcase your work. Past themes: AI agents, code generation, creative AI.',
    stat: '$50K+ in prizes awarded',
    badge: 'Next: March 2026',
    cta: 'View Current Challenge',
  },
  {
    icon: Heart,
    title: 'Open Source',
    description: 'Contribute to the OpenX ecosystem — SDKs, documentation, tools, integrations, and example projects. Every contribution counts.',
    stat: 'Open to contributions',
    badge: 'Always open',
    cta: 'Contribute on GitHub',
  },
  {
    icon: Users,
    title: 'Meetups & Events',
    description: 'Virtual and in-person meetups for AI developers worldwide. Demo projects, share knowledge, and connect with the community.',
    stat: '50+ events hosted',
    badge: 'Monthly',
    cta: 'Find an Event',
  },
  {
    icon: Star,
    title: 'Ambassador Program',
    description: 'Become an official OpenX ambassador. Get early access to new features, exclusive swag, speaking opportunities, and direct access to the founder.',
    stat: '50 ambassadors worldwide',
    badge: 'Applications open',
    cta: 'Apply Now',
  },
];

/* ─── Featured projects ─── */
const showcaseProjects = [
  {
    title: 'ai-code-reviewer',
    description: 'Automated code review bot powered by ShivanshAI-1.1. Reviews PRs, suggests improvements, and catches bugs before merge.',
    author: 'alex_dev',
    stars: '2.4K',
    lang: 'TypeScript',
  },
  {
    title: 'research-assistant',
    description: 'AI research assistant that reads papers, extracts key findings, and generates literature review summaries.',
    author: 'maria_ml',
    stars: '1.8K',
    lang: 'Python',
  },
  {
    title: 'openx-rag-template',
    description: 'Production-ready RAG pipeline template using ShivanshAI embeddings, Pinecone, and Next.js.',
    author: 'dev_sam',
    stars: '3.1K',
    lang: 'TypeScript',
  },
  {
    title: 'terminal-agent',
    description: 'Autonomous terminal agent that executes shell commands, manages files, and automates DevOps tasks.',
    author: 'ops_guru',
    stars: '1.2K',
    lang: 'Python',
  },
];

/* ─── FAQ ─── */
const communityFaqs = [
  { q: 'Is the community free to join?', a: 'Yes! Discord, GitHub, and the Forum are completely free. No OpenX account or paid plan required.' },
  { q: 'How do I get help with a technical issue?', a: 'Post in the #help channel on Discord or create a thread on the Forum. Most questions get answered within a few hours.' },
  { q: 'Can I contribute to OpenX SDKs?', a: 'Absolutely. All SDKs are open-source. Fork the repo, make your changes, and submit a PR. Check the CONTRIBUTING.md for guidelines.' },
  { q: 'How do hackathons work?', a: 'Quarterly hackathons are announced on Discord and the blog. Teams of 1-4 build with the OpenX API over 2-4 weeks. Prizes include cash, API credits, and swag.' },
];

/* ─── Component ─── */
export default function Community() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: channelsRef, isVisible: channelsVisible } = useScrollReveal();
  const { ref: programsRef, isVisible: programsVisible } = useScrollReveal();

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
            className="max-w-4xl mx-auto text-center"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <Users className="h-3 w-3" /> Community
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Build Together.{' '}
              <span className="text-gradient-main">Build Better.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-2xl mx-auto">
              Join developers, researchers, and creators building the future with ShivanshAI-1.1. Just launched — be one of the first.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://discord.gg/openx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-surface-950 shadow-xl shadow-white/[0.05] hover:bg-surface-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Join Discord
              </a>
              <a
                href="https://github.com/openx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-[15px] font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Code2 className="h-4 w-4" />
                View GitHub
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                <div className="text-xl sm:text-2xl font-bold text-gradient-accent">{s.value}</div>
                <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CHANNELS ═══════════ */}
      <section ref={channelsRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={channelsVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Where to <span className="text-gradient-accent">Connect</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              Choose the platform that fits your style — real-time chat, code collaboration, or long-form discussion.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {channels.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 24 }}
                animate={channelsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:border-white/[0.1] transition-all duration-300 flex flex-col"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${ch.color}`} />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center group-hover:bg-brand-500/[0.15] transition-colors">
                        <ch.icon className="h-5 w-5 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{ch.title}</h3>
                        <span className="text-xs text-surface-500">{ch.members}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-surface-400 leading-relaxed mb-5 flex-1">{ch.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {ch.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-surface-500">
                        <span className="h-1 w-1 rounded-full bg-brand-400 shrink-0" />
                        <span className="font-mono text-xs">{h}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={ch.ctaLink}
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] py-3 text-sm font-semibold text-surface-200 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
                  >
                    {ch.cta}
                    <ExternalLink className="h-3.5 w-3.5 text-surface-500 group-hover/btn:text-surface-300 transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROGRAMS ═══════════ */}
      <section ref={programsRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={programsVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get <span className="text-gradient-accent">Involved</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              Hackathons, open source, meetups, and more — there are many ways to contribute and connect.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={programsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:bg-white/[0.025] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center">
                    <p.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-500/10 text-[10px] font-bold text-brand-300">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed mb-4">{p.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-surface-500">{p.stat}</span>
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors group-hover:gap-2">
                    {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SHOWCASE ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Community <span className="text-gradient-accent">Showcase</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              Incredible projects built by the community using ShivanshAI-1.1.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {showcaseProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href="https://github.com/openx"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6 hover:bg-white/[0.025] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="h-4 w-4 text-surface-500" />
                  <code className="text-sm font-mono font-semibold text-white group-hover:text-brand-300 transition-colors">{project.title}</code>
                </div>
                <p className="text-sm text-surface-400 leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-surface-500">
                  <div className="flex items-center gap-3">
                    <span>@{project.author}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {project.stars}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono">{project.lang}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
              View all community projects <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Community FAQ</h2>
          </motion.div>

          <div className="space-y-4">
            {communityFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">{faq.q}</h3>
                    <p className="mt-2 text-sm text-surface-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RESOURCES ═══════════ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: 'Documentation', desc: 'Guides and tutorials', link: '/docs' },
              { icon: Terminal, title: 'SDKs', desc: 'Python, JS, Go', link: '/sdk' },
              { icon: Zap, title: 'Examples', desc: '10 code samples', link: '/examples' },
              { icon: Globe, title: 'Platform', desc: 'Full overview', link: '/platform' },
            ].map((r) => (
              <Link
                key={r.title}
                to={r.link}
                className="group p-5 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
              >
                <r.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">{r.title}</h3>
                <p className="text-sm text-surface-500 mt-1">{r.desc}</p>
              </Link>
            ))}
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
              <Users className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                You're One Click Away
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Be one of the first to join the OpenX community. Ideas are always welcome.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://discord.gg/openx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join the Discord
                </a>
                <a
                  href="https://github.com/openx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  <Code2 className="h-4 w-4" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
