import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CTA = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "0px" });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const buttonLineWidth = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);

  return (
    <section ref={container} className="bg-[#F5F8FC] py-20 sm:py-32 md:py-48 px-6 sm:px-8 md:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden border-t border-primary/5">
      
      <div className="mb-10 sm:mb-16">
        <div className="overflow-hidden mb-2">
          <motion.h2 
            initial={{ y: 150 }}
            animate={isInView ? { y: 0 } : { y: 150 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.95] tracking-tight"
          >
            HAVE A CHEMICAL
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: 150 }}
            animate={isInView ? { y: 0 } : { y: 150 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.95] tracking-tight"
          >
            REQUIREMENT?
          </motion.h2>
        </div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="font-sans text-lg sm:text-xl md:text-2xl font-light text-primary/70 mb-12 sm:mb-16 md:mb-20 z-10"
      >
        Let's discuss your industrial specifications.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative"
      >
        <Link 
          to="/contact" 
          className="inline-flex items-center font-mono text-xs tracking-[0.3em] text-primary hover:text-accent transition-colors group z-10 uppercase pb-4 px-4"
        >
          TALK TO SAGAR <ArrowRight className="ml-5 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
        </Link>
        <motion.div 
          style={{ width: buttonLineWidth }}
          className="absolute bottom-0 left-0 h-[1px] bg-primary origin-left"
        ></motion.div>
      </motion.div>
    </section>
  );
};
