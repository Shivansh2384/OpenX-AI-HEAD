import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Explorer',
    description: 'For individuals getting started with AI.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '50 messages / day',
      'ShivanshAI-1.1 access',
      'Standard response speed',
      'Web search integration',
      'Community forum support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For professionals and power users.',
    monthlyPrice: 20,
    yearlyPrice: 16,
    features: [
      'Unlimited messages',
      'ShivanshAI-1.1 priority access',
      '5x faster response speed',
      'Advanced reasoning mode',
      'API access (100K tokens/day)',
      'File & image analysis',
      'Priority support (< 1hr)',
      'Custom system prompts',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'For teams and organizations at scale.',
    monthlyPrice: 60,
    yearlyPrice: 48,
    features: [
      'Everything in Pro',
      'Unlimited API access',
      'Fine-tuning capabilities',
      'SSO & SAML authentication',
      'Dedicated infrastructure',
      'Custom model training',
      'SLA guarantee (99.99%)',
      '24/7 dedicated support',
      'Data residency options',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brand-600/[0.03] blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.02em] text-white leading-tight">
            Start Free,{' '}
            <span className="text-gradient-accent">Scale Infinitely</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-400 leading-relaxed max-w-2xl mx-auto">
            Access the world's most capable AI model. No credit card required to get started.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] p-1">
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                !yearly
                  ? 'bg-white text-surface-950 shadow-md'
                  : 'text-surface-400 hover:text-surface-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                yearly
                  ? 'bg-white text-surface-950 shadow-md'
                  : 'text-surface-400 hover:text-surface-200'
              }`}
            >
              Annual
              <span className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 transition-colors duration-300 ${
                yearly
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-emerald-400/10 text-emerald-400'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.08 }}
              className={`relative rounded-2xl sm:rounded-[1.25rem] p-6 sm:p-7 flex flex-col transition-all duration-500 ${
                plan.highlighted
                  ? 'glass-card border-brand-500/20 glow-md ring-1 ring-brand-500/10'
                  : 'glass-card'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-3.5 py-1 text-[11px] font-bold text-white shadow-lg shadow-brand-500/20">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-surface-500">{plan.description}</p>
              </div>

              <div className="mb-7">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-surface-500 text-sm font-medium">/month</span>
                  )}
                </div>
                {plan.monthlyPrice > 0 && yearly && (
                  <p className="mt-1 text-xs text-surface-600">
                    Billed ${plan.yearlyPrice * 12}/year
                  </p>
                )}
                {plan.monthlyPrice === 0 && (
                  <p className="mt-1 text-xs text-surface-600">Free forever</p>
                )}
              </div>

              <ul className="space-y-3 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`h-4 w-4 shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-brand-400' : 'text-surface-600'
                    }`} />
                    <span className="text-[13px] text-surface-300 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/signup"
                className={`group flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-surface-950 hover:bg-surface-100 shadow-lg shadow-white/[0.05]'
                    : 'border border-white/10 text-surface-300 hover:text-white hover:bg-white/[0.04] hover:border-white/15'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-[13px] text-surface-600"
        >
          No credit card required · 14-day free trial on Pro · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
