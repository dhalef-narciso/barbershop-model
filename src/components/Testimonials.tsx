import React from "react";
import { businessConfig } from "../config/businessConfig";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  // If testimonials are not enabled or have no items, do not render this section on live page
  if (!businessConfig.testimonials.enabled || businessConfig.testimonials.items.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-brand-gold" />
            <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
              REPUTATION
            </span>
            <span className="w-5 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-brand-white leading-none">
            What Clients Say
          </h2>
          <p className="text-base text-brand-grey font-normal mt-3">
            Genuine feedback from satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {businessConfig.testimonials.items.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-7 rounded-sm bg-brand-surface border border-brand-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-brand-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-brand-grey/30" />
                </div>

                <p className="text-sm text-brand-white/90 leading-relaxed italic mb-6">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base uppercase tracking-wider text-brand-white font-semibold">
                    {testimonial.author}
                  </h4>
                  <span className="text-xs text-brand-grey">
                    {testimonial.role || testimonial.source}
                  </span>
                </div>
                <span className="text-[10px] font-display uppercase tracking-widest text-brand-gold px-2 py-0.5 rounded-sm bg-brand-gold/10">
                  {testimonial.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
