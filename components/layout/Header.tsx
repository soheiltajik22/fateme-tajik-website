"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center shadow-md group-hover:bg-navy-900 transition-colors">
              <span className="text-white font-bold text-lg">ف</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-navy-900 leading-tight text-sm">
                فاطمه تاجیک
              </p>
              <p className="text-xs text-navy-500">مدرس زبان آلمانی</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-navy-800 bg-navy-50 font-semibold"
                    : "text-navy-600 hover:text-navy-800 hover:bg-navy-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-navy-600 hover:text-navy-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="ltr-text">{siteConfig.phone}</span>
            </a>
            <Link
              href="/booking"
              className="bg-navy-800 hover:bg-navy-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              رزرو کلاس
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-navy-50 transition-colors"
            aria-label="منوی ناوبری"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between p-5 border-b border-navy-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center">
                    <span className="text-white font-bold">ف</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm">فاطمه تاجیک</p>
                    <p className="text-xs text-navy-500">مدرس زبان آلمانی</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-navy-50 text-navy-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile nav links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                          pathname === link.href
                            ? "text-navy-800 bg-navy-50 font-semibold"
                            : "text-navy-600 hover:text-navy-800 hover:bg-navy-50"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-navy-100 space-y-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 w-full border border-navy-200 text-navy-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-navy-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/booking"
                  className="flex items-center justify-center w-full bg-navy-800 hover:bg-navy-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  رزرو کلاس
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
