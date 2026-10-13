import { AssemblyData } from '@/types/platform';

interface AssemblySectionProps {
  data: AssemblyData;
}

export default function AssemblySection({ data }: AssemblySectionProps) {
  return (
    <section
      id={data.id}
      className="py-24 sm:py-32 text-white bg-[#00061A]"
      style={{
        backgroundImage:
          'radial-gradient(60% 50% at 50% 0%, rgba(0,15,67,0.9) 0%, rgba(0,6,26,0) 70%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
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
            <p className="m-0 font-square text-base sm:text-lg leading-[28px] text-white/65">
              {data.description}
            </p>
          </div>

          <span className="text-sm text-white/60 font-square shrink-0">
            {data.guideBadge}
          </span>
        </div>

        {/* 5 Numbered Assembly Steps */}
        <ol className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.steps.map((item) => (
            <li
              key={item.step}
              className="group rounded-lg border border-white/8 bg-white/[0.02] p-6 flex flex-col gap-3.5 transition-all duration-350 hover:border-[#FFA100]/50 hover:bg-[#FFA100]/[0.04]"
            >
              {/* Step Number Circle */}
              <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-sm font-sans text-white/80 transition-colors duration-350 group-hover:text-[#FFA100] group-hover:border-[#FFA100]">
                {item.step}
              </span>
              <strong className="font-eurostile text-base sm:text-[17px] font-bold text-white">
                {item.title}
              </strong>
              <span className="text-sm font-square text-white/60 leading-[22px]">
                {item.description}
              </span>
            </li>
          ))}
        </ol>

        {/* Visual Media Placeholder Box */}
        <div className="rounded-xl border border-dashed border-white/18 min-h-[280px] flex items-center justify-center text-center p-6 text-white/45 text-sm font-square bg-white/[0.01]">
          {data.mediaPlaceholder}
        </div>
      </div>
    </section>
  );
}
