
import React from 'react';

const Qualification: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-12 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-aartec-teal/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-aartec-charcoal serif mb-4">Qualification Protocol</h2>
            <p className="text-aartec-teal font-bold uppercase tracking-[0.2em] text-[10px]">Is AARTEC the right partner for you?</p>
          </div>
          
          <div className="grid gap-6">
            {[
              "You are a CEO, Government Official, or Industry Expert with a proven track record.",
              "You are ready to invest a minimum of $25k+ into your personal brand assets.",
              "You value speed and elite execution over 'DIY' learning paths.",
              "You have a unique framework that can be scaled into a global ecosystem."
            ].map((text, i) => (
              <div key={i} className="flex items-start bg-white p-6 rounded-2xl border border-slate-100 hover:border-aartec-amber/50 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-aartec-teal flex items-center justify-center mr-6 shrink-0 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <p className="text-lg font-medium text-slate-700 leading-snug">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-slate-50 pt-10">
            <p className="text-slate-400 text-xs italic font-light max-w-sm mx-auto">
               Important: We limit intake to 5 publishing projects per month. Quality and velocity are our non-negotiables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
