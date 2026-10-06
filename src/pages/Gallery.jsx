import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import heroImage from '../assets/images/GYPSUM Before and After.png';

export default function GalleryPage({ onOpenQuote }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Painting', 'Gypsum', 'Waterproofing', 'Cleaning'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="py-6 sm:py-8">
      {/* Page Hero Banner with Prominent Image Background */}
      <section className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center text-white mb-8 overflow-hidden pt-28 pb-16">
        {/* Background Image - Noble Contracting: Painting, Waterproofing & Gypsum Work */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Noble Housekeeping & Contracting Transformations"
            className="w-full h-full object-cover object-center"
          />
          {/* Transparent Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E1E]/80 via-[#0A1931]/60 to-[#060E1E]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#DFBF7A]/60 text-[#DFBF7A] text-xs font-extrabold uppercase tracking-widest shadow-xl">
            <span>Visual Transformations &bull; Qatar Contracting Portfolio</span>
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-brand drop-shadow-2xl">
            Before &amp; After <span className="gold-text-gradient">Project Gallery</span>
          </h1>
          <p className="text-white text-base sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Witness the craftsmanship, neatness, and precision of our painting, waterproofing, and gypsum false ceiling projects across Qatar.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                filter === cat
                  ? 'gold-gradient text-[#0A1931] shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative p-2 bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 sm:h-72 object-cover rounded-2xl"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-[#0A1931]">{item.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#0A1931]/5 text-[#0A1931] rounded-full border border-slate-200">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onOpenQuote}
          className="gold-gradient text-[#0A1931] font-bold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition"
        >
          Book Your Project Transformation
        </button>
      </div>
    </div>
  );
}
