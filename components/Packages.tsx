import React from "react";

interface PackagesProps {
  onBookingClick: () => void;
}

const Packages: React.FC<PackagesProps> = ({ onBookingClick }) => {
  const steps = [
    // {
    //   step: "Pricing",
    //   title: "95 USD",
    //   subtitle: " Strategy Call",
    //   icon: "📖",
    //   copy:
    //     "A call to discuss your digital strategy\n" +
    //     "Our imagineers will guide you in executing your idea (with or without us)\n" +
    //     "Create a clear execution roadmap before writing begins\n" +
    //     "Typical response within 7 days",
    // },
    {
      step: "Pricing",
      title: "7,995 USD",
      subtitle: " Book Publishing ",
      icon: "📖",
      copy:
        "Professional ghostwriting aligned with the author's voice\n" +
        "Chapter structure, narrative flow, and message refinement\n" +
        "Editing, proofreading, final manuscript preparation and book cover design\n" +
        "Publishing setup for Amazon and global distribution",
    },
    {
      step: "Pricing",
      title: "7,995 USD",
      subtitle: "Book marketing.",
      icon: "👥",
      copy:
        "Launch and post-launch marketing strategy (30–90 days)\n" +
        "Audience growth and author brand positioning\n" +
        "Content creation from the book for digital platforms\n" +
        "Sales-focused execution across online channels",
    },
    {
      step: "Pricing",
      title: "95,000 USD",
      subtitle: "PR Blitz",
      icon: "📈",
      copy:
        "Targeted outreach to podcasts, media, and publications\n" +
        "Strong PR angles tied to timely narratives\n" +
        "Interview preparation and media talking points\n" +
        "High-impact visibility to establish authority fast",
    },
  ];

  return (
    <div id="packages" className="py-12 px-6 bg-[#f0f4f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* <span className="text-aartec-teal font-bold uppercase tracking-widest text-xs mb-4 block">
            The AARTEC Framework
          </span> */}
          <h2 className="text-4xl lg:text-5xl font-bold text-aartec-charcoal serif">
            Choose Your Plan
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
              <h3 className="fw-bold display-6 mb-0 serif text-2xl font-bold text-aartec-charcoal">
                {item.title}
              </h3>
              <div className="text-aartec-teal text-xs font-semibold mb-6 tracking-wide italic">
                {item.subtitle}
              </div>
              <ul className="text-slate-600 leading-relaxed mb-8 text-sm space-y-2">
                {item.copy.split("\n").map((line, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-aartec-teal font-bold mr-3">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/ahmed-aartec/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-4 bg-aartec-teal text-white rounded-full font-bold shadow-lg hover:bg-aartec-teal/90 flex justify-center items-center transition-all hover:-translate-y-1"
              >
                Book Now <i className="fas fa-bolt ml-2 text-white/90"></i>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={onBookingClick}
            className="bg-aartec-teal text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-aartec-teal/90 transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto"
          >
            Start Your Transformation{" "}
            <i className="fas fa-bolt ml-3 text-aartec-amber"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
