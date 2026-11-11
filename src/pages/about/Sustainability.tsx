import React from 'react';
import { motion } from 'framer-motion';

export const Sustainability = () => {
  return (
    <div className="pt-[110px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-primary overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Responsible Business" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-tight"
          >
            Responsible Chemistry.<br/>
            <span className="text-sky-300 italic">Responsible Business.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Sustainability at Sagar begins with responsible business practices, workplace principles, safety awareness and long-term relationships.
          </motion.p>
        </div>
      </section>

      {/* Four Principles */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase font-bold mb-4">Four Principles</p>
          <h2 className="font-serif text-4xl text-primary">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { 
              title: 'Responsible Operations', 
              desc: 'Business practices guided by defined company policies and ethical conduct.' 
            },
            { 
              title: 'Safety, Health & Environment', 
              desc: 'Sagar states its adherence to Safety, Health & Environmental policies and engagement with principals following relevant SHE practices.' 
            },
            { 
              title: 'People & Workplace', 
              desc: 'The company states its commitment to a free and fair work environment and adherence to applicable policies concerning child labour and sexual harassment.' 
            },
            { 
              title: 'Long-Term Thinking', 
              desc: 'Building relationships and supply capabilities designed around continuing customer requirements.' 
            }
          ].map((principle, i) => (
            <motion.div 
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="font-mono text-4xl text-primary/10 font-bold mt-1">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-primary mb-4">{principle.title}</h3>
                <p className="font-sans text-primary/70 leading-relaxed text-lg">
                  {principle.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 bg-primary text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Sustainability is not a statement.<br />
            <span className="text-sky-300 italic">It is a responsibility carried through the way we work.</span>
          </h2>
        </div>
      </section>
    </div>
  );
};
