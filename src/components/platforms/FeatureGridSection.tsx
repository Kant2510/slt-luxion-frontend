'use client';

import { FeatureGridData } from '@/types/platform';

interface FeatureGridSectionProps {
  data: FeatureGridData;
}

export default function FeatureGridSection({ data }: FeatureGridSectionProps) {
  const isDark = data.theme === 'dark';

  return (
    <section
      id={data.id}
      className={`py-24 sm:py-32 relative text-white ${
        isDark
          ? 'bg-[#00061A] bg-[radial-gradient(45%_55%_at_50%_50%,rgba(0,95,255,0.15)_0%,rgba(0,15,67,0.5)_40%,rgba(0,6,26,0)_75%)]'
          : 'bg-[#F5F7FB] text-[#000F43]'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-5 max-w-[640px]">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase font-semibold text-white/60">
            <span
              aria-hidden="true"
              className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFA100]"
            />
            {data.tagline}
          </div>
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-white">
            {data.title}
          </h2>
          {data.description && (
            <p className="m-0 font-square text-base sm:text-lg leading-[28px] text-white/70">
              {data.description}
            </p>
          )}
        </div>

        {/* Grid of Cards */}
        <div
          className={`grid gap-6 ${
            data.columns === 6
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-3'
          }`}
        >
          {data.cards.map((card) => (
            <div
              key={card.id}
              className="group rounded-xl overflow-hidden flex flex-col bg-white/[0.02] border border-white/8 transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:!border-[rgba(61,133,255,0.45)] hover:bg-[radial-gradient(120%_90%_at_50%_0%,rgba(0,95,255,0.16),rgba(255,255,255,0.02)_70%)] hover:shadow-[0_30px_80px_-30px_rgba(0,95,255,0.45)]"
            >
              {/* Optional Visual Image Banner */}
              {card.image && (
                <div className="aspect-[3/2] overflow-hidden border-b border-white/6 bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.2)_0%,rgba(0,15,67,0.4)_50%,rgba(0,6,26,0)_100%)] flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-7 flex flex-col gap-3.5 flex-grow">
                {card.badge && (
                  <span className="text-xs tracking-[0.1em] font-sans text-white/55 uppercase font-semibold">
                    {card.badge}
                  </span>
                )}
                <h3 className="m-0 font-eurostile text-base sm:text-lg font-bold uppercase leading-snug text-white">
                  {card.title}
                </h3>

                {/* Details List */}
                {card.details && card.details.length > 0 && (
                  <dl className="m-0 flex flex-col gap-2.5 text-sm font-square leading-[22px] pt-1">
                    {card.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                        {detail.label && (
                          <dt className="text-white/55 sm:min-w-[85px] shrink-0">
                            {detail.label}
                          </dt>
                        )}
                        <dd className="m-0 text-white/85">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
