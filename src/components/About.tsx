import React from "react";
import { getWhatsAppBookingUrl } from "../config/businessConfig";
import { MessageSquare, Scissors, Award, Clock } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Warm ambient background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame border */}
              <div className="absolute -inset-2.5 rounded-sm border border-brand-gold/30 -z-10 translate-x-2 translate-y-2 hidden sm:block" />
              
              {/* Image wrapper with subtle dark vignette */}
              <div className="relative rounded-sm overflow-hidden bg-brand-surface border border-brand-border shadow-2xl">
                <img
                  src="/images/fernando-portrait.jpg"
                  alt="Fernando Chaves - Barber at Faded Barbershop"
                  className="w-full h-auto aspect-[3/4] object-cover object-top filter brightness-[0.9] contrast-105"
                />
                
                {/* Gradient footer over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent" />
                
                {/* Floating badge inside portrait */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-brand-surface/90 backdrop-blur-md border border-brand-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-brand-bg border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg uppercase tracking-wider text-brand-white font-bold leading-tight">
                        Fernando Chaves
                      </h4>
                      <p className="text-xs text-brand-gold tracking-widest uppercase font-display">
                        Master Barber &amp; Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-brand-gold" />
              <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
                MEET YOUR BARBER
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-brand-white leading-none mb-6">
              Precision in Every Detail
            </h2>

            <div className="space-y-4 text-brand-grey text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                At <span className="text-brand-white font-medium">Faded Barbershop</span>, every cut is approached with care, precision and respect for the client’s individual style.
              </p>
              <p>
                Fernando combines technical attention to detail with a friendly, professional service, making sure every client leaves looking sharp and feeling confident.
              </p>
              <p className="text-sm text-brand-grey/90 pt-1">
                Whether you need a razor-sharp skin fade, clean beard sculpt, or a complete style change, each appointment is dedicated solely to you—never rushed, never compromised.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 pt-2">
              <div className="p-4 rounded-sm bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2.5 text-brand-gold mb-1.5">
                  <Award className="w-4 h-4" />
                  <span className="font-display text-sm uppercase tracking-wider text-brand-white font-semibold">
                    Technical Precision
                  </span>
                </div>
                <p className="text-xs text-brand-grey">
                  Clean gradients and seamless edge detailing.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2.5 text-brand-gold mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span className="font-display text-sm uppercase tracking-wider text-brand-white font-semibold">
                    Dedicated Time
                  </span>
                </div>
                <p className="text-xs text-brand-grey">
                  1-on-1 service focused purely on your cut.
                </p>
              </div>
            </div>

            {/* Barber Signature & CTA */}
            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-display text-lg uppercase tracking-wider text-brand-white font-semibold block">
                  Fernando Chaves · Barber
                </span>
                <span className="text-xs text-brand-grey">
                  Faded Barbershop · Ireland
                </span>
              </div>

              <a
                href={getWhatsAppBookingUrl("Cut with Fernando")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-brand-orange hover:bg-brand-orange-hover text-white font-medium text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-orange-glow self-start sm:self-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book with Fernando</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
