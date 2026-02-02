import React from "react";

interface AffiliateProps {
  onApplyClick: () => void;
}

const Affiliate: React.FC<AffiliateProps> = ({ onApplyClick }) => {
  return (
    <section id="affiliate" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <span className="bg-aartec-amber text-white px-4 py-1.5 text-[10px] font-black rounded uppercase tracking-widest mb-6 inline-block">
            Partner Ecosystem
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-aartec-charcoal serif mb-8">
            Scale With Us.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            "Refer high-ticket clients to our ecosystem and earn 20% recurring
            revenue. We provide the assets; you provide the connection."
          </p>

          <div className="space-y-4 mb-12">
            {[
              {
                title: "High-Ticket Commissions",
                desc: "Average referral value: $2,500 - $10,000.",
                icon: "fa-gem",
              },
              {
                title: "Lifetime Cookies",
                desc: "Once they are in our ecosystem, you are credited for life.",
                icon: "fa-cookie-bite",
              },
              {
                title: "Elite Assets",
                desc: "Pre-made VSLs, whitepapers, and funnels provided.",
                icon: "fa-tools",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-aartec-teal/30 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-6 text-aartec-teal">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-aartec-charcoal text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onApplyClick}
            className="w-full sm:w-auto px-12 py-5 bg-aartec-teal text-white font-bold rounded-xl hover:bg-aartec-teal/90 hover:shadow-2xl transition-all shadow-xl"
          >
            Apply for Partnership
          </button>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="bg-white p-10 rounded-3xl shadow-[0_30px_60px_rgba(30,116,123,0.1)] relative z-10 border border-slate-100">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-50">
              <div className="font-black text-aartec-charcoal uppercase tracking-widest text-[10px]">
                Portal Dashboard
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-400">
                  ACTIVE SESSION
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Total Earnings (YTD)
                </div>
                <div className="text-5xl font-black text-aartec-teal serif tracking-tighter">
                  $142,500.00
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-aartec-teal/5 rounded-2xl border border-aartec-teal/10">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">
                    Referrals
                  </div>
                  <div className="text-2xl font-black text-aartec-charcoal">
                    34
                  </div>
                </div>
                <div className="p-6 bg-aartec-amber/5 rounded-2xl border border-aartec-amber/10">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">
                    Avg. EPC
                  </div>
                  <div className="text-2xl font-black text-aartec-charcoal">
                    $8.42
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <div className="text-slate-500 text-[8px] font-bold uppercase">
                    Next Payout
                  </div>
                  <div className="text-white font-bold">$12,400</div>
                </div>
                <div className="px-3 py-1 bg-aartec-amber text-white text-[10px] font-bold rounded-full">
                  PROCESSING
                </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-aartec-amber/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-aartec-teal/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
