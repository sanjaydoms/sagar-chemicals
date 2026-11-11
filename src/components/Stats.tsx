import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChemicalBackground } from './ChemicalBackground';

const CountUp = ({ value, inView }: { value: string, inView: boolean }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const hasPlus = value.includes('+');

  useEffect(() => {
    if (inView && numericValue > 0) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else if (inView && numericValue === 0) {
       // for non numeric like "3" hubs
       setCount(parseInt(value) || 0);
    }
  }, [inView, numericValue, value]);

  return <span>{numericValue > 0 ? count : value}{hasPlus ? '+' : ''}</span>;
};

export const Stats = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { value: '50+', label: 'YEARS OF EXPERTISE' },
    { value: '700+', label: 'GLOBAL CUSTOMERS' },
    { value: '100+', label: 'SPECIALITY PRODUCTS' },
    { value: '3', label: 'INTERNATIONAL HUBS' },
  ];

  return (
    <section ref={container} className="bg-white py-16 sm:py-24 md:py-36 px-6 sm:px-8 md:px-16 border-y border-primary/5 shadow-sm relative z-10 overflow-hidden">
      <ChemicalBackground showMolecules={false} />
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
          >
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-3 sm:mb-4">
              <CountUp value={stat.value} inView={isInView} />
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-primary/70 font-semibold uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
