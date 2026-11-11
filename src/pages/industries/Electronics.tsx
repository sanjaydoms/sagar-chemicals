import React from 'react';
import { IndustryLayout } from '../../components/IndustryLayout';

export const Electronics = () => {
  return (
    <IndustryLayout
      title="Chemistry for Precision Manufacturing"
      subtitle="Materials supporting demanding electronics and semiconductor processes where cleanliness, controlled etching and process consistency are critical."
      heroImage="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop"
      overviewTitle="When Precision Is the Process"
      overviewText="Electronics manufacturing requires chemistry that performs consistently at each stage of the process. Sagar's current electronics and semiconductor portfolio includes materials for micro-etching, photoresist stripping, precision cleaning and solvents used in e-waste recycling."
      applications={[
        { name: 'Micro-Etching', desc: 'Chemical solutions for controlled surface and material removal.' },
        { name: 'Photoresist Stripping', desc: 'Materials supporting resist removal processes.' },
        { name: 'Precision Cleaning', desc: 'Chemistry designed around demanding cleaning requirements.' },
        { name: 'E-Waste Recycling', desc: 'Solvent solutions supporting recycling-related processes.' }
      ]}
      productCategories={['Specialty solvents', 'Cleaning chemistry', 'Etching chemistry', 'Process chemicals', 'Recycling-related solvents']}
      technicalApproach={{
        title: 'Controlled Chemistry. Defined Requirements.',
        steps: ['PROCESS', 'MATERIAL / SURFACE', 'CHEMICAL REQUIREMENT', 'TECHNICAL EVALUATION', 'PRODUCT']
      }}
      ctaTitle="Have a Precision-Chemistry Requirement?"
      ctaText="Let's discuss your process with our technical team."
      relatedProducts={['Solvents', 'Specialty Process Chemicals']}
    />
  );
};
