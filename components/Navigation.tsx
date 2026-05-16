'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/learn', label: 'Learn Insurance' },
  { href: '/companies', label: 'Insurance Companies' },
  { href: '/brokers', label: 'Insurance Brokers' },
  { href: '/regulator', label: 'Insurance Regulator' },
  { href: '/ombudsman', label: 'Insurance Ombudsman' },
  { href: '/life-insurance', label: 'Life Insurance Products' },
  { href: '/general-insurance', label: 'General Insurance Products' },
  { href: '/careers', label: 'Insurance Careers' },
  { href: '/education', label: 'Insurance Education' },
  { href: '/quotes', label: 'Quick Quotes' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/experience', label: 'Real Life Experience' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || pathname !== '/'
            ? 'bg-ink/95 backdrop-blur-sm border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.svg"
              alt="The Insurance Coach"
              className="h-6 w-auto"
              style={{ display: 'block' }}
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/quotes"
              className="hidden md:flex items-center gap-2 px-4 py-2 border border-chalk/30 text-chalk text-xs tracking-widest uppercase hover:bg-chalk hover:text-ink transition-all duration-300"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-chalk transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-px bg-chalk transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-px bg-chalk transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-gray-900 z-50 flex flex-col"
            >
              <div className="p-8 border-b border-gray-800 flex items-center justify-between">
                <span className="font-display text-chalk text-xl tracking-wider">NAVIGATE</span>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-chalk transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={`w-full text-left px-8 py-4 border-b border-gray-800/50 flex items-center justify-between transition-colors duration-200 ${
                        pathname === item.href
                          ? 'text-chalk bg-gray-800'
                          : 'text-gray-400 hover:text-chalk hover:bg-gray-800/50'
                      }`}
                    >
                      <span className="font-body text-sm tracking-wide">{item.label}</span>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        stroke="currentColor" strokeWidth="1.5"
                        className="opacity-40"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-8 border-t border-gray-800">
                <Link
                  href="/quotes"
                  className="block w-full py-3 bg-chalk text-ink font-display text-lg tracking-widest text-center hover:bg-gray-100 transition-colors"
                >
                  GET A FREE QUOTE
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
