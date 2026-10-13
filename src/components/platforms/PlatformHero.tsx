'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PlatformHeroData } from '@/types/platform';

interface PlatformHeroProps {
  data: PlatformHeroData;
}

export default function PlatformHero({ data }: PlatformHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 70, y: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    setMousePos({ x: parseFloat(x), y: parseFloat(y) });
  };

  return (
    <section
      id="overview"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#00061A] text-white"
      style={{
        backgroundImage:
          'radial-gradient(55% 65% at 72% 50%, rgba(0,95,255,0.22) 0%, rgba(0,15,67,0.7) 40%, rgba(0,6,26,0) 75%)',
      }}
    >
      {/* Dynamic interactive spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(520px circle at ${mousePos.x}% ${mousePos.y}%, rgba(61,133,255,0.14), transparent 70%)`,
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-16 flex flex-col gap-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/50 font-sans">
          {data.breadcrumbs.map((crumb, idx) => {
            const isLast = idx === data.breadcrumbs.length - 1;
            return (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-white/30" aria-hidden="true">/</span>}
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors duration-250 no-underline text-white/60"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/85 font-medium">{crumb.label}</span>
                )}
              </span>
            );
          })}
        </div>

        {/* In-page local nav */}
        {data.inPageNav && data.inPageNav.length > 0 && (
          <nav
            aria-label="On this page"
            className="flex flex-wrap gap-1 -mt-8 border-b border-white/8 pb-3 text-sm font-sans"
          >
            {data.inPageNav.map((navItem, idx) => (
              <a
                key={idx}
                href={navItem.href}
                className="no-underline text-white/60 px-3.5 py-1.5 rounded transition-colors duration-250 hover:text-white hover:bg-white/[0.06]"
              >
                {navItem.label}
              </a>
            ))}
          </nav>
        )}

        {/* 2-Column Hero Area */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Copy & Actions */}
          <div className="flex-1 flex flex-col gap-7">
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2.5 text-xs uppercase tracking-[0.1em] text-white/75 border border-white/14 bg-white/[0.03] px-3.5 py-2 rounded backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#FFA100] shadow-[0_0_12px_#FFA100]"
              />
              {data.badge}
            </div>

            {/* Title */}
            <h1 className="m-0 font-eurostile text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.18] tracking-tight">
              {data.title}
              <br />
              <span className="bg-gradient-to-r from-white via-white/95 to-[#8DB6FF] bg-clip-text text-transparent block mt-1">
                {data.titleHighlight}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="m-0 font-square text-base sm:text-lg leading-[30px] text-white/70 max-w-[540px]">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={data.primaryCta.href}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded text-[#00061A] bg-white font-semibold text-sm min-h-[48px] no-underline transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)] cursor-pointer"
              >
                {data.primaryCta.label}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              {data.secondaryCta && (
                <a
                  href={data.secondaryCta.href}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded text-white border border-white/22 bg-transparent text-sm font-medium min-h-[48px] no-underline transition-all duration-300 hover:border-[#FFA100] hover:bg-[#FFA100]/[0.08] hover:text-white hover:-translate-y-0.5 cursor-pointer"
                >
                  {data.secondaryCta.icon === 'github' && (
                    <svg
                      aria-hidden="true"
                      className="w-4.5 h-4.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                    </svg>
                  )}
                  {data.secondaryCta.label}
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="group flex-1 flex justify-center items-center py-4">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="w-full max-w-[440px] h-auto object-contain block drop-shadow-[0_30px_60px_rgba(0,95,255,0.3)] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-104"
            />
          </div>
        </div>

        {/* Stats Grid */}
        {data.stats && data.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 border-t border-white/8 pt-8">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-eurostile text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="font-square text-xs sm:text-sm text-white/60 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
