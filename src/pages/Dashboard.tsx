import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Zap,
  BarChart3,
  Key,
  Copy,
  Check,
  Settings,
  LogOut,
  CreditCard,
  Code2,
  BookOpen,
  ArrowRight,
  Eye,
  EyeOff,
  Plus,
  Clock,
  TrendingUp,
  Activity,
  Shield,
} from 'lucide-react';
import { useDocTitle } from '../hooks/useDocTitle';
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../lib/firebase';

function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 2000); }}
      className="p-1.5 rounded-md hover:bg-white/[0.06] transition-colors" title="Copy">
      {ok ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-surface-500" />}
    </button>
  );
}

const apiKey = 'sk-openx-demo-xxxxxxxxxxxxxxxxxxxx';

const usageData = [
  { label: 'Today', tokens: '12,847', requests: '384', cost: '$0.13' },
  { label: 'This Week', tokens: '89,210', requests: '2,671', cost: '$0.89' },
  { label: 'This Month', tokens: '342,185', requests: '10,247', cost: '$3.42' },
];

const recentRequests = [
  { time: '2 min ago', endpoint: '/v1/chat/completions', tokens: 342, latency: '184ms', status: 200 },
  { time: '5 min ago', endpoint: '/v1/chat/completions', tokens: 891, latency: '203ms', status: 200 },
  { time: '12 min ago', endpoint: '/v1/embeddings', tokens: 128, latency: '45ms', status: 200 },
  { time: '18 min ago', endpoint: '/v1/chat/completions', tokens: 1247, latency: '312ms', status: 200 },
  { time: '24 min ago', endpoint: '/v1/images/analyze', tokens: 2104, latency: '1.2s', status: 200 },
  { time: '31 min ago', endpoint: '/v1/chat/completions', tokens: 456, latency: '167ms', status: 200 },
];

