import React, { useState, useEffect } from "react";
import { getWhatsAppBookingUrl, getPhoneCallUrl } from "../config/businessConfig";
import { MessageSquare, Phone } from "lucide-react";

export const FloatingActions: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating actions after scrolling past 200px
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <aside
        aria-label="Quick WhatsApp Contact"
        className={`hidden md:block fixed bottom-8 right-8 z-40 transition-all duration-300 transform ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={getWhatsAppBookingUrl()}
          className="group flex items-center gap-3 p-3 pl-4 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white shadow-xl hover:shadow-orange-glow transition-all duration-200 border border-white/10"
          aria-label="Book on WhatsApp"
        >
          <span className="font-display uppercase tracking-wider text-xs font-semibold pr-1">
            Book on WhatsApp
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Booking Bar (Phones & Small Tablets) */}
      <aside
        aria-label="Mobile Sticky Booking Bar"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-brand-surface/95 backdrop-blur-lg border-t border-brand-border transition-transform duration-300 shadow-2xl ${
          visible ? "translate-y-0" : "translate-y-0" /* Keep accessible on mobile */
        }`}
      >
        <div className="flex items-center gap-2.5 max-w-lg mx-auto">
          {/* Quick Call Button */}
          <a
            href={getPhoneCallUrl()}
            className="w-12 h-12 rounded-sm bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gold hover:text-brand-white shrink-0 active:scale-95 transition-transform"
            aria-label="Call Barbershop"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Primary WhatsApp Booking Action */}
          <a
            href={getWhatsAppBookingUrl()}
            className="flex-1 flex items-center justify-center gap-2 h-12 rounded-sm bg-brand-orange active:bg-brand-orange-hover text-white font-medium text-sm font-display tracking-wider uppercase shadow-md active:scale-[0.98] transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
};
