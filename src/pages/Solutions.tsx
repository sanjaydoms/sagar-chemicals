import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Solutions = () => {
  return (
    <div className="pt-[90px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/laboratory_glassware.jpg"
            alt="Laboratory glassware" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-background mb-6 tracking-tight"
          >
            Custom Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-sm tracking-widest text-sky-300 uppercase"
          >
            Tailored for Your Needs
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="space-y-24">
          {[
            { title: 'Custom Synthesis', desc: 'We offer specialized custom synthesis services to develop unique chemical compounds tailored to your exact specifications and application requirements.' },
            { title: 'Process Optimization', desc: 'Our team of expert chemical engineers can help optimize your manufacturing processes to improve yield, reduce waste, and enhance overall efficiency.' },
            { title: 'Quality Assurance', desc: 'Rigorous testing and analytical services to ensure every batch meets the highest international standards of purity and consistency.' }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-4xl text-primary mb-6">{item.title}</h3>
                <p className="font-sans text-base text-primary/70 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-accent transition-colors">
                  Learn More
                </Link>
              </div>
              <div className="w-full md:w-1/2 aspect-square bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/10 group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
