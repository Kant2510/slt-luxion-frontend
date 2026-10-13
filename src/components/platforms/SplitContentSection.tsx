'use client';

import { SplitContentData } from '@/types/platform';

interface SplitContentSectionProps {
  data: SplitContentData;
}

export default function SplitContentSection({ data }: SplitContentSectionProps) {
  const isDark = data.theme === 'dark';

  return (
    <section
      id={data.id}
      className={`py-24 sm:py-32 ${
        isDark
          ? 'bg-[#00061A] text-white'
          : 'bg-gradient-to-b from-[#F5F7FB] to-[#E9EEF7] text-[#000F43]'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left column: Text & List */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Tagline */}
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase font-semibold text-[#000F43]/60">
            <span
              aria-hidden="true"
              className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFA100]"
            />
            {data.tagline}
          </div>

          {/* Heading */}
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-[#000F43]">
            {data.title}
          </h2>

          {/* Description */}
          <p className="m-0 font-square text-base sm:text-lg leading-[28px] text-[#000F43]/70">
            {data.description}
          </p>

          {/* Key-Value Items */}
          <ul className="list-none m-0 p-0 flex flex-col pt-2">
            {data.items.map((item, idx) => (
              <li
                key={idx}
                className="group py-3.5 border-t border-[#000F43]/10 last:border-b last:border-[#000F43]/10 flex justify-between items-center gap-4 text-sm sm:text-base font-square transition-colors duration-250 hover:bg-[#005FFF]/[0.04] px-2 rounded-sm"
              >
                <span className="font-medium text-[#000F43]">{item.label}</span>
                <span className="text-[#000F43]/65 text-right font-normal">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-2">
            <a
              href={data.cta.href}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded text-white bg-[#000F43] font-semibold text-sm min-h-[44px] no-underline transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)] cursor-pointer"
            >
              {data.cta.label}
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* Right column: Interactive Visual (Code or Image Placeholder) */}
        <div className="flex-1 w-full">
          {data.sideContent.type === 'code' ? (
            <div className="w-full rounded-xl bg-[#00061A] text-white/85 shadow-[0_40px_80px_-40px_rgba(0,15,67,0.55)] border border-white/10 overflow-hidden font-mono">
              {/* Terminal Window Header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 text-xs text-white/55">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-2 font-mono">{data.sideContent.header}</span>
              </div>

              {/* Code Content */}
              <pre className="m-0 p-6 text-[13px] sm:text-sm leading-[26px] overflow-x-auto whitespace-pre text-white/90">
                <code>{data.sideContent.content}</code>
              </pre>
            </div>
          ) : (
            <div className="w-full min-h-[380px] rounded-xl border border-dashed border-[#000F43]/20 bg-gradient-to-br from-white to-[#E4EAF5] flex items-center justify-center text-center p-6 text-[#000F43]/50 text-sm shadow-inner">
              <span>{data.sideContent.text}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
