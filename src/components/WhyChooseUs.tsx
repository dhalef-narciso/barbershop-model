import React from "react";
import { businessConfig } from "../config/businessConfig";
import { UserCheck, Sparkles, Coffee, MessageCircle } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "personal-attention": <UserCheck className="w-5 h-5 text-brand-gold" />,
    "detailed-finish": <Sparkles className="w-5 h-5 text-brand-gold" />,
    "relaxed-atmosphere": <Coffee className="w-5 h-5 text-brand-gold" />,
    "easy-booking": <MessageCircle className="w-5 h-5 text-brand-gold" />,
  };

  return (
    <section className="py-20 bg-brand-surface border-t border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-brand-gold" />
            <span className="text-xs font-display tracking-[0.25em] uppercase text-brand-gold font-semibold">
              THE EXPERIENCE
            </span>
            <span className="w-5 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-white leading-none">
            Why Choose Faded Barbershop
          </h2>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessConfig.whyChooseUs.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-sm bg-brand-bg border border-brand-border hover:border-brand-gold/40 transition-colors duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-gold/30 transition-colors">
                    {iconMap[item.id] || <Sparkles className="w-5 h-5 text-brand-gold" />}
                  </div>
                  <span className="font-display text-xs text-brand-grey/50 tracking-widest uppercase font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-wider text-brand-white font-bold mb-2 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-grey leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
