import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ChemicalBackground } from './components/ChemicalBackground';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import { Industries } from './pages/Industries';
import { Solutions } from './pages/Solutions';
import { Global } from './pages/Global';
import { OurStory } from './pages/about/OurStory';
import { Quality } from './pages/about/Quality';
import { Sustainability } from './pages/about/Sustainability';
import { Contact } from './pages/Contact';

// Industries
import { Oil } from './pages/industries/Oil';
import { Electronics } from './pages/industries/Electronics';
import { Textile } from './pages/industries/Textile';
import { Plastic } from './pages/industries/Plastic';
import { Metal } from './pages/industries/Metal';
import { SurfaceTreatment } from './pages/industries/SurfaceTreatment';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className="min-h-screen bg-background font-sans text-text relative">
        
        {/* Global IUPAC Molecular Lattice Background */}
        <ChemicalBackground className="fixed inset-0 z-0" />

        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/quality" element={<Quality />} />
            <Route path="/about/sustainability" element={<Sustainability />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/oil-lubricants" element={<Oil />} />
            <Route path="/industries/electronics" element={<Electronics />} />
            <Route path="/industries/textile-leather" element={<Textile />} />
            <Route path="/industries/plastic-polymer" element={<Plastic />} />
            <Route path="/industries/metal-extraction" element={<Metal />} />
            <Route path="/industries/surface-treatment" element={<SurfaceTreatment />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<Solutions />} />
            <Route path="/global" element={<Global />} />
            <Route path="/resources" element={<Products />} />
            <Route path="/partner" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
