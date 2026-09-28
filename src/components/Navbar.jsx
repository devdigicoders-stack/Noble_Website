import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, Phone, ArrowRight
} from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesDropdown(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'pt-2' : 'pt-3 md:pt-4'
      }`}>
        <div className="max-w-[1520px] mx-auto px-3 sm:px-6">
          
          {/* Exact ISS Capsule Navbar with Logo Navy & Gold Palette */}
          <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-slate-200/90 px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group py-0.5">
              <img 
                src="/logo.svg" 
                alt={BRAND.name} 
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation Links Exactly Matching PDF Table */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              
              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  location.pathname === '/' 
                    ? 'text-[#DFBF7A] bg-[#0A1931] shadow-md shadow-[#0A1931]/20 ring-1 ring-[#C5A059]/40' 
                    : 'text-slate-700 hover:text-[#0A1931] hover:bg-slate-100'
                }`}
              >
                {location.pathname === '/' && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A]"></span>}
                <span>Home</span>
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  location.pathname === '/about' 
                    ? 'text-[#DFBF7A] bg-[#0A1931] shadow-md shadow-[#0A1931]/20 ring-1 ring-[#C5A059]/40' 
                    : 'text-slate-700 hover:text-[#0A1931] hover:bg-slate-100'
                }`}
              >
                {location.pathname === '/about' && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A]"></span>}
                <span>About Us</span>
              </Link>

              {/* Services with Hover Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/services"
                  className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    location.pathname.startsWith('/services')
                      ? 'text-[#DFBF7A] bg-[#0A1931] shadow-md shadow-[#0A1931]/20 ring-1 ring-[#C5A059]/40' 
                      : servicesDropdown
                        ? 'text-[#0A1931] bg-slate-100'
                        : 'text-slate-700 hover:text-[#0A1931] hover:bg-slate-100'
                  }`}
                >
                  {location.pathname.startsWith('/services') && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A]"></span>}
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180 text-[#C5A059]' : location.pathname.startsWith('/services') ? 'text-[#DFBF7A]' : 'text-slate-500'
                  }`} />
                </Link>

                {/* Services Dropdown */}
                {servicesDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 z-50 animate-fadeIn">
                    <div className="pb-3 border-b border-slate-100 mb-4 flex justify-between items-center">
                      <span className="text-xs font-bold uppercase text-[#C5A059] tracking-wider">All 8 Company Services</span>
                      <Link to="/services" className="text-xs font-bold text-[#0A1931] hover:text-[#C5A059]">View All &rarr;</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services#${s.id}`}
                          className="p-2.5 rounded-xl hover:bg-[#F8F6F0] transition flex items-center gap-2 group"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#C5A059] group-hover:scale-125 transition"></span>
                          <span className="text-xs font-bold text-[#0A1931] group-hover:text-[#C5A059] transition">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Why Choose Us */}
              <Link
                to="/why-us"
                className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  location.pathname === '/why-us' 
                    ? 'text-[#DFBF7A] bg-[#0A1931] shadow-md shadow-[#0A1931]/20 ring-1 ring-[#C5A059]/40' 
                    : 'text-slate-700 hover:text-[#0A1931] hover:bg-slate-100'
                }`}
              >
                {location.pathname === '/why-us' && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A]"></span>}
                <span>Why Choose Us</span>
              </Link>

              {/* Gallery */}
              <Link
                to="/gallery"
                className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  location.pathname === '/gallery' 
                    ? 'text-[#DFBF7A] bg-[#0A1931] shadow-md shadow-[#0A1931]/20 ring-1 ring-[#C5A059]/40' 
                    : 'text-slate-700 hover:text-[#0A1931] hover:bg-slate-100'
                }`}
              >
                {location.pathname === '/gallery' && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A]"></span>}
                <span>Gallery</span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  location.pathname === '/contact' 
                    ? 'text-[#DFBF7A] bg-[#0A1931] shadow-md shadow-[#0A1931]/20 ring-1 ring-[#C5A059]/40' 
                    : 'text-slate-700 hover:text-[#0A1931] hover:bg-slate-100'
                }`}
              >
                {location.pathname === '/contact' && <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF7A]"></span>}
                <span>Contact</span>
              </Link>

            </nav>

            {/* Desktop Right Action Pill Buttons (Gold with Navy Text) */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Call Hotline Quick Link */}
              <a
                href={`tel:${BRAND.phonePrimary.replace(/\s+/g, '')}`}
                className="bg-[#0A1931] text-white hover:bg-[#152A4A] font-semibold px-4 py-2 rounded-full text-xs transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{BRAND.phonePrimary}</span>
              </a>

              {/* Get a Free Quote Button (Gold Background with Navy Text as per guideline) */}
              <button
                onClick={onOpenQuote}
                className="gold-gradient text-[#0A1931] font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-95 transition flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[#0A1931] rounded-full hover:bg-slate-100 focus:outline-none"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden max-w-[95%] mx-auto mt-2 bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = item.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`p-3 font-bold rounded-xl flex items-center justify-between transition ${
                      isActive 
                        ? 'bg-[#0A1931] text-[#DFBF7A] ring-1 ring-[#C5A059]/40 shadow-sm' 
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#DFBF7A]"></span>}
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#DFBF7A]' : 'text-[#C5A059]'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
                className="w-full gold-gradient text-[#0A1931] font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider text-center"
              >
                Get a Free Quote
              </button>
              <a
                href={`tel:${BRAND.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full bg-[#0A1931] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call {BRAND.phonePrimary}
              </a>
            </div>
          </div>
        )}

      </header>
    </>
  );
}
