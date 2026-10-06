import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES, BRAND } from '../data/content';
import { DynamicIcon } from '../components/DynamicIcon';
import heroImage from '../assets/images/Housekeeping (Full-Time).png';

export default function ServicesPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const matched = SERVICES.find((s) => s.id === targetId);
      if (matched) {
        // Ensure the service is visible in filter
        setActiveCategory('All');
      }

      // Smooth scroll with offset for fixed capsule navbar
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -120; // Navbar offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          
          // Temporary highlight pulse
          element.classList.add('ring-2', 'ring-[#C5A059]', 'shadow-2xl');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-[#C5A059]', 'shadow-2xl');
          }, 2500);
        }
      }, 150);
    }
  }, [location.hash, location.pathname]);

  const categories = ['All', 'Housekeeping / House Cleaning', 'Nanny Service', 'House Maid Service', 'Painting Work', 'Painting & Finishes', 'Contracting & Maintenance'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="py-6 sm:py-8">
      
      {/* Page Hero Banner with Prominent Image Background */}
      <section className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center text-white mb-8 overflow-hidden pt-28 pb-16">
        {/* Background Image - Noble Specialized Services: Housekeeping, Maid, Nanny & Contracting */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Noble Housekeeping & Contracting Services"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* Subtle Transparent Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E1E]/80 via-[#0A1931]/60 to-[#060E1E]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#DFBF7A]/60 text-[#DFBF7A] text-xs font-extrabold uppercase tracking-widest shadow-xl">
            <Sparkles className="w-4 h-4 text-[#DFBF7A]" />
            <span>Noble Comprehensive Housekeeping &amp; Contracting &bull; Qatar</span>
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-brand drop-shadow-2xl">
            Our Specialized <span className="gold-text-gradient">Services</span>
          </h1>
          <p className="text-white text-base sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            From short-time and monthly housekeeping, maids &amp; nannies to painting, false ceilings, and advanced waterproofing.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                activeCategory === cat
                  ? 'gold-gradient text-[#0A1931] shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Detailed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredServices.map((srv, idx) => (
          <section
            key={srv.id}
            id={srv.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Image Col */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden h-72 sm:h-80 shadow-md">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#0A1931] text-[#DFBF7A] text-[11px] font-bold px-3 py-1 rounded-full border border-[#C5A059]/40">
                  {srv.category}
                </div>
              </div>

              {/* Content Col */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-[#0A1931] shadow-sm">
                    <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1931]">
                    {srv.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {srv.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Service Scope & Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenQuote}
                    className="gold-gradient text-[#0A1931] font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-95 transition"
                  >
                    Request a Quote
                  </button>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=Hello%20Noble%20Housekeeping,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(srv.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-[#20ba59] transition flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Inquiry
                  </a>
                </div>

              </div>

            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
