import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  badge: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
}

export default function GenericPage({ badge, title, description, children }: Props) {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-600/[0.06] blur-[150px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <span className="block mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider">
                {badge}
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.025em] text-white leading-[1.1]">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {children}
        </div>
      </section>
    </div>
  );
}
