import React from "react";

const SocialProof: React.FC = () => {
  return (
    <section id="proof" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* High-Contrast Testimonial */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-aartec-teal/5 -rotate-1 pointer-events-none rounded-[100px]"></div>

          <div className="bg-aartec-teal rounded-[40px] p-2 lg:p-1 shadow-3xl relative z-10 overflow-hidden">
            <div className="bg-white rounded-[38px] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-4 bg-aartec-amber/20 rounded-3xl blur-2xl"></div>
                  <img
                    src="images/Wealthology.jpeg"
                    alt="Wealthology Book Cover"
                    className="rounded-3xl shadow-2xl relative z-10 w-full object-contain aspect-[4/5] border-4 border-black"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 z-20">
                    <div className="text-4xl font-black text-aartec-teal">
                      $400K+
                    </div>
                    <div className="text-[10px] font-bold text-aartec-amber uppercase tracking-widest mt-1">
                      Generated Revenue
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="text-aartec-amber mb-6 flex space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="fas fa-star text-sm"></i>
                  ))}
                </div>
                <h3 className="text-4xl font-bold text-aartec-charcoal mb-8 serif leading-tight">
                  "We helped our client achieve a $400K revenue engine with his
                  book."
                </h3>
                {/* <p className="text-slate-600 italic text-xl mb-10 leading-relaxed font-light">
                  ""
                </p> */}
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-0.5 bg-aartec-amber"></div>
                  <div>
                    {/* <div className="font-black text-aartec-charcoal uppercase tracking-tighter">
                      Dr. Sarah Jenkins
                    </div> */}
                    {/* <div className="text-aartec-teal text-xs font-bold uppercase tracking-widest mt-1">
                      Global Strategy Advisor
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
