import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

type NavChild = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Products',
      href: '/products',
    },
    {
      name: 'Industries',
      href: '/industries',
      children: [
        { name: 'Oil & Lubricants', href: '/industries/oil-lubricants' },
        { name: 'Electronics', href: '/industries/electronics' },
        { name: 'Textile & Leather', href: '/industries/textile-leather' },
        { name: 'Plastic & Polymer', href: '/industries/plastic-polymer' },
        { name: 'Metal Extraction', href: '/industries/metal-extraction' },
        { name: 'Surface Treatment', href: '/industries/surface-treatment' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'Performance Additives', href: '/solutions/performance-additives' },
        { name: 'Customization', href: '/solutions/customization' },
        { name: 'Supply Chain', href: '/solutions/supply-chain' },
        { name: 'Technical Support', href: '/solutions/technical-support' },
      ],
    },
    {
      name: 'More',
      href: '#',
      children: [
        { name: 'Global Presence', href: '/global' },
        { name: 'Resources', href: '/resources' },
        { name: 'Partner With Us', href: '/partner' },
      ],
    },
  ];

  const isPathActive = (href: string) => {
    if (!href || href === '#') return false;
    if (href === '/') return location.pathname === '/';
    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  const isLinkActive = (link: NavItem) => {
    if (isPathActive(link.href)) return true;
    if (link.children) {
      return link.children.some((child) => isPathActive(child.href));
    }
    return false;
  };

  const isContactActive = isPathActive('/contact');

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white text-primary border-b border-primary/5',
          isScrolled ? 'h-[72px] shadow-sm' : 'h-[90px]'
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Sagar Speciality Chemicals"
              className={clsx(
                'w-auto transition-all duration-300',
                isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-sans text-[15px] font-medium h-full">
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              return (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      if (link.href === '#') e.preventDefault();
                    }}
                    className={clsx(
                      'relative flex items-center gap-1.5 py-2 transition-colors',
                      active
                        ? 'text-primary font-semibold'
                        : 'text-primary/75 hover:text-accent'
                    )}
                  >
                    <span>{link.name}</span>
                    {link.children && (
                      <ChevronDown
                        className={clsx(
                          'w-4 h-4 transition-transform duration-300 group-hover:rotate-180',
                          active ? 'text-primary opacity-100' : 'opacity-50'
                        )}
                      />
                    )}

                    {/* Clean Underline Indicator Bar directly below text */}
                    {active && (
                      <div className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-primary rounded-full" />
                    )}
                  </Link>

                  {link.children && (
                    <div className="absolute left-0 top-[calc(100%-8px)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white border border-primary/10 shadow-lg rounded-xl overflow-hidden min-w-[240px] flex flex-col py-3 relative before:absolute before:inset-0 before:border-t-2 before:border-accent before:rounded-t-xl before:pointer-events-none">
                        {link.children.map((child) => {
                          const childActive = isPathActive(child.href);
                          return (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={clsx(
                                'px-6 py-2.5 transition-colors text-sm flex items-center justify-between',
                                childActive
                                  ? 'bg-primary/10 text-primary font-semibold border-l-[3px] border-primary'
                                  : 'text-primary/80 hover:bg-primary/5 hover:text-accent'
                              )}
                            >
                              <span>{child.name}</span>
                              {childActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Contact Button */}
            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 bg-primary text-white hover:bg-accent transition-colors rounded-full text-sm font-medium flex items-center gap-2 group"
            >
              Contact Us{' '}
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden flex items-center justify-center p-2 text-primary hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="px-6 py-6 flex justify-between items-center border-b border-primary/10">
              <img src="/logo.png" alt="Sagar Speciality Chemicals" className="h-10 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary/60 hover:text-primary p-2 text-sm font-medium uppercase tracking-widest"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-8">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => {
                  const active = isLinkActive(link);
                  return (
                    <div key={link.name}>
                      <Link
                        to={link.href}
                        onClick={(e) => {
                          if (link.href === '#') {
                            e.preventDefault();
                            return;
                          }
                          if (!link.children) setMobileMenuOpen(false);
                        }}
                        className={clsx(
                          'font-serif text-3xl transition-colors flex items-center gap-3 mb-4',
                          active ? 'text-accent font-bold' : 'text-primary hover:text-accent'
                        )}
                      >
                        <span>{link.name}</span>
                        {active && <span className="w-2.5 h-2.5 rounded-full bg-accent" />}
                      </Link>
                      {link.children && (
                        <div className="pl-4 flex flex-col space-y-3 border-l border-primary/10 ml-2">
                          {link.children.map((child) => {
                            const childActive = isPathActive(child.href);
                            return (
                              <Link
                                key={child.name}
                                to={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={clsx(
                                  'font-sans text-base flex items-center gap-2',
                                  childActive
                                    ? 'text-accent font-semibold'
                                    : 'text-primary/70 hover:text-accent'
                                )}
                              >
                                {childActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                )}
                                <span>{child.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'inline-flex items-center justify-center px-6 py-3 text-white rounded-full mt-8 font-medium w-full',
                    isContactActive ? 'bg-accent ring-4 ring-accent/20' : 'bg-primary'
                  )}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
