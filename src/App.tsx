import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { LocationHours } from "./components/LocationHours";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { MessageSquare, X } from "lucide-react";

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#demo-"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href === "#demo-booking") {
          setToastMessage(
            "Modo Demonstração: O agendamento por WhatsApp está desativado nesta versão de demonstração."
          );
        } else if (href === "#demo-phone") {
          setToastMessage(
            "Modo Demonstração: O número de telefone está desativado nesta versão de demonstração."
          );
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Auto-hide toast after 4.5 seconds
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-white font-body selection:bg-brand-orange selection:text-white flex flex-col relative">
      {/* Top Sticky Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <LocationHours />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp & Mobile Sticky Booking Bar */}
      <FloatingActions />

      {/* Demo Notification Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%] sm:w-auto p-4 rounded-sm bg-brand-surface/95 border border-brand-orange/60 backdrop-blur-md shadow-2xl flex items-center gap-3.5 animate-fadeIn"
        >
          <div className="w-9 h-9 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="text-left pr-2">
            <p className="text-xs font-display uppercase tracking-wider font-bold text-brand-white">
              Demonstração
            </p>
            <p className="text-xs text-brand-grey mt-0.5 leading-relaxed">
              {toastMessage}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="p-1 rounded text-brand-grey hover:text-brand-white transition-colors ml-auto shrink-0"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
