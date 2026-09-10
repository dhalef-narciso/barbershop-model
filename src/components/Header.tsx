import React, { useState, useEffect } from "react";
import { businessConfig, getWhatsAppBookingUrl } from "../config/businessConfig";
import { Menu, X, MessageSquare, Scissors } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border shadow-lg py-3.5"
          : "bg-gradient-to-b from-brand-bg/90 via-brand-bg/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label={`${businessConfig.businessName} Home`}
          >
            <div className="w-8 h-8 rounded-sm bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:border-brand-gold transition-colors">
              <Scissors className="w-4 h-4 transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-brand-white uppercase leading-none">
                {businessConfig.brandWord1}
              </span>
              <span className="font-display text-[10px] tracking-[0.28em] text-brand-gold uppercase font-medium mt-0.5">
                {businessConfig.brandWord2}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-grey hover:text-brand-white transition-colors duration-200 tracking-wide uppercase font-display text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-brand-orange hover:bg-brand-orange-hover text-white font-medium text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-orange-glow focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Your Cut</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getWhatsAppBookingUrl()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-brand-orange text-white text-xs font-medium uppercase tracking-wider"
              aria-label="Quick Book"
            >
              <span>Book</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm bg-brand-surface border border-brand-border text-brand-white hover:text-brand-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-border px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-sm text-base font-display tracking-wider uppercase text-brand-white hover:bg-brand-surface-elevated hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-brand-border/60">
            <a
              href={getWhatsAppBookingUrl()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-brand-orange text-white font-medium text-sm tracking-wider uppercase shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Your Appointment</span>
            </a>
            <p className="text-center text-xs text-brand-grey mt-2">
              Demonstration Mode · {businessConfig.businessName}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
