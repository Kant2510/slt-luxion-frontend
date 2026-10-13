'use client';

import { FOOTAGE_CLIPS_MOCK } from '@/data/landingV2MockData';

export default function V2Footage() {
  return (
    <section
      id="footage"
      className="relative text-white pb-32 bg-[#00061A] bg-[radial-gradient(60%_50%_at_50%_100%,rgba(0,15,67,0.9)_0%,rgba(0,6,26,0)_70%)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-6">
        {/* Banner with Video/Image Preview (Tailwind) */}
        <div className="group relative overflow-hidden rounded-xl min-h-[480px] sm:min-h-[560px] flex items-end text-white border border-white/6">
          <img
            src="/images/background/extra-bg.webp"
            alt="A drone carrying a LUXION Voris payload over a city, with an inset of the zoomed camera view of a bridge"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.7] saturate-[0.85] transition-all duration-800 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-104 group-hover:brightness-[0.88] group-hover:saturate-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,6,26,0.92)_0%,rgba(0,6,26,0.25)_45%,rgba(0,6,26,0)_70%)] pointer-events-none"
          />

          <div className="relative p-8 sm:p-12 flex flex-wrap justify-between items-end gap-6 w-full z-10">
            <div className="flex flex-col gap-4 max-w-[480px]">
              <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3]">
                See what it sees
              </h2>
              <p className="m-0 text-base sm:text-lg text-white/80 leading-relaxed">
                Long-range zoom, thermal and on-board AI tracking, captured in flight.
              </p>
            </div>

            <a
              className="inline-flex items-center text-[#00061A] bg-white px-5.5 py-3 rounded text-sm font-bold min-h-[44px] no-underline shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#FFA100] hover:!text-[#000F43] hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)]"
              href="#contact"
            >
              Request a Live Demo
            </a>
          </div>
        </div>

        {/* 4 Interactive Clip Triggers (Tailwind) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FOOTAGE_CLIPS_MOCK.map((clip) => (
            <div
              key={clip.id}
              className="group border border-white/8 bg-white/2 rounded-lg p-5 flex items-center gap-3.5 text-sm text-white/80 cursor-pointer transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:!border-[rgba(61,133,255,0.45)] hover:!bg-[radial-gradient(120%_90%_at_50%_0%,rgba(0,95,255,0.16),rgba(255,255,255,0.02)_70%)] hover:shadow-[0_30px_80px_-30px_rgba(0,95,255,0.45)] hover:text-white"
            >
              <svg
                aria-hidden="true"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                className="opacity-70 transition-all duration-350 group-hover:scale-115 group-hover:opacity-100 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l6 4-6 4z" />
              </svg>
              <span>{clip.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
