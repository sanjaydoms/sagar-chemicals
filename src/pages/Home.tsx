import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { AboutPreview } from '../components/AboutPreview';
import { ProductFinder } from '../components/ProductFinder';
import { Industries } from '../components/Industries';
import { Transition } from '../components/Transition';
import { Solutions } from '../components/Solutions';
import { Customization } from '../components/Customization';
import { GlobalPresence } from '../components/GlobalPresence';
import { Quality } from '../components/Quality';
import { Resources } from '../components/Resources';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <Stats />
      <AboutPreview />
      <ProductFinder />
      <Industries />
      <Transition />
      <Solutions />
      <Customization />
      <GlobalPresence />
      <Quality />
      <Resources />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};
