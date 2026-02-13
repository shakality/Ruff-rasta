import React from 'react';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, content }) => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#050505] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl tracking-tighter mb-4 uppercase">{title}</h1>
        <p className="text-red-600 text-[10px] font-bold tracking-[0.3em] mb-12 uppercase">LAST UPDATED: {lastUpdated}</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 leading-relaxed font-light">
          {content}
        </div>
      </div>
    </div>
  );
};

export const PrivacyContent = () => (
  <>
    <section>
      <h3 className="text-white font-bold text-xl mb-4">1. Information We Collect</h3>
      <p>We collect information you provide directly to us when you sign up for our newsletter, purchase merchandise, or interact with our Rasta Oracle. This may include your name, email address, and any messages you send.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-xl mb-4">2. How We Use Your Data</h3>
      <p>Your data is used solely to provide services to you, process your orders, and keep you updated on Ruff Rasta's world tour and music releases. We respect the vibration and never sell your data to third parties.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-xl mb-4">3. Security</h3>
      <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
    </section>
  </>
);

export const TermsContent = () => (
  <>
    <section>
      <h3 className="text-white font-bold text-xl mb-4">1. Acceptance of Terms</h3>
      <p>By accessing the official Ruff Rasta website, you agree to be bound by these Terms of Service and all applicable laws and regulations in the spirit of unity and respect.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-xl mb-4">2. Intellectual Property</h3>
      <p>All content on this site, including music, lyrics, images, and branding, is the exclusive property of Ruff Rasta Records. Unauthorized use is strictly prohibited.</p>
    </section>
    <section>
      <h3 className="text-white font-bold text-xl mb-4">3. Merchandise</h3>
      <p>Prices and availability for all merchandise items are subject to change. Shipping times may vary based on your location relative to Zion.</p>
    </section>
  </>
);

export default LegalPage;