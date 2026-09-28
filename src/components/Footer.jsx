import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, Shield, 
  CheckCircle2, Globe 
} from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-slate-800">
      
      {/* Upper Main Footer Links (Exact ISS Multi-Column Layout) */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Brand & Registration (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <img src="/logo.svg" alt={BRAND.name} className="h-12 w-auto object-contain" />
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Qatar's premier housekeeping, household staffing, and contracting service provider. Dedicated to making homes cleaner, safer, and more comfortable.
            </p>

            <div className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#DFBF7A]" />
                Commercial Registration: <strong className="text-white">CR No. {BRAND.crNumber}</strong>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFBF7A]" />
                100% Background-Checked Staff
              </p>
            </div>
          </div>

          {/* Col 2: Curated Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wide uppercase text-xs text-[#DFBF7A]">
              Curated Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/services#${srv.id}`} 
                    className="hover:text-white transition flex items-center gap-2 text-slate-400 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-[#DFBF7A] transition-colors">{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Strategic Partner & Sitemaps (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wide uppercase text-xs text-[#DFBF7A]">
              Company &amp; Partner
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About ISS / Noble</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">All Services</Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition">Project Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wide uppercase text-xs text-[#DFBF7A]">
              Qatar Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DFBF7A] shrink-0 mt-1" />
                <span>{BRAND.location} (State of Qatar)</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#DFBF7A] shrink-0 mt-1" />
                <div>
                  <a href={`tel:${BRAND.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white text-slate-200 font-semibold block">
                    {BRAND.phonePrimary}
                  </a>
                  <a href={`tel:${BRAND.phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white text-slate-400 text-xs">
                    {BRAND.phoneSecondary} (Calling Hotline)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#DFBF7A] shrink-0 mt-1" />
                <div>
                  <a href={`mailto:${BRAND.email}`} className="hover:text-white text-slate-200 block">
                    {BRAND.email}
                  </a>
                  <a href={`mailto:${BRAND.altEmail}`} className="hover:text-white text-slate-400 text-xs">
                    {BRAND.altEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#02050c] border-t border-slate-900 py-8 text-xs text-slate-500">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All Rights Reserved. (Qatar CR No: {BRAND.crNumber})
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Official Domain: {BRAND.domain}</span>
            <span>•</span>
            <span>Doha, State of Qatar</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
