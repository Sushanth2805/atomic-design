import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { VideoSection } from './components/VideoSection';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-lime selection:text-black">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Process />
        <VideoSection />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;