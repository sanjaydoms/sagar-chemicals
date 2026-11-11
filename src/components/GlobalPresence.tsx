import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import clsx from 'clsx';
import worldMapUrl from '../assets/world-map.svg';
import { ChemicalBackground } from './ChemicalBackground';

type CountryFlagProps = { code: string };

const CountryFlag: React.FC<CountryFlagProps> = ({ code }) => {
  switch (code) {
    case 'IN': // India
      return (
        <svg viewBox="0 0 36 36" className="w-4 h-4 sm:w-7 sm:h-7 rounded-full shrink-0 shadow-sm">
          <rect width="36" height="12" y="0" fill="#FF9933" />
          <rect width="36" height="12" y="12" fill="#FFFFFF" />
          <rect width="36" height="12" y="24" fill="#138808" />
          <circle cx="18" cy="18" r="4" fill="none" stroke="#000080" strokeWidth="1.2" />
          <circle cx="18" cy="18" r="1" fill="#000080" />
        </svg>
      );
    case 'AE': // UAE
      return (
        <svg viewBox="0 0 36 36" className="w-4 h-4 sm:w-7 sm:h-7 rounded-full shrink-0 shadow-sm">
          <rect width="36" height="12" y="0" fill="#00732F" />
          <rect width="36" height="12" y="12" fill="#FFFFFF" />
          <rect width="36" height="12" y="24" fill="#000000" />
          <rect width="10" height="36" x="0" y="0" fill="#FF0000" />
        </svg>
      );
    case 'BR': // Brazil
      return (
        <svg viewBox="0 0 36 36" className="w-4 h-4 sm:w-7 sm:h-7 rounded-full shrink-0 shadow-sm">
          <rect width="36" height="36" fill="#009B3A" />
          <polygon points="18,6 31,18 18,30 5,18" fill="#FEDF00" />
          <circle cx="18" cy="18" r="6.5" fill="#002776" />
          <path d="M12,17 Q18,14 24,19" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case 'US': // United States
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shrink-0 shadow-sm">
          <rect width="36" height="36" fill="#FFFFFF" />
          {[0, 6, 12, 18, 24, 30].map((y) => (
            <rect key={y} width="36" height="3" y={y} fill="#B22234" />
          ))}
          <rect width="18" height="19" x="0" y="0" fill="#3C3B6E" />
          <circle cx="5" cy="5" r="1" fill="#FFFFFF" />
          <circle cx="10" cy="5" r="1" fill="#FFFFFF" />
          <circle cx="14" cy="5" r="1" fill="#FFFFFF" />
          <circle cx="7" cy="9" r="1" fill="#FFFFFF" />
          <circle cx="12" cy="9" r="1" fill="#FFFFFF" />
          <circle cx="5" cy="13" r="1" fill="#FFFFFF" />
          <circle cx="10" cy="13" r="1" fill="#FFFFFF" />
          <circle cx="14" cy="13" r="1" fill="#FFFFFF" />
        </svg>
      );
    case 'ID': // Indonesia
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shrink-0 shadow-sm border border-slate-100">
          <rect width="36" height="18" y="0" fill="#CE1126" />
          <rect width="36" height="18" y="18" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
};

export const GlobalPresence = () => {
  const [activeHub, setActiveHub] = useState<string | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "0px" });

  const metrics = [
    { value: '700+', label: 'Global Customers' },
    { value: '50+ Yrs', label: 'Chemical Expertise' },
    { value: '3 Hubs', label: 'International Operations' },
  ];

  // Exact SVG coordinates inside viewBox="0 40 950 450"
  // India (HQ): (665, 274) -> left: 70%, top: 52%
  // UAE:        (513, 229) -> left: 54%, top: 42%
  // Brazil:     (314, 373) -> left: 33%, top: 74%
  const markers = [
    {
      code: 'BR',
      country: 'Brazil',
      role: 'Campinas • South America Branch',
      isMain: false,
      x: 314,
      y: 373,
      top: '74%',
      left: '33%',
    },
    {
      code: 'AE',
      country: 'United Arab Emirates',
      role: 'Dubai • Regional Branch',
      isMain: false,
      x: 513,
      y: 229,
      top: '42%',
      left: '54%',
    },
    {
      code: 'IN',
      country: 'India',
      role: 'Mumbai & Gujarat • Main HQ',
      isMain: true,
      x: 665,
      y: 274,
      top: '52%',
      left: '70%',
    },
  ];

  // Connecting threads from India (Main Branch) to UAE and Brazil
  const threads = [
    {
      id: 'india-to-uae',
      targetCode: 'AE',
      path: 'M 665 274 Q 595 195 513 229',
      duration: 2.6,
    },
    {
      id: 'india-to-brazil',
      targetCode: 'BR',
      path: 'M 665 274 Q 485 430 314 373',
      duration: 3.4,
    },
  ];

  return (
    <section
      ref={container}
      className="relative bg-white py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 overflow-hidden"
    >
      <ChemicalBackground showMolecules={true} className="opacity-65" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden"
        >
          {/* Top Header Row */}
          <div className="max-w-2xl mb-8 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.12] tracking-tight font-semibold">
              Engineered for Global Scale.
              <br />
              Chemistry Without Borders.
            </h2>
          </div>

          {/* Right-Aligned Stats Row */}
          <div className="flex justify-start lg:justify-end mb-8 sm:mb-12">
            <div className="grid grid-cols-3 gap-4 sm:gap-12 md:gap-16 lg:gap-20 w-full lg:w-auto">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-primary font-semibold tracking-tight mb-1 sm:mb-1.5">
                    {metric.value}
                  </span>
                  <span className="font-sans text-[11px] sm:text-sm text-primary/70 font-normal">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dotted World Map with Connecting Threads & Floating Flag Pills */}
          <div className="relative w-full min-h-[220px] sm:min-h-0 aspect-[950/480] sm:aspect-[950/450] -mx-1 sm:mx-0">
            <svg
              viewBox="0 40 950 450"
              className="w-full h-full select-none pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Uniform Circular Dot Grid Pattern */}
                <pattern
                  id="global-dot-pattern"
                  x="0"
                  y="0"
                  width="7.5"
                  height="7.5"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="3.75" cy="3.75" r="1.95" fill="#94A3B8" />
                </pattern>

                {/* Thread Gradient from India HQ */}
                <linearGradient id="thread-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#004B87" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0077B6" stopOpacity="0.65" />
                </linearGradient>

                {/* Alpha Mask using the World Map SVG */}
                <mask id="world-continent-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                  <image
                    href={worldMapUrl}
                    x="0"
                    y="0"
                    width="950"
                    height="620"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </mask>
              </defs>

              {/* Dotted Continents Layer */}
              <rect
                x="0"
                y="0"
                width="950"
                height="620"
                fill="url(#global-dot-pattern)"
                mask="url(#world-continent-mask)"
              />

              {/* Curved Connecting Threads from India (Main Branch) to UAE & Brazil */}
              {threads.map((thread, i) => (
                <g key={thread.id}>
                  {/* Subtle Shadow Arc */}
                  <path
                    d={thread.path}
                    fill="none"
                    stroke="#004B87"
                    strokeOpacity="0.12"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Dashed Thread Line */}
                  <motion.path
                    d={thread.path}
                    fill="none"
                    stroke="url(#thread-gradient)"
                    strokeWidth="2.2"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
                  />
                  {/* Travelling Signal Dot from India HQ to Branch */}
                  <circle r="4" fill="#0077B6">
                    <animateMotion
                      dur={`${thread.duration}s`}
                      repeatCount="indefinite"
                      path={thread.path}
                    />
                  </circle>
                  <circle r="7" fill="#0077B6" opacity="0.25">
                    <animateMotion
                      dur={`${thread.duration}s`}
                      repeatCount="indefinite"
                      path={thread.path}
                    />
                  </circle>
                </g>
              ))}

              {/* Anchor Pulse Ring at India (Main Branch) */}
              <circle
                cx="665"
                cy="274"
                r="18"
                fill="none"
                stroke="#004B87"
                strokeWidth="1.5"
                opacity="0.35"
              >
                <animate
                  attributeName="r"
                  values="10;28"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* Floating Country Flag Pills */}
            {markers.map((marker, idx) => {
              const isSelected = activeHub === marker.code;
              return (
                <motion.div
                  key={marker.code}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  style={{ top: marker.top, left: marker.left }}
                  onMouseEnter={() => setActiveHub(marker.code)}
                  onMouseLeave={() => setActiveHub(null)}
                  onClick={() => setActiveHub(isSelected ? null : marker.code)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div
                    className={clsx(
                      "flex items-center gap-1.5 sm:gap-2.5 rounded-full pl-1 sm:pl-1.5 pr-2.5 sm:pr-4 py-0.5 sm:py-1.5 shadow-[0_8px_28px_rgba(0,75,135,0.14)] border transition-all duration-300",
                      marker.isMain
                        ? "bg-primary text-white border-primary ring-2 sm:ring-4 ring-primary/15"
                        : isSelected
                        ? "bg-white text-primary border-primary scale-105 shadow-[0_12px_32px_rgba(0,75,135,0.22)]"
                        : "bg-white text-primary border-primary/15 hover:scale-105"
                    )}
                  >
                    <CountryFlag code={marker.code} />
                    <span
                      className={clsx(
                        "font-sans text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap",
                        marker.isMain ? "text-white" : "text-primary"
                      )}
                    >
                      {marker.country}
                    </span>
                    {marker.isMain && (
                      <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[9px] font-mono tracking-wider uppercase text-white">
                        HQ
                      </span>
                    )}
                  </div>

                  {/* Interactive Role Tooltip on Hover / Tap */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded-lg bg-primary text-white font-sans text-[11px] font-medium whitespace-nowrap shadow-lg pointer-events-none"
                      >
                        {marker.role}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
