import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  CheckCircle2,
  FileText,
  Clock3,
  Fingerprint,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect information you provide directly, such as account details, prompts, feedback, billing details, and communications with OpenX. We also collect limited technical information automatically, including device/browser metadata, IP address, and usage diagnostics needed to keep the service reliable and secure.',
    bullets: [
      'Account information: name, email address, authentication details',
      'Usage data: prompts, outputs, logs, and performance diagnostics',
      'Billing information: processed securely by third-party payment providers',
      'Support interactions: emails, bug reports, and feature requests',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use your data to operate the service, secure the platform, improve reliability, provide support, process billing, and communicate product updates. We do not use your prompts or outputs to train our models unless you explicitly opt in.',
    bullets: [
      'Deliver model responses and API functionality',
      'Detect abuse, fraud, and security threats',
      'Improve latency, uptime, and product reliability',
      'Provide customer support and service notifications',
    ],
  },
  {
    title: '3. Data Sharing',
    body: 'We do not sell personal data. We share data only with service providers necessary to operate the platform, when legally required, or with your explicit consent.',
    bullets: [
      'Cloud and infrastructure providers',
      'Payment processors for billing transactions',
      'Security and fraud-prevention tools',
      'Legal disclosures where required by law',
    ],
  },
  {
    title: '4. Data Retention',
    body: 'Retention depends on your plan and configuration. Free and standard plans may retain logs for reliability and abuse prevention. Pro and Enterprise plans can enable zero-retention mode, where prompts and outputs are deleted immediately after processing.',
    bullets: [
      'Free tier: limited retention for service improvement and abuse prevention',
      'Pro / Enterprise: optional zero-retention mode',
      'Account data retained until deletion request or account closure',
      'Billing records retained as required for tax and compliance purposes',
    ],
  },
  {
    title: '5. Security',
    body: 'We use layered security controls including encryption at rest and in transit, access restrictions, infrastructure isolation, logging, alerting, and regular third-party assessments. Security is built into the design of the platform, not bolted on later.',
    bullets: [
      'AES-256 encryption at rest',
      'TLS 1.3 encryption in transit',
      'SOC 2 Type II aligned controls',
      'Zero-knowledge options for enterprise workflows',
    ],
  },
  {
    title: '6. Your Rights',
    body: 'Depending on your jurisdiction, you may have the right to access, correct, delete, restrict, or export your personal data. You may also object to certain processing and withdraw consent where applicable.',
    bullets: [
      'Request access to your stored personal data',
      'Request correction or deletion',
      'Export your account data',
      'Opt out of non-essential communications',
    ],
  },
  {
    title: '7. International Transfers',
    body: 'OpenX serves users globally. Data may be processed in the United States and other regions where our infrastructure providers operate. Enterprise customers may request regional processing and data residency options where available.',
    bullets: [
      'Support for regional deployment preferences',
      'Data residency options on enterprise plans',
      'GDPR- and CCPA-conscious processing practices',
    ],
  },
  {
    title: '8. Contact',
    body: 'If you have privacy-related questions, requests, or concerns, contact us directly. We review privacy requests carefully and respond as quickly as possible.',
    bullets: [
      'Privacy contact: privacy@openx.ai',
      'General support: support@openx.ai',
      'Security matters: security@openx.ai',
    ],
  },
];

const quickFacts = [
  { icon: Fingerprint, title: 'No training on your prompts', text: 'Your prompts and outputs are not used for training unless you explicitly opt in.' },
  { icon: Lock, title: 'Encryption by default', text: 'All traffic is encrypted in transit, and stored data is encrypted at rest.' },
  { icon: Database, title: 'Zero-retention available', text: 'Pro and Enterprise customers can enable zero-retention workflows.' },
  { icon: Globe, title: 'Global with controls', text: 'Enterprise customers can request regional processing and residency options.' },
];

const rights = [
  'Access your data',
  'Correct inaccurate information',
  'Delete your data',
  'Export your account data',
  'Withdraw consent where applicable',
  'Object to certain processing',
];

export default function Privacy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

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
              <Shield className="h-3 w-3" /> Legal · Privacy
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Privacy{' '}
              <span className="text-gradient-main">Policy</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Your data belongs to you. This policy explains what OpenX collects, how it’s used,
              and the controls available to you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-surface-500">
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" /> Last updated: January 15, 2026</span>
              <span className="inline-flex items-center gap-1.5"><FileText className="h-4 w-4" /> Applies to web app, API, and SDKs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="py-10 sm:py-14 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, i) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 16 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
              >
                <fact.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section ref={contentRef} className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-10">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              className="space-y-5"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">At a glance</h3>
                <div className="space-y-3 text-sm text-surface-400">
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> No training on prompts by default</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Zero-retention option available</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Export and deletion requests supported</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Encryption in transit and at rest</div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-3">Your rights</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {rights.map((r) => (
                      <div key={r} className="text-sm text-surface-500 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-3">Need help?</h4>
                  <a href="mailto:privacy@openx.ai" className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors">
                    <Mail className="h-4 w-4" /> privacy@openx.ai
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, i) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.05 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-7"
                >
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-sm text-surface-400 leading-relaxed mb-4">{section.body}</p>
                  <ul className="space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-surface-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + CTA */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <Mail className="h-6 w-6 text-brand-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Privacy Requests</h3>
              <p className="text-sm text-surface-400 leading-relaxed mb-5">
                To request access, deletion, export, or correction of your data, email the privacy inbox directly.
              </p>
              <div className="space-y-2 text-sm text-surface-300">
                <div><span className="text-surface-500">Email:</span> privacy@openx.ai</div>
                <div><span className="text-surface-500">Support:</span> support@openx.ai</div>
                <div><span className="text-surface-500">Security:</span> security@openx.ai</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
              <div className="absolute inset-0 bg-dot-grid opacity-20" />
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center">
                <Eye className="h-6 w-6 text-brand-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Need More Detail?</h3>
                <p className="text-sm text-brand-100/55 leading-relaxed mb-6">
                  Review our Security page and Responsible AI materials for a deeper look at how OpenX protects users and data.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/security" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
                    Security
                  </Link>
                  <Link to="/responsible-ai" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                    Responsible AI
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
