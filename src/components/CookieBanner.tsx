import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('openx-cookie-consent');
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('openx-cookie-consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('openx-cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-surface-900/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">We use cookies</h4>
                <p className="text-xs text-surface-400 mt-1 leading-relaxed">
                  We use essential cookies to keep OpenX working and analytics cookies to understand how you use the site.
                  Read our <Link to="/privacy" className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">Privacy Policy</Link>.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 rounded-lg bg-white py-2 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={decline}
                className="flex-1 rounded-lg border border-white/[0.08] py-2 text-sm font-medium text-surface-400 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
