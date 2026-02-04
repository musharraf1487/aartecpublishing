import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Coming Soon
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 serif">
              Aartec Studio
            </h2>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white/90 font-medium max-w-2xl mx-auto">
              We are excited to launch our very own custom AI content creation
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
