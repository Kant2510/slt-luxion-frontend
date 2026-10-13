'use client';

import {
  CAPABILITIES_LAYERS_LEFT,
  CAPABILITIES_LAYERS_RIGHT,
} from '@/data/landingV2MockData';

export default function V2Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative text-[#000F43] py-24 sm:py-32 bg-[radial-gradient(40%_55%_at_50%_55%,rgba(0,95,255,0.12)_0%,rgba(236,241,249,0)_70%),linear-gradient(180deg,#F5F7FB_0%,#E9EEF7_100%)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#000F43]/60 font-semibold">
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-transparent to-[#000F43]/35"
            />
            Capabilities
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-[#000F43]/35 to-transparent"
            />
          </div>

          <h2 className="m-0 max-w-[720px] font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3]">
            From optics to intelligence. Customizable at every layer.
          </h2>
        </div>

        {/* 3-Column Layout: Left Layers | Center Visual | Right Layers */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Layers */}
          <div className="w-full lg:flex-1 flex flex-col">
            {CAPABILITIES_LAYERS_LEFT.map((layer) => (
              <div
                key={layer.id}
                className="group border-l-2 border-[#000F43]/12 py-5 pl-5 flex flex-col gap-1 cursor-default transition-all duration-300 hover:!pl-3.5 hover:!border-[#005FFF] hover:bg-[linear-gradient(90deg,rgba(0,95,255,0.07),rgba(0,95,255,0))]"
              >
                <h3 className="m-0 text-[17px] font-semibold text-[#000F43]">{layer.title}</h3>
                <span className="text-sm leading-relaxed text-[#000F43]/65 transition-colors duration-300 group-hover:!text-[#000F43]">
                  {layer.description}
                </span>
              </div>
            ))}
          </div>

          {/* Center Featured Image with Zoom Effect */}
          <div className="group w-full lg:flex-1 max-w-[420px] flex justify-center py-6">
            <img
              src="https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/avior.webp"
              alt="LUXION Avior multi-sensor gimbal payload"
              className="w-full max-w-[380px] h-auto object-contain drop-shadow-[0_40px_50px_rgba(0,15,67,0.28)] transition-transform duration-800 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-104"
            />
          </div>

          {/* Right Layers */}
          <div className="w-full lg:flex-1 flex flex-col">
            {CAPABILITIES_LAYERS_RIGHT.map((layer) => (
              <div
                key={layer.id}
                className="group border-l-2 border-[#000F43]/12 py-5 pl-5 flex flex-col gap-1 cursor-default transition-all duration-300 hover:!pl-3.5 hover:!border-[#005FFF] hover:bg-[linear-gradient(90deg,rgba(0,95,255,0.07),rgba(0,95,255,0))]"
              >
                <h3 className="m-0 text-[17px] font-semibold text-[#000F43]">{layer.title}</h3>
                <span className="text-sm leading-relaxed text-[#000F43]/65 transition-colors duration-300 group-hover:!text-[#000F43]">
                  {layer.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
