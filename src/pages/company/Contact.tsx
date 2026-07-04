import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Building2,
  Send,
  Clock3,
  Shield,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Copy,
  Check,
  Globe,
  FileText,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type InquiryType = 'general' | 'sales' | 'support' | 'press' | 'partnership';

type ContactCard = {
  icon: typeof Mail;
  title: string;
  value: string;
  description: string;
  response: string;
  type: InquiryType;
};

const contacts: ContactCard[] = [
  {
    icon: Mail,
    title: 'General Inquiries',
    value: 'hello@openx.ai',
    description: 'Questions about OpenX, ShivanshAI-1.1, product direction, or anything else.',
    response: 'Usually within 24–48 hours',
    type: 'general',
  },
  {
    icon: Building2,
    title: 'Enterprise Sales',
    value: 'sales@openx.ai',
    description: 'Custom plans, large-scale deployments, security reviews, or dedicated infrastructure.',
    response: 'Usually within 24 hours',
    type: 'sales',
  },
  {
    icon: MessageCircle,
    title: 'Technical Support',
    value: 'support@openx.ai',
    description: 'API issues, billing questions, account access, bugs, and troubleshooting.',
    response: 'Usually within 12–24 hours',
    type: 'support',
  },
  {
    icon: FileText,
    title: 'Press & Media',
    value: 'press@openx.ai',
    description: 'Interviews, podcast requests, commentary, media kits, and coverage inquiries.',
    response: 'Usually within 24 hours',
    type: 'press',
  },
];

const faqs = [
  {
    q: 'Who will reply to my message?',
    a: 'OpenX is founder-led, so many messages are reviewed directly by Shivansh Rai. Depending on the topic, replies may also come from the appropriate support or sales inbox.',
  },
  {
    q: 'What’s the fastest way to get technical help?',
    a: 'For API or account issues, emailing support@openx.ai is the fastest path. Include error messages, request IDs, and reproduction steps when possible.',
  },
  {
    q: 'Can I request a custom enterprise plan?',
    a: 'Yes. If you need higher limits, security reviews, dedicated infrastructure, or custom terms, contact sales@openx.ai and include your expected usage and requirements.',
  },
  {
    q: 'Do you accept partnership or collaboration requests?',
    a: 'Yes. Use the general inquiry form or email hello@openx.ai with the details of your collaboration idea, audience, and timeline.',
  },
];

function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setOk(true);
        setTimeout(() => setOk(false), 2000);
      }}
      className="p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
      title="Copy"
      type="button"
    >
      {ok ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-surface-500" />}
    </button>
  );
}

