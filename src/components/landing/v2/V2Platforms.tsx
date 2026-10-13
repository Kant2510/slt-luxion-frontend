'use client';

import { PLATFORMS_MOCK } from '@/data/landingV2MockData';
import Link from 'next/link';

export default function V2Platforms() {
  return (
    <section
      id="platforms"
      className="relative text-white py-24 sm:py-32 bg-[#00061A] bg-[radial-gradient(70%_50%_at_50%_0%,rgba(0,15,67,0.9)_0%,rgba(0,6,26,0)_70%)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-5 max-w-[640px]">
          <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-white/60 font-semibold">
            <span
              aria-hidden="true"
              className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFA100]"
            />
            Platforms
          </div>
          <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3]">
            Start from a proven platform.
          </h2>
        </div>

        {/* 3 Platform Cards (Tailwind) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS_MOCK.map((product) => {
            const isInternal = product.href.startsWith('/');

            const CardContent = (
              <div className="group h-full rounded-xl overflow-hidden flex flex-col bg-[#000820] border border-white/8 transition-all duration-450 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:!border-[rgba(61,133,255,0.5)] hover:shadow-[0_30px_80px_-30px_rgba(0,95,255,0.5)] cursor-pointer">
                {/* Visual Image Banner */}
                <div className="h-[280px] flex items-center justify-center overflow-hidden bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.22)_0%,rgba(0,15,67,0.5)_50%,rgba(0,6,26,0)_100%)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[210px] w-auto max-w-[85%] object-contain transition-transform duration-800 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-106"
                  />
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-7 flex flex-col gap-1.5 border-t border-white/6 flex-grow">
                  <span className="text-xs tracking-[0.1em] font-mono text-[#FFA100] font-bold">
                    {product.badge}
                  </span>
                  <span className="font-eurostile text-xl font-bold uppercase leading-snug text-white">
                    {product.name}
                  </span>
                  <span className="text-sm leading-relaxed text-white/60 mb-2">
                    {product.tagline}
                  </span>

                  {/* Specs Rows */}
                  <ul className="list-none m-0 p-0 flex flex-col text-sm flex-grow pt-2">
                    {product.specs.map((spec, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex justify-between items-center gap-3 py-2.5 border-t border-white/6"
                      >
                        <span className="text-white/50">{spec.label}</span>
                        <span className="text-right text-white/90 font-medium">
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Text */}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-[#8DB6FF] font-semibold transition-colors duration-300 group-hover:!text-[#FFA100]">
                    {product.ctaText}
                    <svg
                      aria-hidden="true"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            );

            return isInternal ? (
              <Link key={product.id} href={product.href} className="no-underline text-white block">
                {CardContent}
              </Link>
            ) : (
              <a key={product.id} href={product.href} className="no-underline text-white block">
                {CardContent}
              </a>
            );
          })}
        </div>

        {/* Footer Notes */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-white/50 pt-2 border-t border-white/6">
          <span>
            Coming next:{' '}
            <span className="text-white/80 font-medium">Vectra</span> ·{' '}
            <span className="text-white/80 font-medium">Tiny</span>
          </span>
          <span>Target specifications. Subject to change.</span>
        </div>
      </div>
    </section>
  );
}
