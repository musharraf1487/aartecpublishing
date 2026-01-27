
import React from 'react';

interface StickyCTAProps {
  visible: boolean;
  onBookingClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ visible, onBookingClick }) => {
  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
      <div className="bg-aartec-charcoal/95 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center space-x-8">
        <div className="hidden md:block">
          <span className="text-white font-black text-xs uppercase tracking-widest block">Ready to Build?</span>
          <span className="text-aartec-amber text-[10px] font-bold italic">Slots opening for {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(new Date().setMonth(new Date().getMonth() + 1)))}</span>
        </div>
        <button 
          onClick={onBookingClick}
          className="bg-aartec-teal text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-aartec-teal transition-all whitespace-nowrap shadow-lg"
        >
          Book Call
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
