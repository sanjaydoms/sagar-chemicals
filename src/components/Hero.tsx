import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides = [
    {
      id: '01',
      tag: 'PRECISION SYNTHESIS',
      titlePrimary: 'Chemistry',
      titleSecondary: 'with Purpose.',
      description:
        'Speciality chemical solutions, performance additives and technical expertise for demanding industrial applications worldwide.',
      videoUrl:
        'https://cdn.coverr.co/videos/coverr-laboratory-glassware-with-blue-liquid-6151/1080p.mp4',
      posterImage:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: '02',
      tag: 'ANALYTICAL R&D',
      titlePrimary: 'Formulated for',
      titleSecondary: 'Performance.',
      description:
        'Advanced molecular screening, rigorous quality documentation, and custom additive blending engineered to customer specifications.',
      videoUrl:
        'https://cdn.coverr.co/videos/coverr-scientist-pipetting-liquid-in-a-lab-4131/1080p.mp4',
      posterImage:
        'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: '03',
      tag: 'PROCESS REACTION',
      titlePrimary: 'Transforming',
      titleSecondary: 'Industrial Processes.',
      description:
        'Extreme-pressure additives, anti-wear agents, and speciality catalysts optimizing manufacturing yield and operational uptime.',
      videoUrl:
        'https://cdn.coverr.co/videos/coverr-mixing-chemicals-in-a-beaker-5762/1080p.mp4',
      posterImage:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: '04',
      tag: 'QUALITY ASSURANCE',
      titlePrimary: 'Consistency in',
      titleSecondary: 'Every Batch.',
      description:
        'Trace-metal limit testing, pilot trials, and international standard compliance (COA, SDS, REACH) across multi-hub distribution.',
      videoUrl:
        'https://cdn.coverr.co/videos/coverr-test-tubes-with-liquid-4340/1080p.mp4',
      posterImage:
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: '05',
      tag: 'GLOBAL INFRASTRUCTURE',
      titlePrimary: 'Scale without',
      titleSecondary: 'Boundaries.',
      description:
        'Connecting international supply chains with dedicated hubs in India, the UAE, and Brazil serving 700+ industrial leaders.',
      videoUrl:
        'https://cdn.coverr.co/videos/coverr-oil-refinery-smoke-chimneys-4606/1080p.mp4',
      posterImage:
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&q=80',
    },
  ];

  // Auto-advance slides every 6.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Synchronize HTML5 video playback
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentSlide) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy fallback: video still renders poster image seamlessly
          });
        }
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-primary overflow-hidden flex items-end">
      {/* Background Chemistry Video Showcase */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={clsx(
              'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            )}
          >
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={slide.videoUrl}
              poster={slide.posterImage}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        ))}

        {/* Corporate Navy Multi-Stage Gradient Overlay for Perfect Contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary via-primary/65 to-primary/30" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-primary/90 via-primary/45 to-transparent" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-30 w-full max-w-site mx-auto px-6 sm:px-8 md:px-16 pt-32 pb-12 sm:pb-16 md:pb-20">
        
        {/* Dynamic Titles */}
        <div className="min-h-[140px] sm:min-h-[200px] md:min-h-[250px] flex flex-col justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.95] tracking-tight">
                {active.titlePrimary}
              </h1>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-sky-200/90 leading-[0.98] tracking-tight mt-1">
                {active.titleSecondary}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Description & Call to Actions */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 border-t border-white/20 pt-6 sm:pt-8 mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-white/85 font-sans text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed"
            >
              {active.description}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
            <Link
              to="/products"
              className="px-6 sm:px-7 py-3.5 rounded-full bg-white text-primary font-mono text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-3 hover:bg-sky-100 transition-all duration-300 shadow-xl group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-mono text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all duration-300 group"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
