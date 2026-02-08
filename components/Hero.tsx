import React from "react";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const scrollToAffiliate = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("affiliate")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#f8fafb] pt-20 pb-32 px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-aartec-teal/5 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-aartec-teal/10 text-aartec-teal text-xs font-bold tracking-widest uppercase mb-8">
            Imagination Meets Execution
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-aartec-charcoal leading-tight mb-8">
            Turn Your Experience <br />
            <span className="text-aartec-amber italic">Into An Empire.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            The premier platform for entrepreneurs and executives to ghostwrite
            bestsellers, deploy expert teams, and build a lasting legacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="https://calendly.com/ahmed-aartec/30min" target="_blank">
              {" "}
              <button
                onClick={onBookingClick}
                className="px-10 py-4 bg-aartec-teal text-white font-bold rounded shadow-xl hover:bg-aartec-teal/90 transform hover:-translate-y-1 transition-all"
              >
                Book a Strategy Call
              </button>{" "}
            </a>
            <a />
          </div>

          <div className="mt-10 flex items-center space-x-4 text-slate-500 text-sm font-medium">
            <span className="flex items-center">
              <i className="fas fa-check-circle text-aartec-amber mr-2"></i>
              Book your slots for{" "}
              {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                new Date(),
              )}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(30,116,123,0.15)] transform rotate-3 hover:rotate-0 transition-all duration-700">
            <img
              src="/images/hero_books.png"
              alt="Aartec Publishing - Turning Experience into Legacy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
