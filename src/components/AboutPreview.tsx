import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

export const AboutPreview = () => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const stories = [
    {
      id: '01',
      year: '1974',
      title: 'THE BEGINNING',
      desc: 'Sagar was founded with a vision to deliver precise chemical solutions.',
      img: '/images/chemical_plant.jpg'
    },
    {
      id: '02',
      year: '1999',
      title: 'A NEW CHAPTER',
      desc: 'Expanding our technical capabilities and manufacturing footprint.',
      img: '/images/performance_additives.jpg'
    },
    {
      id: '03',
      year: '2015',
      title: 'SPECIALITY CHEMISTRY',
      desc: 'Pioneering new formulations for complex industrial applications.',
      img: '/images/laboratory_glassware.jpg'
    },
    {
      id: '04',
      year: 'TODAY',
      title: 'GLOBAL REACH',
      desc: 'An international presence serving over 700 customers worldwide.',
      img: '/images/chemical_plant.jpg'
    }
  ];

  // We have 4 stories. Each takes 25% of the scroll progress.
  const activeIndex = useTransform(scrollYProgress, (v) => {
    if (v < 0.25) return 0;
    if (v < 0.5) return 1;
    if (v < 0.75) return 2;
    return 3;
  });

  // Convert motion value to react state for conditional rendering of active elements without re-rendering everything rapidly
  const [current, setCurrent] = React.useState(0);
  
  React.useEffect(() => {
    return activeIndex.on("change", (v) => setCurrent(v));
  }, [activeIndex]);

  return (
    <section ref={container} className="bg-[#F5F8FC] relative h-[350vh] md:h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 overflow-hidden max-w-[1400px] mx-auto pt-20 sm:pt-24 pb-6 sm:pb-10">
        
        {/* Main Section Heading */}
        <div className="w-full mb-4 sm:mb-6 lg:mb-10 shrink-0">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] uppercase tracking-tight">
            A Legacy of <br />
            Precision.
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 flex-1 min-h-0 max-h-[540px] md:max-h-[480px]">
          {/* Left: Pinned Image */}
          <div className="w-full md:w-1/2 h-[24vh] sm:h-[28vh] md:h-full max-h-[420px] relative overflow-hidden rounded-2xl shadow-sm shrink-0">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: current === i ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img 
                  src={story.img} 
                  alt={story.title} 
                  className="w-full h-full object-cover opacity-90"
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Text Storytelling */}
          <div className="w-full md:w-1/2 relative flex flex-col justify-center flex-1 w-full min-h-[180px] sm:min-h-[210px] md:h-full max-h-[420px]">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                className={clsx(
                  "absolute inset-x-0 flex flex-col justify-center",
                  current === i ? "pointer-events-auto" : "pointer-events-none"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: current === i ? 1 : 0, y: current === i ? 0 : -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-primary/60 font-semibold mb-2 sm:mb-4 lg:mb-6 uppercase">
                  ABOUT
                </div>
                
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-none mb-2 sm:mb-3 tracking-tight">
                  {story.year}
                </div>
                <h3 className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-accent font-bold mb-3 sm:mb-6 lg:mb-8 uppercase">
                  {story.title}
                </h3>
                
                <p className="font-sans text-base sm:text-lg lg:text-xl text-primary/75 leading-relaxed font-normal max-w-md">
                  {story.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
