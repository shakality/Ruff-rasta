import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
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
import { ALBUMS, TOUR_DATES } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <div className="flex flex-col bg-[#050505]">
    <Hero />
    
    {/* SECTION: THE SOUND (Refined Spotlight) */}
    <section className="py-32 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-red-600 text-[10px] font-black tracking-[0.6em] uppercase block mb-4">Latest Frequency</span>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tighter uppercase">THE SOUND</h2>
          </div>
          <Link to="/music" className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 hover:text-white transition-all uppercase border-b border-zinc-800 pb-1">
            DISCOGRAPHY &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 group relative aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
            <img 
              src={ALBUMS[0].cover} 
              alt={ALBUMS[0].title} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <h3 className="font-heading text-3xl uppercase mb-2">{ALBUMS[0].title}</h3>
              <p className="text-zinc-400 text-[10px] tracking-[0.3em] uppercase mb-8">Out Now on All Platforms</p>
              <a href={ALBUMS[0].spotifyUrl} target="_blank" rel="noreferrer" className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black tracking-widest hover:bg-red-600 hover:text-white transition-all w-fit uppercase">
                LISTEN
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-10 border border-white/5 bg-zinc-900/10 rounded-sm hover:border-red-600/20 transition-all group">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 mb-6 block uppercase">Divine Guidance</span>
              <p className="font-heading text-xl uppercase leading-tight mb-8">Consult the Oracle for your daily vibration check</p>
              <Link to="/oracle" className="text-[10px] font-bold tracking-[0.2em] border-b border-zinc-800 pb-1 hover:text-red-600 hover:border-red-600 transition-all uppercase">OPEN PORTAL</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION: THE ROAD (Sleek Tour List) */}
    <section className="py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-red-600 text-[10px] font-black tracking-[0.6em] uppercase block mb-4">On the Road</span>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tighter uppercase">TOUR SCHEDULE</h2>
        </div>
        
        <div className="divide-y divide-white/5 border-t border-white/5">
          {TOUR_DATES.slice(0, 4).map((tour) => (
            <div key={tour.id} className="group py-10 flex flex-col md:flex-row items-center justify-between transition-all hover:px-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 text-center md:text-left">
                <span className="text-red-600 font-bold text-[10px] tracking-[0.5em] uppercase w-24">{tour.date.split(',')[0]}</span>
                <div>
                  <h3 className="font-heading text-2xl tracking-tight uppercase group-hover:text-red-500 transition-colors">{tour.city}</h3>
                  <p className="text-zinc-600 text-[9px] tracking-[0.4em] uppercase mt-1">{tour.venue}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                {tour.status === 'Sold Out' ? (
                  <span className="text-[9px] font-black tracking-[0.6em] text-zinc-800 uppercase px-8">SOLD OUT</span>
                ) : (
                  <Link to="/tour" className="text-[9px] font-black tracking-[0.3em] border border-white/10 hover:border-red-600 text-white px-10 py-3 rounded-full hover:bg-red-600 transition-all uppercase">
                    TICKETS
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <Link to="/tour" className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 hover:text-white transition-all uppercase border-b border-zinc-900 pb-1">
            VIEW FULL WORLD TOUR SCHEDULE
          </Link>
        </div>
      </div>
    </section>

    {/* SECTION: THE TRIBE (Minimalist CTA) */}
    <section className="py-40 bg-black flex flex-col items-center justify-center text-center px-6 border-t border-white/5">
      <h2 className="font-heading text-4xl md:text-5xl tracking-tighter mb-6 uppercase">JOIN THE TRIBE</h2>
      <p className="text-zinc-600 text-[10px] tracking-[0.6em] uppercase mb-16 max-w-lg leading-relaxed">Exclusive vibrations delivered to your inbox.</p>
      
      <form className="w-full max-w-md flex flex-col gap-8">
        <input 
          type="email" 
          placeholder="ENTER EMAIL" 
          className="bg-transparent border-b border-white/10 py-4 text-[10px] font-bold tracking-[0.4em] text-center focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-800"
        />
        <button className="bg-white text-black px-12 py-4 text-[10px] font-black tracking-widest hover:bg-red-600 hover:text-white transition-all uppercase rounded-full">
          SUBSCRIBE
        </button>
      </form>
    </section>
  </div>
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