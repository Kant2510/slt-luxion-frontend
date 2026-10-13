'use client';

const navLinkClass =
  "relative no-underline text-white/66 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-[#FFA100] after:scale-x-0 after:origin-left after:transition-transform after:duration-350 hover:after:scale-x-100";

export default function V2Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#00061A] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-16 flex flex-col gap-12">
        {/* Top Info & Nav */}
        <div className="flex flex-wrap justify-between items-start gap-10">
          <div className="flex flex-col gap-4.5 max-w-[380px]">
            <img
              src="/images/second-logo.png"
              alt="LUXION"
              className="h-[80px] sm:h-[104px] w-auto self-start object-contain"
            />
            <p className="m-0 text-sm leading-relaxed text-white/55">
              U.S.-based camera payloads and vision solutions for autonomous systems. From light to
              intelligence.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium"
          >
            <a className={navLinkClass} href="/#how-we-work">
              How We Work
            </a>
            <a className={navLinkClass} href="/#capabilities">
              Capabilities
            </a>
            <a className={navLinkClass} href="/#platforms">
              Platforms
            </a>
            <a className={navLinkClass} href="/custom-project">
              Custom Project
            </a>
            <a className={navLinkClass} href="/#contact">
              Contact
            </a>
            <a
              className={navLinkClass}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-t border-white/6 pt-6 text-[13px] text-white/50">
          <span>&copy; {new Date().getFullYear()} LUXION · contact@luxion.ai</span>
          <span className="hidden sm:inline">Export compliance notice — pending legal review</span>
          <a className={`${navLinkClass} text-[13px]`} href="/#contact">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
