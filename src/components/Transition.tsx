import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Transition = () => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <section ref={container} className="relative z-10 bg-primary min-h-[60vh] md:h-screen py-20 flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ opacity, scale }}
        className="relative flex flex-col items-center justify-center w-full px-6"
      >
        <motion.div style={{ y: y1 }} className="font-serif text-5xl sm:text-7xl md:text-[10rem] lg:text-[14rem] text-background/10 leading-none whitespace-nowrap tracking-tighter mix-blend-overlay">
          CHEMISTRY
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
           <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl text-background font-light tracking-wide text-center">
             CONNECTING <br/> THE WORLD'S <br/> INDUSTRIES
           </h2>
        </div>

        <motion.div style={{ y: y2 }} className="font-serif text-5xl sm:text-7xl md:text-[10rem] lg:text-[14rem] text-background/10 leading-none whitespace-nowrap tracking-tighter mix-blend-overlay mt-8 sm:mt-12">
          SOLUTIONS
        </motion.div>
      </motion.div>
    </section>
  );
};
