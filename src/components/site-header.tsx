"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { authors } from "@/data/selectors";

export function SiteHeader() {
  const currentUser = authors[0];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/profile", label: "Profile" }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#f0edf8] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-12 w-full max-w-[1120px] items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <div className="flex min-w-0 items-center gap-4 sm:gap-8">
          <Link href="/" className="shrink-0 text-xs font-bold text-[#5d4dff] transition hover:text-[#4c3fe0]">
            BlogHub
          </Link>
          <nav className="hidden items-center gap-5 text-[11px] text-[#8b879a] sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="transition hover:text-[#3c3b45] focus-visible:outline-none focus-visible:text-[#3c3b45]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden text-[11px] text-[#8b879a] sm:inline">5 min read</span>
          <Link
            href="/profile"
            className="group flex min-w-0 items-center gap-2 rounded-full px-1 py-1 transition hover:bg-[#f7f4ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4dff]/25"
          >
            <Image
              src={currentUser.avatar}
              alt={currentUser.name}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover ring-1 ring-[#e8e5f5]"
            />
            <span className="hidden max-w-[90px] truncate text-[11px] font-medium text-[#5d596b] transition group-hover:text-[#2f2f36] sm:inline">
              {currentUser.name}
            </span>
          </Link>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ece8f8] text-[#5d596b] transition hover:bg-[#f7f4ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4dff]/25 sm:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#f0edf8] sm:hidden"
          >
            <nav className="mx-auto flex max-w-[1120px] flex-col gap-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2 text-[12px] font-medium text-[#5d596b] transition hover:bg-[#f7f4ff] hover:text-[#2f2f36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c4dff]/25"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
