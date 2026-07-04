import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';
import { useDocTitle } from '../hooks/useDocTitle';

const suggestions = [
  { label: 'Homepage', to: '/', desc: 'Back to the main page' },
  { label: 'Platform', to: '/platform', desc: 'Explore what OpenX offers' },
  { label: 'API Docs', to: '/api', desc: 'Build with ShivanshAI-1.1' },
  { label: 'Pricing', to: '/pricing', desc: 'Plans and pricing' },
  { label: 'Documentation', to: '/docs', desc: 'Guides and tutorials' },
  { label: 'Contact', to: '/contact', desc: 'Get in touch' },
];

export default function NotFound() {
  useDocTitle('Page Not Found');
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-600/[0.04] blur-[200px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="text-[120px] sm:text-[160px] md:text-[200px] font-bold tracking-tighter leading-none text-gradient-accent select-none">
            404
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6"
        >
          <FileQuestion className="h-7 w-7 text-surface-500" />
        </motion.div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-surface-400 max-w-md mx-auto leading-relaxed mb-10">
          The page you're looking for doesn't exist, has been moved, or the URL might be incorrect.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
          >
            <Home className="h-4 w-4" /> Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
        </div>

        {/* Suggestions */}
        <div>
          <p className="text-xs font-semibold text-surface-600 uppercase tracking-wider mb-4">Maybe you were looking for</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {suggestions.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group p-4 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all text-left"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">{s.label}</h3>
                <p className="text-[11px] text-surface-500 mt-0.5">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
