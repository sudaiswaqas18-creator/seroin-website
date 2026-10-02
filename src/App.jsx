import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ImageTrail from './components/ImageTrail';
import CanvaPartner from './components/CanvaPartner';
import RealMinds from './components/RealMinds';
import Achievements from './components/Achievements';
import Services from './components/Services';
import CommandCenter from './components/CommandCenter';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Recommend from './components/Recommend';
import QuoteCalculator from './components/QuoteCalculator';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <ImageTrail />
        <CanvaPartner />
        <RealMinds />
        <Achievements />
        <Services />
        <CommandCenter />
        <WhyUs />
        <Testimonials />
        <CaseStudies />
        <Recommend />
        <QuoteCalculator />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
