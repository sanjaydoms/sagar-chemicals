import { motion } from 'framer-motion';
import { MapPin, Phone, Upload, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-[110px] min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-primary overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-tight"
          >
            Let's Talk Chemistry.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Whether you are looking for a product, exploring a customized requirement, discussing an application or looking to build a partnership, our team is ready to understand your requirement.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm text-sky-300 uppercase tracking-widest"
          >
            Tell us what you need. We'll take it from there.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Column - Form */}
        <div className="w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5"
          >
            <div className="mb-10">
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-bold mb-4 block">
                Start a Conversation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Tell Us About Your Requirement</h2>
              <p className="font-sans text-primary/70">Use the form to share your requirement with our team.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-primary block">Full Name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary placeholder-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-primary block">Company Name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter your company"
                    className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary placeholder-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-primary block">Business Email*</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary placeholder-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-primary block">Phone Number*</label>
                  <input 
                    type="tel" 
                    placeholder="+91"
                    className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary placeholder-primary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-primary block">I'm interested in</label>
                <select defaultValue="" className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary appearance-none">
                  <option value="" disabled>Select an option</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Product Finder">Product Finder</option>
                  <option value="Customized Chemical Requirement">Customized Chemical Requirement</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Performance Additives">Performance Additives</option>
                  <option value="Supply Chain">Supply Chain</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-primary block">Product / Chemical Name</label>
                <input 
                  type="text" 
                  placeholder="What product are you looking for?"
                  className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary placeholder-primary/30"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-primary block">Tell us about your requirement</label>
                <textarea 
                  rows={4}
                  placeholder="Application, specification, quantity, timeline or any other relevant information..."
                  className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-primary placeholder-primary/30 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-primary block">Upload Requirement / Document</label>
                <div className="border-2 border-dashed border-primary/20 rounded-xl p-8 text-center hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer group">
                  <Upload className="w-6 h-6 mx-auto mb-3 text-primary/40 group-hover:text-accent transition-colors" />
                  <p className="text-sm text-primary/60 font-sans">Specification / RFQ / Technical Document</p>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="button"
                  className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-full font-mono text-sm tracking-widest uppercase hover:bg-accent transition-colors flex items-center justify-center gap-3 group"
                >
                  Send Enquiry <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-primary/50 mt-4 font-sans text-center md:text-left">
                  Our team will review your requirement and get back to you.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Right Column - Locations */}
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-32"
          >
            <div className="mb-10">
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-bold mb-4 block">
                Our Locations
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Connect With Sagar</h2>
              <p className="font-sans text-primary/70 leading-relaxed">
                With operations and business presence across India, Brazil and the UAE, our teams support customers and partners across multiple markets.
              </p>
            </div>

            <div className="space-y-8">
              {/* India Head Office */}
              <div className="bg-white p-6 rounded-2xl border border-primary/5 hover:border-accent/30 transition-colors">
                <h3 className="font-serif text-xl text-primary mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> INDIA
                </h3>
                <p className="font-mono text-xs text-primary/50 tracking-widest uppercase mb-4">Head Office</p>
                <div className="font-sans text-primary/70 text-sm space-y-1 mb-4">
                  <p>1304, Meraki Arena</p>
                  <p>V N Purav Marg, Opp. R K Studio</p>
                  <p>Chembur East, Mumbai 400071</p>
                  <p>Maharashtra, India</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-primary/5">
                  <p className="font-mono text-xs text-primary flex items-center gap-2">
                    <Phone className="w-3 h-3 text-accent" /> M: +91 9619603699
                  </p>
                  <p className="font-mono text-xs text-primary flex items-center gap-2">
                    <Phone className="w-3 h-3 text-accent" /> T: +91-22-35137822 / 21
                  </p>
                </div>
              </div>

              {/* India Plant */}
              <div className="bg-white p-6 rounded-2xl border border-primary/5 hover:border-accent/30 transition-colors">
                <h3 className="font-serif text-xl text-primary mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> INDIA
                </h3>
                <p className="font-mono text-xs text-primary/50 tracking-widest uppercase mb-4">Plant</p>
                <div className="font-sans text-primary/70 text-sm space-y-1 mb-4">
                  <p>Plot No. SME-378, Village — Juned</p>
                  <p>Saykha GIDC, Taluka — Vagra</p>
                  <p>Gujarat — 392165</p>
                  <p>India</p>
                </div>
                <div className="pt-4 border-t border-primary/5">
                  <p className="font-mono text-xs text-primary flex items-center gap-2">
                    <Phone className="w-3 h-3 text-accent" /> M: +91 9619603699
                  </p>
                </div>
              </div>

              {/* Brazil */}
              <div className="bg-white p-6 rounded-2xl border border-primary/5 hover:border-accent/30 transition-colors">
                <h3 className="font-serif text-xl text-primary mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> BRAZIL
                </h3>
                <p className="font-mono text-xs text-primary/50 tracking-widest uppercase mb-4">Correspondence Office</p>
                <div className="font-sans text-primary/70 text-sm space-y-1 mb-4">
                  <p>Rua Amélia Bueno, 173</p>
                  <p>Campinas — São Paulo</p>
                  <p>CEP 13076-050, Brazil</p>
                </div>
                <div className="pt-4 border-t border-primary/5">
                  <p className="font-mono text-xs text-primary flex items-start gap-2">
                    <Phone className="w-3 h-3 text-accent mt-0.5" /> 
                    <span>Overseas Business Enquiries:<br />+55 19 989563731</span>
                  </p>
                </div>
              </div>

              {/* UAE */}
              <div className="bg-white p-6 rounded-2xl border border-primary/5 hover:border-accent/30 transition-colors">
                <h3 className="font-serif text-xl text-primary mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> UAE
                </h3>
                <p className="font-mono text-xs text-primary/50 tracking-widest uppercase mb-4">Sagar Speciality Chemicals FZCO</p>
                <div className="font-sans text-primary/70 text-sm space-y-1 mb-4">
                  <p>FZCO FZJOA1421WS26</p>
                  <p>Jebel Ali Free Zone Authority</p>
                  <p>Dubai, UAE</p>
                </div>
                <div className="pt-4 border-t border-primary/5">
                  <p className="font-mono text-xs text-primary flex items-center gap-2">
                    <Phone className="w-3 h-3 text-accent" /> M: +971 50 485 1287
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
};
