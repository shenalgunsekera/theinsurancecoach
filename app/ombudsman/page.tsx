import Regulatory from '@/components/sections/Regulatory';

export const metadata = { title: 'Insurance Ombudsman | The Insurance Coach' };

export default function OmbudsmanPage() {
  return <main className="pt-16"><Regulatory defaultTab="ombudsman" /></main>;
}
