import { IndustryLayout } from '../../components/IndustryLayout';

export const Plastic = () => {
  return (
    <IndustryLayout
      title="Chemistry Behind Polymer Performance"
      subtitle="Speciality chemicals and performance additives supporting plastics, polymers and formulation requirements."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
      overviewTitle="Built for the Material"
      overviewText="From raw materials to performance additives, polymer applications require chemistry selected around processing, durability, flexibility, flame resistance and final performance. Sagar's current industry offering includes flame retardants, raw materials, masterbatch, pigment dispersions and performance colours for plastic and polymer applications."
      applications={[
        { name: 'Flame Retardancy', desc: 'Materials supporting fire-performance requirements.' },
        { name: 'Polymer Modification', desc: 'Chemistry for modifying material performance.' },
        { name: 'Masterbatch', desc: 'Colour and additive solutions for polymer processing.' },
        { name: 'Pigment Dispersion', desc: 'Materials supporting controlled colour dispersion.' },
        { name: 'Performance Colours', desc: 'Colour solutions for demanding applications.' }
      ]}
      productCategories={['Plasticizers', 'Polymers', 'Flame Retardants', 'Polyurethane Additives', 'Cast Nylon Additives', 'Pigment Dispersions', 'Masterbatch', 'Performance Additives']}
      technicalApproach={{
        title: 'From Polymer Requirement to Performance',
        steps: ['POLYMER', 'PROCESS', 'PERFORMANCE REQUIREMENT', 'ADDITIVE / CHEMISTRY', 'VALIDATION']
      }}
      ctaTitle="Developing a Polymer Application?"
      ctaText="Tell us what you need the material to achieve."
      relatedProducts={['Plasticizers', 'Polymers', 'Flame Retardants', 'Polyurethane & Cast Nylon Additives']}
    />
  );
};
