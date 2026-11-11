import { IndustryLayout } from '../../components/IndustryLayout';

export const Oil = () => {
  return (
    <IndustryLayout
      title="Chemistry That Keeps Performance Moving"
      subtitle="Performance additives for lubrication systems where friction, wear, corrosion, oxidation and formulation stability matter."
      heroImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
      overviewTitle="Performance Starts at the Formulation"
      overviewText="Lubricants are engineered around performance requirements that extend beyond the base oil. Sagar's oil and lubricant portfolio includes performance additives for functions such as emulsification, surface activity, anti-wear performance, corrosion protection, oxidation control and foam management."
      applications={[
        { name: 'Industrial Lubricants', desc: 'Support formulation requirements for industrial lubrication systems.' },
        { name: 'Metalworking Fluids', desc: 'Chemistry supporting lubrication, cooling and process performance.' },
        { name: 'Emulsification', desc: 'Materials for formulations requiring controlled emulsification.' },
        { name: 'Anti-Wear', desc: 'Performance additives designed around wear-control requirements.' },
        { name: 'Corrosion Protection', desc: 'Chemistry supporting protection of metal surfaces.' },
        { name: 'Antioxidants', desc: 'Materials supporting formulation stability against oxidation.' },
        { name: 'Antifoam', desc: 'Solutions for controlling unwanted foam during processing and application.' }
      ]}
      productCategories={['Performance Additives', 'Surfactants', 'Antifoam', 'Corrosion Protection', 'Anti-Wear', 'Antioxidants']}
      technicalApproach={{
        title: 'From Performance Requirement to Product',
        steps: ['APPLICATION', 'PERFORMANCE TARGET', 'PRODUCT SELECTION', 'FORMULATION / TRIAL', 'SUPPLY']
      }}
      ctaTitle="Looking for the Right Lubricant Additive?"
      ctaText="Share your formulation or performance requirement with our team."
      relatedProducts={['Surfactants', 'Antifoam', 'Performance Additives', 'Corrosion Protection']}
    />
  );
};
