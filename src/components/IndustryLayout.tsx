import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface IndustryLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overviewTitle: string;
  overviewText: React.ReactNode;
  applicationsTitle?: string;
  applications: { name: string; desc: string }[];
  productCategories: string[];
  productFocus?: string[];
  technicalApproach: {
    title?: string;
    steps: string[];
  };
  ctaTitle: string;
  ctaText: string;
  relatedProducts: string[];
}

export const IndustryLayout: React.FC<IndustryLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  overviewTitle,
  overviewText,
  applicationsTitle = "Built Around the Requirement",
  applications,
  productCategories,
  productFocus,
  technicalApproach,
  ctaTitle,
  ctaText,
  relatedProducts
}) => {
  return (
    <div className="pt-[110px] min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-20 flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-3 group">
              Explore Products <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white/20 transition-colors">
              Discuss Your Requirement
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-primary mb-6"
          >
            {overviewTitle}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl text-primary/70 leading-relaxed"
          >
            {overviewText}
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary mb-4">{applicationsTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={app.name}
              className="p-8 bg-white border border-primary/10 rounded-3xl shadow-sm hover:shadow-xl hover:border-accent/30 transition-all group"
            >
              <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors">{app.name}</h3>
              <p className="font-sans text-primary/70 leading-relaxed">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Categories / Focus */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-12">Product Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {(productCategories || productFocus || []).map((cat, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={cat}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-accent hover:border-accent transition-colors cursor-pointer"
              >
                {cat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach Flow */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary mb-4">{technicalApproach.title || "Technical Approach"}</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-primary/5 -translate-y-1/2 z-0"></div>
          
          {technicalApproach.steps.map((step, i) => (
            <React.Fragment key={step}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 bg-white border border-primary/10 px-8 py-6 rounded-2xl shadow-sm text-center font-mono text-xs uppercase tracking-widest text-primary w-full md:w-auto hover:border-accent transition-colors"
              >
                {step}
              </motion.div>
              {i < technicalApproach.steps.length - 1 && (
                <div className="md:hidden text-primary/20 py-2">
                  <ArrowDown className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Why Sagar Section (Common across industry pages) */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4">More Than a Chemical Supplier</h2>
            <p className="font-sans text-xl text-primary/70 max-w-3xl mx-auto">
              Sagar's current business model combines a multi-brand performance-additive portfolio, customized products, supply-chain management and technical support for niche applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'PRODUCT', desc: 'Access to a multi-segment speciality chemical portfolio.' },
              { id: '02', title: 'TECHNICAL', desc: 'Support around niche applications and product selection.' },
              { id: '03', title: 'CUSTOMIZATION', desc: 'Solutions based on standard specifications or customized requirements.' },
              { id: '04', title: 'SUPPLY', desc: 'Supply-chain support designed around customer requirements.' }
            ].map((item) => (
              <div key={item.id} className="p-8 border border-primary/10 rounded-3xl hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-sm tracking-widest uppercase text-accent font-bold mb-4">{item.title}</h3>
                <p className="font-sans text-primary/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 px-6 md:px-12 bg-background border-t border-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-primary mb-10">Explore Related Chemistry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedProducts.map(prod => (
              <Link 
                key={prod} 
                to="/products"
                className="px-6 py-3 bg-white border border-primary/10 rounded-full font-mono text-xs tracking-widest uppercase text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {prod}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">{ctaTitle}</h2>
          <p className="font-sans text-lg text-white/70 mb-10">{ctaText}</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-primary transition-colors group">
            Discuss Your Requirement <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};
