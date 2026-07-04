import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDocTitle } from './hooks/useDocTitle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benchmarks from './components/Benchmarks';
import Capabilities from './components/Capabilities';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import BackToTop from './components/BackToTop';
import CookieBanner from './components/CookieBanner';

import Platform from './pages/Platform';
import Demo from './pages/Demo';
import API from './pages/API';
import PricingPage from './pages/PricingPage';
import Changelog from './pages/Changelog';
import Status from './pages/Status';

import Paper from './pages/research/Paper';
import BenchmarksPage from './pages/research/Benchmarks';
import Safety from './pages/research/Safety';
import Methodology from './pages/research/Methodology';
import Blog from './pages/research/Blog';

import Documentation from './pages/developers/Documentation';
import APIReference from './pages/developers/APIReference';
import SDK from './pages/developers/SDK';
import Examples from './pages/developers/Examples';
import Community from './pages/developers/Community';

import About from './pages/company/About';
import Careers from './pages/company/Careers';
import Press from './pages/company/Press';
import Contact from './pages/company/Contact';

import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Security from './pages/legal/Security';
import ResponsibleAI from './pages/legal/ResponsibleAI';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function HomePage() {
  useDocTitle('');
  return (
    <>
      <Hero />
      <SocialProof />
      <Benchmarks />
      <Capabilities />
      <Showcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageTitles: Record<string, string> = {
  '/platform': 'Platform',
  '/demo': 'Interactive Demo',
  '/api': 'API',
  '/pricing': 'Pricing',
  '/changelog': 'Changelog',
  '/status': 'System Status',
  '/research/paper': 'Research Paper',
  '/research/benchmarks': 'Benchmarks',
  '/research/safety': 'Safety',
  '/research/methodology': 'Methodology',
  '/blog': 'Blog',
  '/docs': 'Documentation',
  '/api-reference': 'API Reference',
  '/sdk': 'SDKs',
  '/examples': 'Examples',
  '/community': 'Community',
  '/about': 'About',
  '/careers': 'Careers',
  '/press': 'Press',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/security': 'Security',
  '/responsible-ai': 'Responsible AI',
};

/* Layout with Navbar + Footer */
function MainLayout() {
  const { pathname } = useLocation();
  useDocTitle(pageTitles[pathname] || '');
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/api" element={<API />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/status" element={<Status />} />
          <Route path="/research/paper" element={<Paper />} />
          <Route path="/research/benchmarks" element={<BenchmarksPage />} />
          <Route path="/research/safety" element={<Safety />} />
          <Route path="/research/methodology" element={<Methodology />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/api-reference" element={<APIReference />} />
          <Route path="/sdk" element={<SDK />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/carrers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/responsible-ai" element={<ResponsibleAI />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#050505] text-surface-50 font-sans antialiased">
        <Routes>
          {/* Standalone pages — no navbar/footer */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/404" element={<NotFound />} />

          {/* All other pages — with navbar/footer */}
          <Route path="*" element={<MainLayout />} />
        </Routes>
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
