import { motion } from 'framer-motion';
import {
  CheckCircle2,
  AlertCircle,
  Bell,
  Activity,
  Globe,
  Zap,
  Shield,
  ExternalLink,
  Server,
  Wifi,
  Database,
  Code2,
  Lock,
  FileText,
  Users,
  CreditCard,
  MessageSquare,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Types ─── */
type SvcStatus = 'operational' | 'degraded' | 'outage' | 'maintenance';
type IncStatus = 'resolved' | 'monitoring' | 'investigating' | 'identified';

interface ServiceGroup {
  category: string;
  services: { name: string; status: SvcStatus; uptime: string; icon: typeof Server }[];
}

interface Incident {
  id: string;
  title: string;
  status: IncStatus;
  severity: 'minor' | 'major' | 'critical';
  date: string;
  duration?: string;
  affectedServices: string[];
  updates: { time: string; status: IncStatus; message: string }[];
}

/* ─── Config ─── */
const statusConf: Record<SvcStatus, { label: string; color: string; bg: string; dot: string }> = {
  operational:  { label: 'Operational',  color: 'text-emerald-400', bg: 'bg-emerald-500/10', dot: 'bg-emerald-400' },
  degraded:     { label: 'Degraded',     color: 'text-amber-400',   bg: 'bg-amber-500/10',   dot: 'bg-amber-400' },
  outage:       { label: 'Outage',       color: 'text-rose-400',    bg: 'bg-rose-500/10',     dot: 'bg-rose-400' },
  maintenance:  { label: 'Maintenance',  color: 'text-blue-400',    bg: 'bg-blue-500/10',     dot: 'bg-blue-400' },
};

const incStatusConf: Record<IncStatus, { label: string; color: string; bg: string }> = {
  resolved:      { label: 'Resolved',      color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  monitoring:    { label: 'Monitoring',     color: 'text-blue-400',    bg: 'bg-blue-500/10' },
  identified:    { label: 'Identified',     color: 'text-amber-400',   bg: 'bg-amber-500/10' },
  investigating: { label: 'Investigating',  color: 'text-rose-400',    bg: 'bg-rose-500/10' },
};

/* ─── Data ─── */
const serviceGroups: ServiceGroup[] = [
  {
    category: 'Core Platform',
    services: [
      { name: 'API (api.openx.ai)',        status: 'operational', uptime: '99.997%', icon: Server },
      { name: 'Web Application',            status: 'operational', uptime: '99.99%',  icon: Globe },
      { name: 'Chat Interface',             status: 'operational', uptime: '99.98%',  icon: MessageSquare },
      { name: 'Model Inference',            status: 'operational', uptime: '99.99%',  icon: Zap },
    ],
  },
  {
    category: 'API Services',
    services: [
      { name: 'Chat Completions',           status: 'operational', uptime: '99.997%', icon: Code2 },
      { name: 'Embeddings',                 status: 'operational', uptime: '99.99%',  icon: Database },
      { name: 'Image Analysis',             status: 'operational', uptime: '99.99%',  icon: FileText },
      { name: 'Audio Transcription',        status: 'operational', uptime: '99.98%',  icon: Wifi },
      { name: 'Streaming (SSE)',            status: 'operational', uptime: '99.99%',  icon: Activity },
    ],
  },
  {
    category: 'Infrastructure',
    services: [
      { name: 'Authentication & SSO',       status: 'operational', uptime: '100%',    icon: Lock },
      { name: 'Billing & Payments',         status: 'operational', uptime: '99.99%',  icon: CreditCard },
      { name: 'Dashboard & Analytics',      status: 'operational', uptime: '99.99%',  icon: Users },
      { name: 'Documentation (docs)',       status: 'operational', uptime: '100%',    icon: FileText },
      { name: 'CDN & Edge Network',         status: 'operational', uptime: '99.999%', icon: Globe },
    ],
  },
];

const allServices = serviceGroups.flatMap((g) => g.services);
const allOperational = allServices.every((s) => s.status === 'operational');
const overallUptime = (allServices.reduce((sum, s) => sum + parseFloat(s.uptime), 0) / allServices.length).toFixed(2);

/* 90-day uptime bars (most recent first) */
const uptimeDays = Array.from({ length: 90 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - i);
  // Simulate: mostly 100%, a few 99.9x%
  const r = Math.random();
  const uptime = r < 0.03 ? 99.92 : r < 0.06 ? 99.97 : 100;
  return { date: d, uptime };
}).reverse();

const incidents: Incident[] = [
  {
    id: 'inc-006',
    title: 'Elevated API Latency — EU Region',
    status: 'resolved',
    severity: 'minor',
    date: 'January 12, 2026',
    duration: '50 min',
    affectedServices: ['API (api.openx.ai)', 'Chat Completions'],
    updates: [
      { time: '14:35 UTC', status: 'resolved', message: 'All services have returned to normal performance levels. Root cause: a misconfigured load balancer rule in eu-west-1 was routing 30% of traffic to a single availability zone. The rule has been corrected and safeguards added.' },
      { time: '14:15 UTC', status: 'identified', message: 'Root cause identified — a load balancer misconfiguration in eu-west-1. Deploying fix now.' },
      { time: '14:00 UTC', status: 'investigating', message: 'We are seeing elevated p99 latency (800ms vs normal 200ms) for API requests routed through EU endpoints. US and APAC are unaffected.' },
      { time: '13:45 UTC', status: 'investigating', message: 'Investigating reports of increased latency in the EU region. Monitoring dashboards show a spike beginning at approximately 13:40 UTC.' },
    ],
  },
  {
    id: 'inc-005',
    title: 'Scheduled Maintenance — Database Infrastructure Upgrade',
    status: 'resolved',
    severity: 'minor',
    date: 'January 8, 2026',
    duration: '2 hr (planned)',
    affectedServices: ['Dashboard & Analytics', 'Billing & Payments'],
    updates: [
      { time: '06:00 UTC', status: 'resolved', message: 'Maintenance completed successfully. All systems are fully operational. Database performance improved by approximately 25%.' },
      { time: '04:30 UTC', status: 'monitoring', message: 'Migration complete. Running validation checks and warming caches. Read-only services restored.' },
      { time: '04:00 UTC', status: 'identified', message: 'Beginning scheduled maintenance window. Dashboard and billing endpoints will return 503 during the maintenance period. API inference is not affected.' },
    ],
  },
  {
    id: 'inc-004',
    title: 'Intermittent Streaming Failures',
    status: 'resolved',
    severity: 'major',
    date: 'December 22, 2025',
    duration: '1 hr 15 min',
    affectedServices: ['Streaming (SSE)', 'Chat Completions'],
    updates: [
      { time: '11:15 UTC', status: 'resolved', message: 'All streaming connections have been restored. Root cause: an upstream proxy was prematurely terminating long-lived SSE connections after 30 seconds. Timeout increased to 300 seconds and monitoring added.' },
      { time: '10:45 UTC', status: 'identified', message: 'Identified the issue — a proxy timeout configuration change from the 1.0.4 deployment is terminating streams prematurely. Rolling back the proxy config now.' },
      { time: '10:15 UTC', status: 'investigating', message: 'Receiving reports of streaming responses disconnecting mid-generation. Non-streaming requests are unaffected. Investigating.' },
      { time: '10:00 UTC', status: 'investigating', message: 'Monitoring an increase in client-reported stream disconnections. Checking infrastructure logs.' },
    ],
  },
  {
    id: 'inc-003',
    title: 'Authentication Service Degradation',
    status: 'resolved',
    severity: 'minor',
    date: 'December 10, 2025',
    duration: '25 min',
    affectedServices: ['Authentication & SSO'],
    updates: [
      { time: '09:25 UTC', status: 'resolved', message: 'Authentication service fully restored. A Redis cache node failed and was automatically replaced. Failover took longer than expected — we\'re improving our failover thresholds.' },
      { time: '09:10 UTC', status: 'identified', message: 'Redis failover in progress. New node is warming up. Some login requests may time out for another 5-10 minutes.' },
      { time: '09:00 UTC', status: 'investigating', message: 'Users reporting intermittent login failures. API requests with valid tokens are unaffected.' },
    ],
  },
  {
    id: 'inc-002',
    title: 'Scheduled Maintenance — SSL Certificate Rotation',
    status: 'resolved',
    severity: 'minor',
    date: 'November 25, 2025',
    duration: '0 min (zero downtime)',
    affectedServices: [],
    updates: [
      { time: '03:00 UTC', status: 'resolved', message: 'SSL certificates rotated across all endpoints with zero downtime using automated rolling deployment. New certificates valid through November 2026.' },
    ],
  },
];

/* ─── Helpers ─── */
function UptimeBar({ uptime }: { uptime: number }) {
  const color = uptime === 100 ? 'bg-emerald-500' : uptime > 99.95 ? 'bg-emerald-500/60' : 'bg-amber-500';
  return (
    <div className={`w-full h-full rounded-[1px] ${color} transition-colors`} title={`${uptime}%`} />
  );
}

/* ─── Component ─── */
export default function Status() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-brand-600/[0.05] blur-[180px]" />
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-4 py-1.5 text-[12px] font-semibold text-brand-300 uppercase tracking-wider mb-6">
              <Activity className="h-3.5 w-3.5" />
              System Status
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
              OpenX <span className="text-gradient-main">Status</span>
            </h1>

            <p className="mt-5 text-surface-400 text-lg">
              Real-time health and performance of all OpenX services.
            </p>
          </motion.div>

          {/* Overall banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-10 max-w-3xl mx-auto rounded-2xl border p-5 sm:p-6 flex items-center gap-4 sm:gap-5 ${
              allOperational
                ? 'border-emerald-500/20 bg-emerald-500/[0.04]'
                : 'border-amber-500/20 bg-amber-500/[0.04]'
            }`}
          >
            <div className={`h-14 w-14 rounded-xl flex items-center justify-center shrink-0 ${
              allOperational ? 'bg-emerald-500/15' : 'bg-amber-500/15'
            }`}>
              {allOperational
                ? <CheckCircle2 className="h-7 w-7 text-emerald-400" />
                : <AlertCircle className="h-7 w-7 text-amber-400" />
              }
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {allOperational ? 'All Systems Operational' : 'Partial Service Disruption'}
              </h2>
              <p className="text-sm text-surface-400 mt-0.5">
                {allOperational
                  ? `All ${allServices.length} services are running normally. Overall uptime: ${overallUptime}%.`
                  : 'Some services are experiencing issues. See details below.'
                }
              </p>
            </div>
            <div className="hidden sm:block text-right shrink-0">
              <div className="text-2xl font-bold text-emerald-400">{overallUptime}%</div>
              <div className="text-[11px] text-surface-500">30-day uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 90-DAY UPTIME ═══════════ */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">Uptime — Last 90 Days</h3>
                <p className="text-sm text-surface-500 mt-0.5">{overallUptime}% average across all services</p>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-surface-500">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-emerald-500" />100%</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-emerald-500/60" />&gt;99.95%</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-amber-500" />&lt;99.95%</span>
              </div>
            </div>

            {/* 90-day bar chart */}
            <div className="flex gap-[2px] h-10 sm:h-12 items-end">
              {uptimeDays.map((d, i) => (
                <div key={i} className="flex-1 h-full">
                  <UptimeBar uptime={d.uptime} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-surface-600">
              <span>90 days ago</span>
              <span>Today</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-5">
          {serviceGroups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
            >
              <div className="px-5 sm:px-6 py-3.5 border-b border-white/[0.05] bg-white/[0.01]">
                <h3 className="text-sm font-semibold text-surface-300">{group.category}</h3>
              </div>
              <div className="divide-y divide-white/[0.03]">
                {group.services.map((svc) => {
                  const conf = statusConf[svc.status];
                  return (
                    <div key={svc.name} className="flex items-center justify-between px-5 sm:px-6 py-3.5 hover:bg-white/[0.01] transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <svc.icon className="h-4 w-4 text-surface-600 shrink-0" />
                        <span className="text-sm font-medium text-surface-200 truncate">{svc.name}</span>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-xs font-mono text-surface-500 hidden sm:block">{svc.uptime}</span>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${conf.bg} ${conf.color}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${conf.dot}`} />
                          {conf.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ METRICS ═══════════ */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Zap,    value: '<200ms',  label: 'API Latency (p50)',  detail: 'Global median' },
              { icon: Server, value: '1,247',   label: 'Tokens/Second',      detail: 'Inference speed' },
              { icon: Globe,  value: '40+',     label: 'Edge Regions',       detail: 'Worldwide' },
              { icon: Shield, value: overallUptime + '%', label: '30-Day Uptime', detail: 'All services' },
            ].map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.015] text-center"
              >
                <m.icon className="h-4 w-4 text-brand-400 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{m.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{m.label}</div>
                <div className="text-[10px] text-surface-600">{m.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INCIDENTS ═══════════ */}
      <section className="py-10 sm:py-14 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Incident History</h2>
              <p className="text-sm text-surface-500 mt-1">Past incidents and scheduled maintenance.</p>
            </div>
          </div>

          <div className="space-y-5">
            {incidents.map((inc, idx) => {
              const conf = incStatusConf[inc.status];
              return (
                <motion.div
                  key={inc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
                >
                  {/* Header */}
                  <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-white/[0.04]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white">{inc.title}</h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-surface-500">
                          <span>{inc.date}</span>
                          {inc.duration && <span>Duration: {inc.duration}</span>}
                          <span className={`px-2 py-0.5 rounded-full font-semibold ${
                            inc.severity === 'critical' ? 'bg-rose-500/10 text-rose-400'
                            : inc.severity === 'major' ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-surface-800 text-surface-400'
                          }`}>
                            {inc.severity.charAt(0).toUpperCase() + inc.severity.slice(1)}
                          </span>
                        </div>
                        {inc.affectedServices.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {inc.affectedServices.map((s) => (
                              <span key={s} className="px-2 py-0.5 rounded text-[10px] font-medium text-surface-500 bg-white/[0.03] border border-white/[0.05]">
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${conf.bg} ${conf.color}`}>
                        {conf.label}
                      </span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="px-5 sm:px-6 py-4 space-y-0">
                    {inc.updates.map((upd, j) => {
                      const uConf = incStatusConf[upd.status];
                      return (
                        <div key={j} className="flex gap-3 sm:gap-4 relative">
                          {/* Connector line */}
                          {j < inc.updates.length - 1 && (
                            <div className="absolute left-[5px] sm:left-[7px] top-5 bottom-0 w-px bg-white/[0.05]" />
                          )}
                          {/* Dot */}
                          <div className="relative shrink-0 mt-1.5">
                            <div className={`h-[11px] w-[11px] sm:h-[15px] sm:w-[15px] rounded-full border-2 ${
                              j === 0 ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20 bg-surface-950'
                            }`} />
                          </div>
                          {/* Content */}
                          <div className="pb-5 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-mono font-semibold text-surface-400">{upd.time}</span>
                              <span className={`text-[10px] font-bold ${uConf.color}`}>{uConf.label}</span>
                            </div>
                            <p className="text-sm text-surface-500 mt-1 leading-relaxed">{upd.message}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ SUBSCRIBE ═══════════ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
            <div className="absolute inset-0 bg-dot-grid opacity-20" />
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-brand-400/[0.1] blur-[120px]" />

            <div className="relative z-10 px-8 sm:px-16 py-14 sm:py-18">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <Bell className="h-8 w-8 text-brand-300 mb-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Get Status Notifications</h2>
                  <p className="mt-3 text-brand-100/50">
                    Subscribe to receive instant notifications about incidents, degraded performance, and scheduled maintenance.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3 text-[12px] text-brand-200/40">
                    <span>✓ Email alerts</span>
                    <span>✓ Webhook integration</span>
                    <span>✓ RSS feed</span>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all"
                    />
                    <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors">
                      <Bell className="h-4 w-4" />
                      Subscribe to Updates
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/70 transition-colors">
                      <ExternalLink className="h-3 w-3" /> RSS Feed
                    </button>
                    <button className="inline-flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/70 transition-colors">
                      <ExternalLink className="h-3 w-3" /> Webhook Docs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
