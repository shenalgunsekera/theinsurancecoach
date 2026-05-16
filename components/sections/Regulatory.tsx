'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const regulatorData = {
  regulator: {
    id: 'regulator',
    title: 'Insurance Regulator',
    badge: 'FSCA',
    full: 'Financial Sector Conduct Authority',
    color: 'bg-chalk text-ink',
    description:
      'The FSCA regulates and supervises the conduct of all financial institutions in South Africa, including insurers. It ensures that customers are treated fairly and that the financial system is sound and stable.',
    points: [
      'Licences and monitors all insurance companies',
      'Sets rules for fair customer treatment (TCF)',
      'Investigates misconduct and levies penalties',
      'Maintains the public register of authorised FSPs',
      'Enforces the Financial Advisory and Intermediary Services (FAIS) Act',
    ],
    action: 'Verify your insurer is registered with the FSCA before signing any policy.',
  },
  ombudsman: {
    id: 'ombudsman',
    title: 'Insurance Ombudsman',
    badge: 'OSTI / OBS',
    full: 'Office of the Short-term / Long-term Insurance Ombudsman',
    color: 'bg-ink text-chalk border border-gray-700',
    description:
      'If you have a dispute with your insurer that cannot be resolved internally, the Ombudsman provides a free, independent and impartial resolution service. The process is simple, fast and at no cost to you.',
    points: [
      'Handles complaints against registered insurers',
      'Service is completely free to policyholders',
      'Can award compensation up to R800,000',
      'Decisions are binding on insurers, not on you',
      'Must first complain internally before escalating',
    ],
    action: 'Log a complaint at www.ombud.co.za or call 0860 726 890.',
  },
};

export default function Regulatory({ defaultTab = 'regulator' }: { defaultTab?: 'regulator' | 'ombudsman' }) {
  const [active, setActive] = useState<'regulator' | 'ombudsman'>(defaultTab);
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });
  const data = regulatorData[active];

  return (
    <section id="regulator" className="bg-chalk py-24 md:py-36">
      <div id="ombudsman" className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div ref={headRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-widest3 text-gray-500 uppercase mb-4"
          >
            Consumer Protection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-ink leading-none"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '0.02em' }}
          >
            YOUR RIGHTS &amp;<br />PROTECTION
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-4 mb-12">
          {(['regulator', 'ombudsman'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-3 font-body text-xs tracking-widest uppercase transition-all duration-300 border ${
                active === tab
                  ? 'bg-ink text-chalk border-ink'
                  : 'bg-transparent text-gray-500 border-gray-300 hover:border-ink hover:text-ink'
              }`}
            >
              {tab === 'regulator' ? 'Regulator (FSCA)' : 'Ombudsman (OSTI)'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className={`font-display text-sm tracking-wider px-4 py-2 ${data.color}`}>
                  {data.badge}
                </span>
                <span className="font-body text-xs text-gray-500">{data.full}</span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-ink mb-6">{data.title}</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-8">{data.description}</p>
              <div className="p-6 bg-gray-100 border-l-2 border-ink">
                <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-2">Action Point</p>
                <p className="font-heading italic text-ink">{data.action}</p>
              </div>
            </div>

            <div className="space-y-0">
              <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-6">Key Functions</p>
              {data.points.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-4 py-4 border-b border-gray-200"
                >
                  <span className="font-display text-2xl text-gray-300 leading-none shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
