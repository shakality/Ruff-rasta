import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-heading text-4xl mb-12 tracking-tighter">RUFF <span className="text-red-600">RASTA</span></h2>
        
        <div className="flex gap-8 mb-12">
          {['Instagram', 'Spotify', 'Twitter', 'YouTube'].map(social => (
            <a key={social} href="#" className="text-xs font-bold tracking-widest text-zinc-500 hover:text-white transition-colors uppercase">
              {social}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] text-zinc-600 tracking-widest uppercase">
            &copy; 2026 RUFF RASTA RECORDS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] text-zinc-600 tracking-widest uppercase">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;