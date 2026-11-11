import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import clsx from 'clsx';
import { ChemicalBackground } from './ChemicalBackground';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials = [
    {
      id: '01',
      sector: 'Oil & Lubricants',
      location: 'Dubai, UAE',
      metric: '99.8% Batch Consistency',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85',
      quote:
        'Sagar Speciality Chemicals has been our strategic partner for extreme-pressure and anti-wear lubricant additives for over a decade. Their batch-to-batch consistency and rapid technical documentation support have streamlined our blending operations across the Middle East.',
      author: 'Tariq Al-Mansoor',
      role: 'VP of Formulation, Gulf Industrial Lubricants',
      companyShort: 'GulfLube',
    },
    {
      id: '02',
      sector: 'Surface Treatment & Automotive',
      location: 'Pune, India',
      metric: '15+ Years Partnership',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85',
      quote:
        'When we needed a customized inorganic salt grade with strict trace-metal limits for our automotive surface treatment line, Sagar’s R&D team worked alongside our process engineers from lab validation through commercial scale-up.',
      author: 'Dr. Rajesh Kulkarni',
      role: 'Head of Process Chemistry, Precision Surface Tech',
      companyShort: 'PrecisionTech',
    },
    {
      id: '03',
      sector: 'Plastic & Polymer Compounding',
      location: 'Campinas, Brazil',
      metric: 'Zero Supply Disruptions',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=85',
      quote:
        'Having local warehousing and technical support in Campinas gives us complete confidence in our raw material supply chain. Sagar delivers speciality flame retardants and plasticizers on schedule with full COA and regulatory compliance.',
      author: 'Carlos Eduardo Silva',
      role: 'Director of Global Procurement, SulPolímeros',
      companyShort: 'SulPolímeros',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);


  const current = testimonials[activeIndex];

  return (
    <section className="relative bg-[#F5F8FC] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 border-y border-primary/5 overflow-hidden">
      <ChemicalBackground variant="tinted" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Refined Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Customer Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-[1.1]">
              Trusted by Global Industry Leaders
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-primary/75 max-w-md leading-relaxed">
            Validating chemical precision, batch-to-batch reliability, and responsive supply chains across 4 continents.
          </p>
        </div>

        {/* Main Split Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center">
          
          {/* Left Column: Exact 3D Folded Ribbon Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-[460px] mx-auto aspect-[500/560] select-none">
              
              {/* Soft radial glow behind the frame so the crisp white border pops */}
              <div className="pointer-events-none absolute inset-[14%] rounded-3xl bg-primary/10 blur-2xl" />

              {/* LAYER 1 (z-0): Back 3D Ribbon Wings (Behind the White Frame) */}
              <svg
                viewBox="0 0 500 560"
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                aria-hidden="true"
              >
                <defs>
                  {/* Deep ocean/teal-blue gradient for the back ribbon wing */}
                  <linearGradient id="backWingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#084C6E" />
                    <stop offset="65%" stopColor="#0A5C84" />
                    <stop offset="100%" stopColor="#063B56" />
                  </linearGradient>

                  {/* Curved shadow under the ribbon fold crease */}
                  <linearGradient id="foldShadowGrad" x1="60%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="#032233" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#05344D" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#084C6E" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Top-Left Back Wing */}
                <g>
                  <path
                    d="M 130 232
                       L 74 196
                       Q 64 190 64 178
                       L 64 140
                       Q 64 128 74 121
                       L 148 74
                       L 168 110
                       L 130 165
                       Z"
                    fill="url(#backWingGrad)"
                  />
                  {/* Smooth shadow pocket directly beneath the top-left fold */}
                  <path
                    d="M 112 97
                       L 148 74
                       L 165 112
                       L 130 160
                       L 82 142
                       Q 94 114 112 97
                       Z"
                    fill="url(#foldShadowGrad)"
                  />
                </g>

                {/* Bottom-Right Back Wing (Exact 180° Symmetry) */}
                <g transform="rotate(180 250 280)">
                  <path
                    d="M 130 232
                       L 74 196
                       Q 64 190 64 178
                       L 64 140
                       Q 64 128 74 121
                       L 148 74
                       L 168 110
                       L 130 165
                       Z"
                    fill="url(#backWingGrad)"
                  />
                  <path
                    d="M 112 97
                       L 148 74
                       L 165 112
                       L 130 160
                       L 82 142
                       Q 94 114 112 97
                       Z"
                    fill="url(#foldShadowGrad)"
                  />
                </g>
              </svg>

              {/* LAYER 2 (z-10): Asymmetric Solid White Frame + Monochrome Suit Portrait */}
              <div
                style={{
                  left: '24.4%',
                  right: '24.4%',
                  top: '18.57%',
                  bottom: '18.57%',
                }}
                className="absolute z-10 bg-white p-[11px] sm:p-[13px] rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none ring-1 ring-slate-200/80 shadow-[0_22px_50px_-12px_rgba(0,43,73,0.28)]"
              >
                <div className="relative w-full h-full overflow-hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-[#22262A]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.id}
                      src={current.image}
                      alt={`${current.author} - ${current.sector}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="w-full h-full object-cover object-top grayscale contrast-125"
                    />
                  </AnimatePresence>
                  {/* Subtle studio lighting vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </div>

              {/* LAYER 3 (z-20): Front 3D Ribbon Flaps (Overlapping the Frame Corners) */}
              <svg
                viewBox="0 0 500 560"
                className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                aria-hidden="true"
              >
                <defs>
                  {/* Bright cyan-teal to deep ocean gradient matching the reference ribbon */}
                  <linearGradient id="frontFlapGrad" x1="15%" y1="15%" x2="95%" y2="90%">
                    <stop offset="0%" stopColor="#1282A2" />
                    <stop offset="42%" stopColor="#2EC4B6" />
                    <stop offset="100%" stopColor="#0A5C84" />
                  </linearGradient>
                  <filter id="flapShadow" x="-15%" y="-15%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#032233" floodOpacity="0.28" />
                  </filter>
                </defs>

                {/* Top-Left Front Flap */}
                <path
                  filter="url(#flapShadow)"
                  d="M 112 97
                     L 148 74
                     Q 162 65 176 74
                     L 224 105
                     Q 232 110 232 120
                     L 232 142
                     Q 232 150 224 155
                     L 210 164
                     Q 202 169 193 163
                     L 114 112
                     Q 101 104 112 97
                     Z"
                  fill="url(#frontFlapGrad)"
                />

                {/* Bottom-Right Front Flap (Exact 180° Symmetry) */}
                <g transform="rotate(180 250 280)" filter="url(#flapShadow)">
                  <path
                    d="M 112 97
                       L 148 74
                       Q 162 65 176 74
                       L 224 105
                       Q 232 110 232 120
                       L 232 142
                       Q 232 150 224 155
                       L 210 164
                       Q 202 169 193 163
                       L 114 112
                       Q 101 104 112 97
                       Z"
                    fill="url(#frontFlapGrad)"
                  />
                </g>
              </svg>

            </div>
          </div>

          {/* Right Column: Stars, Bold Quote, Author & Brand Lockup */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            {/* Subtle Decorative Quote Mark Watermark */}
            <Quote
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-0 w-24 h-24 text-primary/[0.04] -scale-x-100 select-none"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Top Row: 5 Solid Stars */}
                <div className="flex items-center gap-1.5 mb-7">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Bold Quote */}
                <blockquote className="font-sans font-bold text-lg sm:text-2xl md:text-[26px] text-primary leading-[1.44] tracking-tight mb-8 sm:mb-9">
                  "{current.quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <div className="font-sans font-bold text-base sm:text-[17px] text-primary leading-snug">
                    {current.author}
                  </div>
                  <div className="font-sans text-sm sm:text-[15px] text-primary/75 mt-0.5">
                    {current.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Switcher Controls for the 3 Testimonials */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex items-center justify-start gap-4">
              <div className="flex items-center gap-2.5">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View testimonial ${idx + 1}`}
                    className={clsx(
                      'h-2 rounded-full transition-all duration-300',
                      activeIndex === idx
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-slate-300 hover:bg-primary/50'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
