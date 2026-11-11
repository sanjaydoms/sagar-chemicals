import { motion } from 'framer-motion';
import { Search, ArrowRight, Beaker, Factory, PackageSearch, FileText, Settings, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const categories = [
  { name: 'Amines', desc: 'Speciality amines and related chemical materials.' },
  { name: 'Anti-Hydrolysis Agents', desc: 'Materials designed for applications where hydrolytic stability is an important requirement.' },
  { name: 'C5 Products', desc: 'Speciality C5-based chemical products for industrial applications.' },
  { name: 'Dibenzoates', desc: 'Dibenzoate-based materials for application-specific formulation requirements.' },
  { name: 'Diphenols', desc: 'Speciality diphenol chemistry for industrial applications.' },
  { name: 'Fluorine Derivatives', desc: 'Fluorinated chemical derivatives and intermediates.' },
  { name: 'Glycolic Acid', desc: 'Glycolic-acid-based chemistry for industrial requirements.' },
  { name: 'Green Chemistry', desc: 'Products within Sagar\'s green chemistry portfolio.' },
  { name: 'Hydrobromic Acid', desc: 'Hydrobromic acid and related chemical requirements.' },
  { name: 'Initiators', desc: 'Materials used to initiate chemical and polymerization processes.' },
  { name: 'Inorganic Phosphites', desc: 'Phosphite-based inorganic chemistry for industrial applications.' },
  { name: 'Nitrates & Metabisulphites', desc: 'Inorganic chemical materials for process and formulation requirements.' },
  { name: 'Persulphates', desc: 'Persulphate-based oxidizing materials.' },
  { name: 'Phosphate Esters & Flame Retardants', desc: 'Performance chemicals supporting flame-retardancy and other formulation requirements.' },
  { name: 'Phosphonic & Related Chemistry', desc: 'Phosphonic and related speciality chemistry for industrial processes.' },
  { name: 'Plasticizers', desc: 'Materials used to modify flexibility and performance in polymer systems.' },
  { name: 'Polymers', desc: 'Polymer materials for industrial and formulation applications.' },
  { name: 'Polyurethane & Cast Nylon Additives', desc: 'Speciality additives supporting polyurethane and cast nylon applications.' },
  { name: 'Refined Glycerine', desc: 'Refined glycerine for industrial applications.' },
  { name: 'Solvents', desc: 'Solvent products selected for specific process and application requirements.' },
  { name: 'Surfactants & Antistatic Agents', desc: 'Surface-active and antistatic materials for formulation and process applications.' },
  { name: 'Triazoles', desc: 'Triazole chemistry for speciality industrial applications.' },
  { name: 'Other Products', desc: 'Additional speciality chemical products within the Sagar portfolio.' }
];

const featuredProducts = [
  '1,2,3-Benzotriazole',
  '1-Fluoronaphthalene',
  '2-Ethylhexyl Diphenyl Phosphate',
  '2-Ethylhexyl Glucoside',
  'PBTC 50%',
  '5-Nitrosalicylic Acid',
  'Ammonium Persulphate',
  'Antifoam — Modified Siloxane',
  'Antifoam — Phosphate-Ester-Based',
  'Ascorbic Acid'
];

export const Products = () => {
  return (
    <div className="pt-[90px] min-h-screen bg-background">
      
      {/* 01. HERO */}
      <section className="relative min-h-[60vh] py-20 flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/performance_additives.jpg"
            alt="Speciality chemical products" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight"
          >
            Chemistry for <span className="text-sky-300 italic">Industrial Performance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl text-white/80 leading-relaxed mb-8"
          >
            From speciality intermediates and performance additives to surfactants, polymers, solvents and application-specific chemicals, our portfolio is built around the requirements of modern industrial applications.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm tracking-widest text-sky-300 uppercase"
          >
            Search the portfolio. Find the right chemistry.
          </motion.p>
        </div>
      </section>

      {/* PRODUCT SEARCH */}
      <section className="py-12 bg-primary border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-primary/50">
            <Search className="w-6 h-6" />
          </div>
          <input
            id="product-search"
            type="text"
            placeholder="Search chemical name, trade name or application..."
            className="w-full pl-16 pr-32 py-5 bg-white rounded-full font-sans text-lg text-primary focus:outline-none focus:ring-4 ring-accent/30 shadow-2xl transition-all"
          />
          <button className="absolute right-8 top-1/2 -translate-y-1/2 px-6 py-3 bg-primary text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-2 group">
            Search <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 02. PRODUCT DISCOVERY */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary mb-4">Find Your Product</h2>
          <p className="font-sans text-lg text-primary/70">Explore our portfolio by chemical category, industry or application.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "I Know the Product", desc: "Search directly by chemical or trade name.", icon: Beaker },
            { title: "I Know the Application", desc: "Start with the industry or process requirement.", icon: Factory },
            { title: "I Need Technical Assistance", desc: "Tell us your requirement and our team can help identify suitable products.", icon: PackageSearch }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={item.title}
              className="p-8 bg-white border border-primary/5 rounded-2xl hover:border-accent/30 transition-colors shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4">{item.title}</h3>
              <p className="font-sans text-primary/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03. CHEMICAL CATEGORIES */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4">Explore Our Chemical Portfolio</h2>
            <p className="font-sans text-lg text-primary/70 max-w-3xl mx-auto">
              Our portfolio brings together speciality chemicals, intermediates, performance additives and application-focused materials across multiple chemical families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={cat.name}
                className="p-6 border border-primary/10 rounded-xl hover:shadow-lg hover:border-accent/30 transition-all group bg-background"
              >
                <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-colors">{cat.name}</h3>
                <p className="font-sans text-sm text-primary/60 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. FEATURED PRODUCT PORTFOLIO */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-primary mb-4">Selected Chemistry</h2>
            <p className="font-sans text-lg text-primary/70">A selection of products from our speciality chemical portfolio.</p>
          </div>
          <Link to="/contact" className="px-6 py-3 border border-primary/20 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
            Request Complete Catalogue &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {featuredProducts.map((prod) => (
            <div key={prod} className="p-4 bg-white border border-primary/10 rounded-lg text-center shadow-sm flex items-center justify-center min-h-[100px]">
              <span className="font-sans font-medium text-primary text-sm">{prod}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 05. PRODUCTS BY INDUSTRY */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Chemistry Connected to Application</h2>
            <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">
              The right product depends on where and how it is being used. Explore our portfolio through the industries we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Oil & Lubricants', desc: 'Performance additives including emulsifiers, non-ionic surfactants, anti-wear materials, corrosion protection, antioxidants and antifoams.' },
              { title: 'Electronics & Semiconductor', desc: 'Products supporting micro-etching, photoresist stripping, precision cleaning and solvents for e-waste recycling.' },
              { title: 'Textile & Leather', desc: 'Chemistry covering wetting, antifoam, bleaching and scouring, speciality colours, flame retardants and optical brighteners.' },
              { title: 'Plastic & Polymer', desc: 'Performance chemicals, flame retardants, raw materials, masterbatch, pigment dispersions and performance colours.' },
              { title: 'Rare Earth Metal Extraction', desc: 'Solvent-based chemistry and phosphoric, phosphinic and phosphonic chemistry selected according to process requirements.' },
              { title: 'Surface Treatment', desc: 'Inorganic salts and performance chemicals for surface treatment applications across automotive and electronics-related requirements.' }
            ].map((ind, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={ind.title}
                className="p-8 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-serif text-2xl mb-4">{ind.title}</h3>
                <p className="font-sans text-white/60 mb-8 leading-relaxed h-24">{ind.desc}</p>
                <Link to="/industries" className="font-mono text-xs text-sky-300 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                  Explore {ind.title} <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. PRODUCT -> APPLICATION */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary mb-4">Don't Just Search by Name. <span className="text-accent italic">Search by Need.</span></h2>
          <p className="font-sans text-xl text-primary/70">
            Sometimes you don't know the chemical name. You know what you need it to do.
          </p>
        </div>

        <div className="bg-white p-12 border border-primary/10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-primary/5 -translate-y-1/2 z-0"></div>
          
          {[
            { label: 'Need', value: 'Improve surface performance' },
            { label: 'Industry', value: 'Surface Treatment' },
            { label: 'Application', value: 'Metal / Electronics' },
            { label: 'Chemical Category', value: 'Performance Chemicals' },
            { label: 'Product', value: 'View Suitable Products', highlight: true }
          ].map((step, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={step.label}
              className="relative z-10 w-full md:w-auto"
            >
              <div className={clsx(
                "p-6 rounded-2xl text-center border h-full flex flex-col justify-center shadow-sm transition-transform hover:-translate-y-2",
                step.highlight ? "bg-primary border-primary text-white cursor-pointer hover:bg-accent hover:border-accent" : "bg-background border-primary/10 text-primary"
              )}>
                <span className={clsx("font-mono text-xs uppercase tracking-widest block mb-2", step.highlight ? "text-white/60" : "text-accent")}>{step.label}</span>
                <span className="font-serif text-lg leading-tight block">{step.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 07 & 08. TECHNICAL INFO & CUSTOM REQUIREMENT */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Technical Info */}
          <div>
            <h2 className="font-serif text-4xl text-primary mb-6">More Than a Product Name</h2>
            <p className="font-sans text-lg text-primary/70 mb-10 leading-relaxed">
              Every industrial requirement comes with its own specification. Where information is available, product records can provide comprehensive technical data.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Chemical Name', 'CAS Number', 'Trade Name', 'Category', 'Application', 'Packing', 'Technical Documentation'].map(item => (
                <div key={item} className="flex items-center gap-3 font-sans text-primary/80">
                  <FileText className="w-5 h-5 text-accent" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-accent transition-colors">
              Request Product Information &rarr;
            </Link>
          </div>

          {/* Custom Requirement */}
          <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
            <h2 className="font-serif text-3xl text-primary mb-4">Can't Find What You're Looking For?</h2>
            <p className="font-sans text-primary/70 mb-8 leading-relaxed">
              Your requirement may not fit a standard product listing. Share your application, specification, quantity, performance requirement, target market, or existing product reference. Our team can review the requirement and discuss suitable products or customized possibilities.
            </p>
            <Link to="/contact" className="inline-block text-center px-8 py-4 bg-accent text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-primary transition-colors w-full md:w-auto">
              Discuss Your Requirement &rarr;
            </Link>
          </div>
          
        </div>
      </section>

      {/* 09 & 10. PERFORMANCE ADDITIVES & SUPPLY */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="p-12 border border-primary/10 bg-white rounded-3xl shadow-sm">
          <Settings className="w-12 h-12 text-accent mb-6" />
          <h2 className="font-serif text-3xl text-primary mb-4">Performance Is in the Details</h2>
          <p className="font-sans text-primary/70 mb-8 leading-relaxed">
            Sagar represents multiple reputed brands of performance additives and provides product solutions and services across industrial segments.
          </p>
          <ul className="space-y-4 mb-10 font-sans text-primary/80">
            <li><strong>Product Access:</strong> Access to a multi-brand portfolio.</li>
            <li><strong>Application Understanding:</strong> Focus on the actual industrial requirement.</li>
            <li><strong>Technical Support:</strong> Support around product selection and application.</li>
            <li><strong>Supply:</strong> Coordinated availability and delivery.</li>
          </ul>
          <Link to="/solutions" className="font-mono text-xs text-accent uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
            Explore Performance Additives <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="p-12 border border-primary/10 bg-white rounded-3xl shadow-sm">
          <Truck className="w-12 h-12 text-accent mb-6" />
          <h2 className="font-serif text-3xl text-primary mb-4">The Right Product. The Right Supply.</h2>
          <p className="font-sans text-primary/70 mb-8 leading-relaxed">
            For industrial customers, finding the product is only the first step. Sagar's offering also includes supply-chain management, packaging, delivery, compliance and customer support.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <p className="font-bold text-primary font-sans mb-1">Identify</p>
              <p className="text-sm text-primary/60 font-sans">Understand the requirement.</p>
            </div>
            <div>
              <p className="font-bold text-primary font-sans mb-1">Source</p>
              <p className="text-sm text-primary/60 font-sans">Connect with the appropriate product.</p>
            </div>
            <div>
              <p className="font-bold text-primary font-sans mb-1">Coordinate</p>
              <p className="text-sm text-primary/60 font-sans">Manage packaging and documentation.</p>
            </div>
            <div>
              <p className="font-bold text-primary font-sans mb-1">Deliver</p>
              <p className="text-sm text-primary/60 font-sans">Support the required supply timeline.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 11. PRODUCT ENQUIRY */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-primary mb-4">Looking for a Specific Chemical?</h2>
            <p className="font-sans text-lg text-primary/70">Tell us what you're looking for.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Product / Chemical Name" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans" />
              <input type="text" placeholder="Company Name" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans" />
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans" />
              <select defaultValue="" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans text-primary/70 appearance-none">
                <option value="" disabled>Select Industry</option>
                <option>Oil & Lubricants</option>
                <option>Electronics</option>
                <option>Textile & Leather</option>
                <option>Plastic & Polymer</option>
                <option>Metal Extraction</option>
                <option>Surface Treatment</option>
              </select>
              <input type="text" placeholder="Required Quantity" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans" />
            </div>
            <textarea rows={4} placeholder="Requirement (Tell us about your application or specification)" className="w-full px-6 py-4 bg-background border border-primary/10 rounded-xl focus:outline-none focus:border-accent font-sans resize-none" />
            <div className="text-center">
              <button type="button" className="px-8 py-4 bg-primary text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-accent transition-colors flex items-center gap-3 mx-auto group">
                Send Product Enquiry <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 12. FINAL SECTION */}
      <section className="py-32 bg-primary text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            The Right Chemistry Starts With the <span className="text-sky-300 italic">Right Question.</span>
          </h2>
          <p className="font-sans text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Whether you already know the product you need or only know the application you're trying to solve, start a conversation with Sagar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => {
                const search = document.getElementById('product-search');
                search?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                search?.focus({ preventScroll: true });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-primary transition-colors"
            >
              Find a Product
            </button>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white/20 transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
