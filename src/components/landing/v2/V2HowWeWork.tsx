'use client';

import { HOW_WE_WORK_PATHS, WORKFLOW_STEPS } from '@/data/landingV2MockData';

export default function V2HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative text-white py-24 sm:py-32 bg-[#00061A] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,15,67,0.9)_0%,rgba(0,6,26,0)_70%)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-5 max-w-[640px]">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-white/60 font-semibold">
            <span
              aria-hidden="true"
              className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFA100]"
            />
            How we work
          </div>
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3]">
            Three ways to build with LUXION
          </h2>
        </div>

        {/* 3 Path Cards (Tailwind) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_WE_WORK_PATHS.map((path) => {
            const isP1 = path.type === 'integrate';
            const isP2 = path.type === 'customize';

            return (
              <a
                key={path.id}
                href={path.href}
                className={`group relative overflow-hidden rounded-lg p-8 sm:p-10 flex flex-col gap-5 min-h-[320px] bg-[#000820] border no-underline text-white transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 ${
                  isP1
                    ? 'border-white/10 hover:!border-[rgba(201,214,234,0.55)] hover:shadow-[0_30px_80px_-30px_rgba(201,214,234,0.35)]'
                    : isP2
                    ? 'border-[#3D85FF]/30 hover:!border-[rgba(61,133,255,0.7)] hover:shadow-[0_30px_80px_-30px_rgba(0,95,255,0.6)]'
                    : 'border-[#FFA100]/30 hover:!border-[rgba(255,161,0,0.6)] hover:shadow-[0_30px_80px_-30px_rgba(255,161,0,0.4)]'
                }`}
              >
                {/* Glow Background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-55 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                  style={{
                    background: isP1
                      ? 'radial-gradient(90% 70% at 100% 0%, rgba(201,214,234,0.16) 0%, rgba(0,6,26,0) 65%)'
                      : isP2
                      ? 'radial-gradient(90% 70% at 100% 0%, rgba(0,95,255,0.30) 0%, rgba(0,6,26,0) 65%)'
                      : 'radial-gradient(90% 70% at 100% 0%, rgba(255,161,0,0.20) 0%, rgba(0,6,26,0) 65%)',
                  }}
                />

                {/* Top Glowing Beam */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-0.5"
                  style={{
                    background: isP1
                      ? 'linear-gradient(90deg, rgba(201,214,234,0), #C9D6EA, rgba(201,214,234,0))'
                      : isP2
                      ? 'linear-gradient(90deg, rgba(61,133,255,0), #3D85FF, rgba(61,133,255,0))'
                      : 'linear-gradient(90deg, rgba(255,161,0,0), #FFA100, rgba(255,161,0,0))',
                  }}
                />

                {/* Icon */}
                {isP1 && (
                  <svg
                    aria-hidden="true"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9D6EA"
                    strokeWidth="1.4"
                    className="relative"
                  >
                    <rect x="3" y="3" width="8" height="8" rx="1" />
                    <rect x="13" y="13" width="8" height="8" rx="1" />
                    <path d="M11 7h6v6" />
                  </svg>
                )}
                {isP2 && (
                  <svg
                    aria-hidden="true"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6FA3FF"
                    strokeWidth="1.4"
                    className="relative"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                  </svg>
                )}
                {!isP1 && !isP2 && (
                  <svg
                    aria-hidden="true"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFA100"
                    strokeWidth="1.4"
                    className="relative"
                  >
                    <circle cx="9" cy="12" r="6" />
                    <circle cx="15" cy="12" r="6" />
                  </svg>
                )}

                {/* Code Subheading */}
                <span
                  className="relative text-[13px] tracking-[0.1em] font-mono font-bold"
                  style={{
                    color: isP1 ? '#C9D6EA' : isP2 ? '#8DB6FF' : '#FFA100',
                  }}
                >
                  {path.code}
                </span>

                {/* Title */}
                <p className="relative m-0 font-eurostile text-lg sm:text-xl font-bold uppercase leading-snug">
                  {path.title}
                </p>

                {/* Description */}
                <p className="relative m-0 text-sm leading-relaxed text-white/65 flex-grow">
                  {path.description}
                </p>

                {/* CTA Link */}
                <span
                  className="relative inline-flex items-center gap-2 text-sm font-semibold mt-2"
                  style={{
                    color: isP1 ? '#C9D6EA' : isP2 ? '#8DB6FF' : '#FFA100',
                  }}
                >
                  {path.ctaText}
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>

        {/* Workflow Stage Pipeline */}
        <ol className="list-none m-0 p-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm text-white/60 font-medium pt-4">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isLast = idx === WORKFLOW_STEPS.length - 1;
            return (
              <li key={step} className="flex items-center gap-3 sm:gap-4">
                <span className={isLast ? 'text-[#FFA100] font-bold' : ''}>{step}</span>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="w-7 sm:w-10 h-px bg-white/20 inline-block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
