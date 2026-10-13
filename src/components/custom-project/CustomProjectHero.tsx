'use client';

import Link from 'next/link';

export default function CustomProjectHero() {
  return (
    <section
      className="relative overflow-hidden text-white bg-[#00061A]"
      style={{
        backgroundImage:
          'radial-gradient(60% 80% at 80% 0%, rgba(255,161,0,0.10) 0%, rgba(0,6,26,0) 60%), radial-gradient(60% 80% at 10% 100%, rgba(0,95,255,0.18) 0%, rgba(0,6,26,0) 60%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-20 sm:pb-24 flex flex-col gap-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/50 font-sans">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-250 no-underline text-white/60"
          >
            Home
          </Link>
          <span className="text-white/30" aria-hidden="true">
            /
          </span>
          <Link
            href="/#how-we-work"
            className="hover:text-white transition-colors duration-250 no-underline text-white/60"
          >
            How We Work
          </Link>
          <span className="text-white/30" aria-hidden="true">
            /
          </span>
          <span className="text-white/85 font-medium">Custom Project</span>
        </div>

        {/* 2-Column Hero Header */}
        <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-end justify-between">
          <div className="flex-1 flex flex-col gap-6 max-w-[580px]">
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2.5 text-xs uppercase tracking-[0.1em] text-white/75 border border-white/14 bg-white/[0.03] px-3.5 py-2 rounded backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#FFA100] shadow-[0_0_12px_#FFA100]"
              />
              Custom engineering · Joint R&amp;D
            </div>

            {/* Title */}
            <h1 className="m-0 font-eurostile text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.18] tracking-tight">
              Start a<br />
              <span className="bg-gradient-to-r from-white via-white/95 to-[#8DB6FF] bg-clip-text text-transparent block mt-1">
                custom project.
              </span>
            </h1>

            {/* Description */}
            <p className="m-0 font-square text-base sm:text-lg leading-[30px] text-white/70 max-w-[560px]">
              Tell us about your platform and the vision problem you need solved — in your own words. Our engineers take it from there.
            </p>
          </div>

          {/* Right IP Guarantee Card */}
          <div className="flex items-center gap-3.5 p-4.5 sm:p-5 border border-[#FFA100]/35 rounded-lg bg-[#FFA100]/[0.05] max-w-[420px]">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-[#FFA100] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="text-sm sm:text-[15px] leading-[22px] font-square text-white/90">
              <span className="text-[#FFA100] font-semibold">Your IP stays yours.</span>{' '}
              NDA available before any technical discussion.
            </span>
          </div>
        </div>

        {/* 3-Step Process Overview */}
        <ol className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <li className="border-t border-white/14 pt-4.5 flex flex-col gap-1.5 font-square">
            <span className="text-xs tracking-[0.1em] text-[#FFA100] font-sans font-semibold">
              01 · ABOUT 2 MINUTES
            </span>
            <span className="text-base sm:text-[17px] font-medium text-white">
              Tell us what you need
            </span>
            <span className="text-sm text-white/60">
              Your contact details and a short description.
            </span>
          </li>
          <li className="border-t border-white/14 pt-4.5 flex flex-col gap-1.5 font-square">
            <span className="text-xs tracking-[0.1em] text-[#FFA100] font-sans font-semibold">
              02 · WITHIN [X] BUSINESS DAYS
            </span>
            <span className="text-base sm:text-[17px] font-medium text-white">
              An engineer replies
            </span>
            <span className="text-sm text-white/60">
              With first questions and a feasibility view.
            </span>
          </li>
          <li className="border-t border-white/14 pt-4.5 flex flex-col gap-1.5 font-square">
            <span className="text-xs tracking-[0.1em] text-[#FFA100] font-sans font-semibold">
              03 · UNDER NDA
            </span>
            <span className="text-base sm:text-[17px] font-medium text-white">
              Technical deep-dive
            </span>
            <span className="text-sm text-white/60">
              Then a proposal: scope, timeline and NRE.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
