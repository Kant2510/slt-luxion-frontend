import { IntegrationsData } from '@/types/platform';

interface IntegrationsSectionProps {
  data: IntegrationsData;
}

export default function IntegrationsSection({ data }: IntegrationsSectionProps) {
  return (
    <section
      id={data.id}
      className="py-24 sm:py-32 text-[#000F43] bg-[#F5F7FB]"
      style={{
        backgroundImage:
          'radial-gradient(50% 60% at 85% 40%, rgba(0,95,255,0.10) 0%, rgba(245,247,251,0) 70%)',
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
        </div>

        {/* Large Visual Feature Banner */}
        <div className="group rounded-xl overflow-hidden aspect-video shadow-[0_40px_80px_-40px_rgba(0,15,67,0.5)] bg-slate-900 border border-[#000F43]/10">
          <img
            src={data.bannerImage}
            alt={data.bannerAlt}
            className="w-full h-full object-cover block transition-transform duration-800 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-104"
          />
        </div>

        {/* 4 Integration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#000F43]/8 bg-white p-7 flex flex-col gap-3 transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:border-[#005FFF]/35 hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.35)]"
            >
              <span aria-hidden="true" className="w-6 h-0.5 bg-[#FFA100]" />
              <h3 className="m-0 font-eurostile text-base sm:text-[17px] font-bold uppercase text-[#000F43]">
                {card.title}
              </h3>
              <p className="m-0 font-square text-sm leading-[22px] text-[#000F43]/65">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
