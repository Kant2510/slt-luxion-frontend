'use client';

import { CtaBandData } from '@/types/platform';

interface CtaBandSectionProps {
  data: CtaBandData;
}

export default function CtaBandSection({ data }: CtaBandSectionProps) {
  return (
    <section
      id={data.id}
      className="relative overflow-hidden text-white bg-[#00061A]"
      style={{
        backgroundImage:
          'radial-gradient(70% 90% at 100% 50%, rgba(255,161,0,0.12) 0%, rgba(0,6,26,0) 60%), radial-gradient(60% 80% at 0% 50%, rgba(0,95,255,0.16) 0%, rgba(0,6,26,0) 60%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-28 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Copy */}
        <div className="flex-1 flex flex-col gap-4 max-w-[580px]">
          <span className="text-xs tracking-[0.1em] text-[#FFA100] font-sans uppercase font-bold">
            {data.badge}
          </span>
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-white">
            {data.title}
          </h2>
          <p className="m-0 font-square text-base sm:text-lg leading-[28px] text-white/65">
            {data.description}
          </p>
        </div>

        {/* Right CTA Button */}
        <div>
          <a
            href={data.ctaHref}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded text-[#00061A] bg-white font-semibold text-sm min-h-[48px] no-underline transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)] cursor-pointer"
          >
            {data.ctaLabel}
            <svg
              aria-hidden="true"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
