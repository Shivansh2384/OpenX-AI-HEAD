import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  FileText,
  Shield,
  CreditCard,
  Ban,
  Scale,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Globe,
  Gavel,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using OpenX, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform, APIs, or related services. These terms form a legal agreement between you and OpenX.',
    bullets: [
      'Applies to the OpenX web app, API, SDKs, and related services',
      'Use of the platform constitutes acceptance of these terms',
      'You must be legally able to enter into a binding agreement',
    ],
  },
  {
    title: '2. Description of Service',
    body: 'OpenX provides access to ShivanshAI-1.1 and related tools through hosted interfaces, APIs, SDKs, and supporting infrastructure. Service capabilities, availability, and limits may vary by plan or region.',
    bullets: [
      'AI chat, API, SDKs, documentation, and supporting tools',
      'Some features may be gated by plan, usage, or availability',
      'We may improve, modify, or discontinue features over time',
    ],
  },
  {
    title: '3. Account Registration & Security',
    body: 'You are responsible for maintaining the confidentiality of your account credentials and API keys. You agree to provide accurate information and update it if it changes.',
    bullets: [
      'Keep your login credentials and API keys secure',
      'You are responsible for activity under your account',
      'Notify OpenX immediately of any unauthorized access',
    ],
  },
  {
    title: '4. Acceptable Use',
    body: 'You may not use OpenX in ways that are illegal, abusive, deceptive, harmful, or that violate the rights of others. You may not attempt to bypass platform safeguards or misuse the infrastructure.',
    bullets: [
      'No unlawful, harmful, or malicious use',
      'No harassment, threats, exploitation, or abuse',
      'No attempts to reverse-engineer, overload, or disrupt the service',
      'No attempts to bypass safety systems, rate limits, or access controls',
    ],
  },
  {
    title: '5. Intellectual Property',
    body: 'You retain ownership of your inputs and, subject to applicable law, your outputs. OpenX retains all rights to the platform, models, infrastructure, design, branding, and associated intellectual property.',
    bullets: [
      'You own the content you submit, subject to these terms',
      'OpenX owns its models, systems, brand, and software',
      'You may not copy, resell, or sublicense the platform without permission',
    ],
  },
  {
    title: '6. Payments, Billing & Refunds',
    body: 'Paid plans are billed monthly or annually in USD unless otherwise stated. Prices may change with advance notice. If applicable, refunds are subject to the refund policy or written agreement.',
    bullets: [
      'Subscriptions renew automatically unless canceled',
      'You are responsible for taxes where applicable',
      '30-day refund window applies unless otherwise stated',
    ],
  },
  {
    title: '7. Service Availability',
    body: 'We aim for high availability and reliability, but the service is provided on an “as available” basis. Scheduled maintenance, outages, regional disruptions, or third-party failures may affect availability.',
    bullets: [
      'No guarantee of uninterrupted or error-free service',
      'Enterprise customers may receive separate SLA commitments',
      'We may perform scheduled maintenance with notice where practical',
    ],
  },
  {
    title: '8. Limitation of Liability',
    body: 'To the maximum extent permitted by law, OpenX is not liable for indirect, incidental, special, consequential, or exemplary damages. Our total liability is limited to amounts paid by you in the 12 months before the claim.',
    bullets: [
      'Use of the service is at your own risk',
      'No liability for downstream use of model outputs',
      'Total liability capped at fees paid in the preceding 12 months',
    ],
  },
  {
    title: '9. Suspension & Termination',
    body: 'We may suspend or terminate access if you violate these terms, create risk to users or the platform, or misuse the service. You may stop using OpenX at any time.',
    bullets: [
      'OpenX may suspend access for abuse, fraud, or policy violations',
      'Users may cancel or close accounts at any time',
      'Post-termination data handling follows the Privacy Policy',
    ],
  },
  {
    title: '10. Changes to Terms',
    body: 'We may update these terms from time to time. Material changes will be communicated through reasonable means such as email, dashboard notices, or updated legal pages.',
    bullets: [
      'Continued use after updates constitutes acceptance',
      'Material changes receive advance notice when practical',
      'The latest version is always available on this page',
    ],
  },
];

const highlights = [
  { icon: Shield, title: 'Use responsibly', text: 'Don’t misuse the platform or attempt to bypass safeguards.' },
  { icon: CreditCard, title: 'Billing is transparent', text: 'Subscriptions renew automatically and can be canceled anytime.' },
  { icon: Scale, title: 'You own your inputs', text: 'OpenX owns the platform; you retain rights to your submitted content.' },
  { icon: Clock3, title: 'Terms may change', text: 'We’ll update this page and provide notice for material changes.' },
];

const prohibited = [
  'Illegal activity or content',
  'Abuse, harassment, threats, or exploitation',
  'Unauthorized scraping that harms platform integrity',
  'Attempts to reverse-engineer proprietary systems',
  'Circumventing rate limits, access controls, or safety systems',
  'Reselling or redistributing platform access without permission',
];

export default function Terms() {
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
              <Gavel className="h-3 w-3" /> Legal · Terms
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Terms of{' '}
              <span className="text-gradient-main">Service</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              These terms govern your access to and use of OpenX, including the platform, APIs, SDKs, and related services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-surface-500">
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" /> Last updated: January 15, 2026</span>
              <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4" /> Applies globally unless overridden by contract</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="py-10 sm:py-14 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
              >
                <item.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROHIBITED USE */}
      <section className="py-12 sm:py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Prohibited Uses</h2>
            </div>
            <p className="text-sm text-surface-400 leading-relaxed mb-5">
              To protect users, infrastructure, and the integrity of the platform, the following uses are not allowed:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {prohibited.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-surface-400">
                  <Ban className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
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
                <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Key takeaways</h3>
                <div className="space-y-3 text-sm text-surface-400">
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Use the service lawfully and responsibly</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Protect your account and API credentials</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Billing renews automatically unless canceled</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> OpenX may suspend misuse or abuse</div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-3">Related policies</h4>
                  <div className="space-y-2">
                    <Link to="/privacy" className="block text-sm text-brand-400 hover:text-brand-300 transition-colors">Privacy Policy</Link>
                    <Link to="/security" className="block text-sm text-brand-400 hover:text-brand-300 transition-colors">Security</Link>
                    <Link to="/responsible-ai" className="block text-sm text-brand-400 hover:text-brand-300 transition-colors">Responsible AI</Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-3">Questions?</h4>
                  <a href="mailto:hello@openx.ai" className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors">
                    <Mail className="h-4 w-4" /> hello@openx.ai
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
              <h3 className="text-xl font-bold text-white mb-3">Questions About These Terms?</h3>
              <p className="text-sm text-surface-400 leading-relaxed mb-5">
                For questions about legal terms, account obligations, enterprise agreements, or billing terms, contact OpenX directly.
              </p>
              <div className="space-y-2 text-sm text-surface-300">
                <div><span className="text-surface-500">General:</span> hello@openx.ai</div>
                <div><span className="text-surface-500">Support:</span> support@openx.ai</div>
                <div><span className="text-surface-500">Sales:</span> sales@openx.ai</div>
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
                <FileText className="h-6 w-6 text-brand-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Need the Related Policies?</h3>
                <p className="text-sm text-brand-100/55 leading-relaxed mb-6">
                  Read the Privacy Policy, Security page, and Responsible AI materials for the full context around how OpenX operates.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/privacy" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/security" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                    Security
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
