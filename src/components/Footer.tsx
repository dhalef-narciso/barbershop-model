import React from "react";
import { businessConfig, getWhatsAppBookingUrl } from "../config/businessConfig";
import { Scissors, MessageSquare, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Fernando", href: "#about" },
    { label: "Location & Hours", href: "#contact" },
  ];

  return (
    <footer className="bg-brand-bg text-brand-grey border-t border-brand-border pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                <Scissors className="w-4 h-4 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-wider text-brand-white uppercase leading-none">
                  FADED
                </span>
                <span className="font-display text-[10px] tracking-[0.28em] text-brand-gold uppercase font-medium mt-0.5">
                  BARBERSHOP
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-white font-medium tracking-wide pt-1">
              “Precision. Style. Attention to detail.”
            </p>

            <p className="text-xs text-brand-grey leading-relaxed max-w-sm">
              Tailored grooming, clean skin fades, and personalized barbering by Fernando Chaves in Ireland.
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-grey/80 pt-2">
              <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>{businessConfig.contact.address.fullDisplay}</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider font-display text-brand-grey hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-white font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-sm bg-brand-surface border border-brand-border hover:border-brand-gold/40 text-brand-white transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-brand-orange" />
                <div>
                  <span className="text-[10px] uppercase font-display tracking-wider text-brand-grey block">
                    Book on WhatsApp
                  </span>
                  <span className="text-xs font-semibold group-hover:text-brand-gold transition-colors">
                    {businessConfig.contact.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={businessConfig.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-sm bg-brand-surface border border-brand-border hover:border-brand-gold/40 text-brand-white transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-brand-gold" />
                <div>
                  <span className="text-[10px] uppercase font-display tracking-wider text-brand-grey block">
                    Follow on Instagram
                  </span>
                  <span className="text-xs font-semibold group-hover:text-brand-gold transition-colors">
                    {businessConfig.contact.instagram.handle}
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Developer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-grey/70">
          <p>
            &copy; {currentYear} Faded Barbershop. All rights reserved.
          </p>

          {/* Discreet clickable credit as requested */}
          <p>
            <a
              href={businessConfig.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-grey hover:text-brand-gold transition-colors tracking-wide underline underline-offset-4 decoration-brand-border hover:decoration-brand-gold"
            >
              {businessConfig.credit.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
