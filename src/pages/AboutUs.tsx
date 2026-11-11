import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

export const AboutUs = () => {
  const [activeCard, setActiveCard] = useState<'vision' | 'mission'>('vision');
  return (
    <main className="pt-[90px] min-h-screen bg-background text-primary">
      {/* SECTION 01 - HERO */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center px-8 md:px-16 overflow-hidden">
        
        {/* Background Image Full Width */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/chemical_plant.jpg" 
            alt="Chemical Expertise" 
            className="w-full h-full object-cover" 
          />
          {/* Dark overlays for text readability */}
          <div className="absolute inset-0 bg-[#031A2B]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full z-10 relative flex flex-col items-center text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] leading-[0.9] tracking-tighter mb-12 text-white drop-shadow-2xl">
              50+ Years of<br />Chemical<br />Expertise.
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="w-12 h-[2px] bg-sky-300"></div>
              <p className="font-mono text-lg md:text-xl tracking-[0.3em] uppercase text-sky-300 font-bold drop-shadow-lg">
                Since 1974
              </p>
              <div className="w-12 h-[2px] bg-sky-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02 - OUR STORY (Horizontal Timeline) */}
      <section className="py-32 px-8 md:px-16 border-t border-secondary/10 bg-primary/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-24">
            Our Story
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-12 md:gap-4">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-primary/20 -z-10"></div>
            
            {[
              { year: '1974', text: 'Sagar International founded' },
              { year: '1999', text: 'Converted into Sagar Speciality Chemicals Pvt. Ltd.' },
              { year: '2000s', text: 'Expansion into speciality chemicals' },
              { year: '2012+', text: 'Next-generation leadership' },
              { year: 'Today', text: 'Global speciality chemical partner' }
            ].map((item, i, arr) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col relative bg-background/0 md:bg-transparent pr-8 md:pr-0"
              >
                {/* Node */}
                <div className="w-3 h-3 bg-accent rounded-full mb-6 relative md:mx-auto">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                </div>
                
                <h3 className="font-serif text-4xl md:text-5xl mb-4 text-primary md:text-center">
                  {item.year}
                </h3>
                <p className="font-sans text-sm font-light text-primary/70 max-w-[180px] md:text-center">
                  {item.text}
                </p>
                
                {/* Mobile connecting arrow */}
                {i < arr.length - 1 && (
                  <div className="md:hidden absolute left-1.5 top-12 bottom-[-48px] w-[1px] bg-primary/20">
                    <div className="absolute bottom-2 left-[-3px] w-2 h-2 border-b border-r border-primary/20 rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 - WHAT CHANGED OVER 50 YEARS? */}
      <section className="py-40 px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight sticky top-32">
              What Changed<br />Over<br /><span className="text-accent italic">50 Years?</span>
            </h2>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="flex flex-col">
              {[
                'Supply Chain',
                'Speciality Chemicals',
                'Performance Additives',
                'Customized Solutions',
                'Technical Support',
                'Global Markets'
              ].map((item, i, arr) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col group"
                >
                  <div className="py-12 border-b border-primary/10 transition-colors duration-500 group-hover:border-accent">
                    <h3 className="font-serif text-4xl md:text-6xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                      {item}
                    </h3>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="py-8 flex justify-center opacity-30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - VISION & MISSION (Creative Architectural Notched Showcase) */}
      <section className="py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-16 bg-[#F8FAFC] border-y border-primary/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 font-mono text-xs tracking-[0.2em] text-primary font-semibold uppercase mb-4">
                CORPORATE DIRECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary tracking-tight leading-[1.06]">
                Guided by Purpose.<br />Driven by Precision.
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-primary/75 max-w-md leading-relaxed">
              Over fifty years of chemical expertise anchored by a clear global vision and an unwavering mission to serve industrial partners worldwide.
            </p>
          </div>

          {/* Interactive Dual Architectural Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                key: 'vision' as const,
                id: '01',
                tag: 'STRATEGIC HORIZON',
                label: 'Our Vision',
                icon: Eye,
                headline:
                  'To become a globally recognized name in speciality chemicals, driven by technical expertise, innovation and an ever-expanding reach.',
                description:
                  'We aspire to build Sagar Speciality Chemicals into a trusted international brand by combining deep industry knowledge, technical excellence and strong customer relationships — delivering value across markets and applications.',
                pillars: ['Technical Expertise', 'Continuous Innovation', 'Global Reach'],
              },
              {
                key: 'mission' as const,
                id: '02',
                tag: 'OPERATIONAL COMMITMENT',
                label: 'Our Mission',
                icon: Target,
                headline:
                  'To be a reliable chemistry partner, delivering the right products, expertise and solutions across multiple industries.',
                description:
                  "We are committed to understanding our customers' requirements and providing quality chemicals, performance additives, customized solutions and dependable supply-chain support. Through knowledge, collaboration and continuous improvement, we aim to create long-term value for our customers and partners.",
                pillars: ['Performance Additives', 'Customized Solutions', 'Supply-Chain Support'],
              },
            ].map((card, idx) => {
              const isDark = activeCard === card.key;
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  onMouseEnter={() => setActiveCard(card.key)}
                  onClick={() => setActiveCard(card.key)}
                  className="relative group cursor-pointer"
                >
                  {/* Main Architectural Card with Bottom-Right Concave Cutout */}
                  <div
                    className={clsx(
                      'relative rounded-[2.25rem] p-8 sm:p-11 lg:p-12 pb-28 sm:pb-32 h-full flex flex-col justify-between overflow-hidden transition-all duration-500',
                      isDark
                        ? 'bg-primary text-white shadow-[0_28px_60px_-15px_rgba(0,75,135,0.3)]'
                        : 'bg-[#DCEBFA] text-primary shadow-sm'
                    )}
                  >
                    {/* Subtle Architectural Ring Graphic in Top-Right Background */}
                    <svg
                      viewBox="0 0 240 240"
                      fill="none"
                      aria-hidden="true"
                      className={clsx(
                        'pointer-events-none absolute -top-16 -right-16 w-64 h-64 transition-all duration-700 group-hover:rotate-12 group-hover:scale-105',
                        isDark ? 'text-white/[0.07]' : 'text-primary/[0.06]'
                      )}
                    >
                      <circle cx="120" cy="120" r="105" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                      <circle cx="120" cy="120" r="78" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="120" cy="120" r="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                      <line x1="120" y1="0" x2="120" y2="240" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="1" />
                    </svg>

                    <div className="relative z-10">
                      {/* Top Row: Icon Medallion + Eyebrow Label */}
                      <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
                        <div className="flex items-center gap-4">
                          <div
                            className={clsx(
                              'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 border',
                              isDark
                                ? 'bg-white/10 border-white/20 text-sky-300'
                                : 'bg-white border-primary/15 text-primary shadow-sm'
                            )}
                          >
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.6} />
                          </div>

                          <div>
                            <span
                              className={clsx(
                                'block font-mono text-[10px] tracking-[0.22em] uppercase transition-colors duration-500',
                                isDark ? 'text-sky-300' : 'text-accent'
                              )}
                            >
                              {card.tag}
                            </span>
                            <h3
                              className={clsx(
                                'font-serif text-xl sm:text-2xl tracking-tight mt-0.5 transition-colors duration-500',
                                isDark ? 'text-white' : 'text-primary'
                              )}
                            >
                              {card.label}
                            </h3>
                          </div>
                        </div>

                      </div>

                      {/* Divider Line */}
                      <div
                        className={clsx(
                          'w-full h-px mb-8 transition-colors duration-500',
                          isDark ? 'bg-white/15' : 'bg-primary/15'
                        )}
                      />

                      {/* Core Statement Heading */}
                      <h4
                        className={clsx(
                          'font-serif text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-[1.24] tracking-tight mb-6 transition-colors duration-500',
                          isDark ? 'text-white' : 'text-primary'
                        )}
                      >
                        {card.headline}
                      </h4>

                      {/* Detailed Description */}
                      <p
                        className={clsx(
                          'font-sans text-sm sm:text-base lg:text-[17px] leading-relaxed transition-colors duration-500',
                          isDark ? 'text-white/85' : 'text-primary/80'
                        )}
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Pillars Strip */}
                    <div className="relative z-10 pt-8 mt-8 pr-20 sm:pr-24 border-t border-current/10 flex flex-wrap gap-2">
                      {card.pillars.map((pillar) => (
                        <span
                          key={pillar}
                          className={clsx(
                            'px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-colors duration-500',
                            isDark
                              ? 'bg-white/12 text-sky-200 border border-white/15'
                              : 'bg-white/80 text-primary border border-primary/10'
                          )}
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>

                    {/* Bottom-Right Concave Architectural Cutout Notch */}
                    <div className="absolute bottom-0 right-0 w-[104px] h-[104px] bg-[#F8FAFC] rounded-tl-[48px] z-10">
                      {/* Top-Right Inverted Fillet Curve */}
                      <div
                        className="w-[26px] h-[26px] bg-transparent absolute -top-[26px] right-0 rounded-br-[26px] pointer-events-none"
                        style={{ boxShadow: '8px 8px 0 8px #F8FAFC' }}
                      />
                      {/* Bottom-Left Inverted Fillet Curve */}
                      <div
                        className="w-[26px] h-[26px] bg-transparent absolute bottom-0 -left-[26px] rounded-br-[26px] pointer-events-none"
                        style={{ boxShadow: '8px 8px 0 8px #F8FAFC' }}
                      />
                    </div>
                  </div>

                  {/* Floating Circular Badge inside the Cutout */}
                  <div
                    className={clsx(
                      'absolute bottom-1.5 right-1.5 z-20 w-[76px] h-[76px] rounded-full border flex items-center justify-center transition-all duration-500',
                      isDark
                        ? 'border-primary/40 text-primary bg-white group-hover:bg-primary group-hover:text-white group-hover:border-primary shadow-md'
                        : 'border-primary/25 text-primary bg-white/70 group-hover:bg-primary group-hover:text-white group-hover:border-primary'
                    )}
                  >
                    <ArrowUpRight className="w-7 h-7 stroke-[1.75] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 04 - LEADERSHIP */}
      <section className="py-32 px-8 md:px-16 bg-primary text-background">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/25 font-mono text-xs tracking-[0.2em] text-white font-semibold uppercase mb-24">
            Management Team
          </h2>
          
          <div className="flex flex-col gap-32 mb-32">
            {[
              {
                name: 'Ravindra L. Sampat',
                role: 'Founder & Director',
                bio: 'A visionary leader who founded the company and is responsible for taking SSCPL to new heights. A Commerce graduate with over 50 years of experience, he has built SSCPL\'s strong position in the speciality chemicals market.',
                img: '/founder.jpg'
              },
              {
                name: 'Hardik R. Sampat',
                role: 'Managing Director',
                bio: 'A chemical engineer (B.E. Chemicals) with an MBA in Marketing, he started his career with IOTL (Indian Oil Tanking Limited). He joined SSCPL in 2012 and, with the backing of his technical knowledge and experience of 2+ years, he introduced a new line of business into contract manufacturing and customized chemical solutions. He currently heads the technical aspects of product development, ensuring diversification of the business.',
                img: '/managing_director.jpg'
              },
              {
                name: 'Jaydeep K. Panchal',
                role: 'DGM',
                bio: 'A chemical engineer (B.E. Chemicals) with a diploma in French (DELF A1), he started his career in 2011 in the marketing of speciality chemicals. He joined SSCPL in 2018 and has since been responsible for developing new business and markets for SSCPL. He works jointly with the Directors on planning and strategy to ensure business growth.',
                img: '/jaydeep.jpg'
              },
              {
                name: 'Mehul C. Dattani',
                role: 'Head of Operations',
                bio: 'Mehul holds a diploma in Export & Import Management and, with 17+ years of experience in multiple profiles, he takes care of the entire operations, right from order management to delivery of products. He works jointly with the Management Team and is responsible for the logistics and documentation process.',
                img: '/mehul.jpg'
              },
              {
                name: 'Brijesh V. Shah',
                role: 'Director of International Business',
                bio: 'Brijesh Shah is an engineer with an MBA in International Business Management and 20 years of experience, with a strong, well-rounded track record in competitive international markets. He is responsible for ensuring Sagar Speciality Chemicals Private Limited establishes a strong presence in international markets.',
                img: '/brijesh.jpg'
              }
            ].map((leader, i) => (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-12 md:gap-24 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Large Portrait */}
                <div className="w-full md:w-1/3 aspect-[3/4] overflow-hidden bg-background/5 relative">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <p className="font-mono text-sm tracking-[0.2em] text-accent mb-4 uppercase">{leader.role}</p>
                  <h3 className="font-serif text-5xl mb-8">{leader.name}</h3>
                  <p className="font-sans font-light text-background/70 leading-relaxed text-lg max-w-xl">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};
