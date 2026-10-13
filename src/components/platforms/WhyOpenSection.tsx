import { WhyOpenData } from '@/types/platform';

interface WhyOpenSectionProps {
  data: WhyOpenData;
}

export default function WhyOpenSection({ data }: WhyOpenSectionProps) {
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
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 max-w-[760px] mx-auto text-center">
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

          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-[#000F43] whitespace-pre-line">
            {data.title}
          </h2>

          <p className="m-0 font-square text-base sm:text-lg leading-[30px] text-[#000F43]/70">
            {data.description}
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Typical Gimbal Card */}
          <div className="rounded-xl border border-[#000F43]/10 bg-white/60 p-8 flex flex-col gap-5">
            <span className="text-xs tracking-[0.1em] font-sans font-bold text-[#000F43]/55 uppercase">
              {data.typicalTitle}
            </span>
            <ul className="list-none m-0 p-0 flex flex-col gap-3.5 text-sm sm:text-base text-[#000F43]/65 font-square">
              {data.typicalItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span aria-hidden="true" className="text-[#000F43]/35 font-bold shrink-0">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LUXION Dev Kit L1 Card */}
          <div className="relative overflow-hidden rounded-xl border border-[#005FFF]/30 bg-white p-8 flex flex-col gap-5 shadow-[0_30px_60px_-40px_rgba(0,15,67,0.4)] transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:border-[#005FFF]/60 hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.35)]">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#005FFF] to-[#FFA100]"
            />
            <span className="text-xs tracking-[0.1em] font-sans font-bold text-[#005FFF] uppercase">
              {data.luxionTitle}
            </span>
            <ul className="list-none m-0 p-0 flex flex-col gap-3.5 text-sm sm:text-base text-[#000F43] font-square">
              {data.luxionItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-[#005FFF] shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Audience Badges */}
        {data.targetAudiences && data.targetAudiences.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <span className="text-sm text-[#000F43]/60 py-2 px-1 font-square">
              Built for
            </span>
            {data.targetAudiences.map((aud, idx) => (
              <span
                key={idx}
                className="text-sm font-square border border-[#000F43]/14 bg-white px-3.5 py-2 rounded-md shadow-2xs text-[#000F43]/85"
              >
                {aud}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
