import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Phone, MessageSquare, Shield, CheckCircle2,
  Sparkles, Star, ChevronRight, Award, Clock, Users, Building2, Paintbrush, Home as HomeIcon
} from 'lucide-react';
import { BRAND, SERVICES, CORE_VALUES, STATS, TESTIMONIALS, GALLERY_ITEMS } from '../data/content';
import { DynamicIcon } from '../components/DynamicIcon';

import bannerVideo from '../assets/media/bannervedio1.mp4';

export default function Home({ onOpenQuote }) {
  return (
    <div className="overflow-hidden bg-[#FBFBFC]">

      {/* =========================================================================
          HERO BANNER (Clean Video Player Only - No Text Overlay)
         ========================================================================= */}
      {/* =========================================================================
          SECTION 2: HERO BANNER (Video Background with Requested Text & Buttons)
          Headline: Your Home, Our Care. Cleaner. Fresher. Better.
          Sub-headline: Trusted housekeeping, maid, nanny and home maintenance services across Qatar, all under one roof.
          Buttons: Book a Service | Call Now.
         ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        
        {/* Full Frame Background Video - Cropped & Zoomed to hide watermark cleanly */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none scale-125 object-[center_35%]"
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Minimal Subtle Overlay so text is readable while video is 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

        {/* Hero Content Overlay */}
        <div className="relative max-w-[1520px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Tagline / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/50 text-[#DFBF7A] text-xs font-bold uppercase tracking-widest shadow-lg"
            >
              <Shield className="w-3.5 h-3.5 text-[#DFBF7A]" />
              <span>Noble Housekeeping Trading &amp; Contracting &bull; Qatar</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-lg"
            >
              Your Home, Our Care. <br />
              <span className="gold-text-gradient">Cleaner. Fresher. Better.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-100 font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0 drop-shadow"
            >
              Trusted housekeeping, maid, nanny and home maintenance services across Qatar, all under one roof.
            </motion.p>

            {/* Buttons: Book a Service | Call Now */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* Button: Book a Service */}
              <button
                onClick={onOpenQuote}
                className="gold-gradient text-[#0A1931] hover:brightness-110 active:scale-95 font-extrabold pl-7 pr-3 py-4 rounded-full text-xs uppercase tracking-wider shadow-2xl transition flex items-center gap-3 group cursor-pointer"
              >
                <span>Book a Service</span>
                <div className="w-8 h-8 rounded-full bg-[#0A1931] text-[#DFBF7A] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              {/* Button: Call Now */}
              <a
                href={`tel:${BRAND.phoneCalling.replace(/\s+/g, '')}`}
                className="bg-[#0A1931]/90 hover:bg-[#152A4A] backdrop-blur-md text-[#DFBF7A] border border-[#C5A059]/80 font-extrabold px-7 py-4 rounded-full text-xs uppercase tracking-wider transition shadow-2xl flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFBF7A]" />
                <span>Call Now: {BRAND.phoneCalling}</span>
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: QUICK INTRO (Exact PDF Section 3 + ISS Stats Bar)
          - Two to three lines about the company with a "Read More" button linking to About Us.
         ========================================================================= */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-12">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C5A059]">
                About Noble Housekeeping
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight">
                Qatar’s Trusted Housekeeping &amp; Contracting Company
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Noble Housekeeping Trading &amp; Contracting Company is a Qatar-based service provider committed to making homes cleaner, safer and more comfortable. We combine professional housekeeping and household staffing with skilled home maintenance and finishing services, so our clients can rely on one trusted company for all their home needs.
              </p>
              <div className="pt-1">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider bg-[#0A1931] text-[#DFBF7A] hover:bg-[#152A4A] px-5 py-2.5 rounded-full transition shadow-md"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {STATS.map((st, i) => (
                <div key={i} className="bg-[#F8F6F0] p-4 rounded-2xl border border-slate-200/80 space-y-1">
                  <div className="text-2xl font-extrabold text-[#0A1931]">
                    {st.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR SERVICES (Icon Cards & ISS 3-Col Images)
          - Housekeeping (Short Time and Full Time), Nanny Service, House Maid, Painting Work, Wall Paint, Spray Paint, Gypsum Work, Water Proofing
          - Each card has an icon, one-line description and "Learn More".
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#FBFBFC]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl space-y-2 mb-10">
            <span className="uppercase text-xs tracking-[1.5px] font-extrabold text-[#C5A059]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight">
              Specialized Home &amp; Facility Care
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Explore our complete suite of certified housekeeping, household staffing, and home contracting services across Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0A1931]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-[#DFBF7A] border border-[#C5A059]/40">
                      {srv.category}
                    </div>
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-[#0A1931] shadow-lg">
                      <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-extrabold text-[#0A1931] group-hover:text-[#C5A059] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between">
                  <Link
                    to={`/services#${srv.id}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A1931] border-2 border-slate-200 group-hover:border-[#0A1931] group-hover:bg-[#0A1931] group-hover:text-white px-4 py-2 rounded-full transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#C5A059] hover:underline"
                  >
                    Get Quote &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE US (Exact PDF Section 5)
          - Trained and verified staff; flexible hourly, daily and monthly plans; transparent pricing; reliable and punctual service; licensed company (CR 206871); one company for cleaning and home maintenance.
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-white border-y border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl space-y-2 mb-10">
            <span className="uppercase text-xs tracking-[1.5px] font-extrabold text-[#C5A059]">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1931] tracking-tight">
              The Noble Standard of Quality
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Why homeowners, villas, and businesses across Qatar rely on our certified teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Trained and Verified Staff", desc: "All staff are background checked, verified and rigorously trained to deliver top hospitality standards.", icon: Users },
              { title: "Flexible Plans (Hourly, Daily & Monthly)", desc: "Customized service schedules tailored around your family routine or corporate requirements.", icon: Clock },
              { title: "Transparent Pricing", desc: "Honest quotes with no hidden costs or surprise surcharges. Complete peace of mind.", icon: Award },
              { title: "Reliable & Punctual Service", desc: "On time, every time. We honor our commitments and respect your schedule.", icon: CheckCircle2 },
              { title: "Licensed Company (CR 206871)", desc: "Fully registered and compliant under Qatar Commercial Registration CR No: 206871.", icon: Shield },
              { title: "One Company for Cleaning & Maintenance", desc: "From maid & nanny services to painting, gypsum & waterproofing, all under one roof.", icon: HomeIcon }
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-[#F8F6F0] border border-slate-200/80 hover:border-[#C5A059] transition-all space-y-3 hover:shadow-lg">
                  <div className="w-11 h-11 rounded-2xl bg-[#0A1931] text-[#DFBF7A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1931]">{p.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW IT WORKS (Exact PDF 4 Steps)
          1. Contact us by call, WhatsApp or form.
          2. Tell us your requirement.
          3. We assign a trained professional or team.
          4. Enjoy a spotless, well-maintained home.
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#0A1931] text-white">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="uppercase text-xs tracking-[1.5px] font-extrabold text-[#DFBF7A]">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Contact us by call, WhatsApp or online request form." },
              { step: "2", Tell: "Tell Us Requirement", title: "Tell Requirement", desc: "Tell us your requirement and preferred timing or contract schedule." },
              { step: "3", title: "We Assign Team", desc: "We assign a trained professional or specialized team." },
              { step: "4", title: "Enjoy Spotless Home", desc: "Enjoy a spotless, refreshed and well-maintained home." }
            ].map((st, i) => (
              <div key={i} className="bg-white/5 border border-slate-700/60 p-6 rounded-3xl space-y-3 hover:border-[#C5A059] transition">
                <div className="text-3xl font-extrabold text-[#DFBF7A]">{st.step}</div>
                <h3 className="text-lg font-bold text-white">{st.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MISSION AND VISION (Exact PDF Statements)
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#F8F6F0]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Core Direction</span>
              <h3 className="text-2xl font-extrabold text-[#0A1931]">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To provide reliable, high-quality housekeeping, household staffing and home maintenance services that make our clients' lives easier, by delivering trained professionals, honest pricing and consistent results in every home we serve.
              </p>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Long-Term Goal</span>
              <h3 className="text-2xl font-extrabold text-[#0A1931]">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To become one of Qatar's most trusted and preferred names in housekeeping and contracting services, known for professionalism, integrity and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TESTIMONIALS (Slider / Reviews Grid)
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Client Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#F8F6F0] p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex text-[#C5A059] gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="text-sm font-bold text-[#0A1931]">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: GALLERY / BEFORE AND AFTER
          - Photos of painting, waterproofing and gypsum work.
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#FBFBFC]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="uppercase text-xs tracking-[1.5px] font-extrabold text-[#C5A059]">
                Visual Transformations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight mt-1">
                Gallery / Before and After
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">Photos of painting, waterproofing and gypsum work.</p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A1931] hover:text-[#C5A059] transition"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_ITEMS.slice(0, 2).map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                <div className="grid grid-cols-2 gap-1 p-2 bg-slate-900">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-52 sm:h-60 object-cover rounded-l-2xl" />
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-52 sm:h-60 object-cover rounded-r-2xl" />
                    <span className="absolute top-3 right-3 bg-[#C5A059] text-[#0A1931] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-bold text-[#0A1931]">{item.title}</h3>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-0.5 rounded-full font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CALL-TO-ACTION BANNER (Exact PDF Section 10)
          - "Need a reliable helping hand at home? Get in touch today." with Call and WhatsApp buttons.
         ========================================================================= */}
      <section className="py-12 sm:py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1931] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DFBF7A]">
                Noble Housekeeping Trading &amp; Contracting
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Need a reliable helping hand at home? Get in touch today.
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              {/* Call Button */}
              <a
                href={`tel:${BRAND.phoneCalling.replace(/\s+/g, '')}`}
                className="gold-gradient text-[#0A1931] font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-95 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now ({BRAND.phoneCalling})</span>
              </a>
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=Hello%20Noble%20Housekeeping,%20Need%20a%20reliable%20helping%20hand%20at%20home.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-[#20ba59] transition flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
