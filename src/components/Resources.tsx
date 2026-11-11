import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChemicalBackground } from './ChemicalBackground';

export const Resources = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "0px" });
  const navigate = useNavigate();

  // No downloadable files exist yet, so documents are requested via the contact page.
  const resources = [
    { id: '01', title: 'PRODUCT CATALOGUE', action: 'REQUEST', href: '/contact' },
    { id: '02', title: 'COMPANY PROFILE', action: 'REQUEST', href: '/contact' },
    { id: '03', title: 'TECHNICAL DOCUMENTS', action: 'REQUEST', href: '/contact' },
    { id: '04', title: 'CERTIFICATES', action: 'REQUEST', href: '/contact' },
    { id: '05', title: 'FAQ', action: 'EXPLORE', href: '#faq' },
  ];

  return (
    <section ref={container} className="relative bg-white py-20 sm:py-28 md:py-40 px-6 sm:px-8 md:px-16 border-b border-primary/10 overflow-hidden">
      <ChemicalBackground />
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-24 lg:gap-32">
        
        <div className="w-full md:w-1/4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4">
            RESOURCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary tracking-tight leading-[1.1]">
            Documentation &<br className="hidden md:block" /> Downloads.
          </h2>
        </div>

        <div className="w-full md:w-3/4 flex flex-col">
          {resources.map((resource, index) => (
            <motion.a 
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              href={resource.href}
              onClick={(e) => {
                if (resource.href.startsWith('/')) {
                  e.preventDefault();
                  navigate(resource.href);
                }
              }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 md:py-10 border-b border-primary/10 hover:border-primary/35 transition-colors"
            >
              <div className="flex items-center gap-6 sm:gap-12 mb-3 sm:mb-0">
                <span className="font-mono text-xs tracking-[0.2em] text-accent font-semibold group-hover:text-primary transition-colors">
                  {resource.id}
                </span>
                <span className="font-sans text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-primary group-hover:text-accent transition-colors">
                  {resource.title}
                </span>
              </div>
              <div className="flex items-center font-mono text-xs tracking-[0.2em] text-primary/75 group-hover:text-accent transition-colors uppercase sm:ml-auto">
                {resource.action} <ArrowRight className="ml-4 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
