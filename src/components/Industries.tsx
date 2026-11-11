import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const Industries = () => {
  const industries = [
    {
      id: '01',
      title: 'Oil & Lubricants',
      desc: 'High-performance emulsifiers, anti-wear additives, corrosion inhibitors, and extreme-pressure chemistry engineered for modern lubricants.',
      image: '/images/performance_additives.jpg',
      href: '/industries/oil-lubricants'
    },
    {
      id: '02',
      title: 'Electronics & Semiconductor',
      desc: 'Ultra-high-purity reagents supporting micro-etching, photoresist stripping, precision cleaning, and semiconductor fabrication.',
      image: '/images/electronics.jpg',
      href: '/industries/electronics'
    },
    {
      id: '03',
      title: 'Textile & Leather',
      desc: 'Specialized wetting agents, antifoams, optical brighteners, flame retardants, and finishing auxiliaries for textile and leather processing.',
      image: '/images/laboratory_glassware.jpg',
      href: '/industries/textile-leather'
    },
    {
      id: '04',
      title: 'Plastic & Polymer',
      desc: 'Performance plasticizers, flame retardants, stabilizers, and pigment dispersions tailored for advanced polymer compounding.',
      image: '/images/chemical_plant.jpg',
      href: '/industries/plastic-polymer'
    },
    {
      id: '05',
      title: 'Metal Extraction',
      desc: 'Selective solvent-extraction reagents and organophosphorus extractants designed for rare earth and hydrometallurgical recovery.',
      image: '/images/performance_additives.jpg',
      href: '/industries/metal-extraction'
    },
    {
      id: '06',
      title: 'Surface Treatment',
      desc: 'Inorganic salts and precision surface preparation chemistry engineered for automotive, aerospace, and industrial finishing.',
      image: '/images/laboratory_glassware.jpg',
      href: '/industries/surface-treatment'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % industries.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, industries.length]);

  const activeIndustry = industries[current];

  return (
    <section
      className="relative w-full min-h-[720px] lg:h-[90vh] overflow-hidden bg-primary flex items-center py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Width Background Images with Auto Crossfade & Zoom */}
      <div className="absolute inset-0 w-full h-full z-0">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: current === i ? 1 : 0,
              scale: current === i ? 1 : 1.08,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ zIndex: current === i ? 2 : 1 }}
          >
            <img
              src={ind.image}
              alt={ind.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        {/* Multi-layered Gradient Overlays for Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/35" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-site mx-auto px-6 sm:px-8 md:px-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-12">
        
        {/* Left: Heading + Auto-Switching Industry List */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <span className="inline-block w-fit px-3.5 py-1 rounded-full bg-white/15 border border-white/25 font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white uppercase mb-4 sm:mb-5">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.06] max-w-xl tracking-tight mb-8 sm:mb-10">
            Where Chemistry<br />Meets Industry.
          </h2>
          
          <div className="flex flex-col space-y-3 sm:space-y-3.5 pl-1">
            {industries.map((ind, i) => {
              const isActive = current === i;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={clsx(
                    "group flex items-center text-left transition-all duration-500 focus:outline-none w-fit",
                    isActive ? "opacity-100 translate-x-2 sm:translate-x-3" : "opacity-45 hover:opacity-80"
                  )}
                >
                  <div className="flex flex-col">
                    <span
                      className={clsx(
                        "font-serif text-base sm:text-xl md:text-2xl lg:text-3xl tracking-tight transition-colors duration-500",
                        isActive ? "text-white font-semibold" : "text-white/90 font-normal"
                      )}
                    >
                      {ind.title}
                    </span>
                    {/* Animated Progress Indicator under Active Item */}
                    <div className="h-[2px] w-full bg-white/15 mt-1.5 overflow-hidden rounded-full">
                      {isActive && (
                        <motion.div
                          key={`progress-${current}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.5, ease: "linear" }}
                          className="h-full bg-white"
                        />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Auto-Changing Active Industry Detail Card */}
        <div className="w-full lg:w-5/12 flex justify-start lg:justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full lg:max-w-md bg-white/95 backdrop-blur-md border border-white rounded-3xl p-6 sm:p-8 text-primary shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-accent font-semibold uppercase">
                  FEATURED SECTOR
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4 tracking-tight">
                {activeIndustry.title}
              </h3>

              <p className="font-sans text-sm md:text-base text-primary/75 font-light leading-relaxed mb-8">
                {activeIndustry.desc}
              </p>

              <Link
                to={activeIndustry.href}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-all duration-300 group shadow-md"
              >
                <span>Explore Industry</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
