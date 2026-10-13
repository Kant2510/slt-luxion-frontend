export interface PlatformSpec {
  label: string;
  value: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  image: string;
  href: string;
  ctaText: string;
  specs: PlatformSpec[];
  detailedSpecs?: {
    group: string;
    items: { label: string; value: string }[];
  }[];
}

export interface ApplicationItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface ChallengeCard {
  id: string;
  question: string;
  answer: string;
}

export interface HowWeWorkPath {
  id: string;
  code: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  type: 'integrate' | 'customize' | 'codevelop';
}

export interface CapabilityLayer {
  id: string;
  title: string;
  description: string;
}

export interface FootageClip {
  id: string;
  title: string;
  duration?: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: '6', label: 'Technology layers, in-house' },
  { value: '5', label: 'Payload platforms' },
  { value: '25+', label: 'R&D engineers' },
  { value: '10+', label: 'Years of UAV R&D' },
];

export const APPLICATIONS_MOCK: ApplicationItem[] = [
  {
    id: 'uav',
    number: '01',
    title: 'UAV & Aerial Robotics',
    description: 'Stabilized vision payloads sized for multirotor and fixed-wing platforms.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/applications/app1.webp',
  },
  {
    id: 'ground',
    number: '02',
    title: 'Ground Robotics',
    description: 'Perception for unmanned ground vehicles on rough terrain.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/applications/app2.webp',
  },
  {
    id: 'industrial',
    number: '03',
    title: 'Industrial Automation',
    description: 'Machine vision modules for robotic cells and production lines.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/applications/app3.webp',
  },
  {
    id: 'surveillance',
    number: '04',
    title: 'Surveillance & Inspection',
    description: 'Zoom, thermal and AI detection for infrastructure and security.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/applications/app4.webp',
  },
  {
    id: 'defense',
    number: '05',
    title: 'Defense & Security',
    description: 'Compact, mission-ready vision for tactical unmanned systems.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/applications/app5.webp',
  },
];

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    id: 'eo-thermal',
    question: 'EO + thermal under [X] g?',
    answer: 'Multi-sensor integration optimized for weight and power.',
  },
  {
    id: 'custom-ai',
    question: 'AI trained on your targets?',
    answer: 'Custom detection and tracking models, on-board.',
  },
  {
    id: 'autopilot',
    question: 'Talks to your autopilot?',
    answer: 'Custom interfaces and LX-SDK, MAVLink-ready.',
  },
  {
    id: 'rugged',
    question: 'Rugged for your environment?',
    answer: 'Mechanical and thermal adaptation for your mission.',
  },
];

export const HOW_WE_WORK_PATHS: HowWeWorkPath[] = [
  {
    id: 'integrate',
    code: '01 · INTEGRATE',
    title: 'Start from a proven platform',
    description: 'Deploy a LUXION platform on your system, with open interfaces and SDK support.',
    ctaText: 'Start with a platform',
    href: '#platforms',
    type: 'integrate',
  },
  {
    id: 'customize',
    code: '02 · CUSTOMIZE (NRE)',
    title: 'Adapt it to your mission',
    description: 'Sensors, gimbal, processing, AI and interfaces tailored to your exact requirements.',
    ctaText: 'Customize your payload',
    href: '#contact',
    type: 'customize',
  },
  {
    id: 'codevelop',
    code: '03 · CO-DEVELOP',
    title: 'Build something new, together',
    description: 'Joint R&D to explore, prototype and validate new vision solutions.',
    ctaText: 'Co-develop with us',
    href: '#contact',
    type: 'codevelop',
  },
];

export const WORKFLOW_STEPS = [
  'Requirements',
  'Concept',
  'Prototype',
  'Validation',
  'Production',
];

export const CAPABILITIES_LAYERS_LEFT: CapabilityLayer[] = [
  {
    id: 'optics',
    title: 'Optics & Sensors',
    description: 'EO · IR · Wide-angle — swapped for your mission.',
  },
  {
    id: 'gimbal',
    title: 'Gimbal & Stabilization',
    description: "3-axis, tuned to your platform's weight and vibration.",
  },
  {
    id: 'processing',
    title: 'Image Processing',
    description: 'AI-ISP · AI-DNR · HDR for your conditions.',
  },
];

export const CAPABILITIES_LAYERS_RIGHT: CapabilityLayer[] = [
  {
    id: 'ai',
    title: 'AI & Intelligent Vision',
    description: 'Detection and tracking trained on your targets.',
  },
  {
    id: 'electronics',
    title: 'Electronics & Software',
    description: 'Control, interfaces and SDK for your system.',
  },
  {
    id: 'integration',
    title: 'Platform Integration',
    description: 'Mechanical and electrical fit to UAVs and robots.',
  },
];

export const PLATFORMS_MOCK: PlatformItem[] = [
  {
    id: 'dev-kit-l1',
    name: 'Dev Kit L1',
    tagline: 'Open 3-axis gimbal development platform',
    badge: 'NOV 2026',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/dev-kit-l1.webp',
    href: '/platforms/dev-kit-l1',
    ctaText: 'Explore Dev Kit L1',
    specs: [
      { label: 'Open source', value: 'Firmware · Schematic · CAD' },
      { label: 'Controller', value: 'STM32G431 · FOC' },
      { label: 'Payload', value: '150 – 350 g' },
      { label: 'Protocols', value: 'MAVLink · PX4 · ArduPilot' },
    ],
  },
  {
    id: 'voris-vr10',
    name: 'Voris VR10',
    tagline: '4K zoom payload with on-board AI · VR20 coming soon',
    badge: 'READY TO ORDER',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/voris-vr10.webp',
    href: '/platforms/voris',
    ctaText: 'Explore Voris',
    specs: [
      { label: 'Zoom', value: '40X (10X optical + 4X digital)' },
      { label: 'Video', value: '4K · H.264 / H.265' },
      { label: 'AI compute', value: 'Up to 80 TOPS' },
      { label: 'Stabilization', value: '3-axis · ±0.01°' },
    ],
  },
  {
    id: 'avior',
    name: 'Avior',
    tagline: 'Multi-sensor vision in one payload',
    badge: 'COMING JAN 2027',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/avior.webp',
    href: '#contact',
    ctaText: 'Join Early Access',
    specs: [
      { label: 'EO zoom', value: '4K · 40X' },
      { label: 'Thermal', value: '640 × 512 · ≤ 40 mK' },
      { label: 'Wide camera', value: '8.3 MP · 104°' },
      { label: 'AI compute', value: 'Up to 80 TOPS' },
    ],
  },
];

export const FOOTAGE_CLIPS_MOCK: FootageClip[] = [
  { id: 'clip-1', title: '40X zoom [clip]' },
  { id: 'clip-2', title: 'Thermal imaging [clip]' },
  { id: 'clip-3', title: 'AI detection & tracking [clip]' },
  { id: 'clip-4', title: 'Gimbal stability [clip]' },
];

export const INTEREST_OPTIONS = [
  'Custom Engineering (NRE)',
  'Joint R&D',
  'Platforms',
  'Dev Kit Early Access',
  'Distribution Partnership',
  'Investment',
];
