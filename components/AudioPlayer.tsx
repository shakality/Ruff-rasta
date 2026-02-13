import React, { useState } from 'react';

const AudioPlayer: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Extracting track ID for Ruff Rasta's 4DROAD
  const trackId = "3bGLulhmWdmG0uS5ZDy3Vc";
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;

  return (
    <div className={`fixed bottom-0 left-0 w-full z-[100] px-4 pb-4 md:pb-6 flex justify-center transition-all duration-500 transform ${isMinimized ? 'translate-y-[70px]' : 'translate-y-0'} pointer-events-none`}>
      <div className="w-full max-w-[440px] pointer-events-auto relative group">
        {/* Minimize Button */}
        <button 
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute -top-10 right-4 bg-black/80 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-all shadow-xl backdrop-blur-md"
          title={isMinimized ? "Show Player" : "Minimize Player"}
        >
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isMinimized ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Player Container */}
        <div className="bg-zinc-900/90 backdrop-blur-2xl rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/10 p-1">
          <iframe
            style={{ borderRadius: '18px' }}
            src={embedUrl}
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;