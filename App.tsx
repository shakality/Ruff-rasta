import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicGrid from './components/MusicGrid';
import TourTable from './components/TourTable';
import OracleSection from './components/OracleSection';
import Footer from './components/Footer';
import MerchGrid from './components/MerchGrid';
import ContactPage from './components/ContactPage';
import LegalPage, { PrivacyContent, TermsContent } from './components/LegalPage';
import AudioPlayer from './components/AudioPlayer';

// Utility component to ensure page starts at the top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-[0.4em] text-red-600 mb-2 uppercase">Featured</h2>
            <h3 className="font-heading text-4xl md:text-5xl tracking-tighter">NEW CINEMA</h3>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl group cursor-pointer border border-white/5 shadow-2xl">
          <img 
            src="https://zagaempire.com/wp-content/uploads/2021/08/RuffRasta-4DRoad-scaled.jpg" 
            alt="Latest Video" 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-2xl">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <h3 className="font-heading text-4xl md:text-5xl tracking-tighter text-center uppercase">4DROAD<br /><span className="text-zinc-400 text-xl font-light uppercase tracking-widest mt-4 inline-block font-sans">Official Music Video</span></h3>
          </div>
        </div>
      </div>
    </section>
  </>
);

const MusicPage = () => (
  <div className="pt-24 min-h-screen bg-[#050505]">
    <MusicGrid />
  </div>
);

const TourPage = () => (
  <div className="pt-24 min-h-screen bg-[#050505]">
    <TourTable />
  </div>
);

const MerchPage = () => (
  <div className="pt-24 min-h-screen bg-[#050505]">
    <MerchGrid />
  </div>
);

const OraclePage = () => (
  <div className="pt-24 min-h-screen bg-[#050505]">
    <OracleSection />
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#050505]">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/oracle" element={<OraclePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<LegalPage title="Privacy Policy" lastUpdated="MAY 24, 2024" content={<PrivacyContent />} />} />
            <Route path="/terms" element={<LegalPage title="Terms of Service" lastUpdated="MAY 24, 2024" content={<TermsContent />} />} />
          </Routes>
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </HashRouter>
  );
}

export default App;