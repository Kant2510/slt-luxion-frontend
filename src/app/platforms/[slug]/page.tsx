import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import V2Header from '@/components/landing/v2/V2Header';
import V2Footer from '@/components/landing/v2/V2Footer';
import { getPlatformBySlug, ALL_PLATFORMS } from '@/data/platformMockData';

// Platform Components
import PlatformHero from '@/components/platforms/PlatformHero';
import WhyOpenSection from '@/components/platforms/WhyOpenSection';
import FeatureGridSection from '@/components/platforms/FeatureGridSection';
import SplitContentSection from '@/components/platforms/SplitContentSection';
import AssemblySection from '@/components/platforms/AssemblySection';
import IntegrationsSection from '@/components/platforms/IntegrationsSection';
import KitTiersSection from '@/components/platforms/KitTiersSection';
import ModelsSection from '@/components/platforms/ModelsSection';
import ZoomShowcaseSection from '@/components/platforms/ZoomShowcaseSection';
import SpecsSection from '@/components/platforms/SpecsSection';
import CtaBandSection from '@/components/platforms/CtaBandSection';
import FaqSection from '@/components/platforms/FaqSection';
import QuoteFormSection from '@/components/platforms/QuoteFormSection';

interface PlatformPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(ALL_PLATFORMS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PlatformPageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return {
      title: 'Platform Not Found — LUXION',
    };
  }

  return {
    title: `${platform.name} — ${platform.hero.titleHighlight} | LUXION`,
    description: platform.hero.description,
  };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  return (
    <div className="w-full bg-[#00061A] text-white font-sans text-base leading-[26px] overflow-hidden">
      {/* V2 Header */}
      <V2Header />

      <main>
        {/* 1. Hero Section */}
        <PlatformHero data={platform.hero} />

        {/* 2. Why Open Section (DevKit-L1 only) */}
        {platform.whyOpen && <WhyOpenSection data={platform.whyOpen} />}

        {/* 3. Models Section (Voris only) */}
        {platform.models && <ModelsSection data={platform.models} />}

        {/* 4. Inside The Kit Section (DevKit-L1 only) */}
        {platform.insideGrid && <FeatureGridSection data={platform.insideGrid} />}

        {/* 5. Zoom Showcase Section (Voris only) */}
        {platform.zoom && <ZoomShowcaseSection data={platform.zoom} />}

        {/* 6. Split Content Section (Open Source / On-board AI) */}
        {platform.splitContent && (
          <SplitContentSection data={platform.splitContent} />
        )}

        {/* 7. Assembly Section (DevKit-L1 only) */}
        {platform.assembly && <AssemblySection data={platform.assembly} />}

        {/* 8. Integrations Section (DevKit-L1 only) */}
        {platform.integrations && (
          <IntegrationsSection data={platform.integrations} />
        )}

        {/* 9. Control Grid Section (Voris only) */}
        {platform.controlGrid && (
          <FeatureGridSection data={platform.controlGrid} />
        )}

        {/* 10. Kit Tiers Section (DevKit-L1 only) */}
        {platform.kitTiers && <KitTiersSection data={platform.kitTiers} />}

        {/* 11. Specifications Section (Both: Accordion or Table) */}
        <SpecsSection data={platform.specs} />

        {/* 12. CTA Band Section (Both) */}
        <CtaBandSection data={platform.ctaBand} />

        {/* 13. FAQ Section (DevKit-L1 only) */}
        {platform.faq && <FaqSection data={platform.faq} />}

        {/* 14. Quote Form Section (Both) */}
        <QuoteFormSection data={platform.quoteForm} />
      </main>

      {/* V2 Footer */}
      <V2Footer />
    </div>
  );
}
