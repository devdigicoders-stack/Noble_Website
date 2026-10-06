import React from 'react';
import { Shield, CheckCircle2, Clock, Users, Award, FileText, Phone } from 'lucide-react';
import { BRAND } from '../data/content';
import heroImage from '../assets/images/House Maid Service.png';

export default function WhyChooseUs({ onOpenQuote }) {
  const points = [
    {
      title: "Trained and Verified Staff",
      desc: "All personnel undergo thorough background checks, identity verification, and structured hospitality training.",
      icon: Users
    },
    {
      title: "Flexible Hourly, Daily & Monthly Plans",
      desc: "Customizable staffing and cleaning plans to perfectly suit your routine, schedule, and family requirements.",
      icon: Clock
    },
    {
      title: "Transparent & Honest Pricing",
      desc: "Clear upfront quotes with zero hidden fees. We value long-term trust over one-off transactions.",
      icon: FileText
    },
    {
      title: "Reliable & Punctual Service",
      desc: "We respect your time. Our staff arrives on schedule and fulfills work with high discipline.",
      icon: CheckCircle2
    },
    {
      title: "Officially Licensed in Qatar",
      desc: `Registered and compliant under Qatar Commercial Registration CR No: ${BRAND.crNumber}.`,
      icon: Award
    },
    {
      title: "One-Stop Solution for Cleaning & Contracting",
      desc: "Save the hassle of dealing with multiple contractors. We manage housekeeping, maids, nannies, painting, gypsum, and waterproofing under one roof.",
      icon: Shield
    }
  ];

  return (
    <div className="py-6 sm:py-8">
      {/* Page Hero Banner with Prominent Image Background */}
      <section className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center text-white mb-10 overflow-hidden pt-28 pb-16">
        {/* Background Image - Spotless Premium Home Interior */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Why Choose Noble Housekeeping & Contracting"
            className="w-full h-full object-cover object-center"
          />
          {/* Transparent Navy/Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E1E]/80 via-[#0A1931]/60 to-[#060E1E]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#DFBF7A]/60 text-[#DFBF7A] text-xs font-extrabold uppercase tracking-widest shadow-xl">
            <Award className="w-4 h-4 text-[#DFBF7A]" />
            <span>The Noble Standard of Quality &bull; Qatar CR No: {BRAND.crNumber}</span>
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-brand drop-shadow-2xl">
            Why Choose <span className="gold-text-gradient">Noble Housekeeping</span>
          </h1>
          <p className="text-white text-base sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Trained and verified staff, flexible contracts, transparent pricing, and comprehensive cleaning &amp; contracting under one roof.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-[#0A1931] shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1931]">{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="bg-[#0A1931] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold">Ready for a Cleaner, Better Home?</h2>
            <p className="text-slate-300 text-sm">
              Contact our client coordinators today to discuss your customized housekeeping or home maintenance schedule.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="gold-gradient text-[#0A1931] font-bold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition"
              >
                Get a Free Quote
              </button>
              <a
                href={`tel:${BRAND.phoneCalling.replace(/\s+/g, '')}`}
                className="bg-white/10 hover:bg-white/20 border border-slate-600 text-white font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFBF7A]" />
                Call {BRAND.phoneCalling}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
