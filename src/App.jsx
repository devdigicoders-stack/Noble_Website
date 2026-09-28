import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import GalleryPage from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#C5A059] selection:text-white">
      <ScrollToTop />
      
      {/* Global Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/about" element={<About onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/services" element={<ServicesPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/why-us" element={<WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/gallery" element={<GalleryPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Interactive Quotation Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />
    </div>
  );
}
