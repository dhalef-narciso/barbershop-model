import React from "react";
import { businessConfig, getWhatsAppBookingUrl } from "../config/businessConfig";
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, Award } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-bg">
      {/* Background Image with Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/hero-fade.jpg"
          alt="Sharp skin fade haircut at Faded Barbershop"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.72] contrast-105"
        />
        {/* Layered vignette & gradient scrims for maximum contrast and editorial warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/75 to-brand-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent max-w-4xl" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-brand-bg/90" />
      </div>

      {/* Subtle atmospheric gold ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Small Top Badge / Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand-surface/90 border border-brand-border backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
              {businessConfig.businessName.toUpperCase()} · {businessConfig.locationCountry.toUpperCase()}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-brand-white leading-[1.05] mb-6">
            Sharp Cuts. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white via-brand-white to-brand-gold">Clean Fades.</span> Proper Attention to Detail.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-brand-grey font-normal leading-relaxed max-w-2xl mb-8">
            Professional barbering tailored to your style, delivered with precision in a welcoming and relaxed environment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-brand-orange hover:bg-brand-orange-hover text-white font-medium text-base tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-orange-glow focus:outline-none focus:ring-2 focus:ring-brand-orange/60 group"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm bg-brand-surface/80 hover:bg-brand-surface border border-brand-border hover:border-brand-gold/50 text-brand-white font-medium text-base tracking-wider uppercase transition-all duration-200 backdrop-blur-sm"
            >
              <span>View Our Work</span>
            </a>
          </div>

          {/* Compact Trust Row */}
          <div className="pt-6 border-t border-brand-border/60">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold uppercase tracking-wider text-brand-white leading-tight">
                    Precision Cuts
                  </h3>
                  <p className="text-xs text-brand-grey mt-0.5">Sharp lines &amp; fades</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold uppercase tracking-wider text-brand-white leading-tight">
                    Personal Service
                  </h3>
                  <p className="text-xs text-brand-grey mt-0.5">Tailored to your style</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold uppercase tracking-wider text-brand-white leading-tight">
                    Professional Finish
                  </h3>
                  <p className="text-xs text-brand-grey mt-0.5">Unrushed grooming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
