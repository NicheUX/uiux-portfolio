import { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your slides (make sure they're in src/assets/patisserie/)
import slide1 from '../assets/patisserie/slide1.png';
import slide2 from '../assets/patisserie/slide2.png';
import slide3 from '../assets/patisserie/slide3.png';
import slide4 from '../assets/patisserie/slide4.png';
import slide5 from '../assets/patisserie/slide5.png';
import slide6 from '../assets/patisserie/slide6.png';
import slide7 from '../assets/patisserie/slide7.png';
import slide8 from '../assets/patisserie/slide8.png';
import slide9 from '../assets/patisserie/slide9.png';
import slide10 from '../assets/patisserie/slide10.png';
import slide11 from '../assets/patisserie/slide11.png';

const slides = [
  slide1, slide2, slide3, slide4, slide5,
  slide6, slide7, slide8, slide9, slide10, slide11,
];

export default function PatisserieCaseStudy() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER SECTION */}
      <div className="bg-gradient-to-br from-pink-900 via-rose-800 to-amber-900 text-white pb-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="inline-block px-4 py-2 bg-rose-600 text-white rounded-full text-xs font-bold mb-6">
            USER RESEARCH & STRATEGY
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            Patisserie Doux
            <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Case Study Presentation
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-4 leading-relaxed">
            Explore the full research & design presentation for Patisserie Doux — 
            an artisan bakery expanding its digital presence through strategy-driven design.
          </p>
        </div>
      </div>

      {/* SLIDE VIEWER SECTION */}
      <div className="flex-grow bg-black flex flex-col items-center justify-center py-16 relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-8 p-3 md:p-4 bg-white/20 hover:bg-white/30 rounded-full text-white transition"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Slide */}
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full max-w-6xl max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
        />

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-8 p-3 md:p-4 bg-white/20 hover:bg-white/30 rounded-full text-white transition"
        >
          <ChevronRight size={36} />
        </button>

        {/* Slide Indicator */}
        <div className="mt-6 text-sm font-medium text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* INTEREST SECTION */}
      <div className="bg-gradient-to-r from-pink-900 via-rose-800 to-amber-900 py-24 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interested in similar work?
        </h2>
        <p className="text-lg text-gray-200 mb-10">
          Let's discuss how strategic design can drive your product's success.
        </p>

        <button
          onClick={() => window.history.back()}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-rose-500/50 transition-all"
        >
          <span>Back to Portfolio</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}