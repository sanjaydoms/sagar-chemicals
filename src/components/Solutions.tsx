import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ShieldCheck, Globe2, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ChemicalBackground } from './ChemicalBackground';

export const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const solutions = [
    {
      id: '01',
      tag: 'FORMULATION SCIENCE',
      title: 'Performance Additives',
      desc: 'Specialized chemical formulations that enhance the durability, performance, and operational efficiency of demanding industrial systems.',
      href: '/solutions',
      icon: Sparkles,
    },
    {
      id: '02',
      tag: 'BESPOKE CHEMISTRY',
      title: 'Customized Solutions',
      desc: 'Tailor-made chemical synthesis and formulation engineered around specific client manufacturing parameters and regulatory requirements.',
      href: '/solutions',
      icon: Wrench,
    },
    {
      id: '03',
      tag: 'GLOBAL LOGISTICS',
      title: 'Supply Chain',
      desc: 'Robust global logistics and multi-hub inventory management ensuring uninterrupted delivery of critical raw materials worldwide.',
      href: '/solutions',
      icon: Globe2,
    },
    {
      id: '04',
      tag: 'PROCESS ADVISORY',
      title: 'Technical Support',
      desc: 'On-site technical evaluation, comprehensive quality documentation (COA/SDS), and continuous process optimization support.',
      href: '/solutions',
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-16 border-y border-secondary/5 overflow-hidden">
      <ChemicalBackground variant="tinted" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Centered Header Matching Reference Layout */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4">
            INTERACTIVE CAPABILITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary tracking-tight leading-[1.08] mb-5">
            More Than a Chemical Supplier.
          </h2>
          <p className="font-sans text-sm sm:text-base text-primary/75 leading-relaxed">
            Delivering end-to-end chemical excellence—from custom formulation and performance enhancement to dependable global logistics and on-site technical support.
          </p>
        </div>

        {/* Notched Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {solutions.map((solution, i) => {
            const isDark = activeIndex === i;
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className="relative group cursor-pointer"
              >
                {/* Main Card Body */}
                <div
                  className={clsx(
                    "relative rounded-[2rem] p-8 sm:p-9 pb-28 min-h-[410px] sm:min-h-[430px] flex flex-col justify-between overflow-hidden transition-colors duration-500",
                    isDark
                      ? "bg-primary text-white"
                      : "bg-[#DCEBFA] text-primary"
                  )}
                >
                  {/* Top Icon */}
                  <div>
                    <div className="mb-10">
                      <Icon
                        strokeWidth={1.6}
                        className={clsx(
                          "w-12 h-12 transition-colors duration-500",
                          isDark ? "text-white" : "text-primary"
                        )}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={clsx(
                        "font-serif text-2xl sm:text-[26px] leading-[1.2] tracking-tight mb-4 transition-colors duration-500",
                        isDark ? "text-white" : "text-primary"
                      )}
                    >
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={clsx(
                        "font-sans text-sm leading-relaxed transition-colors duration-500",
                        isDark ? "text-white/80" : "text-primary/80"
                      )}
                    >
                      {solution.desc}
                    </p>
                  </div>

                  {/* Subtle Tag Label at Bottom Left (Single Line) */}
                  <div className="pr-20 pt-4">
                    <span
                      className={clsx(
                        "block font-sans font-semibold text-[11px] tracking-[0.04em] uppercase whitespace-nowrap transition-colors duration-500",
                        isDark ? "text-sky-300" : "text-primary/70"
                      )}
                    >
                      {solution.tag}
                    </span>
                  </div>

                  {/* Bottom-Right Concave Cutout Notch */}
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] bg-[#F8FAFC] rounded-tl-[44px] z-10">
                    {/* Top-Right Inverted Fillet Curve */}
                    <div
                      className="w-[24px] h-[24px] bg-transparent absolute -top-[24px] right-0 rounded-br-[24px] pointer-events-none"
                      style={{ boxShadow: '8px 8px 0 8px #F8FAFC' }}
                    />
                    {/* Bottom-Left Inverted Fillet Curve */}
                    <div
                      className="w-[24px] h-[24px] bg-transparent absolute bottom-0 -left-[24px] rounded-br-[24px] pointer-events-none"
                      style={{ boxShadow: '8px 8px 0 8px #F8FAFC' }}
                    />
                  </div>
                </div>

                {/* Floating Circular Arrow Button inside the Cutout */}
                <Link
                  to={solution.href}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Explore ${solution.title}`}
                  className={clsx(
                    "absolute bottom-1 right-1 z-20 w-[72px] h-[72px] rounded-full border flex items-center justify-center transition-all duration-300",
                    isDark
                      ? "border-primary/40 text-primary bg-white hover:bg-primary hover:text-white hover:border-primary shadow-sm"
                      : "border-primary/25 text-primary bg-transparent hover:bg-primary hover:text-white hover:border-primary"
                  )}
                >
                  <ArrowUpRight className="w-7 h-7 stroke-[1.75] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
