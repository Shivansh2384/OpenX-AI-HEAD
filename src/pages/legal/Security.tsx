import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  Bug,
  KeyRound,
  Database,
  Globe,
  Clock3,
  CheckCircle2,
  Mail,
  Layers,
  Fingerprint,
  AlertTriangle,
  Network,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const securityStats = [
  { value: 'AES-256', label: 'Encryption at Rest', detail: 'All stored data encrypted' },
  { value: 'TLS 1.3', label: 'Encryption in Transit', detail: 'Secure network transport' },
  { value: '99.99%', label: 'Enterprise SLA', detail: 'High-availability infrastructure' },
  { value: '24/7', label: 'Monitoring', detail: 'Automated alerting and response' },
];

const pillars = [
  {
    icon: Lock,
    title: 'Encryption Everywhere',
    description:
      'Data is encrypted at rest with AES-256 and in transit with TLS 1.3. Secrets are stored in managed secret stores with strict access boundaries.',
  },
  {
    icon: KeyRound,
    title: 'Least-Privilege Access',
    description:
      'Internal systems follow role-based access control, scoped credentials, and need-to-know access policies. Sensitive actions are logged and reviewable.',
  },
  {
    icon: Fingerprint,
    title: 'Zero-Retention Options',
    description:
      'Pro and Enterprise workflows can be configured for zero-retention processing so prompts and outputs are deleted immediately after completion.',
  },
  {
    icon: Server,
    title: 'Isolated Infrastructure',
    description:
      'Critical workloads are isolated, segmented, and monitored continuously. Enterprise deployments can use dedicated infrastructure and regional controls.',
  },
  {
    icon: Eye,
    title: 'Continuous Monitoring',
    description:
      'Security telemetry, anomaly detection, audit trails, and uptime monitoring run continuously with alerting for unusual activity or service degradation.',
  },
  {
    icon: Shield,
    title: 'Defense in Depth',
    description:
      'Security is applied in layers: authentication, encryption, access control, runtime protections, abuse prevention, and incident response procedures.',
  },
];

const controls = [
  {
    category: 'Application Security',
    items: [
      'Static analysis and dependency scanning in CI',
      'Environment separation for development, staging, and production',
      'Secrets never committed to source control',
      'Input validation and output controls on critical surfaces',
    ],
  },
  {
    category: 'Infrastructure Security',
    items: [
      'Managed cloud infrastructure with hardened configurations',
      'Network segmentation and private service communication where applicable',
      'Encrypted backups and disaster recovery procedures',
      'Automated infrastructure auditing and baseline enforcement',
    ],
  },
  {
    category: 'Operational Security',
    items: [
      'Access reviews and credential rotation processes',
      'Comprehensive audit logging for admin actions',
      'Documented incident response and recovery playbooks',
      'Least-privilege access for tooling and operational systems',
    ],
  },
  {
    category: 'AI-Specific Safety & Abuse Prevention',
    items: [
      'Rate limiting, abuse monitoring, and anomaly detection',
      'Prompt misuse and unsafe output detection layers',
      'Safety evaluations before major model releases',
      'Review loops for harmful-output edge cases',
    ],
  },
];

const complianceItems = [
  {
    title: 'SOC 2 Type II Aligned Controls',
    description:
      'Operational, access, logging, and change-management controls designed to support enterprise-grade security expectations.',
  },
  {
    title: 'GDPR & CCPA Conscious Data Handling',
    description:
      'Privacy practices designed around user rights, data minimization, deletion/export workflows, and transparent policy documentation.',
  },
  {
    title: 'HIPAA-Oriented Enterprise Workflows',
    description:
      'Available only for appropriate enterprise configurations and subject to implementation scope, controls, and contractual review.',
  },
  {
    title: 'Regional Processing & Residency Options',
    description:
      'Enterprise customers can request regional deployment constraints and infrastructure planning based on regulatory needs.',
  },
];

const lifecycle = [
  {
    step: '1',
    title: 'Design Review',
    description:
      'Security considerations are evaluated during product and infrastructure design — before features are built.',
  },
  {
    step: '2',
    title: 'Build & Validate',
    description:
      'Code is reviewed, scanned, and tested. Sensitive integrations receive additional scrutiny before release.',
  },
  {
    step: '3',
    title: 'Deploy Carefully',
    description:
      'Releases are rolled out with observability, staged environments, and rollback paths for reliability and safety.',
  },
  {
    step: '4',
    title: 'Monitor & Improve',
    description:
      'Runtime monitoring, incident reviews, and community reports continuously feed security improvements back into the platform.',
  },
];

