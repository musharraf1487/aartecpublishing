
import React from 'react';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const scrollToAffiliate = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('affiliate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#f8fafb] pt-20 pb-32 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-aartec-teal/5 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-aartec-teal/10 text-aartec-teal text-xs font-bold tracking-widest uppercase mb-8">
            Elite Legacy Architecture
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-aartec-charcoal leading-tight mb-8">
            Turn Your Experience <br />
            <span className="text-aartec-amber italic">Into An Empire.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            The premier platform for entrepreneurs and executives to ghostwrite bestsellers, 
            deploy expert teams, and build a lasting legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={onBookingClick}
              className="px-10 py-4 bg-aartec-teal text-white font-bold rounded shadow-xl hover:bg-aartec-teal/90 transform hover:-translate-y-1 transition-all"
            >
              Apply for Authority
            </button>
            <button 
              onClick={scrollToAffiliate}
              className="px-10 py-4 bg-white text-aartec-teal font-bold rounded border border-aartec-teal/20 hover:border-aartec-teal transition-all shadow-sm"
            >
              Partner With Us
            </button>
          </div>

          <div className="mt-10 flex items-center space-x-4 text-slate-500 text-sm font-medium">
            <span className="flex items-center">
              <i className="fas fa-check-circle text-aartec-amber mr-2"></i> 
              Only 5 slots remaining for {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}
            </span>
          </div>
        </div>

        <div className="relative">
          {/* VSL Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(30,116,123,0.15)] aspect-video border-8 border-white relative group">
            <img 
              src="https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&q=80&w=1200" 
              alt="Legacy Strategy" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-aartec-teal/20 flex items-center justify-center">
              <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-aartec-teal text-2xl pl-1 hover:scale-110 transition-transform shadow-2xl">
                 <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-aartec-teal border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
          
          {/* Visual Book Hook */}
          <div className="absolute -bottom-12 -left-12 w-52 h-72 bg-white rounded-lg shadow-2xl p-5 hidden md:block transform -rotate-3 border border-slate-50">
            <div className="h-full border-[3px] border-aartec-amber/30 p-4 flex flex-col justify-between rounded">
              <div className="text-aartec-teal font-black text-[10px] uppercase tracking-widest">Global Best Seller</div>
              <div className="text-aartec-charcoal font-bold text-xl serif leading-tight mt-2">YOUR UNTOLD <br/>LEGACY</div>
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-aartec-teal/10 flex items-center justify-center">
                   <svg viewBox="0 0 100 100" className="w-4 h-4">
                      <path d="M30 85L50 15L65 55L50 45L30 85Z" fill="#1e747b" />
                      <path d="M70 85L50 15L35 55L50 45L70 85Z" fill="#d97e1a" opacity="0.8" />
                   </svg>
                </div>
                <div className="text-[8px] font-bold text-slate-400">AARTEC PRESS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
