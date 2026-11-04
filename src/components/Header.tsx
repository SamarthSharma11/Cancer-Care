"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, HeartHandshake } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Programmes" },
  { href: "/csr", label: "CSR Partnerships" },
  { href: "/patient-assistance", label: "Patient Assistance" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#D5DDE3] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      {/* Brand & Action Bar */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-2.5 sm:py-3 md:py-4">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-4 md:gap-5 py-1 text-decoration-none group flex-1 min-w-0 mr-2 sm:mr-4 lg:mr-8"
            aria-label="Cancer Care & Cure Foundation Home"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-lg border border-[#D5DDE3] p-1 sm:p-1.5 flex items-center justify-center overflow-hidden shadow-xs">
              <Image
                src="/images/logo.png"
                alt="Cancer Care & Cure Foundation Logo"
                width={80}
                height={80}
                priority
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0 justify-center">
              <span className="font-serif font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[36px] text-[#004F8C] leading-snug md:leading-none group-hover:text-[#0A2F52] transition-colors md:tracking-wide break-words md:whitespace-nowrap">
                Cancer Care & Cure Foundation
              </span>
              <span className="hidden sm:block text-xs md:text-sm lg:text-[14px] text-[#14788B] font-medium tracking-wide mt-0.5 md:mt-1.5 truncate">
                Together, We Give Hope. Together, We Save Lives.
              </span>
            </div>
          </Link>

          {/* Action Buttons (Desktop / Tablet) */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 flex-shrink-0">
            <Link
              href="/patient-assistance"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#14788B] bg-[#E8F1F7] border border-[#14788B]/30 rounded hover:bg-[#14788B] hover:text-white transition-colors whitespace-nowrap"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Get Patient Help</span>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] shadow-sm transition-colors whitespace-nowrap"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu & Quick Donate Button */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0">
            <Link
              href="/donate"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#004F8C] rounded shadow-xs"
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#1E2A33] hover:text-[#004F8C] rounded focus:outline-none focus:ring-2 focus:ring-[#004F8C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Line (Home, About Us, etc.) */}
      <nav
        className="hidden md:block border-t border-[#E8F1F7] bg-[#F8FAFC]/90 backdrop-blur-sm"
        aria-label="Primary Navigation"
      >
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between w-full py-2.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm lg:text-[15px] font-medium transition-colors py-1.5 relative whitespace-nowrap ${
                    isActive
                      ? "text-[#004F8C] font-semibold border-b-2 border-[#004F8C]"
                      : "text-[#1E2A33] hover:text-[#004F8C]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-[65px] sm:top-[76px] z-50 bg-white border-t border-[#D5DDE3] overflow-y-auto px-5 py-6 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase font-semibold text-[#4F5B66] tracking-wider mb-2">
              Menu Navigation
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 text-base font-medium border-b border-[#E8F1F7] flex items-center justify-between ${
                    isActive ? "text-[#004F8C] font-semibold pl-2 border-l-4 border-l-[#004F8C]" : "text-[#1E2A33]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-[#D5DDE3] flex flex-col gap-3">
            <Link
              href="/patient-assistance"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-[#14788B] bg-[#E8F1F7] border border-[#14788B]/40 rounded"
            >
              Seek Patient Assistance
            </Link>
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-[#004F8C] rounded shadow"
            >
              Donate / Support Our Mission
            </Link>
            <div className="mt-4 pt-4 border-t border-[#D5DDE3] text-center text-xs text-[#4F5B66]">
              <p>Email: cccf.cancer@gmail.com</p>
              <p className="mt-1">Together, We Give Hope. Together, We Save Lives.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
