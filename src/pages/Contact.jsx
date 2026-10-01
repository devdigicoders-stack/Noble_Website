import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Shield } from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';
import { Toast } from '../utils/alerts';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    try {
      await fetch(`${apiUrl}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message || ''
        })
      });
    } catch (err) {
      console.warn('Backend enquiry store note:', err);
    }

    setSubmitted(true);
    Toast.fire({
      icon: 'success',
      title: 'Inquiry received! Redirecting to WhatsApp...'
    });

    setTimeout(() => {
      const text = `Hello Noble Housekeeping,%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service Required:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
      window.open(`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <div className="py-6 sm:py-8 bg-[#FBFBFC]">
      {/* Page Hero Banner with Prominent Image Background */}
      <section className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center text-white mb-10 overflow-hidden pt-28 pb-16">
        {/* Background Image - Modern Doha Qatar Skyline & Customer Hub */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85" 
            alt="Contact Noble Housekeeping Trading & Contracting Doha Qatar"
            className="w-full h-full object-cover object-[center_45%]"
          />
          {/* Transparent Dark Navy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E1E]/85 via-[#0A1931]/65 to-[#060E1E]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-transparent to-black/35"></div>
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#DFBF7A]/60 text-[#DFBF7A] text-xs font-extrabold uppercase tracking-widest shadow-xl">
            <Shield className="w-4 h-4 text-[#DFBF7A]" />
            <span>Qatar Commercial Registration CR No: {BRAND.crNumber} &bull; {BRAND.location}</span>
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-brand drop-shadow-2xl">
            Contact &amp; <span className="gold-text-gradient">Booking</span>
          </h1>
          <p className="text-white text-base sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Get in touch with Noble Housekeeping Trading &amp; Contracting Company in Qatar. Fast booking and inquiry response via Direct Call or WhatsApp.
          </p>
        </div>
      </section>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Exact PDF Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Business Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] leading-tight">
                Noble Housekeeping Trading &amp; Contracting Company
              </h2>
            </div>

            <div className="space-y-3.5">
              {/* Phone Numbers - Calling & WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-slate-200/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center text-[#0A1931] shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Calling</h4>
                  <p className="text-sm text-slate-800 font-bold mt-0.5">
                    <a href={`tel:${BRAND.phoneCalling.replace(/\s+/g, '')}`} className="hover:text-[#C5A059]">{BRAND.phoneCalling}</a>
                  </p>
                  <p className="text-sm text-slate-800 font-bold">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp: </span>
                    <a href={`https://wa.me/${BRAND.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059]">{BRAND.whatsappDisplay}</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-slate-200/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0A1931] flex items-center justify-center text-[#DFBF7A] shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</h4>
                  <p className="text-sm text-slate-800 font-bold mt-0.5">
                    <a href={`mailto:${BRAND.email}`} className="hover:text-[#C5A059]">{BRAND.email}</a>
                  </p>
                </div>
              </div>

              {/* CR Number */}
              <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-slate-200/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center text-[#0A1931] shrink-0 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">CR Number</h4>
                  <p className="text-sm text-slate-800 font-bold mt-0.5">{BRAND.crNumber}</p>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-slate-200/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0A1931] flex items-center justify-center text-[#DFBF7A] shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</h4>
                  <p className="text-sm text-slate-800 font-bold mt-0.5">{BRAND.location}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Click-to-Chat Button (PDF requirement) */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=Hello%20Noble%20Housekeeping,%20I%20want%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold p-4 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider hover:bg-[#20ba59] transition shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Click-to-Chat</span>
              </a>
            </div>

          </div>

          {/* Contact Form Fields: Name, Phone, Service Required, Message */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1931]">Inquiry Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Opening WhatsApp to connect with our coordinator...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                      Get in Touch
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] mt-1">
                      Send Us Your Requirements
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+974 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C5A059] bg-white"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Describe your requirements (rooms, hours, villa size, or paint area)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C5A059]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient text-[#0A1931] font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get a Quote</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
