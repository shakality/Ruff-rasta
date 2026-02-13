import React, { useState, useEffect } from 'react';

const AudioPlayer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false);
  
  const trackId = "3bGLulhmWdmG0uS5ZDy3Vc";
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;

  useEffect(() => {
    // 5 second delay before first appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasEnteredOnce(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        className={`fixed bottom-3 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 pointer-events-none scale-95'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative transition-all duration-500 ${isHovered ? 'scale-[1.015]' : 'scale-100'}`}>
          {/* Sensitive Close Button - only shows on hover */}
          <button 
            onClick={() => setIsVisible(false)}
            className={`absolute -top-2.5 -right-2.5 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center border border-white/20 shadow-2xl transition-all duration-300 z-20 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-white hover:text-black hover:scale-110 active:scale-90`}
            aria-label="Minimize Player"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Wider and Flatter Player Container */}
          <div className={`
            w-[310px] sm:w-[480px] md:w-[600px] 
            bg-black/95 backdrop-blur-3xl rounded-xl overflow-hidden 
            border transition-all duration-500
            ${isHovered 
              ? 'shadow-[0_20px_50px_-10px_rgba(255,0,0,0.4)] border-red-600/30' 
              : 'shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8)] border-white/5'}
          `}>
            <iframe
              src={embedUrl}
              width="100%"
              height="72"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
              className="rounded-lg transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0.85 }}
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Minimized Trigger - Lowered to bottom-3 */}
      {!isVisible && hasEnteredOnce && (
        <button 
          onClick={() => setIsVisible(true)}
          className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-2.5 rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.5)] hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 border border-white/10 z-[100] flex items-center gap-2.5 group active:scale-95 animate-in fade-in slide-in-from-bottom-4"
        >
          <span className="text-[9px] font-black tracking-[0.25em] uppercase">VIBE ON</span>
          <div className="flex gap-1 items-end h-3">
            <div className="w-0.5 bg-current animate-[music-bar_0.8s_ease-in-out_infinite] rounded-full" style={{ height: '50%' }}></div>
            <div className="w-0.5 bg-current animate-[music-bar_1.2s_ease-in-out_infinite] rounded-full" style={{ height: '100%' }}></div>
            <div className="w-0.5 bg-current animate-[music-bar_1s_ease-in-out_infinite] rounded-full" style={{ height: '70%' }}></div>
          </div>
        </button>
      )}

      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 25%; }
          50% { height: 100%; }
        }
      `}</style>
    </>
  );
};

export default AudioPlayer;