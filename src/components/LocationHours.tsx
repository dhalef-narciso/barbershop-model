import React from "react";
import { businessConfig, getWhatsAppBookingUrl, getPhoneCallUrl } from "../config/businessConfig";
import { MapPin, Clock, Phone, MessageSquare, Navigation, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./Icons";

export const LocationHours: React.FC = () => {
  const { contact, openingHours } = businessConfig;

  return (
    <section id="contact" className="py-24 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
              VISIT THE BARBERSHOP
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-brand-white leading-none mb-4">
            Location &amp; Hours
          </h2>
          <p className="text-base text-brand-grey font-normal">
            Easily accessible with dedicated appointment slots. Reach out directly on WhatsApp to confirm availability.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact & Hours Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Direct Actions Box */}
            <div className="p-6 sm:p-8 rounded-sm bg-brand-surface border border-brand-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gold shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-display uppercase tracking-widest text-brand-gold font-semibold">
                    Address
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-brand-white font-bold mt-1">
                    {contact.address.street}
                  </h3>
                  <p className="text-sm text-brand-grey mt-1">
                    {contact.address.area}, {contact.address.country} {contact.address.eircode}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <a
                      href={contact.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-brand-surface-elevated hover:bg-brand-surface border border-brand-border hover:border-brand-gold/50 text-brand-white text-xs font-display uppercase tracking-wider font-semibold transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3 text-brand-grey" />
                    </a>

                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-display uppercase tracking-wider font-semibold transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-6 sm:p-8 rounded-sm bg-brand-surface border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wider text-brand-white font-bold">
                    Opening Hours
                  </h3>
                  <p className="text-xs text-brand-grey">By appointment &amp; walk-ins when available</p>
                </div>
              </div>

              <div className="divide-y divide-brand-border/60">
                {openingHours.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-sm">
                    <span className="text-brand-white font-medium">{item.days}</span>
                    <span
                      className={`font-display text-sm tracking-wider ${
                        item.isClosed
                          ? "text-brand-grey/60 uppercase"
                          : "text-brand-gold font-semibold"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Bar (Phone, WhatsApp, Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Phone */}
              <a
                href={getPhoneCallUrl()}
                className="p-4 rounded-sm bg-brand-surface border border-brand-border hover:border-brand-gold/40 transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-sm bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-display uppercase tracking-widest text-brand-grey block">
                    Phone
                  </span>
                  <span className="text-xs font-semibold text-brand-white truncate block group-hover:text-brand-gold transition-colors">
                    {contact.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-brand-surface border border-brand-border hover:border-brand-gold/40 transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-sm bg-brand-bg flex items-center justify-center text-brand-orange shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-display uppercase tracking-widest text-brand-grey block">
                    WhatsApp
                  </span>
                  <span className="text-xs font-semibold text-brand-white truncate block group-hover:text-brand-gold transition-colors">
                    {contact.whatsappDisplay}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-brand-surface border border-brand-border hover:border-brand-gold/40 transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-sm bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-display uppercase tracking-widest text-brand-grey block">
                    Instagram
                  </span>
                  <span className="text-xs font-semibold text-brand-white truncate block group-hover:text-brand-gold transition-colors">
                    {contact.instagram.handle}
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map / Interactive Location Card (5 cols) */}
          <div className="lg:col-span-5 h-full">
            <div className="rounded-sm bg-brand-surface border border-brand-border overflow-hidden h-full flex flex-col min-h-[420px]">
              
              {/* Map View Header */}
              <div className="p-4 bg-brand-surface-elevated border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                  <span className="text-xs font-display uppercase tracking-widest text-brand-white font-medium">
                    Google Maps Location
                  </span>
                </div>
                <span className="text-[11px] text-brand-grey font-display uppercase tracking-wider">
                  Ireland
                </span>
              </div>

              {/* Stylized Dark Map Container / Embed Placeholder */}
              <div className="relative flex-1 bg-brand-bg min-h-[320px] flex items-center justify-center overflow-hidden">
                {/* Embedded Map iFrame styled for dark aesthetics */}
                <iframe
                  title="Faded Barbershop Location Map"
                  src="https://maps.google.com/maps?q=Ireland&t=&z=7&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[320px] border-0 filter grayscale invert contrast-125 opacity-70"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Interactive Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-brand-surface/95 backdrop-blur-md border border-brand-border shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-brand-gold mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-xs font-display uppercase tracking-wider font-bold text-brand-white">
                          Faded Barbershop
                        </span>
                      </div>
                      <p className="text-xs text-brand-grey">
                        {contact.address.fullDisplay}
                      </p>
                    </div>

                    <a
                      href={contact.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-sm bg-brand-orange text-white text-[11px] font-display uppercase tracking-wider font-semibold shrink-0 hover:bg-brand-orange-hover transition-colors"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="p-3.5 bg-brand-surface-elevated border-t border-brand-border text-center">
                <p className="text-xs text-brand-grey">
                  Exact location will update automatically upon final address confirmation.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
