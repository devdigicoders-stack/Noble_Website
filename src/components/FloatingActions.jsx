import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/content';

export default function FloatingActions({ onOpenQuote }) {
  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-center gap-3.5">
      {/* Floating Call Button (Full Circle) */}
      <a
        href={`tel:${BRAND.phonePrimary.replace(/\s+/g, '')}`}
        className="w-14 h-14 rounded-full bg-[#0A1931] text-white flex items-center justify-center shadow-2xl hover:bg-[#152A4A] transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-[#C5A059] group relative"
        title={`Call Us: ${BRAND.phonePrimary}`}
      >
        <Phone className="w-6 h-6 text-[#DFBF7A]" />
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-[#0A1931] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
          {BRAND.phonePrimary}
        </span>
      </a>

      {/* Floating WhatsApp Button (Full Circle) */}
      <a
        href={`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=Hello%20Noble%20Housekeeping,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-all duration-300 transform hover:scale-110 active:scale-95 group relative animate-pulse-slow"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current text-white" />
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-[#0A1931] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
