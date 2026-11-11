import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';
import { ChemicalBackground } from './ChemicalBackground';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We supply speciality chemicals, performance additives, and customized solutions to a wide range of industries including Pharmaceuticals, Agrochemicals, Paints & Coatings, Personal Care, Textiles, Metal Extraction, and Electronics."
    },
    {
      question: "Do you offer customized chemical synthesis?",
      answer: "Yes, we specialize in custom synthesis. Our technical team works closely with clients to understand specific application requirements and develop tailored chemical formulations to meet precise specifications."
    },
    {
      question: "What is your global reach and distribution capacity?",
      answer: "While headquartered in Mumbai, India, our business extends globally with a strong presence across Latin America, the UAE, Indonesia, South Korea, Australia, and the United States."
    },
    {
      question: "Are your products compliant with international standards?",
      answer: "Absolutely. Quality is built into every stage of our process. We provide comprehensive documentation, including regulatory and safety certificates, ensuring our products meet international quality and safety benchmarks."
    },
    {
      question: "How do I request a product sample or technical support?",
      answer: "You can easily request samples or initiate a technical consultation through our Contact Us page. Simply select 'Technical Support' or 'Product Enquiry' from the dropdown, and our team will promptly assist you."
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-5 sm:px-8 md:px-12 bg-white overflow-hidden">
      <ChemicalBackground />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4">
            Support & Queries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="border border-primary/15 rounded-2xl overflow-hidden bg-background"
              >
                <button
                  className="w-full px-5 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 sm:gap-6 hover:bg-primary/5 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={clsx(
                    "font-sans font-medium text-base sm:text-lg md:text-xl transition-colors duration-300",
                    isOpen ? "text-accent" : "text-primary"
                  )}>
                    {faq.question}
                  </span>
                  <div className={clsx(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                    isOpen ? "bg-accent text-white" : "bg-primary/10 text-primary"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-8 pb-6 sm:pb-8 text-primary/80 font-sans leading-relaxed text-sm sm:text-base md:text-lg border-t border-primary/10 pt-4 sm:pt-6 mt-1 sm:mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
