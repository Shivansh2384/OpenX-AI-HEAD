import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sparkles,
  Brain,
  Server,
  Shield,
  PenTool,
  Code2,
  FileText,
  Check,
  ChevronDown,
  Rocket,
  Globe,
  Zap,
  Lightbulb,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
  level: string;
  icon: typeof Brain;
  summary: string;
  bullets: string[];
  salary?: string;
};

const roles: Role[] = [
  {
    title: 'Founding ML Research Engineer',
    team: 'Research',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior / Staff',
    icon: Brain,
    summary: 'Work directly on model architecture, training systems, evals, and applied research for future ShivanshAI releases.',
    bullets: [
      'Prototype and validate new model architecture ideas',
      'Build evaluation harnesses and benchmark tooling',
      'Improve reasoning, coding, and agentic performance',
      'Collaborate directly with the founder on roadmap priorities',
    ],
    salary: '$180K–$260K + equity',
  },
  {
    title: 'Founding Infrastructure Engineer',
    team: 'Platform',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior / Staff',
    icon: Server,
    summary: 'Own inference infrastructure, observability, scaling, and reliability across the OpenX platform.',
    bullets: [
      'Scale inference and streaming systems globally',
      'Reduce latency, improve uptime, and optimize cost',
      'Build monitoring, incident response, and deployment systems',
      'Design platform architecture for millions of requests/day',
    ],
    salary: '$170K–$250K + equity',
  },
  {
    title: 'Founding AI Safety Engineer',
    team: 'Safety',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior',
    icon: Shield,
    summary: 'Build the systems that keep ShivanshAI safe, useful, and aligned at scale.',
    bullets: [
      'Design adversarial evaluations and red-team workflows',
      'Improve refusal quality without reducing helpfulness',
      'Build runtime safeguards and monitoring systems',
      'Contribute to safety reporting and incident processes',
    ],
    salary: '$160K–$230K + equity',
  },
  {
    title: 'Founding Product Designer',
    team: 'Design',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior',
    icon: PenTool,
    summary: 'Design the future of how people interact with advanced AI across product, docs, and brand.',
    bullets: [
      'Own end-to-end product design across the platform',
      'Craft intuitive UX for complex AI workflows',
      'Build and maintain a scalable design system',
      'Collaborate closely with engineering and founder on execution',
    ],
    salary: '$150K–$220K + equity',
  },
  {
    title: 'Founding Full-Stack Engineer',
    team: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior',
    icon: Code2,
    summary: 'Ship across the stack — API surfaces, dashboard, billing flows, admin systems, and developer tools.',
    bullets: [
      'Build product features from backend to frontend',
      'Improve dashboard performance and developer UX',
      'Own critical systems with high autonomy',
      'Help establish engineering standards from day one',
    ],
    salary: '$160K–$230K + equity',
  },
  {
    title: 'Technical Writer / Developer Education',
    team: 'Developer Experience',
    location: 'Remote / Contract',
    type: 'Full-time or Contract',
    level: 'Mid / Senior',
    icon: FileText,
    summary: 'Turn powerful APIs and research into exceptional developer education.',
    bullets: [
      'Write docs, guides, tutorials, and API examples',
      'Create content that helps developers succeed fast',
      'Own clarity, structure, and voice across docs',
      'Bridge research, product, and developer experience',
    ],
    salary: '$90K–$170K + equity/contract',
  },
];

const perks = [
  'Meaningful equity from the ground floor',
  'Remote-first with flexible hours',
  'High ownership and direct founder collaboration',
  'Minimal meetings, maximum building time',
  'Hardware + home office stipend',
  'Learning budget for books, courses, and conferences',
  'Open vacation policy',
  'Work on frontier AI, not incremental features',
];

const principles = [
  {
    icon: Rocket,
    title: 'Ground Floor Impact',
    description: 'You won’t be employee #500 optimizing a button. You’ll help define the company, product, systems, and culture from the beginning.',
  },
  {
    icon: Lightbulb,
    title: 'Taste Over Bureaucracy',
    description: 'I care deeply about craft, speed, and sharp thinking. Fewer layers. Faster iteration. Better decisions.',
  },
  {
    icon: Zap,
    title: 'High Trust, High Ownership',
    description: 'You’ll have real autonomy. No micromanagement, no bloated process — just ambitious goals and responsibility.',
  },
  {
    icon: Globe,
    title: 'Build for the World',
    description: 'OpenX already serves developers in 40+ countries. The things you ship will matter immediately and globally.',
  },
];

const processSteps = [
  {
    title: 'Initial Conversation',
    duration: '30–45 min',
    description: 'A focused conversation with Shivansh Rai about your background, interests, and what you want to build.',
  },
  {
    title: 'Practical Exercise',
    duration: '2–4 hrs async',
    description: 'A real-world task relevant to the role — no contrived puzzles, no whiteboard theater.',
  },
  {
    title: 'Deep Dive Interview',
    duration: '60–90 min',
    description: 'Walk through your exercise, discuss tradeoffs, and explore how you think about difficult problems.',
  },
  {
    title: 'Offer & Alignment',
    duration: 'Fast turnaround',
    description: 'If there’s mutual fit, we move quickly. Transparent comp, role scope, and expectations from day one.',
  },
];

