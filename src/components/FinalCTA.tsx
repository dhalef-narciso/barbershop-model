import React from "react";
import { getWhatsAppBookingUrl, getPhoneCallUrl } from "../config/businessConfig";
import { MessageSquare, Phone, Scissors } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-brand-surface overflow-hidden border-t border-brand-border">
      {/* Subtle orange/gold radial backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-brand-gold/15 via-brand-orange/20 to-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative background shop ambient photo with heavy dark scrim */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src="/images/shop-interior.jpg"
          alt="Barbershop interior ambience"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-surface/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Icon Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-brand-bg border border-brand-gold/40 text-brand-gold mb-6 shadow-md">
          <Scissors className="w-5 h-5 -rotate-45" />
        </div>

        {/* Small Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-brand-gold" />
          <span className="text-xs font-display tracking-[0.3em] uppercase text-brand-gold font-semibold">
            APPOINTMENTS &amp; AVAILABILITY
          </span>
          <span className="w-6 h-[1px] bg-brand-gold" />
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-brand-white leading-none mb-6">
          Ready for a Fresh Cut?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-brand-grey max-w-xl mx-auto leading-relaxed mb-10">
          Send us a message and secure your next appointment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={getWhatsAppBookingUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-brand-orange hover:bg-brand-orange-hover text-white font-medium text-sm sm:text-base tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-orange-glow focus:outline-none focus:ring-2 focus:ring-brand-orange/60"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-brand-bg hover:bg-brand-surface-elevated border border-brand-border hover:border-brand-gold/50 text-brand-white font-medium text-sm sm:text-base tracking-wider uppercase transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            <span>Call the Barbershop</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-xs text-brand-grey/80 mt-8">
          Personal service · Precision detailing · Relaxed atmosphere
        </p>
      </div>
    </section>
  );
};
