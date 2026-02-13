import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-bold tracking-[0.4em] text-red-600 mb-2 uppercase text-center">Inquiries</h2>
          <h1 className="font-heading text-5xl md:text-8xl tracking-tighter text-center mb-8">GET IN <span className="text-zinc-600">TOUCH</span></h1>
          <p className="text-zinc-400 text-center max-w-xl mx-auto text-lg">
            For all professional inquiries, collaborations, and bookings, reach out to the Zion Roots management team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900/40 p-10 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-red-600/30 transition-all">
            <h3 className="text-xs font-bold tracking-widest text-red-600 mb-4 uppercase">Bookings & Management</h3>
            <p className="text-2xl font-bold mb-2">obinnastanleyruff@gmail.com</p>
            <p className="text-zinc-500 text-sm">International, Festivals & Private Events</p>
          </div>
          
          <div className="bg-zinc-900/40 p-10 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-red-600/30 transition-all">
            <h3 className="text-xs font-bold tracking-widest text-red-600 mb-4 uppercase">Press & PR</h3>
            <p className="text-2xl font-bold mb-2">obinnastanleyruff@gmail.com</p>
            <p className="text-zinc-500 text-sm">Media, Interviews & Promo Kits</p>
          </div>
        </div>

        <div className="bg-zinc-900/20 p-8 md:p-12 rounded-3xl border border-white/5">
          <h3 className="font-heading text-3xl mb-8 tracking-tight">SEND A MESSAGE</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="NAME" 
                className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-red-600 transition-colors text-sm font-bold tracking-widest"
              />
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-red-600 transition-colors text-sm font-bold tracking-widest"
              />
            </div>
            <textarea 
              placeholder="MESSAGE" 
              rows={5}
              className="w-full bg-black/40 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-red-600 transition-colors text-sm font-bold tracking-widest"
            ></textarea>
            <button className="bg-red-600 text-white w-full py-4 rounded-xl font-bold tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;