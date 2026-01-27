
import React, { useState } from 'react';
import Logo from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    revenue: '',
    goal: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-aartec-teal/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-2xl rounded-[32px] shadow-3xl overflow-hidden relative border border-white/20 animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-aartec-charcoal text-2xl transition-colors">
          <i className="fas fa-times"></i>
        </button>

        <div className="flex h-full min-h-[550px]">
          {/* Brand Sidebar */}
          <div className="w-1/3 bg-slate-50 p-10 border-r border-slate-100 hidden sm:flex flex-col">
            <Logo className="w-12 h-12 mb-10" />
            <h3 className="font-bold text-aartec-charcoal serif text-2xl mb-6">Legacy <br/>Session</h3>
            <div className="space-y-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <div className="flex items-center"><i className="far fa-clock text-aartec-amber mr-3 text-sm"></i> 45 Mins</div>
              <div className="flex items-center"><i className="fas fa-video text-aartec-amber mr-3 text-sm"></i> Secure Zoom</div>
              <div className="flex items-center"><i className="fas fa-shield-alt text-aartec-amber mr-3 text-sm"></i> NDA Protected</div>
            </div>
            <div className="mt-auto text-[10px] text-slate-400 leading-relaxed font-medium">
               AARTEC Private Strategy Division &copy;
            </div>
          </div>

          {/* Lead Qualification Form */}
          <div className="flex-1 p-10 md:p-14 overflow-y-auto">
            {step === 1 ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-aartec-charcoal mb-3 serif">Protocol Check</h2>
                <p className="text-slate-500 text-sm mb-10">Verification of status for legacy architectural alignment.</p>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-[10px] font-black text-aartec-teal uppercase tracking-widest mb-3">Current Enterprise Volume</label>
                    <select 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-aartec-teal/20 outline-none text-sm font-semibold text-slate-700"
                      onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    >
                      <option>Select Range...</option>
                      <option>$250k - $1M / Year</option>
                      <option>$1M - $10M / Year</option>
                      <option>$10M+ / Year</option>
                      <option>Public Figure / Gov Official</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-black text-aartec-teal uppercase tracking-widest mb-3">Legacy Objective</label>
                    <div className="grid gap-3">
                      {['Authority Establishment', 'Executive Scaling', 'Global Legacy Build', 'High-Ticket Funnels'].map(obj => (
                        <label key={obj} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.goal === obj ? 'bg-aartec-teal/5 border-aartec-teal' : 'bg-white border-slate-100 hover:border-aartec-teal/30'}`}>
                          <input 
                            type="radio" 
                            name="goal" 
                            className="hidden" 
                            value={obj} 
                            onChange={(e) => setFormData({...formData, goal: e.target.value})} 
                          />
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.goal === obj ? 'border-aartec-teal bg-aartec-teal' : 'border-slate-300'}`}>
                            {formData.goal === obj && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                          </div>
                          <span className="text-sm font-bold text-slate-600">{obj}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button 
                    disabled={!formData.revenue || !formData.goal}
                    onClick={() => setStep(2)}
                    className="w-full bg-aartec-teal text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-aartec-teal/90 transition-all disabled:opacity-30 shadow-xl shadow-aartec-teal/20"
                  >
                    Continue to Scheduler
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-in slide-in-from-right-10 duration-500 h-full flex flex-col justify-center text-center">
                <div className="w-20 h-20 bg-aartec-amber/10 rounded-full flex items-center justify-center text-aartec-amber text-3xl mx-auto mb-8">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h2 className="text-3xl font-bold text-aartec-charcoal mb-4 serif">Secure Booking</h2>
                <p className="text-slate-500 mb-10 text-sm">Qualified status confirmed. Please select your executive window.</p>
                <div className="border-4 border-slate-50 p-16 rounded-3xl italic text-slate-300 font-bold tracking-widest text-xs">
                  [ CALENDLY / CAL.COM SECURE WIDGET ]
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-10 text-aartec-teal text-xs font-black uppercase tracking-widest hover:text-aartec-amber transition-colors"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Adjust Protocol
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