const faqs = [
  {
    q: 'Is OpenX really solo-founded?',
    a: 'Yes. OpenX was founded and built by Shivansh Rai. These roles are for the first core hires joining at a genuinely early stage.',
  },
  {
    q: 'Do I need prior AI experience?',
    a: 'Not always. For research and safety roles, strong AI/ML experience matters. For engineering, design, and writing roles, exceptional fundamentals and speed of learning matter more than pedigree.',
  },
  {
    q: 'Is remote work supported?',
    a: 'Yes. OpenX is remote-first. Clear written communication, autonomy, and deep work are more important than location.',
  },
  {
    q: 'What kind of people thrive here?',
    a: 'People who like ambiguity, move fast, think independently, and care about doing exceptional work. If you want a large-company environment, this probably isn’t the right fit.',
  },
  {
    q: 'How fast is the hiring process?',
    a: 'Typically 1–2 weeks from first conversation to decision, depending on scheduling. I prefer moving quickly and transparently.',
  },
];

function FAQItem({ faq, open, onToggle }: { faq: typeof faqs[number]; open: boolean; onToggle: () => void }) {
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

export default function Careers() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: rolesRef, isVisible: rolesVisible } = useScrollReveal();

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
              <Sparkles className="h-3 w-3" /> Careers
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Join at the{' '}
              <span className="text-gradient-main">Ground Floor</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              I'm <span className="text-surface-200 font-medium">Shivansh Rai</span>, 13 years old, and I just launched OpenX today with $0 funding.
              I’m looking for a small number of exceptional founding hires to help build the future of AI — fast, thoughtfully, and with real ownership.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#open-roles" className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors">
                View Open Roles <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-surface-300 hover:text-white hover:border-white/20 transition-all">
                About OpenX
              </Link>
            </div>
          </motion.div>

          {/* quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { value: '13', label: 'Years Old' },
              { value: '6', label: 'Open Roles' },
              { value: '$0', label: 'Funding Raised' },
              { value: 'Today', label: 'Just Launched' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                <div className="text-xl sm:text-2xl font-bold text-gradient-accent">{s.value}</div>
                <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Why join <span className="text-gradient-accent">now</span>?
              </h2>
              <p className="text-surface-400 leading-relaxed mb-4">
                OpenX isn’t a giant company with layers of management, committees, and slow decisions.
                It’s a focused effort to build something world-class — and that means early hires get real leverage.
              </p>
              <p className="text-surface-400 leading-relaxed mb-4">
                If you join now, you won’t just contribute to a product. You’ll help shape the architecture,
                the workflows, the standards, and the direction of the entire company.
              </p>
              <p className="text-surface-400 leading-relaxed">
                I care deeply about hiring people who want <span className="text-surface-200 font-medium">ownership, craft, speed, and impact</span>.
                If that sounds like you, I’d love to talk.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015]"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center mb-4">
                    <p.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04] bg-white/[0.01]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Why people join early</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]"
              >
                <Check className="h-4 w-4 text-brand-400 shrink-0" />
                <span className="text-sm text-surface-300">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" ref={rolesRef} className="py-20 sm:py-28 border-t border-white/[0.04] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={rolesVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Open <span className="text-gradient-accent">Roles</span>
            </h2>
            <p className="mt-4 text-surface-400 max-w-2xl mx-auto">
              These are foundational roles. I’m looking for people who want to help build the company — not just fill a job description.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={rolesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.06 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden hover:border-white/[0.1] hover:bg-white/[0.025] transition-all duration-300"
              >
                <div className="px-5 sm:px-6 py-5 border-b border-white/[0.04] bg-white/[0.01]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="h-11 w-11 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center shrink-0">
                        <role.icon className="h-5 w-5 text-brand-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-white group-hover:text-brand-300 transition-colors leading-snug">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-surface-500">
                          <span>{role.team}</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {role.location}</span>
                          <span>{role.type}</span>
                          <span>{role.level}</span>
                        </div>
                      </div>
                    </div>
                    {role.salary && (
                      <span className="text-[11px] font-medium text-brand-300 bg-brand-500/[0.06] border border-brand-500/[0.12] px-2.5 py-1 rounded-full shrink-0">
                        {role.salary}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm text-surface-400 leading-relaxed mb-5">{role.summary}</p>
                  <ul className="space-y-2.5 mb-6">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-surface-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    Apply for this role <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">Hiring Process</h2>
          <div className="space-y-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 sm:gap-5"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="h-9 w-9 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-sm font-bold text-brand-300">
                    {i + 1}
                  </div>
                  {i < processSteps.length - 1 && <div className="w-px flex-1 bg-white/[0.06] mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 flex-wrap mb-1.5">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <span className="text-[10px] font-mono text-surface-500 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">{step.duration}</span>
                  </div>
                  <p className="text-sm text-surface-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Hiring FAQ</h2>
          </motion.div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] px-5 sm:px-7">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} open={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
            ))}
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
              <Sparkles className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Want to Build Something That Matters?
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-2xl mx-auto">
                If you care about capability, safety, speed, and real ownership — and you want to join at a genuinely early stage — let’s talk.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Read the Story
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
