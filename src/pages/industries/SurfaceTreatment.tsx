import { IndustryLayout } from '../../components/IndustryLayout';

export const SurfaceTreatment = () => {
  return (
    <IndustryLayout
      title="Surface Chemistry. Engineered for Performance."
      subtitle="Speciality chemicals supporting surface treatment applications across automotive, electronics and industrial processes."
      heroImage="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000&auto=format&fit=crop"
      overviewTitle="The Surface Defines the Performance"
      overviewText="Surface treatment is often the critical step between a material and its final performance. Sagar offers inorganic salts and performance chemicals for surface-treatment applications, with grades intended for automotive and electronics-related requirements."
      applications={[
        { name: 'Automotive Surface Treatment', desc: 'Chemistry supporting surface preparation and treatment requirements.' },
        { name: 'Electronics', desc: 'Materials for demanding electronics-related surface processes.' },
        { name: 'Surface Preparation', desc: 'Chemical solutions supporting preparation before subsequent processing.' },
        { name: 'Performance Treatment', desc: 'Materials selected around defined surface-performance requirements.' }
      ]}
      productCategories={['Inorganic Salts', 'Performance Chemicals', 'Surface Treatment Chemicals', 'Speciality Process Chemicals']}
      technicalApproach={{
        title: 'Surface → Process → Chemistry',
        steps: ['SURFACE', 'REQUIRED FINISH', 'PROCESS CONDITIONS', 'CHEMICAL SELECTION', 'VALIDATION']
      }}
      ctaTitle="Need to Optimize a Surface Finish?"
      ctaText="Talk to us about your surface treatment chemistry."
      relatedProducts={['Inorganic Salts', 'Performance Chemicals']}
    />
  );
};