const disclosureItems = [
  'Clear reproduction steps and impact summary',
  'Affected endpoint, flow, or environment',
  'Screenshots, logs, request IDs, or proof-of-concept where relevant',
  'Your preferred contact information for follow-up',
];

export default function Security() {
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
              <Shield className="h-3 w-3" /> Security
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Security at{' '}
              <span className="text-gradient-main">OpenX</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Security is foundational to OpenX — from encryption and access control to monitoring, privacy, and responsible disclosure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-surface-500">
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" /> Continuous monitoring</span>
              <span className="inline-flex items-center gap-1.5"><Shield className="h-4 w-4" /> Defense in depth</span>
              <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4" /> Enterprise-ready controls</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-14 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {securityStats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.015] text-center">
                <div className="text-xl sm:text-2xl font-bold text-gradient-accent">{stat.value}</div>
                <div className="text-xs text-surface-300 mt-1 font-medium">{stat.label}</div>
                <div className="text-[10px] text-surface-600 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Security Principles</h2>
            <p className="mt-3 text-surface-400 max-w-2xl mx-auto">Practical controls, layered safeguards, and a design philosophy built around minimizing risk.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center mb-4">
                  <pillar.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLS + COMPLIANCE */}
      <section ref={contentRef} className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Layers className="h-5 w-5 text-brand-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Security Controls</h2>
              </div>

              {controls.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{group.category}</h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-surface-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="h-5 w-5 text-brand-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Compliance & Governance</h2>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 space-y-4">
                {complianceItems.map((item) => (
                  <div key={item.title} className="pb-4 border-b border-white/[0.04] last:border-0 last:pb-0">
                    <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-sm text-surface-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-brand-500/12 bg-brand-500/[0.025] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-brand-400" />
                  <h3 className="text-lg font-semibold text-white">Data Handling Defaults</h3>
                </div>
                <div className="space-y-3 text-sm text-surface-400">
                  <div className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> Prompts are not used for model training unless explicitly opted in.</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> Enterprise workflows can request stricter retention and processing controls.</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> Privacy policy and responsible AI materials document the broader data handling model.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Secure Development Lifecycle</h2>
            <p className="mt-3 text-surface-400 max-w-2xl mx-auto">Security is integrated into how OpenX designs, builds, deploys, and improves the platform.</p>
          </motion.div>

          <div className="space-y-5">
            {lifecycle.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 sm:gap-5"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="h-9 w-9 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-sm font-bold text-brand-300">
                    {step.step}
                  </div>
                  {i < lifecycle.length - 1 && <div className="w-px flex-1 bg-white/[0.06] mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-surface-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLOSURE */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Bug className="h-5 w-5 text-brand-400" />
                <h2 className="text-xl font-bold text-white">Responsible Disclosure</h2>
              </div>
              <p className="text-sm text-surface-400 leading-relaxed mb-5">
                If you discover a vulnerability or security concern, please report it responsibly so it can be investigated and addressed quickly.
              </p>
              <ul className="space-y-2.5 mb-6">
                {disclosureItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-surface-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:security@openx.ai" className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                <Mail className="h-4 w-4" /> security@openx.ai
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <h2 className="text-xl font-bold text-white">Please Do Not</h2>
              </div>
              <ul className="space-y-3 text-sm text-surface-400 leading-relaxed">
                <li>• Access or modify data that doesn’t belong to you.</li>
                <li>• Perform destructive testing against live systems.</li>
                <li>• Disrupt service availability or degrade the platform for users.</li>
                <li>• Publicly disclose unresolved issues before coordinated remediation.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

            <div className="relative z-10 px-8 sm:px-16 py-14 sm:py-18 text-center">
              <Network className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Need More Detail?
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-2xl mx-auto">
                For privacy, responsible AI, or enterprise security questions, explore the related materials or reach out directly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/privacy" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/responsible-ai" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors">
                  Responsible AI
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
