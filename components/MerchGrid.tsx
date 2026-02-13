
import React from 'react';
import { MERCH } from '../constants';

const MerchGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-bold tracking-[0.4em] text-red-600 mb-2">SHOP</h2>
            <h3 className="font-heading text-4xl md:text-6xl tracking-tighter">OFFICIAL GEAR</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MERCH.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-zinc-900 aspect-[4/5] rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black py-3 text-xs font-bold tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                        ADD TO CART
                    </button>
                </div>
              </div>
              <h4 className="font-bold tracking-tight text-lg mb-1 group-hover:text-red-500 transition-colors uppercase">{item.name}</h4>
              <p className="text-zinc-500 text-sm font-bold tracking-widest">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchGrid;
