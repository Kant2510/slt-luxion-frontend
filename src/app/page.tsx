import V2Header from '@/components/landing/v2/V2Header';
import V2Hero from '@/components/landing/v2/V2Hero';
import V2Challenge from '@/components/landing/v2/V2Challenge';
import V2HowWeWork from '@/components/landing/v2/V2HowWeWork';
import V2Capabilities from '@/components/landing/v2/V2Capabilities';
import V2Platforms from '@/components/landing/v2/V2Platforms';
import V2Footage from '@/components/landing/v2/V2Footage';
import V2Team from '@/components/landing/v2/V2Team';
import V2Contact from '@/components/landing/v2/V2Contact';
import V2Footer from '@/components/landing/v2/V2Footer';

export const metadata = {
  title: 'LUXION — Vision Engineered to Fit (V2 Light & Dark)',
  description:
    'Camera payloads for autonomous systems. From light to intelligence. An agile R&D team that designs, customizes and co-develops camera payloads.',
};

export default function Home() {
  return (
    <div className="w-full bg-[#00061A] text-white font-sans text-base leading-[26px] overflow-hidden">
      <V2Header />
      <main>
        <V2Hero />
        <V2Challenge />
        <V2HowWeWork />
        <V2Capabilities />
        <V2Platforms />
        <V2Footage />
        <V2Team />
        <V2Contact />
      </main>
      <V2Footer />
    </div>
  );
}
