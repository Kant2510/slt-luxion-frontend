import { KitTiersData } from '@/types/platform';

interface KitTiersSectionProps {
  data: KitTiersData;
}

export default function KitTiersSection({ data }: KitTiersSectionProps) {
  return (
    <section
      id={data.id}
      className="py-24 sm:py-32 text-white bg-[#00061A]"
      style={{
        backgroundImage:
          'radial-gradient(70% 50% at 50% 0%, rgba(0,15,67,0.9) 0%, rgba(0,6,26,0) 70%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[760px] mx-auto">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase font-semibold text-white/60">
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-transparent to-white/40"
            />
            {data.tagline}
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-white/40 to-transparent"
            />
          </div>
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-white">
            {data.title}
          </h2>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {data.tiers.map((tier) => {
            const isRecommended = tier.isRecommended;

            return (
              <div
                key={tier.code}
                className={`relative rounded-xl overflow-hidden flex flex-col transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-2 ${
                  isRecommended
                    ? 'border border-[#FFA100]/45 bg-[#000820] shadow-[0_30px_70px_-30px_rgba(255,161,0,0.3)] hover:border-[#FFA100] hover:shadow-[0_40px_80px_-40px_rgba(255,161,0,0.5)]'
                    : 'border border-white/10 bg-[#000820] hover:border-[#3D85FF]/55 hover:shadow-[0_40px_80px_-40px_rgba(0,95,255,0.55)]'
                }`}
                style={
                  isRecommended
                    ? {
                        backgroundImage:
                          'radial-gradient(90% 60% at 50% 0%, rgba(255,161,0,0.10) 0%, rgba(0,8,32,0) 70%)',
                      }
                    : undefined
                }
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <span className="absolute top-4 right-4 z-10 text-[11px] font-sans font-bold tracking-[0.08em] text-[#000F43] bg-[#FFA100] px-2.5 py-1 rounded">
                    RECOMMENDED
                  </span>
                )}

                {/* Contents visual/placeholder */}
                <div className="h-[200px] flex items-center justify-center border-b border-dashed border-white/12 text-white/45 text-xs sm:text-sm text-center p-4 font-square">
                  {tier.imagePlaceholder || '[Kit contents preview]'}
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex flex-col gap-5 flex-grow">
                  <div>
                    <span
                      className={`text-xs font-sans font-bold tracking-widest ${
                        isRecommended ? 'text-[#FFA100]' : 'text-white/55'
                      }`}
                    >
                      {tier.stepNumber}
                    </span>
                    <h3 className="m-0 mt-1 font-eurostile text-xl sm:text-2xl font-bold uppercase leading-tight text-white">
                      {tier.name}
                    </h3>
                    <p className="m-0 mt-1.5 text-sm text-white/60 font-square">
                      {tier.description}
                    </p>
                  </div>

                  {/* Bullet list of inclusions */}
                  <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-sm sm:text-[15px] font-square flex-grow">
                    {tier.contents.map((content, cIdx) => {
                      const isInherited = content.startsWith('Everything in');
                      return (
                        <li
                          key={cIdx}
                          className={`flex items-start gap-2.5 ${
                            isInherited ? 'text-white/60' : 'text-white/90'
                          }`}
                        >
                          <svg
                            aria-hidden="true"
                            className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${
                              isRecommended ? 'text-[#FFA100]' : 'text-[#3D85FF]'
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                          <span>{content}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Action CTA */}
                  <div className="pt-2">
                    {isRecommended ? (
                      <a
                        href="#quote"
                        className="w-full inline-flex items-center justify-center px-5 py-3 rounded text-[#00061A] bg-white font-semibold text-sm min-h-[44px] no-underline transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)] cursor-pointer"
                      >
                        Request a Quote
                      </a>
                    ) : (
                      <a
                        href="#quote"
                        className="w-full inline-flex items-center justify-center px-5 py-3 rounded text-white border border-white/25 bg-transparent font-medium text-sm min-h-[44px] no-underline transition-all duration-300 hover:border-[#FFA100] hover:bg-[#FFA100]/[0.08] hover:text-white hover:-translate-y-0.5 cursor-pointer"
                      >
                        Request a Quote
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
