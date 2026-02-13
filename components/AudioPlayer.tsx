import React from 'react';

const AudioPlayer: React.FC = () => {
  // Extracting track ID from: https://open.spotify.com/track/3bGLulhmWdmG0uS5ZDy3Vc?si=8482340c45d14a54
  const trackId = "3bGLulhmWdmG0uS5ZDy3Vc";
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-4 md:pb-6 flex justify-center pointer-events-none">
      <div className="w-full max-w-[400px] pointer-events-auto transition-transform duration-500 hover:scale-[1.02]">
        <div className="bg-black/80 backdrop-blur-xl rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10">
          <iframe
            style={{ borderRadius: '12px' }}
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