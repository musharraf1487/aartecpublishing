import React from "react";

interface SolutionProps {
  onBookingClick: () => void;
}

const Solution: React.FC<SolutionProps> = ({ onBookingClick }) => {
  const steps = [
    {
      step: "",
      title: "The Authority Anchor",
      subtitle: "(Ghostwriting & Publishing)",
      icon: "📖",
      copy: "We Write Your Legacy. Our ghostwriting team turns your thoughts into a bestseller without you typing a word. Establish global authority and open doors to high-level contracts.",
    },
    {
      step: "",
      title: "The Growth Engine",
      subtitle: "(Elite Team Deployment)",
      icon: "👥",
      copy: "We Build Your Team. Access our elite network to hire ambitious talent who can implement the strategies in your book and take the operational load off your shoulders.",
    },
    {
      step: "",
      title: "The Scale Strategy",
      subtitle: "(Business Creation)",
      icon: "📈",
      copy: 'We Scale Your Vision. Use our "Masters of Business Creation" framework to turn your book\'s readers into high-paying clients and a permanent legacy.',
    },
  ];

  return (
    <section id="solution" className="py-24 px-6 bg-[#f0f4f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-aartec-teal font-bold uppercase tracking-widest text-xs mb-4 block">
            The AARTEC Framework
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-aartec-charcoal serif">
            The High-Ticket Ecosystem
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-10 h-full shadow-sm hover:shadow-2xl transition-all duration-500 border-t-4 border-aartec-teal group"
            >
              <div className="text-5xl mb-8 filter grayscale group-hover:grayscale-0 transition-all">
                {item.icon}
              </div>
              <div className="text-aartec-amber font-bold text-[10px] uppercase tracking-widest mb-3">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-aartec-charcoal mb-2 serif">
                {item.title}
              </h3>
              <div className="text-aartec-teal text-xs font-semibold mb-6 tracking-wide italic">
                {item.subtitle}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                {item.copy}
              </p>
              {/* <div className="pt-6 border-t border-slate-50 flex items-center text-aartec-teal text-xs font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                LEARN MORE{" "}
                <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          {/* <button 
            onClick={onBookingClick}
            className="bg-aartec-charcoal text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-aartec-teal transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto"
          >
            Start Your Transformation <i className="fas fa-bolt ml-3 text-aartec-amber"></i>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Solution;
