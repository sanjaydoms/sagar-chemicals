import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileSearch,
  MessagesSquare,
  FlaskConical,
  Sliders,
  ShieldCheck,
  Truck,
  ChevronDown
} from 'lucide-react';
import clsx from 'clsx';
import { ChemicalBackground } from './ChemicalBackground';

export const Customization = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: '01',
      phase: 'DISCOVERY',
      title: 'YOUR REQUIREMENT',
      desc: 'We start by analyzing your target application, operating environment, regulatory constraints, and performance benchmarks.',
      deliverable: 'Requirement Brief & Spec Sheet',
      icon: FileSearch,
      tinted: true
    },
    {
      id: '02',
      phase: 'CONSULTATION',
      title: 'TECHNICAL DISCUSSION',
      desc: 'Our application chemists and process specialists collaborate with your team to evaluate chemical compatibility and process parameters.',
      deliverable: 'Technical Feasibility Review',
      icon: MessagesSquare,
      tinted: false
    },
    {
      id: '03',
      phase: 'SCREENING',
      title: 'PRODUCT SELECTION',
      desc: 'We identify optimal molecules, intermediates, or performance additives from our portfolio matching your exact functional needs.',
      deliverable: 'Candidate Chemistry Shortlist',
      icon: FlaskConical,
      tinted: false
    },
    {
      id: '04',
      phase: 'FORMULATION',
      title: 'CUSTOMIZATION',
      desc: 'Tailor-made synthesis, grade adjustment, or custom blending to fine-tune purity, viscosity, pH, or thermal stability.',
      deliverable: 'Custom Lab Sample & Formulation',
      icon: Sliders,
      tinted: true
    },
    {
      id: '05',
      phase: 'QUALITY LAB',
      title: 'VALIDATION',
      desc: 'Rigorous analytical testing, pilot trials, and full documentation (COA, SDS, REACH compliance) to verify batch consistency.',
      deliverable: 'Validated COA & Trial Approval',
      icon: ShieldCheck,
      tinted: false
    },
    {
      id: '06',
      phase: 'LOGISTICS',
      title: 'SUPPLY',
      desc: 'Seamless scale-up to commercial volumes with reliable global dispatch across our hubs in India, UAE, and Brazil.',
      deliverable: 'Scheduled Global Delivery',
      icon: Truck,
      tinted: true
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-16 relative overflow-hidden">
      <ChemicalBackground />
      <div className="relative z-10 max-w-[1160px] mx-auto">
        
        {/* Top Header */}
        <div className="mb-14 sm:mb-20">
          {/* Top Pill Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 font-sans text-xs font-semibold text-primary mb-6">
            How We Work
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary tracking-tight leading-[1.08] mb-6 sm:mb-10">
            FROM REQUIREMENT
            <br />
            TO SOLUTION.
          </h2>

          {/* Subtitle + Right Stepped Stage Blocks */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
            <p className="font-sans text-sm sm:text-base text-primary/75 font-normal max-w-lg leading-relaxed">
              A structured six-stage methodology engineered to translate complex industrial challenges into dependable, high-purity chemical solutions.
            </p>

            {/* Stepped Blocks (Matching Reference Top-Right Graphic) */}
            <div className="flex items-end gap-2.5 shrink-0 self-start md:self-end">
              <div className="w-24 sm:w-32 h-11 sm:h-14 bg-primary/5 border-t-2 border-primary/30 rounded-sm px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-end">
                <span className="font-sans text-xs font-semibold text-primary/80">
                  Requirement
                </span>
              </div>
              <div className="w-24 sm:w-32 h-16 sm:h-24 bg-primary/15 border-t-4 border-primary rounded-sm px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-end">
                <span className="font-sans text-xs font-semibold text-primary">
                  Supply
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Staggered Zig-Zag Cards with Dashed Elbow Connectors */}
        <div className="relative flex flex-col gap-8 lg:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0; // 0, 2, 4 on Left; 1, 3, 5 on Right
            const isActive = activeStep === index;
            const useTintedStyle = step.tinted || isActive;

            return (
              <div
                key={step.id}
                className={clsx(
                  "relative w-full flex flex-col",
                  index > 0 && "lg:-mt-4"
                )}
              >
                <div
                  className={clsx(
                    "w-full lg:w-[52%] relative z-10",
                    isEven ? "lg:mr-auto" : "lg:ml-auto"
                  )}
                >
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className={clsx(
                      "rounded-[1.75rem] p-4 sm:p-6 flex items-stretch gap-4 sm:gap-6 cursor-pointer transition-all duration-300 border",
                      useTintedStyle
                        ? "bg-[#EFF6FF] border-primary/15 shadow-[0_12px_36px_-12px_rgba(0,75,135,0.12)]"
                        : "bg-[#F8FAFC] border-slate-200/80 hover:border-primary/20 shadow-sm"
                    )}
                  >
                    {/* Left Vertical Pill Capsule */}
                    <div
                      className={clsx(
                        "w-10 sm:w-11 rounded-full flex items-center justify-center py-6 shrink-0 transition-colors duration-300",
                        useTintedStyle
                          ? "bg-primary text-white"
                          : "bg-accent text-white"
                      )}
                    >
                      <span className="font-sans text-[11px] sm:text-xs font-medium tracking-wider [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                        {step.phase}
                      </span>
                    </div>

                    {/* Right Card Content */}
                    <div className="flex-1 py-1 sm:py-2 pr-1 sm:pr-2 flex flex-col justify-between min-h-[150px] sm:min-h-[165px]">
                      {/* Top Row: Icon Circle + Numbered Title */}
                      <div className="flex items-center gap-3 sm:gap-3.5 mb-5">
                        <div
                          className={clsx(
                            "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                            useTintedStyle
                              ? "bg-primary/10 text-primary"
                              : "bg-white text-primary shadow-sm border border-primary/15"
                          )}
                        >
                          <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-primary font-semibold tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Bottom Row: Description + Deliverable */}
                      <div>
                        <p className="font-sans text-xs sm:text-sm text-primary/75 leading-relaxed mb-3">
                          {step.desc}
                        </p>
                        <div className="font-sans text-[11px] sm:text-xs font-medium text-accent">
                          Key Output: <span className="text-primary font-semibold">{step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Dashed Elbow Connector Arrow to Next Card */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop Elbow Connector */}
                    {isEven ? (
                      /* Left Card -> Right Card Connector */
                      <div className="hidden lg:block relative w-full h-16 pointer-events-none">
                        <div className="absolute left-[54%] right-[24%] top-[-36px] bottom-2 border-t-[1.5px] border-r-[1.5px] border-dashed border-primary/35 rounded-tr-2xl">
                          <ChevronDown className="w-4 h-4 text-primary/50 absolute -right-[8.5px] -bottom-2.5" />
                        </div>
                      </div>
                    ) : (
                      /* Right Card -> Left Card Connector */
                      <div className="hidden lg:block relative w-full h-16 pointer-events-none">
                        <div className="absolute left-[24%] right-[54%] top-[-36px] bottom-2 border-t-[1.5px] border-l-[1.5px] border-dashed border-primary/35 rounded-tl-2xl">
                          <ChevronDown className="w-4 h-4 text-primary/50 absolute -left-[8.5px] -bottom-2.5" />
                        </div>
                      </div>
                    )}

                    {/* Mobile / Tablet Vertical Dashed Connector */}
                    <div className="lg:hidden flex flex-col items-center -my-3 py-1 pointer-events-none">
                      <div className="h-6 border-l-[1.5px] border-dashed border-primary/35" />
                      <ChevronDown className="w-4 h-4 text-primary/50 -mt-1.5" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
