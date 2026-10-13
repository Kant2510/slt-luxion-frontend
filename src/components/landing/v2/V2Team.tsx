'use client';

export default function V2Team() {
  return (
    <section
      id="team"
      className="relative text-[#000F43] py-24 sm:py-32 bg-[#F5F7FB] bg-[radial-gradient(50%_70%_at_85%_50%,rgba(0,95,255,0.10)_0%,rgba(245,247,251,0)_70%)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 max-w-[500px]">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#000F43]/60 font-semibold">
            <span
              aria-hidden="true"
              className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFA100]"
            />
            Team
          </div>

          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3]">
            Agile R&amp;D.
            <br />
            Field-tested engineering.
          </h2>

          <p className="m-0 text-base sm:text-lg leading-relaxed text-[#000F43]/70">
            25+ engineers across optics, mechatronics, embedded systems and AI — iterating fast in
            the lab and in the field.
          </p>

          <a
            className="self-start inline-flex items-center text-white bg-[#000F43] px-5.5 py-3 rounded text-sm font-semibold min-h-[44px] no-underline shadow-sm mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#FFA100] hover:!text-[#000F43] hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)]"
            href="#contact"
          >
            Work with our engineers
          </a>
        </div>

        {/* Right Staggered Visual Cards (Tailwind) */}
        <div className="w-full lg:flex-1 grid grid-cols-2 gap-4 sm:gap-6">
          <div className="aspect-[4/5] rounded-lg border border-[#000F43]/10 bg-gradient-to-br from-white to-[#E4EAF5] flex flex-col items-center justify-center text-center p-6 text-[#000F43]/60 text-sm shadow-sm transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:!border-[rgba(0,95,255,0.35)] hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.35)]">
            <div className="w-12 h-12 rounded-full bg-[#005FFF]/10 flex items-center justify-center mb-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#005FFF"
                strokeWidth="1.5"
              >
                <path d="M10 2v7.31L4.69 16.5A2 2 0 0 0 6.28 19.5h11.44a2 2 0 0 0 1.59-3L14 9.31V2" />
                <path d="M8.5 2h7" />
              </svg>
            </div>
            <span className="font-semibold text-sm text-[#000F43]">Optics &amp; AI Lab</span>
            <span className="text-xs text-[#000F43]/50 mt-1">Iterative hardware prototyping</span>
          </div>

          <div className="aspect-[4/5] rounded-lg border border-[#000F43]/10 bg-gradient-to-br from-white to-[#E4EAF5] flex flex-col items-center justify-center text-center p-6 text-[#000F43]/60 text-sm shadow-sm mt-8 sm:mt-12 transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:!border-[rgba(0,95,255,0.35)] hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.35)]">
            <div className="w-12 h-12 rounded-full bg-[#FFA100]/10 flex items-center justify-center mb-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFA100"
                strokeWidth="1.5"
              >
                <path d="m12 2-5.5 9h11z" />
                <path d="M12 13v9" />
                <path d="M4 18h16" />
              </svg>
            </div>
            <span className="font-semibold text-sm text-[#000F43]">Field Test Grounds</span>
            <span className="text-xs text-[#000F43]/50 mt-1">Real-flight validation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
