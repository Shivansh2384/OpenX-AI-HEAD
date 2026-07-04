import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Zap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useDocTitle } from '../../hooks/useDocTitle';
import { signUpWithEmail } from '../../lib/firebase';
import { useAuth } from '../../hooks/useAuth';

const benefits = [
  'Access to ShivanshAI-1.1',
  '100K free tokens / day',
  'Full API access from day one',
  'No credit card required',
];

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading } = useAuth();
  useDocTitle('Sign Up');

  // If already signed in, redirect
  useEffect(() => {
    if (!authLoading && user) {
      window.location.href = 'https://open-x-seven.vercel.app/';
    }
  }, [user, authLoading]);

  const passwordStrength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthLabels = ['', 'Weak', 'Good', 'Strong'];
  const strengthColors = ['', 'bg-rose-500', 'bg-amber-500', 'bg-emerald-500'];
  const passwordsMatch = confirmPassword.length === 0 || password === confirmPassword;

  const handleError = (err: unknown) => {
    const code = (err as { code?: string }).code || '';
    if (code === 'auth/email-already-in-use') {
      setError('An account with this email already exists. Try signing in instead.');
    } else if (code === 'auth/weak-password') {
      setError('Password must be at least 6 characters.');
    } else if (code === 'auth/invalid-email') {
      setError('Please enter a valid email address.');
    } else {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreed) {
      setError('Please accept the Terms of Service and Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      await signUpWithEmail(email, password, name);
      window.location.href = 'https://open-x-seven.vercel.app/';
    } catch (err) {
      handleError(err);
    }
  };

  // Show loading while checking auth state
  if (authLoading || user) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-5">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-600/[0.06] blur-[200px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-15" />
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className="relative h-10 w-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500" />
              <Zap className="relative h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">Open<span className="text-gradient-accent">X</span></span>
          </Link>
          <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-white">Create your account</h1>
          <p className="mt-2 text-surface-400">Start building with ShivanshAI-1.1 — free</p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8">
          {error && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 mb-5">
              <AlertCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
              <p className="text-sm text-rose-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-600" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-10 pr-4 py-3 text-sm text-white placeholder-surface-600 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-600" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-10 pr-4 py-3 text-sm text-white placeholder-surface-600 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all" required />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-600" />
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 6 characters"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-10 pr-12 py-3 text-sm text-white placeholder-surface-600 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all" required minLength={6} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-600 hover:text-surface-400 transition-colors">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <div key={level} className={`h-1 flex-1 rounded-full transition-colors ${passwordStrength >= level ? strengthColors[passwordStrength] : 'bg-white/[0.06]'}`} />
                    ))}
                  </div>
                  <span className={`text-[11px] font-medium ${passwordStrength === 1 ? 'text-rose-400' : passwordStrength === 2 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {strengthLabels[passwordStrength]}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-600" />
                <input type={showConfirm ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter your password"
                  className={`w-full rounded-xl border bg-white/[0.03] pl-10 pr-12 py-3 text-sm text-white placeholder-surface-600 focus:outline-none focus:ring-1 transition-all ${
                    !passwordsMatch
                      ? 'border-rose-500/40 focus:border-rose-500/60 focus:ring-rose-500/20'
                      : 'border-white/[0.08] focus:border-brand-500/40 focus:ring-brand-500/20'
                  }`} required minLength={6} />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-600 hover:text-surface-400 transition-colors">
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {confirmPassword.length > 0 && !passwordsMatch && (
                <p className="mt-1.5 text-xs text-rose-400">Passwords do not match.</p>
              )}
              {confirmPassword.length > 0 && passwordsMatch && (
                <p className="mt-1.5 text-xs text-emerald-400 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Passwords match</p>
              )}
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`mt-0.5 shrink-0 h-4.5 w-4.5 rounded border flex items-center justify-center transition-all ${
                  agreed
                    ? 'bg-brand-500 border-brand-500'
                    : 'bg-white/[0.03] border-white/[0.15] hover:border-white/[0.25]'
                }`}
                style={{ width: 18, height: 18 }}
              >
                {agreed && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <span className="text-xs text-surface-400 leading-relaxed">
                I agree to the{' '}
                <Link to="/terms" target="_blank" className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" target="_blank" className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">Privacy Policy</Link>.
              </span>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading || !agreed || !passwordsMatch}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-surface-950 hover:bg-surface-100 transition-colors shadow-lg shadow-white/[0.03] disabled:opacity-40 disabled:cursor-not-allowed">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create Account <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-white/[0.05]">
            <div className="grid grid-cols-2 gap-2.5">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs text-surface-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-surface-500">
          Already have an account?{' '}
          <Link to="/signin" className="text-brand-400 hover:text-brand-300 font-medium transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
