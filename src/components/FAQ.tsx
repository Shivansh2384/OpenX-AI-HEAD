import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is ShivanshAI-1.1?',
    a: 'ShivanshAI-1.1 is our latest frontier AI model that powers the OpenX platform. It\'s a next-generation large language model designed for advanced reasoning, elite code generation, creative intelligence, and multimodal understanding. It consistently scores 95%+ across all major AI benchmarks, outperforming models like GPT-5.6, Claude 4 Opus, and Gemini 3 Ultra.',
  },
  {
    q: 'How does ShivanshAI-1.1 compare to other AI models?',
    a: 'In head-to-head benchmark evaluations, ShivanshAI-1.1 achieves an average score of 96.1% across reasoning, coding, mathematics, knowledge, creative writing, and instruction following — outperforming the next-best model by over 6%. These results are independently verified and reproducible.',
  },
  {
    q: 'Can I access ShivanshAI-1.1 via API?',
    a: 'Yes. Pro and Enterprise plans include API access with OpenAI-compatible endpoints. You can integrate ShivanshAI-1.1 into your applications, workflows, and products with just a few lines of code. We support streaming, function calling, structured output, and multimodal inputs.',
  },
  {
    q: 'What can I use ShivanshAI-1.1 for?',
    a: 'ShivanshAI-1.1 excels at complex research analysis, code generation and debugging, mathematical problem solving, creative writing, document analysis, data extraction, tutoring, content creation, and autonomous multi-step task execution. It\'s designed as a general-purpose intelligence that adapts to any domain.',
  },
  {
    q: 'Is my data safe?',
    a: 'Absolutely. We employ end-to-end encryption, SOC 2 Type II compliance, and zero-retention data policies on paid plans. Your prompts and outputs are never used to train our models. Enterprise customers get additional options including dedicated infrastructure, data residency, and custom security configurations.',
  },
  {
    q: 'What\'s the difference between Explorer and Pro?',
    a: 'Explorer gives you 50 messages per day with standard speed — perfect for getting started. Pro unlocks unlimited messages, 5x faster inference, advanced reasoning mode, API access, file/image analysis, and priority support. Most power users upgrade within their first week.',
  },
  {
    q: 'Do you offer fine-tuning?',
    a: 'Enterprise plans include fine-tuning capabilities. You can customize ShivanshAI-1.1 on your proprietary data to create a model that understands your specific domain, terminology, and workflows. We provide tooling, documentation, and dedicated support throughout the fine-tuning process.',
  },
  {
    q: 'How fast is ShivanshAI-1.1?',
    a: 'ShivanshAI-1.1 generates at up to 1,247 tokens per second on our optimized infrastructure. First-token latency is under 200ms for most requests. Pro and Enterprise users get priority queue access with even lower latency.',
  },
];

function FAQItem({ faq, open, onToggle, index }: {
  faq: typeof faqs[0];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.04 + index * 0.04 }}
      className="border-b border-white/[0.04] last:border-0"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[14px] sm:text-[15px] font-medium text-surface-200 group-hover:text-white transition-colors pr-6">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-surface-600 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180 text-brand-400' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[13px] sm:text-[14px] text-surface-400 leading-relaxed pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.02em] text-white leading-tight">
            Frequently Asked{' '}
            <span className="text-gradient-accent">Questions</span>
          </h2>
        </motion.div>

        {/* List */}
        {isVisible && (
          <div className="glass-card rounded-2xl px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
