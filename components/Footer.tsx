'use client';

import Link from 'next/link';

const links = [
  { label: 'Learn Insurance', href: '/learn' },
  { label: 'Companies', href: '/companies' },
  { label: 'Brokers', href: '/brokers' },
  { label: 'Regulator', href: '/regulator' },
  { label: 'Ombudsman', href: '/ombudsman' },
  { label: 'Life Products', href: '/life-insurance' },
  { label: 'General Products', href: '/general-insurance' },
  { label: 'Careers', href: '/careers' },
  { label: 'Education', href: '/education' },
  { label: 'Quick Quotes', href: '/quotes' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Real Life Experience', href: '/experience' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <div className="mb-6">
              <Link href="/">
                <img src="/logo.svg" alt="The Insurance Coach" className="h-6 w-auto" />
              </Link>
            </div>
            <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs mb-8">
              Empowering South Africans to understand, compare, and choose insurance with confidence and clarity.
            </p>
            <Link
              href="/quotes"
              className="inline-block font-display text-sm tracking-widest px-6 py-3 bg-chalk text-ink hover:bg-gray-100 transition-colors"
            >
              GET A FREE QUOTE
            </Link>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gray-600 mb-6">Site Navigation</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-gray-500 hover:text-chalk transition-colors py-2 block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-700">
            © 2026 The Insurance Coach. All rights reserved. For educational purposes only — not financial advice.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-xs text-gray-700">FSCA Compliant Information</span>
            <span className="font-body text-xs text-gray-700">·</span>
            <span className="font-body text-xs text-gray-700">Privacy Policy</span>
            <span className="font-body text-xs text-gray-700">·</span>
            <span className="font-body text-xs text-gray-700">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
