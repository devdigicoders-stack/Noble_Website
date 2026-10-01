import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Shield, 
  MessageSquare
} from 'lucide-react';
import { FOOTER_INFO, SERVICES } from '../data/content';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#0A1931] text-slate-300 border-t border-[#DFBF7A]/20">
      
      {/* Upper Main Footer */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Logo, Sector & CR Number & Social Icons (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-lg">
              <img src="/logo.png" alt={FOOTER_INFO.companyName} className="h-12 w-auto object-contain" />
            </div>
            
            <div>
              <h3 className="text-white font-extrabold text-base">{FOOTER_INFO.companyName}</h3>
              <p className="text-slate-300 text-xs font-semibold mt-0.5 text-[#DFBF7A]">
                Sector: {FOOTER_INFO.sector}
              </p>
            </div>

            {/* CR Number */}
            <div className="p-3 rounded-2xl bg-white/5 border border-[#DFBF7A]/30 inline-flex items-center gap-2.5 text-xs text-[#DFBF7A] font-semibold">
              <Shield className="w-4 h-4 text-[#DFBF7A] shrink-0" />
              <span>CR Number: <strong className="text-white">{FOOTER_INFO.crNumber}</strong></span>
            </div>

            {/* Social Icons */}
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DFBF7A] block mb-2.5">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${FOOTER_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#25D366] text-white flex items-center justify-center transition border border-white/10 hover:border-[#25D366]"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#E1306C] text-white flex items-center justify-center transition border border-white/10 hover:border-[#E1306C]"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] text-white flex items-center justify-center transition border border-white/10 hover:border-[#1877F2]"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0A66C2] text-white flex items-center justify-center transition border border-white/10 hover:border-[#0A66C2]"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider text-[#DFBF7A]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-[#DFBF7A] transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFBF7A] transition">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#DFBF7A] transition">Services</Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-[#DFBF7A] transition">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DFBF7A] transition">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DFBF7A] transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider text-[#DFBF7A]">
              Services List
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/services#${srv.id}`} 
                    className="hover:text-[#DFBF7A] transition flex items-center gap-2 text-slate-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A] group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-[#DFBF7A] transition-colors">{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider text-[#DFBF7A]">
              Contact Details
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {/* WhatsApp Row */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-bold">WhatsApp</span>
                  <a 
                    href={`https://wa.me/${FOOTER_INFO.whatsapp.replace('+', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#25D366] text-white font-bold block transition"
                  >
                    {FOOTER_INFO.whatsappDisplay}
                  </a>
                </div>
              </li>

              {/* Calling Row */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#DFBF7A]/15 border border-[#DFBF7A]/30 flex items-center justify-center text-[#DFBF7A] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-bold">Calling</span>
                  <a 
                    href={`tel:${FOOTER_INFO.calling.replace(/\s+/g, '')}`} 
                    className="hover:text-[#DFBF7A] text-white font-bold block transition"
                  >
                    {FOOTER_INFO.calling}
                  </a>
                </div>
              </li>

              {/* Email Row */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-[#DFBF7A] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-bold">Email</span>
                  <a href={`mailto:${FOOTER_INFO.email}`} className="hover:text-[#DFBF7A] text-white font-bold block transition">
                    {FOOTER_INFO.email}
                  </a>
                </div>
              </li>

              {/* Location Row */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-[#DFBF7A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-bold">Location</span>
                  <span className="text-white font-semibold">{FOOTER_INFO.location}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Line */}
      <div className="bg-[#060E1E] border-t border-[#DFBF7A]/20 py-6 text-xs text-slate-400">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left w-full">
            <p>
              &copy; {new Date().getFullYear()} {FOOTER_INFO.companyName}. All Rights Reserved.
            </p>
            <p className="text-[#DFBF7A]">
              Qatar Commercial Registration CR No: {FOOTER_INFO.crNumber}
            </p>
          </div>
          <p className="text-slate-400">
            Designed and Development by{' '}
            <a
              href="https://www.worknestconnect.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFBF7A] hover:text-white font-semibold transition underline underline-offset-2 decoration-[#DFBF7A]/40 hover:decoration-white"
            >
              Worknest Connect
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
