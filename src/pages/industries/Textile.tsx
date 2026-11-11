import React from 'react';
import { IndustryLayout } from '../../components/IndustryLayout';

export const Textile = () => {
  return (
    <IndustryLayout
      title="Chemistry for Material Performance"
      subtitle="Speciality chemicals supporting textile and leather processing, treatment and finishing requirements."
      heroImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
      overviewTitle="From Process Chemistry to Finished Material"
      overviewText="Textile and leather applications require chemistry that performs throughout processing while meeting the desired material characteristics. Sagar's current portfolio includes wetting agents, anti-foam chemistry, bleaching and scouring chemicals, speciality colours, flame retardants and optical brighteners."
      applications={[
        { name: 'Wetting', desc: 'Support controlled wetting and processing.' },
        { name: 'Bleaching & Scouring', desc: 'Chemicals supporting preparation and cleaning processes.' },
        { name: 'Flame Retardancy', desc: 'Performance chemicals for flame-retardant applications.' },
        { name: 'Optical Brightening', desc: 'Materials supporting desired visual characteristics.' },
        { name: 'Speciality Colours', desc: 'Colour solutions for application-specific requirements.' },
        { name: 'Anti-Foam', desc: 'Control foam during processing.' }
      ]}
      productCategories={['Surfactants', 'Anti-Foam', 'Flame Retardants', 'Optical Brighteners', 'Speciality Colours', 'Process Chemicals']}
      technicalApproach={{
        title: 'Application Comes First',
        steps: ['MATERIAL', 'PROCESS', 'PERFORMANCE', 'CHEMISTRY']
      }}
      ctaTitle="Looking for a Textile or Leather Chemical?"
      ctaText="Explore our products or send an enquiry directly to our technical team."
      relatedProducts={['Surfactants', 'Flame Retardants', 'Optical Brighteners', 'Anti-Foam']}
    />
  );
};
