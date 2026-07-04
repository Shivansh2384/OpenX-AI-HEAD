import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Demo', href: '/demo' },
      { label: 'API', href: '/api' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'ShivanshAI-1.1 Paper', href: '/research/paper' },
      { label: 'Benchmarks', href: '/research/benchmarks' },
      { label: 'Safety', href: '/research/safety' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api-reference' },
      { label: 'SDK', href: '/sdk' },
      { label: 'Examples', href: '/examples' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Responsible AI', href: '/responsible-ai' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Open<span className="text-gradient-accent">X</span>
              </span>
            </Link>
            <p className="mt-3 text-[13px] text-surface-600 leading-relaxed max-w-[220px]">
              Next-generation AI platform powered by ShivanshAI-1.1.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[12px] font-semibold text-surface-400 uppercase tracking-wider mb-3.5">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[13px] text-surface-600 hover:text-surface-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-surface-700">
            © {new Date().getFullYear()} OpenX. All rights reserved.
          </p>
          <Link to="/status" className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[12px] text-surface-600 hover:text-surface-400 transition-colors">All systems operational</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
