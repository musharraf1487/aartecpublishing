
import React from 'react';
import { trackEvent } from '../lib/pixel';

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AffiliateModal: React.FC<AffiliateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-navy-900/90">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-navy-900">
           <i className="fas fa-times text-xl"></i>
        </button>
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
            <i className="fas fa-handshake text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-navy-900 serif">Join the Network</h2>
          <p className="text-slate-500 mt-2">Partner with the most elite legacy architecture firm.</p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            trackEvent('Lead', { content_name: 'Affiliate Application' });
          }}
        >
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
            <input type="text" placeholder="John Smith" className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-gold-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-gold-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Your Audience Size</label>
            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-gold-500 outline-none">
              <option>Under 10,000</option>
              <option>10k - 50k</option>
              <option>50k - 250k</option>
              <option>250k+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Why do you want to partner?</label>
            <textarea className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-gold-500 outline-none h-24" placeholder="Tell us about your channel or influence..."></textarea>
          </div>
          <button className="w-full py-4 bg-navy-900 text-gold-500 font-bold rounded hover:bg-navy-800 transition-all shadow-xl">
            Submit Application
          </button>
        </form>
        
        <p className="text-[10px] text-slate-400 mt-6 text-center leading-relaxed">
          Applications are reviewed within 48 hours. By joining, you agree to our Affiliate Terms and Conditions regarding brand representation.
        </p>
      </div>
    </div>
  );
};

export default AffiliateModal;
