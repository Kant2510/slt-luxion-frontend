import { PlatformPageData } from '@/types/platform';

export const PLATFORM_DEVKIT_L1: PlatformPageData = {
  id: 'dev-kit-l1',
  slug: 'dev-kit-l1',
  name: 'Dev Kit L1',
  hero: {
    badge: 'Bench development platform · Launch Nov 2026',
    title: 'Dev Kit L1',
    titleHighlight: 'Gimbal development, finally open.',
    description:
      'An open 3-axis gimbal platform — hardware, firmware and CAD — so you can build, tune and test your own payloads from day one.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/dev-kit-l1.webp',
    imageAlt: 'LUXION Dev Kit L1 on its octagonal bench stand',
    primaryCta: {
      label: 'Request a Quote',
      href: '#quote',
    },
    secondaryCta: {
      label: 'View on GitHub',
      href: '#open-source',
      icon: 'github',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Platforms', href: '/#platforms' },
      { label: 'Dev Kit L1' },
    ],
    inPageNav: [
      { label: 'Why Open', href: '#why-open' },
      { label: 'Inside the Kit', href: '#inside' },
      { label: 'Open Source', href: '#open-source' },
      { label: 'Assembly', href: '#assembly' },
      { label: 'Kits', href: '#kits' },
      { label: 'Specs', href: '#specs' },
      { label: 'FAQ', href: '#faq' },
    ],
    stats: [
      { value: '3-axis', label: 'Pan · Tilt · Roll' },
      { value: '14-bit', label: 'Magnetic encoders, closed-loop' },
      { value: '150–350 g', label: 'Camera payload' },
      { value: '100%', label: 'Open firmware, schematic, CAD' },
    ],
  },
  whyOpen: {
    id: 'why-open',
    tagline: 'Why open',
    title: 'Most gimbals are black boxes.\nThis one isn’t.',
    description:
      'Off-the-shelf gimbals hide their control loop, firmware and mechanics. Dev Kit L1 opens every layer — so you learn, modify and build on it instead of working around it.',
    typicalTitle: 'TYPICAL GIMBAL',
    typicalItems: [
      'Closed firmware, fixed tuning',
      'No schematic or CAD to build from',
      'Proprietary protocol, limited integration',
      'Sealed unit — nothing to learn from',
    ],
    luxionTitle: 'LUXION DEV KIT L1',
    luxionItems: [
      'Open-source firmware on a public GitHub repo',
      'Schematic and CAD (STEP / DXF) included',
      'MAVLink, UART, S.Bus and a documented serial protocol',
      'You assemble it — and understand every part',
    ],
    targetAudiences: [
      'Payload developers',
      'Researchers & universities',
      'System integrators',
      'Robotics & vision teams',
    ],
  },
  insideGrid: {
    id: 'inside',
    tagline: 'Inside the kit',
    title: 'Three parts. Every one of them open.',
    theme: 'dark',
    columns: 3,
    cards: [
      {
        id: 'gimbal-frame',
        title: 'Gimbal frame',
        image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/devkit-l1-part1.webp',
        imageAlt: 'Dev Kit L1 gimbal frame with three brushless motors and encoders',
        details: [
          { label: 'Axes', value: '3-axis (Pan / Tilt / Roll)' },
          { label: 'Motors', value: 'Brushless gimbal Ø33.5 × 15.3 mm, ~0.06 N·m @12V' },
          { label: 'Encoders', value: '14-bit magnetic (16,384 counts/rev), SPI, closed-loop' },
        ],
      },
      {
        id: 'control-mainboard',
        title: 'Control mainboard',
        image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/devkit-l1-part2.webp',
        imageAlt: 'Dev Kit L1 control mainboard, top view with labelled ports',
        details: [
          { label: 'MCU · Drive', value: 'STM32G431 · FOC, 3 independent axes' },
          { label: 'Sensing', value: 'Dual IMU' },
          { label: 'Expansion', value: 'UART, I2C · Debug SWD / JTAG · 5V / 12V out for your payload' },
        ],
      },
      {
        id: 'bench-stand',
        title: 'Bench stand',
        image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/devkit-l1-part3.webp',
        imageAlt: 'Dev Kit L1 octagonal bench stand with power and USB-C ports in the base',
        details: [
          { label: 'Structure', value: 'Octagonal aluminium extrusion ring, fully detachable' },
          { label: 'Base', value: 'Integrated power input + USB-C / UART' },
          { label: 'Size · Weight', value: '145 × 90 × 148 mm · ~480 g' },
        ],
      },
    ],
  },
  splitContent: {
    id: 'open-source',
    tagline: 'Open source',
    title: 'Fork it. Tune it. Ship it.',
    description:
      'Everything you need to understand and modify the gimbal lives in one public repository — from the motor control loop to the mechanical drawings.',
    theme: 'light',
    items: [
      { label: 'Firmware source', value: 'Public GitHub repo' },
      { label: 'Hardware', value: 'Schematic · CAD (STEP / DXF)' },
      { label: 'Documentation', value: 'Protocol spec · Firmware build guide' },
      { label: 'Sample code', value: 'Gimbal bring-up · GStreamer · YOLO' },
    ],
    cta: {
      label: 'Open the repository',
      href: '#quote',
    },
    sideContent: {
      type: 'code',
      header: 'luxion / devkit-l1',
      content: `devkit-l1/
├── firmware/     STM32G431 · FOC · encoders
├── hardware/     schematic · CAD (STEP / DXF)
├── docs/         protocol spec · build guide
│                assembly guide
└── examples/
    ├── gimbal-bringup/
    ├── camera-gstreamer/
    └── yolo-detection/`,
    },
  },
  assembly: {
    id: 'assembly',
    tagline: 'Build it yourself',
    title: 'Assemble it. Understand it.',
    description:
      'Dev Kit L1 ships as a kit. A step-by-step assembly guide takes you from parts to a self-balancing gimbal — and teaches you how it works along the way.',
    guideBadge: 'Assembly guide included',
    steps: [
      {
        step: '01',
        title: 'Build the stand',
        description: 'Assemble the octagonal aluminium ring and base.',
      },
      {
        step: '02',
        title: 'Mount the gimbal',
        description: 'Fit the 3-axis frame, motors and encoders.',
      },
      {
        step: '03',
        title: 'Wire the mainboard',
        description: 'Connect the controller, IMUs and cables.',
      },
      {
        step: '04',
        title: 'Power up',
        description: 'Pre-flashed firmware self-balances the gimbal.',
      },
      {
        step: '05',
        title: 'Start developing',
        description: 'Run the samples, then make it your own.',
      },
    ],
    mediaPlaceholder: '[Image or short video: flat-lay of all kit parts, or an assembly timelapse]',
  },
  integrations: {
    id: 'integrations',
    tagline: 'Integrations & modules',
    title: 'Plugs into the stack you already use.',
    bannerImage: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/devkit-l1-plugs.webp',
    bannerAlt:
      'Dev Kit L1 on a lab bench next to a laptop running object detection and an NVIDIA Jetson board',
    cards: [
      {
        title: 'Autopilots',
        description:
          'MAVLink (PX4 / ArduPilot), UART, S.Bus, plus a documented serial protocol.',
      },
      {
        title: 'Companion compute',
        description: 'Raspberry Pi and NVIDIA Jetson compatible.',
      },
      {
        title: 'Blockcam 5x / 10x',
        description: 'CNC metal housing. LAN by default, USB 3.0 or HDMI optional.',
      },
      {
        title: 'Laser module',
        description: 'Visual alignment of the gimbal’s aiming direction.',
      },
    ],
  },
  kitTiers: {
    id: 'kits',
    tagline: 'Choose your kit',
    title: 'Start where you are.',
    tiers: [
      {
        code: 'base',
        name: 'Base',
        stepNumber: '01',
        description: 'For teams with their own controller.',
        contents: ['3-axis frame', 'Brushless motors', '14-bit encoders'],
        imagePlaceholder: '[Image: Base kit contents]',
      },
      {
        code: 'controller',
        name: 'Controller',
        stepNumber: '02',
        description: 'For firmware and control development.',
        includes_package_id: 'base',
        contents: [
          'Everything in Base',
          'Control mainboard',
          'Dual IMU',
          'Full cable set',
        ],
        imagePlaceholder: '[Image: Controller kit contents]',
      },
      {
        code: 'ready-to-dev',
        name: 'Ready-to-Dev',
        stepNumber: '03',
        description: 'Everything to see and track on day one.',
        isRecommended: true,
        includes_package_id: 'controller',
        contents: [
          'Everything in Controller',
          'Power supply',
          'Blockcam 5x / 10x',
          'Laser alignment module',
          'Full sample code',
        ],
        imagePlaceholder: '[Image: Ready-to-Dev kit contents]',
      },
    ],
  },
  specs: {
    id: 'specs',
    tagline: 'Specifications',
    title: 'Full specifications',
    downloadDatasheetHref: '#quote',
    disclaimer: 'Target specifications. Subject to change.',
    displayMode: 'accordion',
    specGroups: [
      {
        key: 'gimbal_frame',
        title: 'Gimbal frame',
        items: [
          {
            key: 'axes',
            label: 'Axes',
            value_type: 'text',
            is_highlight: true,
            values: { default: { display: '3-axis (Pan / Tilt / Roll)' } },
          },
          {
            key: 'motors',
            label: 'Motors',
            value_type: 'text',
            is_highlight: false,
            values: {
              default: {
                display: 'Brushless gimbal Ø33.5 × 15.3 mm, torque ~0.06 N·m @12V',
              },
            },
          },
          {
            key: 'encoders',
            label: 'Encoders',
            value_type: 'text',
            is_highlight: true,
            values: {
              default: {
                display:
                  '14-bit magnetic (16,384 counts/rev), SPI read, closed-loop control',
              },
            },
          },
          {
            key: 'payload',
            label: 'Camera payload',
            value_type: 'range',
            is_highlight: true,
            values: { default: { display: '150 – 350 g' } },
          },
          {
            key: 'size_weight',
            label: 'Size / weight',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: '145 × 90 × 148 mm / ~480 g' } },
          },
          {
            key: 'stand',
            label: 'Bench stand',
            value_type: 'text',
            is_highlight: false,
            values: {
              default: {
                display:
                  'Octagonal aluminium extrusion ring, detachable; base with integrated power input + USB-C / UART',
              },
            },
          },
        ],
      },
      {
        key: 'mainboard',
        title: 'Control mainboard',
        items: [
          {
            key: 'mcu',
            label: 'MCU',
            value_type: 'text',
            is_highlight: true,
            values: { default: { display: 'STM32G431' } },
          },
          {
            key: 'driver',
            label: 'Motor driver',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'FOC, 3 independent axes' } },
          },
          {
            key: 'imu',
            label: 'IMU',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'Dual IMU' } },
          },
          {
            key: 'expansion',
            label: 'Expansion',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'UART, I2C · Debug SWD / JTAG' } },
          },
          {
            key: 'aux_power',
            label: 'Auxiliary power out',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: '5V / 12V for your own payload' } },
          },
        ],
      },
      {
        key: 'expansion_modules',
        title: 'Expansion modules',
        items: [
          {
            key: 'camera',
            label: 'Camera',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'Blockcam 5x / 10x, CNC metal housing' } },
          },
          {
            key: 'cam_conn',
            label: 'Camera connection',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'LAN (default) · USB 3.0 / HDMI (optional)' } },
          },
          {
            key: 'laser',
            label: 'Laser module',
            value_type: 'text',
            is_highlight: false,
            values: {
              default: { display: 'Visual alignment of the gimbal aiming direction' },
            },
          },
          {
            key: 'compat_platforms',
            label: 'Compatible platforms',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'Raspberry Pi, NVIDIA Jetson' } },
          },
        ],
      },
      {
        key: 'firmware_sdk',
        title: 'Firmware & SDK',
        items: [
          {
            key: 'license',
            label: 'License',
            value_type: 'text',
            is_highlight: false,
            values: {
              default: { display: 'Open source, public GitHub repository [license type]' },
            },
          },
          {
            key: 'protocols',
            label: 'Control protocols',
            value_type: 'text',
            is_highlight: true,
            values: {
              default: {
                display:
                  'MAVLink (PX4 / ArduPilot), UART, S.Bus + LUXION serial protocol',
              },
            },
          },
          {
            key: 'default_fw',
            label: 'Default firmware',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'Pre-flashed; gimbal self-balances on power-up' } },
          },
          {
            key: 'sample_code',
            label: 'Sample code',
            value_type: 'text',
            is_highlight: false,
            values: {
              default: {
                display: 'Gimbal bring-up · Camera (GStreamer, YOLO detection)',
              },
            },
          },
          {
            key: 'docs',
            label: 'Documentation',
            value_type: 'text',
            is_highlight: false,
            values: {
              default: {
                display:
                  'Schematic, CAD (STEP / DXF), protocol spec, firmware build guide, assembly guide',
              },
            },
          },
        ],
      },
      {
        key: 'system',
        title: 'System',
        items: [
          {
            key: 'voltage',
            label: 'Input voltage',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: '12 – 14.5 V DC' } },
          },
          {
            key: 'delivery',
            label: 'Delivery',
            value_type: 'text',
            is_highlight: false,
            values: { default: { display: 'Kit for self-assembly, step-by-step guide included' } },
          },
          {
            key: 'availability',
            label: 'Availability',
            value_type: 'text',
            is_highlight: true,
            values: { default: { display: 'November 2026' } },
          },
        ],
      },
    ],
  },
  ctaBand: {
    id: 'production',
    badge: 'FROM DEV KIT TO PRODUCTION',
    title: 'Prototype on the kit. Scale with LUXION.',
    description:
      'When your payload is ready to fly, our engineers turn it into a production-grade gimbal through custom engineering (NRE) or joint R&D.',
    ctaLabel: 'Explore custom engineering',
    ctaHref: '/#contact',
  },
  faq: {
    id: 'faq',
    title: 'Questions',
    items: [
      {
        question: 'Does it ship assembled?',
        answer:
          'No. Dev Kit L1 ships as a kit with a step-by-step assembly guide. The firmware comes pre-flashed, so the gimbal self-balances as soon as you power it up.',
      },
      {
        question: 'Can I use my own camera?',
        answer:
          'Yes. The frame carries 150–350 g payloads, and the mainboard supplies 5V / 12V for your own module. Blockcam 5x / 10x is available in the Ready-to-Dev kit.',
      },
      {
        question: 'Which autopilots does it work with?',
        answer:
          'PX4 and ArduPilot via MAVLink, plus UART, S.Bus and a documented LUXION serial protocol.',
      },
      {
        question: 'What exactly is open source?',
        answer:
          'The firmware source, schematic, CAD files (STEP / DXF), protocol specification and firmware build guide — all in a public GitHub repository. [License type to confirm.]',
      },
      {
        question: 'When is it available, and how much does it cost?',
        answer:
          'Dev Kit L1 launches in November 2026. Request a quote for the kit that fits you and we’ll reply with pricing and lead time.',
      },
    ],
  },
  quoteForm: {
    id: 'quote',
    title: 'Request a quote',
    description:
      'Tell us which kit you need and how many. We’ll reply with pricing and lead time within [2 business days].',
    selectLabel: 'Kit',
    selectName: 'kit',
    options: ['Ready-to-Dev', 'Controller', 'Base', 'Not sure yet'],
    messageLabel: 'What will you build with it?',
    footerNote: 'Academic and volume pricing available on request.',
    buttonLabel: 'Request a Quote',
  },
};

