import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-48 h-48 mx-auto mb-10"
        />
        <h2 className="text-5xl font-bold mb-6 serif text-aartec-charcoal">
          Your Legacy is Waiting.
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto">
          We only take on 5 new elite projects per month. <br />
          Apply today to secure your roadmap.
        </p>

        <div className="inline-flex flex-col items-center">
          <button
            onClick={() =>
              (window.location.href =
                "https://calendly.com/ahmed-aartec/30min?month=2026-02")
            }
            className="bg-aartec-teal text-white px-14 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-aartec-teal/20 mb-6 uppercase tracking-widest"
          >
            Book Strategy Call
          </button>
          <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest space-x-6">
            <span className="flex items-center">
              <i className="fas fa-shield-alt text-aartec-amber mr-2"></i>{" "}
              Private
            </span>
            <span className="flex items-center">
              <i className="fas fa-check text-aartec-amber mr-2"></i> Vetted
            </span>
            <span className="flex items-center">
              <i className="fas fa-bolt text-aartec-amber mr-2"></i> Fast
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        <div className="mb-6 md:mb-0">
          &copy; {new Date().getFullYear()} AARTEC ECOSYSTEM &bull; THE
          AUTHORITY PLATFORM
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-aartec-teal transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-aartec-teal transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-aartec-teal transition-colors">
            Compliance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
