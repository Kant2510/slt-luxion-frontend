'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { User as UserIcon, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Account() {
  const { user, isLoading, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full border border-current hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="hidden sm:inline-block text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          Register
        </Link>
      </div>
    );
  }

  const displayName = user.fullName || user.username || 'User';
  const initials = (user.fullName || user.username || 'U')
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(-2)
    .map((s) => s[0].toUpperCase())
    .join('');

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full border border-slate-300/60 dark:border-slate-700 hover:border-blue-500/80 bg-white/50 backdrop-blur-sm transition-all cursor-pointer group"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
      >
        <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
          {initials}
        </div>
        <span className="text-xs font-semibold max-w-[100px] truncate text-slate-800 dark:text-slate-100">
          {displayName}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-xl py-1 text-slate-800"
              role="menu"
            >
              <div className="border-b border-slate-100 px-4 py-3">
                <p className="truncate text-sm font-bold text-slate-900">{displayName}</p>
                <p className="truncate text-xs text-slate-500">@{user.username}</p>
                {user.email && (
                  <p className="truncate text-xs text-slate-400 mt-0.5">{user.email}</p>
                )}
              </div>

              <div className="py-1 text-xs">
                <Link
                  href="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
                  role="menuitem"
                >
                  <UserIcon className="h-4 w-4 text-slate-400" />
                  Account Profile
                </Link>

                <div className="border-t border-slate-100 my-1" />

                <button
                  type="button"
                  onClick={async () => {
                    setMenuOpen(false);
                    await logout();
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-red-600 hover:bg-red-50 text-left font-medium transition-colors cursor-pointer"
                  role="menuitem"
                >
                  <LogOut className="h-4 w-4 text-red-500" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
