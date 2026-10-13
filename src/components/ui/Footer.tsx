'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Footer() {
  const pathname = usePathname();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (pathname === '/' || pathname.startsWith('/platforms')) {
    return null;
  }

  return (
    <footer className="bg-[#07111f] text-[#8ea0b8] py-10 text-xs sm:text-sm border-t border-white/5">
      <div className="wrap flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div
          className="cursor-pointer"
          onClick={handleScrollTop}
          role="button"
          tabIndex={0}
          aria-label="Scroll to top"
        >
          <Logo width={110} />
        </div>
        <p className="font-normal opacity-85">
          &copy; {new Date().getFullYear()} LUXION. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
