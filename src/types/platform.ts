import { Variant, SpecGroup, Package } from './product';

export interface PlatformHeroStat {
  value: string;
  label: string;
}

export interface PlatformHeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: PlatformHeroStat[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; icon?: 'github' | 'specs' };
  breadcrumbs: { label: string; href?: string }[];
  inPageNav: { label: string; href: string }[];
}

export interface SplitContentItem {
  label: string;
  value: string;
}

export interface SplitContentData {
  id: string;
  tagline: string;
  title: string;
  description: string;
  items: SplitContentItem[];
  cta: { label: string; href: string };
  sideContent:
    | {
        type: 'code';
        header: string;
        content: string;
      }
    | {
        type: 'imagePlaceholder';
        text: string;
      };
  theme: 'light' | 'dark';
}

export interface FeatureCardItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  details: { label?: string; value: string }[];
}

export interface FeatureGridData {
  id: string;
  tagline: string;
  title: string;
  description?: string;
  cards: FeatureCardItem[];
  theme: 'light' | 'dark';
  columns?: 3 | 4 | 6;
}

export interface WhyOpenData {
  id: string;
  tagline: string;
  title: string;
  description: string;
  typicalTitle: string;
  typicalItems: string[];
  luxionTitle: string;
  luxionItems: string[];
  targetAudiences: string[];
}

export interface AssemblyStep {
  step: string;
  title: string;
  description: string;
}

export interface AssemblyData {
  id: string;
  tagline: string;
  title: string;
  description: string;
  guideBadge: string;
  steps: AssemblyStep[];
  mediaPlaceholder: string;
}

export interface IntegrationCard {
  title: string;
  description: string;
}

export interface IntegrationsData {
  id: string;
  tagline: string;
  title: string;
  bannerImage: string;
  bannerAlt: string;
  cards: IntegrationCard[];
}

export interface KitTierItem extends Package {
  stepNumber: string;
  description: string;
  isRecommended?: boolean;
  imagePlaceholder?: string;
}

export interface KitTiersData {
  id: string;
  tagline: string;
  title: string;
  tiers: KitTierItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface VorisModelSpec {
  label: string;
  value: string;
  subvalue?: string;
}

export interface VorisModelItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  isComingSoon?: boolean;
  image: string;
  imageAlt: string;
  specs: VorisModelSpec[];
  ctaLabel: string;
  ctaHref: string;
  variantData?: Variant;
}

export interface ModelsData {
  id: string;
  tagline: string;
  title: string;
  description: string;
  models: VorisModelItem[];
  bottomNote: string;
}

export interface ZoomClipItem {
  title: string;
  href?: string;
}

export interface ZoomShowcaseData {
  id: string;
  badge: string;
  title: string;
  description: string;
  backgroundImage: string;
  zoomCallouts: { value: string; label: string; isMuted?: boolean }[];
  clips: ZoomClipItem[];
}

export interface SpecsData {
  id: string;
  tagline: string;
  title: string;
  downloadDatasheetHref: string;
  disclaimer: string;
  displayMode: 'accordion' | 'table';
  specGroups?: SpecGroup[];
  tableColumns?: { key: string; label: string; badge?: string }[];
  tableGroups?: {
    groupTitle: string;
    rows: {
      label: string;
      values: Record<string, string>;
      isColspan?: boolean;
    }[];
  }[];
}

export interface CtaBandData {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface QuoteFormData {
  id: string;
  title: string;
  description: string;
  selectLabel: string;
  selectName: string;
  options: string[];
  messageLabel: string;
  footerNote: string;
  buttonLabel: string;
}

export interface PlatformPageData {
  id: string;
  slug: string;
  name: string;
  hero: PlatformHeroData;
  whyOpen?: WhyOpenData;
  models?: ModelsData;
  zoom?: ZoomShowcaseData;
  insideGrid?: FeatureGridData;
  splitContent?: SplitContentData;
  assembly?: AssemblyData;
  integrations?: IntegrationsData;
  kitTiers?: KitTiersData;
  controlGrid?: FeatureGridData;
  specs: SpecsData;
  ctaBand: CtaBandData;
  faq?: FaqData;
  quoteForm: QuoteFormData;
}
