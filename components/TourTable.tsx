
import React from 'react';
import { TOUR_DATES } from '../constants';

const TourTable: React.FC = () => {
  return (
    <section id="tour" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.4em] text-red-600 mb-2 uppercase">On the Road</h2>
          <h3 className="font-heading text-4xl md:text-6xl tracking-tighter">WORLD TOUR 2024</h3>
        </div>

        <div className="space-y-4">
          {TOUR_DATES.map((tour) => (
            <div 
              key={tour.id} 
              className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-white/5 border border-white/5 hover:border-red-600/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-4 md:mb-0 text-center md:text-left">
                <div className="text-zinc-400 font-bold text-sm tracking-widest">{tour.date}</div>
                <div>
                  <div className="font-bold text-xl group-hover:text-red-500 transition-colors uppercase">{tour.city}</div>
                  <div className="text-zinc-500 text-xs tracking-wide uppercase">{tour.venue}</div>
                </div>
              </div>
              
              <div>
                {tour.status === 'Sold Out' ? (
                  <span className="px-8 py-3 bg-transparent border border-zinc-700 text-zinc-500 rounded-full text-xs font-bold tracking-widest cursor-not-allowed">
                    SOLD OUT
                  </span>
                ) : (
                  <a href={tour.link} className="inline-block px-8 py-3 bg-white text-black hover:bg-red-600 hover:text-white transition-all rounded-full text-xs font-bold tracking-widest">
                    GET TICKETS
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm italic">More dates to be announced soon. Stay tuned.</p>
        </div>
      </div>
    </section>
  );
};

export default TourTable;
