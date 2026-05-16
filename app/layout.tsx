import type { Metadata } from 'next';
import { Bebas_Neue, Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Insurance Coach | Your Complete Insurance Learning Platform',
  description:
    'Understand insurance products, companies, brokers, regulations and more. The Insurance Coach is your trusted guide to navigating the world of insurance.',
  keywords: 'insurance coach, learn insurance, insurance products, life insurance, general insurance, insurance careers',
};

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="bg-ink text-chalk font-body antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
