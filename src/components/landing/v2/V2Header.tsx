'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinkClass =
  "relative no-underline text-white/66 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-[#FFA100] after:scale-x-0 after:origin-left after:transition-transform after:duration-350 hover:after:scale-x-100";

const primaryBtnClass =
  'inline-flex items-center text-[#000F43] bg-[#FFA100] rounded text-sm font-semibold min-h-[44px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#FFA100] hover:!text-[#000F43] hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)]';

export default function V2Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#00061A]/75 backdrop-blur-md border-b border-white/6 transition-all duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="LUXION — From Light to Intelligence"
            className="h-14 sm:h-[60px] w-auto max-w-[78vw] object-contain block"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-sm tracking-[0.04em] font-sans"
        >
          <a className={navLinkClass} href="/#how-we-work">
            How We Work
          </a>
          <a className={navLinkClass} href="/#capabilities">
            Capabilities
          </a>

          {/* Platforms Dropdown */}
          <div className="relative group">
            <a
              className={`${navLinkClass} inline-flex items-center gap-1.5 cursor-pointer`}
              href="/#platforms"
              aria-haspopup="true"
            >
              Platforms
              <svg
                className="transition-transform duration-250 group-hover:rotate-180"
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>

            <div className="absolute top-full left-1/2 pt-[18px] -translate-x-1/2 translate-y-2 opacity-0 invisible transition-all duration-250 z-30 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              <div className="w-[560px] max-w-[92vw] box-border p-3 rounded-xl border border-white/10 bg-[#000820]/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* Dev Kit L1 */}
                  <Link
                    className="group/item p-3 rounded-lg flex flex-col gap-1.5 no-underline text-white transition-colors duration-250 hover:bg-white/[0.06]"
                    href="/platforms/dev-kit-l1"
                  >
                    <span className="h-24 rounded-md overflow-hidden flex items-center justify-center bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.25)_0%,rgba(0,15,67,0.4)_60%,rgba(0,6,26,0)_100%)]">
                      <img
                        src="https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/dev-kit-l1.webp"
                        alt="Dev Kit L1"
                        className="h-[84px] w-auto object-contain transition-transform duration-500 group-hover/item:scale-108"
                      />
                    </span>
                    <span className="font-eurostile text-[13px] tracking-[0.02em] uppercase font-bold transition-colors duration-250 group-hover/item:text-[#FFA100]">
                      Dev Kit L1
                    </span>
                    <span className="text-[13px] leading-tight text-white/60">
                      Open gimbal development platform
                    </span>
                  </Link>

                  {/* Voris VR10 */}
                  <Link
                    className="group/item p-3 rounded-lg flex flex-col gap-1.5 no-underline text-white transition-colors duration-250 hover:bg-white/[0.06]"
                    href="/platforms/voris"
                  >
                    <span className="h-24 rounded-md overflow-hidden flex items-center justify-center bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.25)_0%,rgba(0,15,67,0.4)_60%,rgba(0,6,26,0)_100%)]">
                      <img
                        src="https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/voris-vr10.webp"
                        alt="Voris VR10"
                        className="h-[80px] w-auto object-contain transition-transform duration-500 group-hover/item:scale-108"
                      />
                    </span>
                    <span className="font-eurostile text-[13px] tracking-[0.02em] uppercase font-bold transition-colors duration-250 group-hover/item:text-[#FFA100]">
                      Voris VR10
                    </span>
                    <span className="text-[13px] leading-tight text-white/60">
                      4K · 40X zoom · On-board AI
                    </span>
                    <span className="text-[12px] text-[#FFA100]">VR20 coming soon</span>
                  </Link>

                  {/* Avior */}
                  <a
                    className="group/item p-3 rounded-lg flex flex-col gap-1.5 no-underline text-white transition-colors duration-250 hover:bg-white/[0.06]"
                    href="/#platforms"
                  >
                    <span className="h-24 rounded-md overflow-hidden flex items-center justify-center bg-[radial-gradient(60%_60%_at_50%_55%,rgba(0,95,255,0.25)_0%,rgba(0,15,67,0.4)_60%,rgba(0,6,26,0)_100%)]">
                      <img
                        src="https://caungeseokknvmeoqoto.supabase.co/storage/v1/object/public/saolatek/luxion/images/products/avior.webp"
                        alt="Avior"
                        className="h-[84px] w-auto object-contain opacity-70 transition-transform duration-500 group-hover/item:scale-108"
                      />
                    </span>
                    <span className="font-eurostile text-[13px] tracking-[0.02em] uppercase font-bold transition-colors duration-250 group-hover/item:text-[#FFA100]">
                      Avior
                    </span>
                    <span className="text-[13px] leading-tight text-[#FFA100]">
                      Coming Jan 2027
                    </span>
                  </a>
                </div>

                <a
                  className={`${navLinkClass} self-start mx-3 my-1 text-[13px] font-medium`}
                  href="/#platforms"
                >
                  All platforms →
                </a>
              </div>
            </div>
          </div>

          <a className={navLinkClass} href="/#team">
            Team
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a className={`${primaryBtnClass} px-4.5 py-2.5`} href="/#contact">
            Bring Us Your Challenge
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white p-2 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#00061A]/98 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-base">
          <a
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            href="/#how-we-work"
            onClick={() => setMobileMenuOpen(false)}
          >
            How We Work
          </a>
          <a
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            href="/#capabilities"
            onClick={() => setMobileMenuOpen(false)}
          >
            Capabilities
          </a>
          <a
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            href="/#platforms"
            onClick={() => setMobileMenuOpen(false)}
          >
            Platforms
          </a>
          <a
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            href="/#team"
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </a>
          <a
            className={`${primaryBtnClass} justify-center px-4 py-3 font-bold mt-2 text-center`}
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Bring Us Your Challenge
          </a>
        </div>
      )}
    </header>
  );
}
