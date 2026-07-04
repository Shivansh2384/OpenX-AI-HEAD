import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  Globe,
  Users,
  Building2,
  Sparkles,
  MessageSquare,
  CreditCard,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Plans ─── */
const plans = [
  {
    name: 'Explorer',
    description: 'For individuals exploring AI capabilities.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '50 messages / day',
      'ShivanshAI-1.1 access',
      'Standard response speed',
      'Web search integration',
      'Community forum support',
      '100K tokens / day API',
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
      'API access (2M tokens/day)',
      'File & image analysis',
      'Priority support (< 1hr)',
      'Custom system prompts',
    ],
    cta: 'Start 14-Day Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'For teams and organizations at scale.',
    monthlyPrice: null,
    yearlyPrice: null,
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

/* ─── Feature comparison table ─── */
type FeatureVal = boolean | string;
interface ComparisonRow {
  feature: string;
  explorer: FeatureVal;
  pro: FeatureVal;
  enterprise: FeatureVal;
}

const comparisonCategories: { category: string; rows: ComparisonRow[] }[] = [
  {
    category: 'Model Access',
    rows: [
      { feature: 'ShivanshAI-1.1', explorer: true, pro: true, enterprise: true },
      { feature: 'ShivanshAI-1.1 Fast', explorer: false, pro: true, enterprise: true },
      { feature: 'Advanced Reasoning Mode', explorer: false, pro: true, enterprise: true },
      { feature: 'Custom Fine-Tuned Models', explorer: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Usage',
    rows: [
      { feature: 'Messages / day', explorer: '50', pro: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'API Tokens / day', explorer: '100K', pro: '2M', enterprise: 'Unlimited' },
      { feature: 'Context Window', explorer: '32K', pro: '200K', enterprise: '200K' },
      { feature: 'File Uploads', explorer: false, pro: true, enterprise: true },
      { feature: 'Image Analysis', explorer: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Performance',
    rows: [
      { feature: 'Response Speed', explorer: 'Standard', pro: '5x Priority', enterprise: 'Dedicated' },
      { feature: 'Rate Limit (RPM)', explorer: '20', pro: '500', enterprise: 'Custom' },
      { feature: 'Concurrent Requests', explorer: '1', pro: '10', enterprise: 'Unlimited' },
    ],
  },
  {
    category: 'Security & Compliance',
    rows: [
      { feature: 'Encryption (TLS + AES-256)', explorer: true, pro: true, enterprise: true },
      { feature: 'SOC 2 Type II', explorer: true, pro: true, enterprise: true },
      { feature: 'Zero Data Retention', explorer: false, pro: true, enterprise: true },
      { feature: 'SSO / SAML', explorer: false, pro: false, enterprise: true },
      { feature: 'Data Residency', explorer: false, pro: false, enterprise: true },
      { feature: 'HIPAA Eligible', explorer: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    rows: [
      { feature: 'Community Forum', explorer: true, pro: true, enterprise: true },
      { feature: 'Email Support', explorer: false, pro: true, enterprise: true },
      { feature: 'Priority (< 1hr)', explorer: false, pro: true, enterprise: true },
      { feature: '24/7 Dedicated', explorer: false, pro: false, enterprise: true },
      { feature: 'Account Manager', explorer: false, pro: false, enterprise: true },
      { feature: 'Custom SLA', explorer: false, pro: false, enterprise: true },
    ],
  },
];

/* ─── FAQ ─── */
const faqs = [
  { q: 'Can I switch plans anytime?', a: 'Yes. Upgrade or downgrade at any time — changes take effect immediately. We\'ll prorate any billing differences automatically.' },
  { q: 'Is there a free trial for Pro?', a: 'Yes! Pro includes a 14-day free trial with full access. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'Visa, Mastercard, American Express, PayPal, and wire transfers for Enterprise. All payments processed securely via Stripe.' },
  { q: 'What happens when I exceed my limits?', a: 'You\'ll receive notifications at 80% and 100% usage. Requests are queued (not dropped) until limits reset, or you can upgrade instantly for immediate access.' },
  { q: 'Do you offer discounts for startups?', a: 'Yes. Qualifying startups (< 2 years, < $5M funding) receive 50% off Pro for the first year. Contact sales to apply.' },
  { q: 'Can I get a refund?', a: 'We offer a 30-day money-back guarantee on all paid plans. No questions asked.' },
  { q: 'How does Enterprise pricing work?', a: 'Enterprise pricing is customized based on usage volume, support requirements, and infrastructure needs. Contact sales for a tailored quote.' },
  { q: 'Is my data used for training?', a: 'Never. On all plans, your inputs and outputs are never used to train our models. Pro and Enterprise plans include a zero data retention option.' },
];

/* ─── Cell renderer ─── */
function CellVal({ val }: { val: FeatureVal }) {
  if (val === true) return <Check className="h-4 w-4 text-brand-400 mx-auto" />;
  if (val === false) return <X className="h-4 w-4 text-surface-700 mx-auto" />;
  return <span className="text-sm text-surface-300 font-medium">{val}</span>;
}

/* ─── FAQ Item ─── */
function FAQItem({ faq, open, onToggle }: { faq: typeof faqs[0]; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-[14px] sm:text-[15px] font-medium text-surface-200 group-hover:text-white transition-colors pr-6">{faq.q}</span>
        <ChevronDown className={`h-4 w-4 text-surface-600 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-brand-400' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-surface-400 leading-relaxed pr-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page ─── */
export default function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const { ref: plansRef, isVisible: plansVisible } = useScrollReveal();
  const { ref: tableRef, isVisible: tableVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-600/[0.07] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-4 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <CreditCard className="h-3.5 w-3.5" />
              Pricing
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
              Start Free,{' '}
              <span className="text-gradient-main">Scale Infinitely</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-surface-400 leading-relaxed">
              Access the world's most capable AI model. No credit card required.
              Transparent pricing with no hidden fees.
            </p>

            {/* Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex justify-center"
            >
              <div className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] p-1">
                <button
                  onClick={() => setYearly(false)}
                  className={`relative rounded-full px-5 sm:px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                    !yearly ? 'bg-white text-surface-950 shadow-md' : 'text-surface-400 hover:text-surface-200'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`relative rounded-full px-5 sm:px-6 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    yearly ? 'bg-white text-surface-950 shadow-md' : 'text-surface-400 hover:text-surface-200'
                  }`}
                >
                  Annual
                  <span className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 transition-colors duration-300 ${
                    yearly ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-400/10 text-emerald-400'
                  }`}>
                    Save 20%
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PLANS ═══════════ */}
      <section ref={plansRef} className="py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                animate={plansVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-500 ${
                  plan.highlighted
                    ? 'border border-brand-500/20 bg-white/[0.03] glow-md ring-1 ring-brand-500/10 md:-mt-4 md:mb-4'
                    : 'border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.025]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-1 text-[11px] font-bold text-white shadow-lg shadow-brand-500/20">
                      <Sparkles className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-surface-500">{plan.description}</p>
                </div>

                <div className="mb-8">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-surface-500 text-base font-medium">/mo</span>
                      </div>
                      {plan.monthlyPrice > 0 && yearly && (
                        <p className="mt-1.5 text-xs text-surface-600">
                          Billed ${plan.yearlyPrice! * 12}/year · <span className="text-emerald-400">Save ${(plan.monthlyPrice - plan.yearlyPrice!) * 12}/yr</span>
                        </p>
                      )}
                      {plan.monthlyPrice === 0 && (
                        <p className="mt-1.5 text-xs text-surface-600">Free forever — no credit card</p>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Custom</div>
                      <p className="mt-1.5 text-xs text-surface-600">Tailored to your organization</p>
                    </>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.highlighted ? 'text-brand-400' : 'text-surface-600'}`} />
                      <span className="text-[13px] text-surface-300 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`group flex items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-white text-surface-950 hover:bg-surface-100 shadow-lg shadow-white/[0.05]'
                      : 'border border-white/10 text-surface-300 hover:text-white hover:bg-white/[0.04] hover:border-white/15'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={plansVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-surface-600"
          >
            <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-surface-500" /> 30-day money-back guarantee</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-surface-500" /> No credit card for free tier</span>
            <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-surface-500" /> Cancel anytime</span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURE COMPARISON ═══════════ */}
      <section ref={tableRef} className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={tableVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Compare <span className="text-gradient-accent">Plans</span>
            </h2>
            <p className="mt-4 text-surface-400">Every feature, side by side.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={tableVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden overflow-x-auto"
          >
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px_100px] sm:grid-cols-[1fr_140px_140px_140px] px-5 py-4 border-b border-white/[0.06] bg-white/[0.02] sticky top-0 min-w-[500px]">
              <span />
              <span className="text-center text-sm font-semibold text-surface-400">Explorer</span>
              <span className="text-center text-sm font-bold text-brand-300">Pro</span>
              <span className="text-center text-sm font-semibold text-surface-400">Enterprise</span>
            </div>

            {/* Categories */}
            {comparisonCategories.map((cat) => (
              <div key={cat.category}>
                <div className="px-5 py-3 bg-white/[0.015] border-b border-white/[0.04] min-w-[500px]">
                  <span className="text-xs font-bold text-surface-500 uppercase tracking-wider">{cat.category}</span>
                </div>
                {cat.rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-[1fr_100px_100px_100px] sm:grid-cols-[1fr_140px_140px_140px] px-5 py-3 min-w-[500px] ${
                      i < cat.rows.length - 1 ? 'border-b border-white/[0.02]' : 'border-b border-white/[0.04]'
                    } hover:bg-white/[0.01] transition-colors`}
                  >
                    <span className="text-sm text-surface-300">{row.feature}</span>
                    <div className="text-center"><CellVal val={row.explorer} /></div>
                    <div className="text-center"><CellVal val={row.pro} /></div>
                    <div className="text-center"><CellVal val={row.enterprise} /></div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ENTERPRISE ═══════════ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-brand-500/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-5">
                <Building2 className="h-3.5 w-3.5" />
                Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Built for Organizations at <span className="text-gradient-accent">Scale</span>
              </h2>
              <p className="mt-5 text-lg text-surface-400 leading-relaxed">
                Custom infrastructure, dedicated support, and enterprise-grade security
                for teams that demand the best.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Shield, text: 'SSO, SAML, HIPAA, and SOC 2 compliance' },
                  { icon: Zap, text: 'Dedicated infrastructure with custom SLAs' },
                  { icon: Users, text: 'Unlimited team members with RBAC' },
                  { icon: Globe, text: 'Data residency in US, EU, or Asia-Pacific' },
                  { icon: MessageSquare, text: '24/7 dedicated support with account manager' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-brand-500/[0.08] border border-brand-500/[0.1] flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-brand-400" />
                    </div>
                    <span className="text-surface-300">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
                >
                  Contact Sales
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '<1hr', label: 'Support Response' },
                { value: 'SOC 2', label: 'Type II Certified' },
                { value: '40+', label: 'Edge Regions' },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02] text-center">
                  <div className="text-2xl font-bold text-gradient-accent">{stat.value}</div>
                  <div className="text-xs text-surface-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Frequently Asked <span className="text-gradient-accent">Questions</span>
            </h2>
          </motion.div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] px-5 sm:px-7">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                open={faqOpen === i}
                onToggle={() => setFaqOpen(faqOpen === i ? null : i)}
              />
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

            <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="mt-5 text-lg text-brand-100/60 max-w-xl mx-auto">
                Be one of the first to build with ShivanshAI-1.1.
                Start free — upgrade when you're ready.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Start Building Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
