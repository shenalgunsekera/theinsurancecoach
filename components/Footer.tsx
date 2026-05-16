'use client';

import { motion } from 'framer-motion';

const links = [
  { label: 'Learn Insurance', id: 'learn' },
  { label: 'Companies', id: 'companies' },
  { label: 'Brokers', id: 'brokers' },
  { label: 'Regulator', id: 'regulator' },
  { label: 'Ombudsman', id: 'ombudsman' },
  { label: 'Life Products', id: 'life-insurance' },
  { label: 'General Products', id: 'general-insurance' },
  { label: 'Careers', id: 'careers' },
  { label: 'Education', id: 'education' },
  { label: 'Quick Quotes', id: 'quotes' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'Real Life Experience', id: 'experience' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-chalk flex items-center justify-center">
                <span className="font-display text-ink text-sm">TIC</span>
              </div>
              <span className="font-display text-chalk text-xl tracking-wider">THE INSURANCE COACH</span>
            </div>
            <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs mb-8">
              Empowering South Africans to understand, compare, and choose insurance with confidence and clarity.
            </p>
            <button
              onClick={() => scrollTo('quotes')}
              className="font-display text-sm tracking-widest px-6 py-3 bg-chalk text-ink hover:bg-gray-100 transition-colors"
            >
              GET A FREE QUOTE
            </button>
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gray-600 mb-6">Site Navigation</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-body text-sm text-gray-500 hover:text-chalk transition-colors py-2"
                >
                  {link.label}
                </button>
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
