import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export const Quality = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "0px" });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"]
  });

  // Background color transition from soft brand surface to corporate navy
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['#F8FAFC', '#004B87']
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['#004B87', '#FFFFFF']
  );

  const points = [
    'QUALITY',
    'COMPLIANCE',
    'SAFETY',
    'DOCUMENTATION',
    'TECHNICAL SUPPORT'
  ];

  return (
    <motion.section 
      ref={container} 
      style={{ backgroundColor, color: textColor }}
      className="relative z-10 py-20 sm:py-28 md:py-44 px-6 sm:px-8 md:px-16 overflow-hidden transition-colors duration-1000"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-32">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="mb-4 lg:mb-16">
            <div className="overflow-hidden mb-2">
              <motion.h2 
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
              >
                Quality
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h2 
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
              >
                Is Built
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
              >
                In.
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div 
            style={{ borderColor: textColor }}
            className="border-t opacity-20"
          ></motion.div>
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
              className="py-5 sm:py-6 md:py-8 border-b border-current font-sans text-xl sm:text-2xl md:text-3xl font-light tracking-wide hover:text-sky-300 transition-colors cursor-default opacity-90"
              style={{ borderColor: 'inherit' }}
            >
              {point}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};
