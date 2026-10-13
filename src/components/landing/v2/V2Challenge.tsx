'use client';

import { APPLICATIONS_MOCK, CHALLENGE_CARDS } from '@/data/landingV2MockData';

export default function V2Challenge() {
  return (
    <section
      id="challenge"
      className="relative text-[#000F43] py-24 sm:py-32 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,95,255,0.09)_0%,rgba(245,247,251,0)_70%),linear-gradient(180deg,#F5F7FB_0%,#ECF1F9_100%)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 max-w-[760px] mx-auto text-center">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-[#000F43]/60 font-semibold">
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-transparent to-[#000F43]/35"
            />
            The challenge
            <span
              aria-hidden="true"
              className="w-12 h-px bg-gradient-to-r from-[#000F43]/35 to-transparent"
            />
          </div>

          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3]">
            Different platforms.
            <br />
            Different requirements.
          </h2>

          <p className="m-0 text-base sm:text-lg leading-relaxed text-[#000F43]/70">
            Off-the-shelf payloads rarely fit. Weight, interfaces, sensors and AI all depend on your
            platform and mission. We build around that.
          </p>
        </div>

        {/* 5-Panel Expanding Accordion (Tailwind) */}
        <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[460px]">
          {APPLICATIONS_MOCK.map((app) => (
            <div
              key={app.id}
              className="relative overflow-hidden rounded-xl text-white shadow-md cursor-pointer group flex-none md:flex-[1_1_0] min-w-0 md:min-w-[180px] h-[220px] md:h-auto transition-[flex-grow,box-shadow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:hover:flex-[2.2] hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.5)]"
            >
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.62] saturate-[0.8] transition-[transform,filter] duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105 group-hover:brightness-[0.9] group-hover:saturate-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#00061A]/95 via-[#00061A]/30 to-transparent pointer-events-none"
              />
              <div className="absolute left-6 right-6 bottom-6 flex flex-col gap-2 z-10">
                <span className="text-xs tracking-[0.1em] text-white/70 font-mono">
                  {app.number}
                </span>
                <h3 className="m-0 text-[17px] font-semibold leading-snug">{app.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-white/80 max-w-[340px] opacity-100 md:opacity-0 translate-y-0 md:translate-y-2.5 transition-[opacity,transform] duration-500 delay-100 ease-out md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Query Cards Block */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h3 className="m-0 font-eurostile text-xl font-bold uppercase text-[#000F43]">
              What&apos;s your vision challenge?
            </h3>
            <a
              className="inline-flex items-center text-white bg-[#000F43] px-5.5 py-3 rounded text-sm font-semibold min-h-[44px] no-underline shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#FFA100] hover:!text-[#000F43] hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)]"
              href="#contact"
            >
              Bring Us Your Challenge
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHALLENGE_CARDS.map((card) => (
              <div
                key={card.id}
                className="border border-[#000F43]/10 bg-white rounded-lg p-7 flex flex-col gap-2.5 shadow-sm transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:!border-[rgba(0,95,255,0.35)] hover:shadow-[0_30px_60px_-30px_rgba(0,15,67,0.35)]"
              >
                <span aria-hidden="true" className="w-6 h-0.5 bg-[#FFA100]" />
                <h4 className="m-0 text-lg font-medium leading-snug text-[#000F43]">
                  {card.question}
                </h4>
                <p className="m-0 text-sm leading-relaxed text-[#000F43]/65">{card.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
