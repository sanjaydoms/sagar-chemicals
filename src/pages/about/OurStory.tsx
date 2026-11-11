import { motion } from 'framer-motion';

export const OurStory = () => {
  return (
    <div className="pt-[110px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-primary overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop" 
            alt="Chemical Plant History" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-tight"
          >
            50+ Years of Chemistry.<br />
            <span className="text-sky-300 italic">Built Around Industry.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            From a chemical supply-chain business established in 1974 to a speciality chemicals company serving customers across multiple industrial segments, Sagar's story has always been shaped by technical knowledge, customer requirements and long-term relationships.
          </motion.p>
        </div>
      </section>

      {/* Content Section 1 - Where It Began */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase font-bold mb-4">Where It Began</p>
          <h2 className="font-serif text-4xl text-primary mb-6">1974 — The Beginning</h2>
          <div className="space-y-6 font-sans text-primary/70 leading-relaxed text-lg">
            <p>
              Sagar Speciality Chemicals began in 1974 with a focus on the supply-chain management of chemical products and raw materials.
            </p>
            <p>
              The business grew by understanding a simple requirement: industrial customers need more than a product. They need the right specification, dependable supply and responsive support.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop" 
            alt="Historical Chemistry" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content Section 2 - A New Chapter */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-primary/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase font-bold mb-4">A New Chapter</p>
            <h2 className="font-serif text-4xl text-primary mb-6 leading-tight">1999 — Sagar Speciality Chemicals Private Limited</h2>
            <div className="space-y-6 font-sans text-primary/70 leading-relaxed text-lg">
              <p>
                In 1999, the company was converted into a Private Limited organization under the leadership of Ravindra L. Sampat.
              </p>
              <p>
                The next chapter expanded Sagar's capabilities across raw materials, commodities, performance additives, catalysts, customization and supply-chain management.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop" 
              alt="Expansion" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section 3 - Today */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase font-bold mb-4">Today</p>
          <h2 className="font-serif text-5xl text-primary mb-12">From Products to Solutions</h2>
          <p className="font-sans text-xl text-primary/80 leading-relaxed mb-16 max-w-3xl mx-auto">
            Today, Sagar operates across a multi-brand product portfolio and supports customers through:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 text-left">
            {['Performance additives', 'Customized products', 'Supply-chain management', 'Technical support', 'Niche application development'].map((item) => (
              <div key={item} className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="font-sans font-medium text-primary">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-sans text-lg text-primary/70 leading-relaxed max-w-4xl mx-auto p-8 bg-primary/5 rounded-3xl">
            The company states that its business reach extends beyond India into <strong className="text-primary">Latin America, UAE, Indonesia, South Korea, Australia and the United States</strong>.
          </p>
        </motion.div>
      </section>

      {/* Closing */}
      <section className="py-32 bg-primary text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            The chemistry changes.<br />
            <span className="text-sky-300 italic">The commitment remains.</span>
          </h2>
          <p className="font-sans text-xl text-white/70">
            50+ years of experience continue to shape how Sagar approaches products, partnerships and industrial requirements.
          </p>
        </div>
      </section>
    </div>
  );
};
