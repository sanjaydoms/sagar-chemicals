import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerLinks = [
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Story', path: '/about/story' },
        { name: 'Quality & Safety', path: '/about/quality' },
        { name: 'Sustainability', path: '/about/sustainability' }
      ]
    },
    {
      title: 'BUSINESS',
      links: [
        { name: 'Products', path: '/products' },
        { name: 'Industries', path: '/industries' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Global Presence', path: '/global' }
      ]
    },
    {
      title: 'KEY INDUSTRIES',
      links: [
        { name: 'Oil & Lubricants', path: '/industries/oil-lubricants' },
        { name: 'Electronics', path: '/industries/electronics' },
        { name: 'Textile & Leather', path: '/industries/textile-leather' },
        { name: 'Plastic & Polymer', path: '/industries/plastic-polymer' }
      ]
    },
    {
      title: 'CONNECT',
      links: [
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  return (
    <footer className="relative bg-white text-primary overflow-hidden flex flex-col w-full border-t border-primary/10">
      
      {/* Top Content (Links & Logo) */}
      <div className="relative z-20 pt-16 md:pt-24 px-6 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 w-full max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="lg:w-1/4 flex flex-col items-start pt-2">
          <img 
            src="/logo.png" 
            alt="Sagar Speciality Chemicals" 
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        </div>
        
        {/* Links Grid */}
        <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="font-sans text-xs sm:text-sm tracking-widest text-primary mb-4 sm:mb-6 uppercase font-bold">
                {section.title}
              </h4>
              <ul className="flex flex-col space-y-3 sm:space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="font-sans text-sm font-medium text-primary/75 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Giant Watermark Text */}
      <div className="relative py-8 sm:py-12 text-[14vw] font-serif font-bold text-primary/[0.05] whitespace-nowrap pointer-events-none select-none z-10 tracking-wider w-full text-center leading-none">
        CHEMICALS
      </div>

      {/* Bottom Graphic / Background */}
      <div className="relative w-full h-[140px] sm:h-[220px] md:h-[360px] lg:h-[460px] z-20 pointer-events-none">
        <div 
          className="absolute inset-0 bg-bottom bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/footer-bg.png")',
            backgroundSize: '100% auto'
          }}
        />
      </div>

    </footer>
  );
};
