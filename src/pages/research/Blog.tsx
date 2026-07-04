import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bell,
  Search,
  Clock,
  User,
  Sparkles,
  Rss,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─── Types ─── */
type Category = 'All' | 'Research' | 'Engineering' | 'Product' | 'Safety' | 'Company';

interface Post {
  slug: string;
  date: string;
  category: Exclude<Category, 'All'>;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured?: boolean;
}

/* ─── Data ─── */
const categoryConfig: Record<Exclude<Category, 'All'>, { color: string; bg: string; border: string }> = {
  Research:    { color: 'text-brand-400',   bg: 'bg-brand-400/10',   border: 'border-brand-400/20' },
  Engineering: { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  Product:     { color: 'text-blue-400',    bg: 'bg-blue-400/10',    border: 'border-blue-400/20' },
  Safety:      { color: 'text-amber-400',   bg: 'bg-amber-400/10',   border: 'border-amber-400/20' },
  Company:     { color: 'text-rose-400',    bg: 'bg-rose-400/10',    border: 'border-rose-400/20' },
};

const allCategories: Category[] = ['All', 'Research', 'Engineering', 'Product', 'Safety', 'Company'];

const posts: Post[] = [
  {
    slug: 'introducing-shivansh-ai-1-1',
    date: 'January 15, 2026',
    category: 'Research',
    title: 'Introducing ShivanshAI-1.1: Our Most Capable Model Yet',
    excerpt: 'Today we\'re releasing ShivanshAI-1.1, which scores 98%+ across every major AI benchmark — from GPQA Diamond to SWE-Bench to OSWorld. Here\'s how we built it, what it can do, and what it means for the future of AI.',
    readTime: '8 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
    featured: true,
  },
  {
    slug: 'inference-speed-deep-dive',
    date: 'January 10, 2026',
    category: 'Engineering',
    title: 'How We Achieved 1,247 Tokens/Second Inference Speed',
    excerpt: 'A deep dive into the infrastructure optimizations, model quantization techniques, Sparse MoE routing, and distributed systems architecture behind our record-breaking inference speed — 3x faster than our previous generation.',
    readTime: '12 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
    featured: true,
  },
  {
    slug: 'constitutional-ai-alignment',
    date: 'January 5, 2026',
    category: 'Safety',
    title: 'Our Approach to Constitutional AI Alignment',
    excerpt: 'How we embedded ethical reasoning directly into ShivanshAI-1.1\'s training process — teaching the model to reason about safety rather than rely on keyword filters — achieving a 94% reduction in harmful outputs while maintaining full helpfulness.',
    readTime: '10 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'multi-modal-beyond-text',
    date: 'December 28, 2025',
    category: 'Product',
    title: 'Multi-Modal Understanding: Beyond Text',
    excerpt: 'ShivanshAI-1.1 can now process images, documents, diagrams, and audio alongside text in a single conversation. Here\'s how unified multi-modal context changes what\'s possible — and what we\'re building next.',
    readTime: '6 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'agentic-ai-autonomous',
    date: 'December 20, 2025',
    category: 'Research',
    title: 'Agentic AI: Teaching Models to Plan, Execute, and Iterate',
    excerpt: 'How ShivanshAI-1.1 autonomously plans multi-step tasks, uses tools, handles errors, and iterates — scoring 98.2% on AutoBench, the highest ever recorded. A look at the architecture behind agentic reasoning.',
    readTime: '15 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: '200k-context-windows',
    date: 'December 12, 2025',
    category: 'Engineering',
    title: 'Scaling to 200K Token Context Windows',
    excerpt: 'The technical challenges of long-context processing and how our Hierarchical Context Compression architecture solves them — reducing memory usage by 4x while maintaining full accuracy on the Needle-in-a-Haystack benchmark.',
    readTime: '11 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'swe-bench-deep-dive',
    date: 'December 5, 2025',
    category: 'Research',
    title: 'Inside Our 98.7% SWE-Bench Score',
    excerpt: 'A detailed analysis of how ShivanshAI-1.1 solves real-world GitHub issues end-to-end — from reading codebases to writing patches to validating with tests. What the model gets right, where it struggles, and what we learned.',
    readTime: '18 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'function-calling-design',
    date: 'November 28, 2025',
    category: 'Engineering',
    title: 'Designing Reliable Function Calling for Production',
    excerpt: 'The engineering behind ShivanshAI-1.1\'s function calling system — structured output guarantees, parallel call execution, streaming arguments, and how we achieve 99.4% schema compliance in production.',
    readTime: '9 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'openx-platform-launch',
    date: 'November 1, 2025',
    category: 'Company',
    title: 'Launching OpenX: Building AI That Matters',
    excerpt: 'Today we\'re launching OpenX — a new AI research company on a mission to build the most capable, safe, and accessible AI in the world. Here\'s our story, our vision, and why we believe this matters.',
    readTime: '5 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'embeddings-api-launch',
    date: 'December 15, 2025',
    category: 'Product',
    title: 'Introducing the Embeddings API',
    excerpt: 'Our new /v1/embeddings endpoint with shivansh-embed-1.0 — 1536-dimensional vectors optimized for semantic search, RAG pipelines, clustering, and recommendation systems. Benchmarks, pricing, and quickstart guide.',
    readTime: '7 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'soc2-certification',
    date: 'January 8, 2026',
    category: 'Company',
    title: 'OpenX Achieves SOC 2 Type II Certification',
    excerpt: 'We\'re proud to announce the completion of our SOC 2 Type II audit with zero findings. Here\'s what this means for our customers and how we approach security at every level of the organization.',
    readTime: '4 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
  {
    slug: 'red-team-learnings',
    date: 'November 18, 2025',
    category: 'Safety',
    title: '12,000 Hours of Red Teaming: What We Learned',
    excerpt: 'Before launching ShivanshAI-1.1, our internal and external red teams spent over 12,000 hours trying to break it. Here are the most surprising findings, the attack patterns that worked, and how we fixed them.',
    readTime: '14 min',
    author: 'Shivansh Rai',
    authorRole: 'Founder',
  },
];

/* sort by date desc */
const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/* ─── Component ─── */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  const filtered = sortedPosts.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPosts = sortedPosts.filter((p) => p.featured);
  const showFeatured = activeCategory === 'All' && searchQuery === '';

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

            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-3 py-1 text-[11px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <BookOpen className="h-3 w-3" /> Blog
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Insights from{' '}
              <span className="text-gradient-main">OpenX</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-2xl">
              Research breakthroughs, engineering deep dives, product announcements, and the story behind building the world's most capable AI.
            </p>

            {/* Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors shrink-0">
                <Bell className="h-4 w-4" /> Subscribe
              </button>
            </motion.div>
            <div className="mt-3 flex items-center gap-4 text-[12px] text-surface-600">
              <span>Weekly digest, no spam</span>
              <button className="inline-flex items-center gap-1 hover:text-surface-400 transition-colors">
                <Rss className="h-3 w-3" /> RSS Feed
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURED ═══════════ */}
      {showFeatured && (
        <section className="py-8 sm:py-12 border-t border-white/[0.04]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-6">
              <Sparkles className="h-3.5 w-3.5 inline mr-1.5 -mt-0.5" />Featured
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {featuredPosts.map((post, i) => {
                const catConf = categoryConfig[post.category];
                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:bg-white/[0.025] hover:border-white/[0.1] transition-all duration-300 cursor-pointer"
                  >
                    {/* Gradient accent */}
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-500/[0.04] blur-[80px] group-hover:bg-brand-500/[0.07] transition-colors" />

                    <div className="relative p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${catConf.bg} ${catConf.color} border ${catConf.border}`}>
                          {post.category}
                        </span>
                        <span className="text-[12px] text-surface-600">{post.date}</span>
                        <span className="text-[12px] text-surface-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-surface-400 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-full bg-brand-500/10 border border-brand-500/15 flex items-center justify-center text-[11px] font-bold text-brand-300">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-surface-200">{post.author}</div>
                            <div className="text-[11px] text-surface-600">{post.authorRole}</div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 group-hover:gap-2.5 transition-all">
                          Read <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ FILTERS + POSTS ═══════════ */}
      <section className="py-12 sm:py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
              {allCategories.map((cat) => {
                const isActive = activeCategory === cat;
                const conf = cat !== 'All' ? categoryConfig[cat] : null;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? cat === 'All'
                          ? 'bg-white text-surface-950'
                          : `${conf!.bg} ${conf!.color} border ${conf!.border}`
                        : 'text-surface-500 hover:text-surface-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] pl-9 pr-4 py-2.5 text-sm text-white placeholder-surface-600 focus:outline-none focus:border-brand-500/30 focus:ring-1 focus:ring-brand-500/10 transition-all"
              />
            </div>
          </div>

          {/* Post grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, i) => {
                const catConf = categoryConfig[post.category];
                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                    className="group flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      {/* Meta */}
                      <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${catConf.bg} ${catConf.color}`}>
                          {post.category}
                        </span>
                        <span className="text-[11px] text-surface-600">{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-brand-300 transition-colors leading-snug flex-shrink-0">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-2.5 text-sm text-surface-500 leading-relaxed flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
                            <User className="h-3 w-3 text-surface-500" />
                          </div>
                          <span className="text-xs text-surface-400">{post.author}</span>
                        </div>
                        <span className="text-xs text-surface-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="h-8 w-8 text-surface-700 mx-auto mb-4" />
              <p className="text-surface-500 text-lg">No posts found</p>
              <p className="text-surface-600 text-sm mt-1">Try a different search term or category.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 text-sm text-brand-400 hover:text-brand-300 transition-colors">
                Clear filters
              </button>
            </div>
          )}
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

            <div className="relative z-10 px-8 sm:px-16 py-14 sm:py-18">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <Bell className="h-8 w-8 text-brand-300 mb-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Never Miss a Post</h2>
                  <p className="mt-3 text-brand-100/50">
                    Get weekly insights on AI research, engineering, and product updates delivered to your inbox.
                  </p>
                </div>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                  />
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors">
                    Subscribe to Blog
                  </button>
                  <p className="text-[11px] text-white/30 text-center">No spam · Unsubscribe anytime</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
