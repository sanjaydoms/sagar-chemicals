import { motion } from 'framer-motion';

export const Global = () => {
  return (
    <div className="pt-[90px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
            alt="Global reach" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-background mb-6 tracking-tight"
          >
            Global Reach
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-sm tracking-widest text-sky-300 uppercase"
          >
            Spanning Continents
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="font-serif text-4xl text-primary mb-8">Exporting Excellence Worldwide</h2>
          <p className="font-sans text-base text-primary/70 leading-relaxed">
            With a robust supply chain and strategic international partnerships, Sagar Speciality Chemicals delivers high-quality chemical products to clients across the globe. Our dedicated export division ensures seamless logistics and compliance with international trade regulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { region: 'Asia Pacific', markets: 'India, China, Japan, Southeast Asia' },
            { region: 'Middle East', markets: 'UAE, Saudi Arabia, Qatar' },
            { region: 'Americas', markets: 'USA, Brazil, Mexico' }
          ].map((item, i) => (
            <motion.div 
              key={item.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border border-secondary/20 hover:border-accent transition-colors bg-white shadow-sm"
            >
              <h3 className="font-serif text-2xl text-primary mb-4">{item.region}</h3>
              <p className="font-mono text-xs tracking-widest text-primary/60 uppercase">
                {item.markets}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
