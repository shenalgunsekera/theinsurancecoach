import Link from 'next/link';
import VideoScroll from '@/components/VideoScroll';

const sections = [
  { href: '/learn', label: 'Learn Insurance', desc: 'Fundamentals, concepts, and how insurance actually works.' },
  { href: '/companies', label: 'Insurance Companies', desc: 'Major insurers, what they offer, and how to compare them.' },
  { href: '/brokers', label: 'Insurance Brokers', desc: 'Why a broker works for you — not the insurer.' },
  { href: '/regulator', label: 'Insurance Regulator', desc: 'The FSCA — how the industry is regulated and monitored.' },
  { href: '/ombudsman', label: 'Insurance Ombudsman', desc: 'Free dispute resolution when things go wrong with a claim.' },
  { href: '/life-insurance', label: 'Life Insurance Products', desc: 'Term, whole-of-life, disability, dread disease and more.' },
  { href: '/general-insurance', label: 'General Insurance Products', desc: 'Commercial and personal lines — property, fleet, cyber and beyond.' },
  { href: '/careers', label: 'Insurance Careers', desc: 'Roles, salaries, and the pathway into the insurance industry.' },
  { href: '/education', label: 'Insurance Education', desc: 'Qualifications, institutions, and professional designations.' },
  { href: '/quotes', label: 'Quick Quotes', desc: 'Connect with a qualified broker for a no-obligation quote.' },
  { href: '/blogs', label: 'Blogs & Insights', desc: 'Articles, guides and expert commentary on insurance.' },
  { href: '/experience', label: 'Real Life Experience', desc: 'True stories — claims won, lessons learned, pitfalls avoided.' },
];

export default function Home() {
  return (
    <main>
      <VideoScroll />

      {/* Section overview grid */}
      <section className="bg-ink py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-body text-xs tracking-widest3 text-gray-500 uppercase mb-4">Explore the platform</p>
            <h2
              className="font-display text-chalk leading-none"
              style={{ fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '0.02em' }}
            >
              EVERYTHING<br />IN ONE PLACE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-800">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-ink p-8 flex flex-col gap-4 hover:bg-gray-900 transition-colors duration-200"
              >
                <h3 className="font-heading text-chalk text-lg group-hover:text-white transition-colors">
                  {s.label}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-chalk transition-colors text-xs font-body tracking-widest uppercase">
                  Explore
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
