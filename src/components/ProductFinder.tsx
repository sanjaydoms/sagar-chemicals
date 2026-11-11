import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChemicalBackground } from './ChemicalBackground';

export const ProductFinder = () => {
  const categories = [
    'SURFACTANTS',
    'FLUORINE DERIVATIVES',
    'PLASTICIZERS',
    'POLYMERS',
    'PHOSPHATE ESTERS',
    'SOLVENTS',
    'GREEN CHEMISTRY',
    'SPECIALITY ADDITIVES'
  ];

  // Duplicate categories for a seamless infinite auto-scroll loop
  const marqueeCategories = [...categories, ...categories];

  return (
    <section className="bg-white relative py-16 sm:py-24 md:py-32 border-y border-primary/5 shadow-sm overflow-hidden">
      <ChemicalBackground />
      <div className="relative z-10 w-full flex flex-col justify-center">
        
        <div className="px-6 sm:px-8 md:px-16 w-full max-w-[1400px] mx-auto mb-12 sm:mb-16 md:mb-24">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-primary leading-none tracking-tight">
            FIND THE RIGHT<br />CHEMISTRY.
          </h2>

          <div className="relative mt-10 sm:mt-14 md:mt-16 max-w-2xl group">
            <input 
              type="text" 
              placeholder="Search Product / CAS / Trade Name" 
              className="w-full bg-transparent border-b border-primary/25 pb-3 sm:pb-4 pr-10 text-primary font-sans text-base sm:text-xl font-normal placeholder-primary/50 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="absolute right-0 top-0 bottom-3 sm:bottom-4 my-auto text-primary/60 group-hover:text-primary transition-colors">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Categories Marquee */}
        <div className="w-full relative flex items-center overflow-hidden py-4">
          <motion.div
            className="flex w-max whitespace-nowrap z-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeCategories.map((category, index) => (
              <div
                key={`${category}-${index}`}
                className="group cursor-pointer flex items-center pr-12 sm:pr-16 md:pr-24 relative shrink-0"
              >
                <span className="font-sans text-2xl sm:text-4xl md:text-5xl font-normal text-primary/55 group-hover:text-accent transition-colors duration-500">
                  {category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
