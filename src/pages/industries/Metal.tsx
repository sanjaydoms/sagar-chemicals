import React from 'react';
import { IndustryLayout } from '../../components/IndustryLayout';

export const Metal = () => {
  return (
    <IndustryLayout
      title="Chemistry for Selective Metal Extraction"
      subtitle="Speciality extraction chemistry supporting processes where solvent selection, selectivity and required metal purity are critical."
      heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
      overviewTitle="The Right Solvent Changes the Process"
      overviewText="Sagar's current metal extraction offering focuses on solvents and chemistry selected according to process requirements. The company specifically highlights phosphoric, phosphinic and phosphonic chemistry within its metal extraction portfolio."
      applications={[
        { name: 'Solvent Extraction', desc: 'Chemical systems supporting separation and extraction processes.' },
        { name: 'Rare Earth Extraction', desc: 'Speciality chemistry for rare-earth-related extraction requirements.' },
        { name: 'Metal Separation', desc: 'Materials selected according to process chemistry and separation objectives.' },
        { name: 'Purity Improvement', desc: 'Solvent selection aligned with required purity.' }
      ]}
      productCategories={['Phosphoric Chemistry', 'Phosphinic Chemistry', 'Phosphonic Chemistry']}
      technicalApproach={{
        title: 'Technical Extraction Approach',
        steps: ['ORE / FEED', 'PROCESS REQUIREMENT', 'SELECTIVITY', 'EXTRACTION CHEMISTRY', 'SEPARATION', 'TARGET PURITY']
      }}
      ctaTitle="Working on a Metal Extraction Process?"
      ctaText="Share your process requirement with our team."
      relatedProducts={['Solvents', 'Phosphonic Chemistry', 'Phosphinic Chemistry', 'Phosphoric Chemistry']}
    />
  );
};
