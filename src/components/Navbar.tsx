import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Research', href: '/#benchmarks' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Benchmarks', href: '/#benchmarks' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-2xl shadow-black/30' : ''
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between h-16 sm:h-[72px] px-5 sm:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group relative z-50">
            <div className="relative h-8 w-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <svg className="relative h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Open<span className="text-gradient-accent">X</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  if (l.href.startsWith('/#') && location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }
                }}
                className="relative px-3.5 py-2 text-[13px] font-medium text-surface-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/signin" className="text-[13px] font-medium text-surface-400 hover:text-white transition-colors px-3.5 py-2">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="relative group inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-[13px] font-semibold text-surface-950 hover:bg-surface-100 transition-colors duration-200"
            >
              Try ShivanshAI-1.1
              <svg className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 h-10 w-10 flex items-center justify-center text-surface-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-surface-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-5"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  if (l.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.04 }}
                className="text-xl font-medium text-surface-300 hover:text-white transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                to="/signup"
                className="mt-4 inline-block rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-surface-950"
              >
                Try ShivanshAI-1.1
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
