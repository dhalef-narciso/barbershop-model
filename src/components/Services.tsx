import React from "react";
import { businessConfig, getWhatsAppBookingUrl } from "../config/businessConfig";
import { Clock, MessageSquare, Check, Sparkles } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
              OUR SERVICES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-brand-white leading-none mb-4">
            Barbering Done Properly
          </h2>
          <p className="text-base sm:text-lg text-brand-grey font-normal leading-relaxed">
            From clean fades to complete restyles, every appointment is handled with care and close attention to detail.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessConfig.services.map((service) => {
            const bookingUrl = getWhatsAppBookingUrl(service.name);

            return (
              <div
                key={service.id}
                className="group relative rounded-sm bg-brand-surface border border-brand-border hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-card hover:-translate-y-1"
              >
                {/* Subtle top metallic line hover highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-gold/20 group-hover:via-brand-gold group-hover:to-brand-gold/20 transition-all duration-300" />

                <div>
                  {/* Top Bar: Duration and Popular Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 text-xs text-brand-grey font-medium">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{service.duration}</span>
                    </div>

                    {service.popular && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-display uppercase tracking-wider px-2 py-0.5 rounded-sm bg-brand-orange/15 border border-brand-orange/40 text-brand-orange">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-brand-white group-hover:text-brand-gold transition-colors mb-2.5">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-grey leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Price & Action */}
                <div className="pt-5 border-t border-brand-border/70 flex items-center justify-between gap-4 mt-2">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-display uppercase tracking-widest text-brand-grey">
                      Price
                    </span>
                    <span className="font-display text-lg font-semibold text-brand-white">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-brand-surface-elevated hover:bg-brand-orange text-brand-white hover:text-white border border-brand-border hover:border-brand-orange text-xs font-display uppercase tracking-wider font-semibold transition-all duration-200"
                    aria-label={`Book ${service.name} via WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-brand-gold group-hover:text-white" />
                    <span>Book This Service</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small reassurance footer below services */}
        <div className="mt-12 p-4 sm:p-5 rounded-sm bg-brand-surface/60 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <p className="text-sm text-brand-white">
              <span className="font-semibold">Unsure what to choose?</span> Contact Fernando directly for a style recommendation before your cut.
            </p>
          </div>
          <a
            href={getWhatsAppBookingUrl("General consultation / advice")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-display uppercase tracking-wider text-brand-gold hover:text-brand-gold-light underline underline-offset-4 whitespace-nowrap transition-colors"
          >
            Ask a Question on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