export default function Dashboard() {
  useDocTitle('Dashboard');
  const [showKey, setShowKey] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await logOut();
    navigate('/signin');
  };

  // Redirect if not logged in
  if (!loading && !user) {
    navigate('/signin');
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const displayEmail = user?.email || '';
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Top Bar */}
      <header className="border-b border-white/[0.06] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl flex items-center justify-between h-14 px-5 sm:px-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Open<span className="text-gradient-accent">X</span>
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              <span className="px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-white/[0.06]">Dashboard</span>
              <Link to="/api-reference" className="px-3 py-1.5 rounded-lg text-sm font-medium text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">API Docs</Link>
              <Link to="/docs" className="px-3 py-1.5 rounded-lg text-sm font-medium text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">Guides</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {/* User info */}
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" className="h-6 w-6 rounded-full" />
              ) : (
                <div className="h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center text-[10px] font-bold text-brand-300">{initials}</div>
              )}
              <span className="text-sm text-surface-300 max-w-[120px] truncate">{displayName}</span>
            </div>
            <Link to="/pricing" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">
              <CreditCard className="h-3.5 w-3.5" /> Billing
            </Link>
            <button onClick={handleSignOut} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-surface-500 hover:text-surface-200 hover:bg-white/[0.03] transition-all">
              <LogOut className="h-3.5 w-3.5" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 sm:py-10">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Welcome back, {displayName} 👋</h1>
          <p className="text-surface-500 mt-1">{displayEmail} · Here's what's happening with your OpenX account.</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: Activity, label: 'Requests Today', value: '384', change: '+12%', color: 'text-emerald-400' },
            { icon: BarChart3, label: 'Tokens Used', value: '12.8K', change: '/ 100K', color: 'text-surface-500' },
            { icon: Clock, label: 'Avg Latency', value: '184ms', change: 'p50', color: 'text-blue-400' },
            { icon: TrendingUp, label: 'Cost Today', value: '$0.13', change: 'Explorer plan', color: 'text-surface-500' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="h-4 w-4 text-surface-600" />
                <span className={`text-[11px] font-medium ${stat.color}`}>{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-surface-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* API Key */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <Key className="h-4 w-4 text-brand-400" />
                  <h2 className="text-base font-semibold text-white">API Key</h2>
                </div>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] text-xs font-medium text-surface-400 hover:text-white hover:bg-white/[0.04] transition-all">
                  <Plus className="h-3 w-3" /> New Key
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a0a0a] border border-white/[0.06]">
                <Shield className="h-4 w-4 text-surface-600 shrink-0" />
                <code className="flex-1 text-sm font-mono text-surface-300 truncate">
                  {showKey ? apiKey : '•'.repeat(40)}
                </code>
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="p-1.5 rounded-md hover:bg-white/[0.06] transition-colors text-surface-500"
                >
                  {showKey ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
                <CopyBtn text={apiKey} />
              </div>

              <p className="mt-3 text-[11px] text-surface-600">Keep your API key secure. Do not share it or expose it in client-side code.</p>
            </motion.div>

            {/* Recent Requests */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
            >
              <div className="px-5 sm:px-6 py-4 border-b border-white/[0.05] flex items-center justify-between">
                <h2 className="text-base font-semibold text-white">Recent Requests</h2>
                <span className="text-[11px] text-surface-600">Last 30 minutes</span>
              </div>
              <div className="divide-y divide-white/[0.03]">
                {recentRequests.map((req, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 sm:px-6 py-3 hover:bg-white/[0.01] transition-colors">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-500/10 text-emerald-400">{req.status}</span>
                    <code className="text-sm font-mono text-surface-300 flex-1 truncate">{req.endpoint}</code>
                    <span className="text-xs font-mono text-surface-500 hidden sm:block">{req.tokens} tok</span>
                    <span className="text-xs font-mono text-surface-500">{req.latency}</span>
                    <span className="text-[11px] text-surface-600 w-16 text-right">{req.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Usage */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <BarChart3 className="h-4 w-4 text-brand-400" />
                <h2 className="text-base font-semibold text-white">Usage</h2>
              </div>

              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-surface-400">Tokens used today</span>
                  <span className="text-sm font-mono text-surface-300">12,847 / 100,000</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400" style={{ width: '12.8%' }} />
                </div>
                <p className="mt-1.5 text-[11px] text-surface-600">Resets in 14 hours</p>
              </div>

              <div className="space-y-3">
                {usageData.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/[0.03] last:border-0">
                    <span className="text-sm text-surface-500">{row.label}</span>
                    <div className="flex gap-4 text-xs font-mono">
                      <span className="text-surface-400">{row.tokens} tok</span>
                      <span className="text-surface-500">{row.requests} req</span>
                      <span className="text-surface-300">{row.cost}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/pricing"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] py-2.5 text-sm font-medium text-surface-300 hover:text-white hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
              >
                Upgrade Plan <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6"
            >
              <h2 className="text-base font-semibold text-white mb-4">Quick Links</h2>
              <div className="space-y-2">
                {[
                  { icon: Code2, label: 'API Reference', desc: 'All endpoints and parameters', to: '/api-reference' },
                  { icon: BookOpen, label: 'Documentation', desc: 'Guides and tutorials', to: '/docs' },
                  { icon: Zap, label: 'Examples', desc: 'Ready-to-run code', to: '/examples' },
                  { icon: Settings, label: 'Settings', desc: 'Account preferences', to: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                  >
                    <link.icon className="h-4 w-4 text-brand-400 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white group-hover:text-brand-300 transition-colors">{link.label}</div>
                      <div className="text-[11px] text-surface-600">{link.desc}</div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-surface-700 group-hover:text-surface-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="rounded-xl border border-brand-500/15 bg-brand-500/[0.03] p-5 sm:p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-white">Explorer Plan</h3>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Active</span>
              </div>
              <p className="text-sm text-surface-400 mb-4">
                100K tokens/day · 20 RPM · Standard speed
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors"
              >
                Upgrade to Pro <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
