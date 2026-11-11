import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 3.8s total animation time before unmounting
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800); // 0.8s for the exit transition
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Array of 10 orbital particles for the molecular animation
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    radius: Math.random() * 120 + 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * -20,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#031A2B' }}
        >
          {/* Subtle Ambient Glow Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 0.4 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, rgba(32,191,200,0.15) 0%, rgba(67,139,203,0.05) 50%, rgba(3,26,43,0) 80%)'
            }}
          />

          {/* Symmetrically Centered Chemical Structure Illustration Background */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] md:opacity-[0.06] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isExiting ? 0 : [0.03, 0.08, 0.04], scale: 1 }}
            transition={{ duration: 4, ease: "easeInOut", opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
          >
            <svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
              <motion.g 
                transform="translate(25, 57)"
                stroke="#20BFC8" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              >
                {/* Large abstract molecular structure centered around (575, 343) + translate(25, 57) = (600, 400) */}
                <path d="M400,300 L450,213.4 L550,213.4 L600,300 L550,386.6 L450,386.6 Z" />
                <path d="M600,300 L700,300 L750,213.4 L700,126.8 L600,126.8 L550,213.4" />
                <path d="M450,386.6 L400,473.2 L450,559.8 L550,559.8 L600,473.2 L550,386.6" />
                <path d="M700,300 L750,386.6 L700,473.2 L600,473.2" />
                <path d="M750,386.6 L850,386.6 L900,473.2" />
                <path d="M400,300 L300,300 L250,213.4" />
                <path d="M300,300 L250,386.6" />
                {/* Double bonds */}
                <path d="M465,230.7 L535,230.7" strokeWidth="3" opacity="0.5" />
                <path d="M415,317.3 L440,360.6" strokeWidth="3" opacity="0.5" />
                <path d="M560,360.6 L585,317.3" strokeWidth="3" opacity="0.5" />
                <path d="M615,282.7 L685,282.7" strokeWidth="3" opacity="0.5" />
                <path d="M465,542.5 L535,542.5" strokeWidth="3" opacity="0.5" />
                {/* Free floating reaction molecules */}
                <circle cx="200" cy="180" r="15" />
                <circle cx="150" cy="210" r="10" />
                <path d="M188,188 L159,203" />
                <circle cx="950" cy="500" r="20" />
                <circle cx="1020" cy="480" r="12" />
                <circle cx="970" cy="580" r="16" />
                <path d="M968,495 L1008,485" />
                <path d="M955,519 L965,565" />
                {/* Reaction arrows */}
                <path d="M850,200 L950,200" />
                <path d="M940,190 L950,200 L940,210" />
                <path d="M300,500 L200,500" />
                <path d="M210,490 L200,500 L210,510" />
              </motion.g>
            </svg>
          </motion.div>

          {/* Molecular Particle Network */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 0.6 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute inset-0 pointer-events-none"
          >
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: '#20BFC8',
                  opacity: 0.15 + (Math.random() * 0.2),
                }}
                animate={{
                  x: [
                    `calc(-50% + ${Math.cos(0) * p.radius}px)`,
                    `calc(-50% + ${Math.cos(Math.PI) * p.radius}px)`,
                    `calc(-50% + ${Math.cos(Math.PI * 2) * p.radius}px)`,
                  ],
                  y: [
                    `calc(-50% + ${Math.sin(0) * p.radius * p.direction}px)`,
                    `calc(-50% + ${Math.sin(Math.PI) * p.radius * p.direction}px)`,
                    `calc(-50% + ${Math.sin(Math.PI * 2) * p.radius * p.direction}px)`,
                  ],
                }}
                transition={{
                  duration: p.duration,
                  ease: "linear",
                  repeat: Infinity,
                  delay: p.delay
                }}
              />
            ))}
          </motion.div>

          {/* Exact Dead-Center Logo Container (50%, 50% of Viewport) */}
          <div className="relative z-10 w-full px-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isExiting ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
              transition={{ 
                duration: isExiting ? 0.6 : 1.0, 
                ease: isExiting ? "easeIn" : [0.25, 1, 0.5, 1],
                delay: isExiting ? 0 : 0.4
              }}
              className="relative overflow-hidden rounded-md flex items-center justify-center mx-auto"
            >
              <img 
                src="/logo.png" 
                alt="Sagar Speciality Chemicals" 
                className="block w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] h-auto object-contain object-center brightness-0 invert mx-auto" 
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
              />
              
              {/* Light Sweep Effect */}
              {!isExiting && (
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '200%' }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-[40%] skew-x-[-20deg]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(32,191,200,0.15), transparent)'
                  }}
                />
              )}
            </motion.div>
          </div>

          {/* Circular Loading Indicator Positioned Cleanly Below Center Without Shifting the Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: isExiting ? 0 : 1.5 }}
            className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+90px)] sm:top-[calc(50%+115px)] z-10 flex flex-col items-center"
          >
            <div className="relative w-[36px] md:w-[42px] h-[36px] md:h-[42px] mb-5">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {/* Background Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(32,191,200,0.1)"
                  strokeWidth="2"
                />
                {/* Progress Indicator */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#20BFC8"
                  strokeWidth="2"
                  strokeDasharray="301.59"
                  initial={{ strokeDashoffset: 301.59 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.8, delay: 1.5, ease: "easeInOut" }}
                  style={{ strokeLinecap: "round" }}
                />
              </svg>
            </div>

            {/* Minimal Text Indicators */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-[9px] md:text-[10px] font-medium tracking-[3px] uppercase mb-2 pl-[3px]"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                LOADING
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="text-[7px] md:text-[8px] tracking-[4px] uppercase pl-[4px]"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                SPECIALITY CHEMICALS
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
