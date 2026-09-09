import React from "react";
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

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-white font-body selection:bg-brand-orange selection:text-white flex flex-col">
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
    </div>
  );
};

export default App;
