import { motion } from 'framer-motion';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const Industries = () => {
  return (
    <div className="pt-[90px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Industrial applications" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-background mb-6 tracking-tight"
          >
            Industries We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-sm tracking-widest text-sky-300 uppercase"
          >
            Global Applications
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            { name: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Agrochemicals', img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Paints & Coatings', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Textiles', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Construction', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop' }
          ].map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 z-10 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">{item.name}</h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
                    <p className="font-sans text-white/80 leading-relaxed text-sm md:text-base border-t border-white/20 pt-4">
                      Providing tailored chemical solutions that enhance the performance, safety, and efficiency of products in the {item.name.toLowerCase()} sector.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQ />
      <CTA />
    </div>
  );
};
