import { ZoomShowcaseData } from '@/types/platform';

interface ZoomShowcaseSectionProps {
  data: ZoomShowcaseData;
}

export default function ZoomShowcaseSection({ data }: ZoomShowcaseSectionProps) {
  return (
    <section
      id={data.id}
      className="py-24 sm:py-32 text-white bg-[#00061A]"
      style={{
        backgroundImage:
          'radial-gradient(60% 50% at 50% 0%, rgba(0,15,67,0.9) 0%, rgba(0,6,26,0) 70%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-6">
        {/* Large Cinematic Zoom Card */}
        <div className="group relative overflow-hidden rounded-xl min-h-[560px] flex items-end border border-white/6 shadow-2xl">
          {/* Background image */}
          <img
            src={data.backgroundImage}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.70] saturate-[0.85] transition-all duration-800 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:brightness-[0.88] group-hover:saturate-100 group-hover:scale-104"
          />

          {/* Vignette & Contrast Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#00061A]/95 via-[#00061A]/30 to-[#00061A]/70"
          />

          {/* Foreground Content */}
          <div className="relative p-8 sm:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 w-full">
            <div className="flex flex-col gap-4 max-w-[540px]">
              <span className="text-xs font-sans tracking-[0.1em] text-[#FFA100] uppercase font-bold">
                {data.badge}
              </span>
              <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-white">
                {data.title}
              </h2>
              <p className="m-0 font-square text-base sm:text-lg leading-[28px] text-white/80">
                {data.description}
              </p>
            </div>

            {/* Zoom Factor Big Callouts */}
            <div className="flex items-end gap-8 shrink-0">
              {data.zoomCallouts.map((callout, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${callout.isMuted ? 'opacity-55' : 'opacity-100'}`}
                >
                  <span className="font-eurostile text-4xl sm:text-5xl font-black text-white leading-none">
                    {callout.value}
                  </span>
                  <span className="text-xs sm:text-sm text-white/70 font-square mt-1">
                    {callout.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Interactive Clip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.clips.map((clip, idx) => (
            <div
              key={idx}
              className="group rounded-lg border border-white/8 bg-white/[0.02] p-5 flex items-center gap-3.5 text-sm sm:text-base text-white/80 font-square cursor-pointer transition-all duration-350 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1 hover:border-[#3D85FF]/45 hover:bg-[#005FFF]/[0.08] hover:shadow-[0_20px_50px_-20px_rgba(0,95,255,0.4)]"
            >
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-white opacity-70 transition-all duration-300 group-hover:scale-115 group-hover:opacity-100 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l6 4-6 4z" fill="currentColor" />
              </svg>
              <span className="font-medium text-white/90 group-hover:text-white transition-colors">
                {clip.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
