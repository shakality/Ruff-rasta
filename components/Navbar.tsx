import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MUSIC', href: '/music' },
    { name: 'TOUR', href: '/tour' },
    { name: 'MERCH', href: '/merch' },
    { name: 'ORACLE', href: '/oracle' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          RUFF <span className="text-red-600">RASTA</span>
        </Link>
        
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `text-xs font-bold tracking-widest hover:text-red-500 transition-colors uppercase ${isActive ? 'text-red-600' : 'text-white'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a 
          href="https://www.instagram.com/ruffrastaofficial/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 text-xs font-bold tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all text-center inline-block"
        >
          FOLLOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;