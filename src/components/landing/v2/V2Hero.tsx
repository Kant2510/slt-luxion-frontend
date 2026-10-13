'use client';

import { useRef } from 'react';
import { HERO_STATS } from '@/data/landingV2MockData';

export default function V2Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    const x = (((e.clientX - r.left) / r.width) * 100).toFixed(1);
    const y = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
    heroRef.current.style.setProperty('--x', `${x}%`);
    heroRef.current.style.setProperty('--y', `${y}%`);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      data-spot="hero"
      className="relative min-h-[820px] flex flex-col justify-center bg-[#00061A] overflow-hidden bg-[radial-gradient(70%_60%_at_75%_45%,rgba(0,15,67,0.95)_0%,rgba(0,6,26,0)_70%),radial-gradient(50%_40%_at_10%_100%,rgba(0,95,255,0.10)_0%,rgba(0,6,26,0)_70%)]"
    >
      {/* Interactive Cursor Spotlight (Tailwind) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(520px_circle_at_var(--x,70%)_var(--y,40%),rgba(61,133,255,0.14),transparent_70%)]"
      />

      {/* Background Image & Gradient Overlays */}
      <img
        src="/images/background/main-bg.webp"
        alt="A LUXION multi-sensor camera payload under a drone, glowing over a city and lake at night"
        className="absolute inset-0 w-full h-full object-cover object-[8%_center] pointer-events-none opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(0,6,26,0.92)_0%,rgba(0,6,26,0.7)_30%,rgba(0,6,26,0.15)_58%,rgba(0,6,26,0)_75%),linear-gradient(180deg,rgba(0,6,26,0.55)_0%,rgba(0,6,26,0)_22%,rgba(0,6,26,0)_62%,#00061A_100%)]"
      />

      {/* Main Content */}
      <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-16 flex flex-col gap-24 lg:gap-32">
        <div className="max-w-[620px] flex flex-col gap-8">
          {/* Pill Badge */}
          <div className="inline-flex self-start items-center gap-2.5 text-xs tracking-[0.1em] uppercase text-white/75 border border-white/15 bg-white/5 px-3.5 py-2 rounded">
            Camera payloads for autonomous systems
          </div>

          {/* Heading */}
          <h1 className="m-0 font-eurostile text-3xl sm:text-5xl lg:text-[48px] font-black uppercase tracking-[0.01em] leading-[1.18]">
            Your platform.
            <br />
            Your mission.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-[#8DB6FF] bg-clip-text text-transparent">
              Vision engineered to fit.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="m-0 text-base sm:text-lg leading-relaxed text-white/70 max-w-[500px]">
            An agile R&amp;D team that designs, customizes and co-develops camera payloads — from
            first concept to field-ready hardware.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              className="group text-[#00061A] bg-white px-6 py-3.5 rounded font-bold text-sm inline-flex items-center gap-2.5 min-h-[48px] no-underline shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#FFA100] hover:!text-[#000F43] hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)]"
              href="#contact"
            >
              Bring Us Your Challenge
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              className="text-white border border-white/25 px-6 py-3.5 rounded font-semibold text-sm inline-flex items-center min-h-[48px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:!border-[#FFA100] hover:!bg-[#FFA100]/[0.08] hover:!text-white hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)]"
              href="#platforms"
            >
              Explore Our Platforms
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          id="in-house"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
        >
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="font-eurostile text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
