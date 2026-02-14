import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[0.2] brightness-[0.4]"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/ruffhero/1920/1080)' }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      {/* Artist Image - Right Corner */}
      <div className="absolute right-0 bottom-0 z-20 w-full h-full pointer-events-none flex items-end justify-end overflow-hidden">
        <img 
          src="https://i.ibb.co/j9Y7GvLf/Photo-from-Chuditech-1-remove-background-com.png" 
          alt="Ruff Rasta" 
          className="h-[80%] md:h-[90%] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl md:ml-32 lg:ml-64">
          <h1 className="font-heading text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tighter mb-4">
            RUFF<br />
            <span className="gradient-text">RASTA</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light mb-8 uppercase tracking-[0.3em]">
            The Renaissance of Modern Reggae
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/music" className="bg-red-600 text-white px-10 py-4 rounded-full font-bold tracking-widest text-xs hover:bg-white hover:text-black transition-all text-center">
              LISTEN NOW
            </Link>
            <Link to="/tour" className="border border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-bold tracking-widest text-xs transition-all backdrop-blur-sm text-center">
              TOUR DATES
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-12 z-30 hidden md:block">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
};

export default Hero;