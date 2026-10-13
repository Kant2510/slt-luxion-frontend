import { ModelsData } from '@/types/platform';

interface ModelsSectionProps {
  data: ModelsData;
}

export default function ModelsSection({ data }: ModelsSectionProps) {
  return (
    <section
      id={data.id}
      className="py-24 sm:py-32 text-[#000F43]"
      style={{
        background:
          'radial-gradient(60% 60% at 50% 0%, rgba(0,95,255,0.09) 0%, rgba(245,247,251,0) 70%), linear-gradient(180deg, #F5F7FB 0%, #ECF1F9 100%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[760px] mx-auto">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase font-semibold text-[#000F43]/60">
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-transparent to-[#000F43]/35"
            />
            {data.tagline}
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-[#000F43]/35 to-transparent"
            />
          </div>
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-[#000F43]">
            {data.title}
          </h2>
          <p className="m-0 font-square text-base sm:text-lg leading-[30px] text-[#000F43]/70">
            {data.description}
          </p>
        </div>

        {/* 2 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {data.models.map((model) => {
            const isComingSoon = model.isComingSoon;

            return (
              <div
                key={model.id}
                className={`group relative rounded-xl overflow-hidden flex flex-col transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 ${
                  isComingSoon
                    ? 'border border-dashed border-[#000F43]/20 bg-white/55 hover:border-[#000F43]/40'
                    : 'border border-[#005FFF]/30 bg-white shadow-[0_30px_60px_-40px_rgba(0,15,67,0.45)] hover:border-[#005FFF]/60 hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.35)]'
                }`}
              >
                {/* Gradient Stripe for active product */}
                {!isComingSoon && (
                  <div
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#005FFF] to-[#FFA100]"
                  />
                )}

                {/* Status Badge */}
                <span
                  className={`absolute top-4 left-4 z-10 text-[11px] font-sans font-bold tracking-[0.08em] px-2.5 py-1 rounded ${
                    isComingSoon
                      ? 'text-[#000F43] bg-[#FFA100]'
                      : 'text-white bg-[#000F43]'
                  }`}
                >
                  {model.badge}
                </span>

                {/* Model Image Frame */}
                <div
                  className={`h-[260px] flex items-center justify-center overflow-hidden ${
                    isComingSoon
                      ? 'bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.08)_0%,rgba(236,241,249,0.4)_60%,rgba(245,247,251,0)_100%)]'
                      : 'bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.14)_0%,rgba(236,241,249,0.6)_60%,#F5F7FB_100%)]'
                  }`}
                >
                  <img
                    src={model.image}
                    alt={model.imageAlt}
                    className={`h-[210px] w-auto object-contain transition-transform duration-800 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-106 ${
                      isComingSoon
                        ? 'opacity-55 grayscale-[0.4] drop-shadow-[0_24px_30px_rgba(0,15,67,0.2)]'
                        : 'drop-shadow-[0_24px_30px_rgba(0,15,67,0.25)]'
                    }`}
                  />
                </div>

                {/* Details Body */}
                <div className="p-7 sm:p-8 flex flex-col gap-5 flex-grow">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="m-0 font-eurostile text-xl sm:text-2xl font-bold uppercase leading-tight text-[#000F43]">
                        {model.name}
                      </h3>
                      <p className="m-0 mt-1 text-sm text-[#000F43]/65 font-square">
                        {model.tagline}
                      </p>
                    </div>

                    <a
                      href={model.ctaHref}
                      className={`inline-flex items-center px-4.5 py-2.5 rounded font-semibold text-sm min-h-[44px] no-underline transition-all duration-300 cursor-pointer ${
                        isComingSoon
                          ? 'text-[#000F43] border border-[#000F43]/30 bg-transparent hover:bg-[#000F43] hover:text-white'
                          : 'text-white bg-[#000F43] hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)]'
                      }`}
                    >
                      {model.ctaLabel}
                    </a>
                  </div>

                  {/* Specs Breakdown */}
                  <dl className="m-0 grid grid-cols-3 gap-4 border-t border-[#000F43]/10 pt-4 font-square">
                    {model.specs.map((sp, sIdx) => (
                      <div key={sIdx}>
                        <dt className="text-xs font-sans tracking-wide text-[#000F43]/55 font-semibold">
                          {sp.label}
                        </dt>
                        <dd className="m-0 mt-1 font-eurostile text-lg sm:text-xl font-bold text-[#000F43]">
                          {sp.value}
                        </dd>
                        {sp.subvalue && (
                          <dd className="m-0 mt-0.5 text-xs text-[#000F43]/60 leading-tight">
                            {sp.subvalue}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="m-0 text-center text-sm sm:text-base text-[#000F43]/65 font-square">
          {data.bottomNote}
        </p>
      </div>
    </section>
  );
}
