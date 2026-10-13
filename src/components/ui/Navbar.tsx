'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Account from './Account';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navLinks = (
    <>
      <li>
        <button
          className="hover:text-zinc-600 transition-colors duration-200"
          onClick={() => handleNavClick('vision')}
          type="button"
        >
          About
        </button>
      </li>
      <li>
        <button
          className="hover:text-zinc-600 transition-colors duration-200"
          onClick={() => handleNavClick('technology')}
          type="button"
        >
          Technology
        </button>
      </li>
      <li>
        <Link
          href="/products"
          onClick={() => setMobileOpen(false)}
          className={`transition-colors duration-200 ${pathname.startsWith('/products') ? 'text-[#253eac] font-bold' : 'hover:text-zinc-600'
            }`}
        >
          Products
        </Link>
      </li>
      <li>
        <button
          className="hover:text-zinc-600 transition-colors duration-200"
          onClick={() => handleNavClick('applications')}
          type="button"
        >
          Applications
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 rounded-full text-xs transition-all duration-200 ${scrolled || pathname !== '/' ? 'border border-slate-dark/30 text-slate-dar hover:bg-slate-dark/10 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]' : 'border border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'}`}
          onClick={() => handleNavClick('email-signup')}
          type="button"
        >
          Notify Me
        </button>
      </li>
      <li>
        <Account />
      </li>
    </>
  );

  if (pathname === '/') {
    return null;
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-100 h-20.5 flex items-center transition-all duration-300 ${scrolled || pathname !== '/'
          ? 'bg-gray-100 text-slate-dark'// backdrop-blur-[20px]' // shadow-lg shadow-black/20'
          : 'bg-transparent'
          }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="wrap flex items-center justify-between w-full">
          <Link
            href="/"
            className="cursor-pointer focus:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            <Logo width={130} />
          </Link>

          <ul className={`hidden md:flex items-center gap-7 list-none font-medium ${scrolled || pathname !== '/' ? 'text-slate-dark' : 'text-white'} text-sm`}>
            {navLinks}
          </ul>

          <button
            className="md:hidden text-white p-2 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-101 bg-white flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-slate-dark p-2 hover:opacity-80 cursor-pointer"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X size={28} />
            </button>
            <ul className="list-none flex flex-col items-center gap-6 text-lg">
              {navLinks}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
