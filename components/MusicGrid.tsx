import React from 'react';
import { ALBUMS } from '../constants';

const MusicGrid: React.FC = () => {
  const featuredTrack = ALBUMS[0];

  if (!featuredTrack) return null;

  return (
    <section id="music" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.4em] text-red-600 mb-2">LATEST RELEASE</h2>
          <h3 className="font-heading text-5xl md:text-7xl tracking-tighter uppercase">{featuredTrack.title}</h3>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Artwork Card */}
          <div className="w-full lg:w-1/2 group cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-lg shadow-2xl">
              <img 
                src={featuredTrack.cover} 
                alt={featuredTrack.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={featuredTrack.spotifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="text-zinc-500 font-bold tracking-[0.2em] text-sm mb-2">{featuredTrack.year} SINGLE</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href={featuredTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-bold tracking-widest text-[10px] hover:bg-white hover:text-black transition-all"
                >
                  STREAM ON SPOTIFY
                </a>
                <button className="border border-white/10 text-white px-8 py-3 rounded-full font-bold tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                  BUY ON ITUNES
                </button>
              </div>
            </div>
          </div>

          {/* Spotify Player Embed */}
          <div className="w-full lg:w-1/2">
            <div className="bg-zinc-900/30 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
               <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/3bGLulhmWdmG0uS5ZDy3Vc?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
            <p className="mt-6 text-zinc-500 text-sm italic text-center lg:text-left">
              "A journey back to the roots of Zion. Feel the vibration of the Rasta Renaissance."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicGrid;