import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Quality = () => {
  return (
    <div className="pt-[90px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-primary overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop" 
            alt="Quality Control" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-tight"
          >
            Quality Is Built Into <span className="text-sky-300 italic">Every Stage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            For industrial chemicals, quality is not simply a specification on a document. It influences formulation, compatibility, handling, consistency and final application.
          </motion.p>
        </div>
      </section>

      {/* Specification-Led Selection */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl text-primary mb-8">Specification-Led Selection</h2>
            <p className="font-sans text-xl text-primary/70 leading-relaxed">
              Sagar works with products based on customer requirements and specifications, covering raw materials, catalysts, formulations and performance additives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality & Documentation */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4">Quality & Documentation</p>
          <h2 className="font-serif text-4xl text-primary">Our Approach Brings Together:</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { title: 'Product Selection', desc: 'Products aligned with defined requirements.' },
            { title: 'Technical Review', desc: 'Understanding application and performance needs.' },
            { title: 'Documentation', desc: 'Supporting customers with required product and regulatory documentation.' },
            { title: 'Quality Control', desc: 'Quality oversight across relevant customized product supply.' }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-primary/10 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="font-sans text-primary/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-primary text-white rounded-3xl text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <p className="font-sans text-xl leading-relaxed relative z-10 max-w-3xl mx-auto">
            Sagar states that its products include recognized brands or standards and that mandatory documentation can be supported where required.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-primary/10 text-center px-6">
        <h2 className="font-serif text-4xl text-primary mb-8">Looking for a Specification-Based Chemical Solution?</h2>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-primary transition-colors gap-3 group">
          Talk to our technical team <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </section>
    </div>
  );
};