export const PLATFORM_VORIS: PlatformPageData = {
  id: 'voris',
  slug: 'voris',
  name: 'Voris VR10',
  hero: {
    badge: 'Voris VR10 · Ready to order',
    title: 'Voris VR10',
    titleHighlight: 'See farther. Understand more.',
    description:
      'A 3-axis 4K payload with 40X zoom and on-board AI detection and tracking — ready to order now. The 80X VR20 is coming next.',
    image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/voris-vr10.webp',
    imageAlt: 'LUXION Voris zoom camera payload',
    primaryCta: {
      label: 'Request a Quote',
      href: '#quote',
    },
    secondaryCta: {
      label: 'View Specifications',
      href: '#specs',
      icon: 'specs',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Platforms', href: '/#platforms' },
      { label: 'Voris' },
    ],
    inPageNav: [
      { label: 'Models', href: '#models' },
      { label: 'Zoom', href: '#zoom' },
      { label: 'On-board AI', href: '#ai' },
      { label: 'Control', href: '#control' },
      { label: 'Specs', href: '#specs' },
    ],
    stats: [
      { value: '4K', label: '3840 × 2160, H.264 / H.265' },
      { value: '40X', label: '10X optical + 4X digital' },
      { value: '80 TOPS', label: 'On-board AI accelerator' },
      { value: '±0.01°', label: '3-axis stabilization' },
      { value: '12–52 V', label: 'Wide input range' },
    ],
  },
  models: {
    id: 'models',
    tagline: 'The Voris family',
    title: 'VR10 today. VR20 next.',
    description:
      'VR10 is ready to order. VR20 keeps the same gimbal, AI engine and interfaces, and doubles the reach to 80X zoom.',
    bottomNote:
      'Both include: 3-axis gimbal ±0.01° · 80 TOPS on-board AI · MAVLink / UART / S.Bus / LX-SDK · HDMI + Ethernet video · 12–52 V',
    models: [
      {
        id: 'vr10',
        name: 'Voris VR10',
        tagline: '4K vision. 40X zoom. On-board AI.',
        badge: 'READY TO ORDER',
        image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/voris-vr10.webp',
        imageAlt: 'Voris VR10',
        specs: [
          { label: 'ZOOM', value: '40X', subvalue: '10X optical + 4X digital' },
          { label: 'SENSOR', value: '1/2.8"', subvalue: 'CMOS, 8 MP' },
          { label: 'WEIGHT', value: '~520 g', subvalue: 'Compact & light' },
        ],
        ctaLabel: 'Request a Quote',
        ctaHref: '#quote',
        variantData: {
          code: 'vr10',
          name: 'Voris VR10',
          is_default: true,
          sort_order: 1,
        },
      },
      {
        id: 'vr20',
        name: 'Voris VR20',
        tagline: 'Extended visual reach. Intelligent perception.',
        badge: 'COMING SOON',
        isComingSoon: true,
        image: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/voris-vr10.webp',
        imageAlt: 'Voris VR20',
        specs: [
          { label: 'ZOOM', value: '80X', subvalue: '20X optical + 4X digital' },
          { label: 'SENSOR', value: '1/1.8"', subvalue: 'CMOS, 8 MP' },
          { label: 'WEIGHT', value: '~720 g', subvalue: 'Target' },
        ],
        ctaLabel: 'Get Notified',
        ctaHref: '#quote',
        variantData: {
          code: 'vr20',
          name: 'Voris VR20',
          is_default: false,
          sort_order: 2,
        },
      },
    ],
  },
  zoom: {
    id: 'zoom',
    badge: 'HYBRID ZOOM',
    title: 'Detail from a safe distance.',
    description:
      '10X optical plus 4X digital zoom on VR10, with an AI-ISP, AI denoising and HDR pipeline that keeps distant detail clean. VR20 extends it to 80X.',
    backgroundImage: 'https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/background/extra-bg.webp',
    zoomCallouts: [
      { value: '40X', label: 'VR10' },
      { value: '80X', label: 'VR20 · coming soon', isMuted: true },
    ],
    clips: [
      { title: '1X → 40X zoom [clip]' },
      { title: 'HDR & AI denoise [clip]' },
      { title: 'AI tracking in flight [clip]' },
    ],
  },
  splitContent: {
    id: 'ai',
    tagline: 'On-board AI',
    title: 'Detect and track — on the payload.',
    description:
      'Inference runs inside Voris, not on your flight computer. Your platform gets targets, not just pixels.',
    theme: 'light',
    items: [
      { label: 'AI accelerator', value: 'Renesas DRP-AI3, up to 80 TOPS' },
      { label: 'Compute module', value: 'SOM OneKiwi V2H' },
      { label: 'AI functions', value: 'Object detection & tracking, up to 30 fps' },
      { label: 'Image pipeline', value: 'AI-ISP · AI-DNR · HDR' },
    ],
    cta: {
      label: 'Train it on your targets',
      href: '/#contact',
    },
    sideContent: {
      type: 'imagePlaceholder',
      text: '[Image: Voris live view with AI detection boxes and tracking overlay]',
    },
  },
  controlGrid: {
    id: 'control',
    tagline: 'Control & integration',
    title: 'Steady image. Easy integration.',
    theme: 'dark',
    columns: 6,
    cards: [
      {
        id: 'stabilization',
        title: '3-axis, ±0.01° angular jitter',
        badge: 'STABILIZATION',
        details: [{ value: 'Tilt ±120° · Pan ±320° · up to 100°/s' }],
      },
      {
        id: 'control',
        title: 'MAVLink (PX4 / ArduPilot)',
        badge: 'CONTROL',
        details: [{ value: 'UART · S.Bus · LX-SDK' }],
      },
      {
        id: 'video-out',
        title: 'HDMI 1080p @ 30 fps',
        badge: 'VIDEO OUT',
        details: [{ value: 'Ethernet 720p @ 30 fps · H.264 / H.265' }],
      },
      {
        id: 'software',
        title: 'LX Control, QGroundControl',
        badge: 'SOFTWARE',
        details: [{ value: 'and other MAVLink ground stations' }],
      },
      {
        id: 'mounting',
        title: 'Bottom mount, detachable',
        badge: 'MOUNTING',
        details: [{ value: 'Quick swap between platforms' }],
      },
      {
        id: 'power',
        title: '12 – 52 V DC',
        badge: 'POWER',
        details: [{ value: 'Fits common UAV power rails' }],
      },
    ],
  },
  specs: {
    id: 'specs',
    tagline: 'Specifications',
    title: 'Specifications',
    downloadDatasheetHref: '#quote',
    disclaimer: 'Target specifications. Subject to change.',
    displayMode: 'table',
    tableColumns: [
      { key: 'label', label: 'Specification' },
      { key: 'vr10', label: 'VORIS VR10' },
      { key: 'vr20', label: 'VORIS VR20', badge: 'COMING SOON' },
    ],
    tableGroups: [
      {
        groupTitle: 'CAMERA',
        rows: [
          {
            label: 'Zoom',
            values: {
              vr10: '40X (10X optical + 4X digital)',
              vr20: '80X (20X optical + 4X digital)',
            },
          },
          {
            label: 'Sensor',
            values: {
              vr10: 'CMOS 1/2.8", 8 MP',
              vr20: 'CMOS 1/1.8", 8 MP',
            },
          },
          {
            label: 'Resolution',
            values: {
              vr10: '4K (3840 × 2160)',
            },
            isColspan: true,
          },
          {
            label: 'Video encoding',
            values: {
              vr10: 'H.264 / H.265',
            },
            isColspan: true,
          },
          {
            label: 'Image technology',
            values: {
              vr10: 'AI-ISP · AI-DNR · HDR',
            },
            isColspan: true,
          },
        ],
      },
      {
        groupTitle: 'GIMBAL',
        rows: [
          {
            label: 'Axes',
            values: {
              vr10: '3-axis, angular jitter ±0.01°',
            },
            isColspan: true,
          },
          {
            label: 'Control range',
            values: {
              vr10: 'Tilt ±120° · Pan ±320°',
            },
            isColspan: true,
          },
          {
            label: 'Max speed',
            values: {
              vr10: '100°/s',
            },
            isColspan: true,
          },
        ],
      },
      {
        groupTitle: 'AI PROCESSING',
        rows: [
          {
            label: 'Compute module',
            values: {
              vr10: 'SOM OneKiwi V2H',
            },
            isColspan: true,
          },
          {
            label: 'AI performance',
            values: {
              vr10: 'Renesas DRP-AI3 accelerator, up to 80 TOPS',
            },
            isColspan: true,
          },
          {
            label: 'AI functions',
            values: {
              vr10: 'Object detection & object tracking, up to 30 fps',
            },
            isColspan: true,
          },
        ],
      },
      {
        groupTitle: 'SYSTEM',
        rows: [
          {
            label: 'Input voltage',
            values: {
              vr10: '12 – 52 V DC',
            },
            isColspan: true,
          },
          {
            label: 'Control',
            values: {
              vr10: 'MAVLink (PX4 / ArduPilot), UART, S.Bus, LX-SDK',
            },
            isColspan: true,
          },
          {
            label: 'Video output',
            values: {
              vr10: 'HDMI 1080p @ 30 fps · Ethernet 720p @ 30 fps',
            },
            isColspan: true,
          },
          {
            label: 'Mounting',
            values: {
              vr10: 'Bottom mount, detachable',
            },
            isColspan: true,
          },
          {
            label: 'Control software',
            values: {
              vr10: 'LX Control, QGroundControl, …',
            },
            isColspan: true,
          },
          {
            label: 'Weight',
            values: {
              vr10: '~520 g',
              vr20: '~720 g',
            },
          },
        ],
      },
    ],
  },
  ctaBand: {
    id: 'customize',
    badge: 'MAKE IT YOURS',
    title: 'Need a different Voris?',
    description:
      'Different interface, AI model trained on your targets, or a new sensor — our engineers adapt Voris to your platform through custom engineering (NRE).',
    ctaLabel: 'Explore custom engineering',
    ctaHref: '/#contact',
  },
  quoteForm: {
    id: 'quote',
    title: 'Request a quote',
    description:
      'Tell us which model, how many and what you’ll fly it on. We’ll reply with pricing and lead time within [2 business days].',
    selectLabel: 'Model',
    selectName: 'model',
    options: ['Voris VR10', 'Voris VR20 — notify me at launch', 'Customized Voris'],
    messageLabel: 'Your platform and mission',
    footerNote: 'NDA available before technical discussions.',
    buttonLabel: 'Request a Quote',
  },
};

export const ALL_PLATFORMS: Record<string, PlatformPageData> = {
  'dev-kit-l1': PLATFORM_DEVKIT_L1,
  voris: PLATFORM_VORIS,
  'voris-vr10': PLATFORM_VORIS,
};

export function getPlatformBySlug(slug: string): PlatformPageData | null {
  return ALL_PLATFORMS[slug.toLowerCase()] || null;
}
