import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Award, CheckCircle2, Phone } from 'lucide-react';
import { BRAND, CORE_VALUES } from '../data/content';
import { DynamicIcon } from '../components/DynamicIcon';

export default function About({ onOpenQuote }) {
  return (
    <div className="py-6 sm:py-8">
      
      {/* Page Hero Banner with Prominent Image Background */}
      <section className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center text-white mb-10 overflow-hidden pt-28 pb-16">
        {/* Background Image - Noble Housekeeping Staff & Home Care */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85" 
            alt="Noble Housekeeping & Contracting Qatar"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Balanced Transparent Navy/Dark Overlay - Lets photo details shine cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E1E]/80 via-[#0A1931]/60 to-[#060E1E]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#DFBF7A]/60 text-[#DFBF7A] text-xs font-extrabold uppercase tracking-widest shadow-xl">
            <Shield className="w-4 h-4 text-[#DFBF7A]" />
            <span>Noble Housekeeping Trading &amp; Contracting &bull; CR No: {BRAND.crNumber}</span>
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-brand drop-shadow-2xl">
            About <span className="gold-text-gradient">Noble Housekeeping</span>
          </h1>
          <p className="text-white text-base sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Qatar's premier housekeeping, household maid &amp; nanny staffing, and specialized contracting company under one trusted roof.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Our Identity &amp; Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] leading-tight">
              A Premier Hospitality &amp; Contracting Provider in Doha, Qatar
            </h2>
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong>Noble Housekeeping Trading &amp; Contracting Company</strong> is a Qatar-based service provider committed to making homes cleaner, safer and more comfortable. We combine professional housekeeping and household staffing with skilled home maintenance and finishing services, so our clients can rely on one trusted company for all their home needs.
              </p>
              <p>
                From daily cleaning and reliable house maids to caring nanny services, and from wall painting and gypsum work to waterproofing, our team handles every task with honesty, discipline and attention to detail. We understand that inviting someone into your home is a matter of trust, which is why we focus on well-trained, respectful and dependable professionals.
              </p>
              <p>
                Whether you need a few hours of cleaning, a full-time helper or a complete renovation touch-up, Noble Housekeeping delivers quality service on time, at fair prices, with complete peace of mind.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenQuote}
                className="gold-gradient text-[#0A1931] font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition"
              >
                Request Quotation
              </button>
              <a
                href={`tel:${BRAND.phonePrimary.replace(/\s+/g, '')}`}
                className="bg-[#0A1931] text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider hover:bg-[#152A4A] transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFBF7A]" />
                Direct Hotline
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80" 
              alt="Housekeeping Staff" 
              className="rounded-2xl h-56 w-full object-cover shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" 
              alt="Painting & Finishing" 
              className="rounded-2xl h-56 w-full object-cover shadow-lg mt-6"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8F6F0] py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-[#0A1931] shadow-sm">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931]">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To provide reliable, high-quality housekeeping, household staffing and home maintenance services that make our clients' lives easier, by delivering trained professionals, honest pricing and consistent results in every home we serve.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A1931] flex items-center justify-center text-[#DFBF7A] shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931]">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To become one of Qatar's most trusted and preferred names in housekeeping and contracting services, known for professionalism, integrity and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Principles That Guide Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight">
            Our 7 Core Company Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_VALUES.map((val, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#C5A059] transition shadow-sm hover:shadow-lg space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A1931] flex items-center justify-center text-[#DFBF7A]">
                  <DynamicIcon name={val.icon} className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0A1931]">{val.title}</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