function FAQItem({
  faq,
  open,
  onToggle,
}: {
  faq: typeof faqs[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-[14px] sm:text-[15px] font-medium text-surface-200 group-hover:text-white transition-colors pr-6">{faq.q}</span>
        <span className={`text-surface-600 transition-transform duration-300 ${open ? 'rotate-45 text-brand-400' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-surface-400 leading-relaxed pr-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [selectedType, setSelectedType] = useState<InquiryType>('general');
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  const currentContact = contacts.find((c) => c.type === selectedType) ?? contacts[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.subject || `OpenX inquiry — ${selectedType}`;
    const body = [
      `Name: ${form.name || '—'}`,
      `Email: ${form.email || '—'}`,
      `Inquiry type: ${selectedType}`,
      '',
      form.message || '',
    ].join('\n');

    const mailto = `mailto:${currentContact.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

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
              <Sparkles className="h-3 w-3" /> Contact
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
              Get in{' '}
              <span className="text-gradient-main">Touch</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 leading-relaxed max-w-3xl">
              Questions, support, media, partnerships, or enterprise inquiries — if it matters to OpenX, it belongs here.
              Founder-led, direct, and fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-surface-500">
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" /> Response in 12–48 hours</span>
              <span className="inline-flex items-center gap-1.5"><Shield className="h-4 w-4" /> Founder-reviewed where relevant</span>
              <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4" /> Remote-first, worldwide</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT PATHS */}
      <section ref={cardsRef} className="py-10 sm:py-14 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Choose the Right Path</h2>
            <p className="mt-3 text-surface-400 max-w-2xl mx-auto">
              Pick the inbox that matches your need for the fastest, most relevant response.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {contacts.map((c, i) => (
              <motion.button
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 + i * 0.05 }}
                onClick={() => setSelectedType(c.type)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selectedType === c.type
                    ? 'border-brand-500/25 bg-brand-500/[0.05]'
                    : 'border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08]'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-500/[0.08] border border-brand-500/[0.12] flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <span className="text-[10px] font-medium text-surface-600 whitespace-nowrap">{c.response}</span>
                </div>
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-brand-300 mt-1 break-all">{c.value}</p>
                <p className="text-xs text-surface-500 mt-2 leading-relaxed">{c.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 lg:gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8"
            >
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h2>
                <p className="mt-2 text-sm text-surface-500">
                  This form opens your email client and drafts a message to the correct inbox.
                </p>
              </div>

              {/* Type selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">
                  Inquiry Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {contacts.map((c) => (
                    <button
                      key={c.type}
                      type="button"
                      onClick={() => setSelectedType(c.type)}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedType === c.type
                          ? 'bg-white text-surface-950'
                          : 'text-surface-500 hover:text-surface-200 hover:bg-white/[0.04]'
                      }`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all"
                />
                <textarea
                  rows={7}
                  placeholder="How can OpenX help? Include context, links, request IDs, or anything else useful."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all resize-none"
                />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-surface-600">
                    Sending to <span className="text-surface-400 font-medium">{currentContact.value}</span>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-500/10 border border-brand-500/15 flex items-center justify-center text-sm font-bold text-brand-300">
                    SR
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Shivansh Rai</div>
                    <div className="text-xs text-surface-500">Founder, OpenX</div>
                  </div>
                </div>
                <p className="text-sm text-surface-400 leading-relaxed">
                  OpenX is founder-led. Many inbound messages — especially partnerships, product feedback, and founder-level conversations — are reviewed directly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Direct Emails</h3>
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <div key={c.value} className="flex items-center gap-3">
                      <c.icon className="h-4 w-4 text-brand-400 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs text-surface-500">{c.title}</div>
                        <div className="text-sm text-surface-300 break-all">{c.value}</div>
                      </div>
                      <CopyBtn text={c.value} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Other Helpful Links</h3>
                <div className="space-y-3">
                  {[
                    { icon: FileText, title: 'Documentation', desc: 'Guides and API docs', to: '/docs' },
                    { icon: Shield, title: 'Security', desc: 'Policies and safeguards', to: '/security' },
                    { icon: Globe, title: 'Status', desc: 'Live platform health', to: '/status' },
                  ].map((item) => (
                    <Link key={item.title} to={item.to} className="group flex items-center gap-3 rounded-xl p-3 hover:bg-white/[0.04] transition-colors">
                      <item.icon className="h-4 w-4 text-brand-400 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-white group-hover:text-brand-300 transition-colors">{item.title}</div>
                        <div className="text-xs text-surface-500">{item.desc}</div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-surface-600 group-hover:text-surface-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact FAQ</h2>
            <p className="mt-3 text-surface-400">A few quick answers before you write in.</p>
          </motion.div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] px-5 sm:px-7">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} open={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
              <HelpCircle className="h-10 w-10 text-brand-300 mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Still Not Sure Where to Start?
              </h2>
              <p className="mt-4 text-brand-100/60 max-w-lg mx-auto">
                Start with a general inquiry and the right path will be routed from there.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@openx.ai"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-brand-700 shadow-2xl shadow-black/20 hover:bg-brand-50 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Email hello@openx.ai
                </a>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/[0.1] transition-colors"
                >
                  Visit Community
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
