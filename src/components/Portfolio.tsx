import React from "react";
import { businessConfig } from "../config/businessConfig";
import { ArrowUpRight, Scissors } from "lucide-react";
import { InstagramIcon } from "./Icons";

export const Portfolio: React.FC = () => {
  const items = businessConfig.portfolio;
  const primaryItems = items.slice(0, 3);
  const secondaryItems = items.slice(3, 6);

  return (
    <section id="portfolio" className="py-24 bg-brand-surface relative border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-brand-gold" />
              <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
                PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-brand-white leading-none">
              Fresh Cuts from the Chair
            </h2>
            <p className="text-base text-brand-grey font-normal mt-3">
              A showcase of recent fades, tailored haircuts and beard work crafted at {businessConfig.businessName}.
            </p>
          </div>

          <a
            href={businessConfig.contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-brand-bg hover:bg-brand-surface-elevated border border-brand-border hover:border-brand-gold/50 text-brand-white font-display text-xs uppercase tracking-wider transition-all duration-200 group self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
            <span>See more on Instagram {businessConfig.contact.instagram.handle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-grey group-hover:text-brand-gold transition-colors" />
          </a>
        </div>

        {/* Primary Row: Top 3 Photos with High Visual Prominence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {primaryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-sm overflow-hidden bg-brand-bg border border-brand-border hover:border-brand-gold/50 transition-all duration-300 flex flex-col"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden bg-brand-surface-elevated">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                {/* Category Tag (Floating top left) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-brand-bg/90 backdrop-blur-md border border-brand-border text-[11px] font-display uppercase tracking-widest text-brand-gold font-semibold shadow-sm">
                    <Scissors className="w-3 h-3 text-brand-orange" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="p-5 flex items-center justify-between border-t border-brand-border/60 bg-brand-surface">
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-brand-white font-semibold group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-grey mt-0.5">By {businessConfig.ownerName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Row: Next 3 Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {secondaryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-sm overflow-hidden bg-brand-bg border border-brand-border hover:border-brand-gold/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface-elevated">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                {/* Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-brand-bg/90 backdrop-blur-md border border-brand-border text-[10px] font-display uppercase tracking-widest text-brand-gold font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between border-t border-brand-border/60 bg-brand-surface">
                <h3 className="font-display text-base uppercase tracking-wide text-brand-white font-medium group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-brand-bg border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl uppercase tracking-wider text-brand-white font-semibold">
                Follow Our Work on Instagram
              </h4>
              <p className="text-sm text-brand-grey">
                Daily stories, fresh fades, and styling inspiration at{" "}
                <span className="text-brand-white font-medium">{businessConfig.contact.instagram.handle}</span>
              </p>
            </div>
          </div>

          <a
            href={businessConfig.contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-brand-surface-elevated hover:bg-brand-surface hover:border-brand-gold border border-brand-border text-brand-white font-display text-xs uppercase tracking-wider font-semibold transition-all duration-200 shrink-0"
          >
            <span>Visit {businessConfig.contact.instagram.handle}</span>
            <ArrowUpRight className="w-4 h-4 text-brand-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};
