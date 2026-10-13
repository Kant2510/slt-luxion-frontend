import { Metadata } from 'next';
import V2Header from '@/components/landing/v2/V2Header';
import V2Footer from '@/components/landing/v2/V2Footer';
import CustomProjectHero from '@/components/custom-project/CustomProjectHero';
import CustomProjectForm from '@/components/custom-project/CustomProjectForm';

export const metadata: Metadata = {
  title: 'Start a Custom Project — LUXION',
  description:
    'Custom engineering and joint R&D for camera payloads and vision solutions. Tell us about your platform and the vision problem you need solved.',
};

export default function CustomProjectPage() {
  return (
    <div className="w-full bg-[#00061A] text-white font-sans text-base leading-[26px] overflow-hidden">
      {/* V2 Header */}
      <V2Header />

      <main>
        {/* Hero Section */}
        <CustomProjectHero />

        {/* Interactive Multi-step Project Form */}
        <CustomProjectForm />
      </main>

      {/* V2 Footer */}
      <V2Footer />
    </div>
  );
}
