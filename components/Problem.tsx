import React from "react";
import { Brain, Hourglass, UserX } from "lucide-react";
const Problem: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-aartec-charcoal mb-8 leading-tight serif">
          You Have the Vision. <br />
          <span className="text-aartec-amber">You Lack the Time.</span>
        </h2>
        <div className="h-1.5 w-20 bg-aartec-amber mx-auto mb-10 rounded-full"></div>
        <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-2xl mx-auto">
          "Over 80% of adults dream of writing a book only 1% ever do. You’ve
          built a successful career, but your knowledge is trapped in your head.
          You have been thinking about that one idea all the time but you
          haven't been able to bring it to life. You know you should write a
          book to cement your legacy, or to finally start working on that idea
          and you know you need a team to scale your operations."
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Brain,
              title: "Knowledge Trapped",
              desc: "Expertise is siloed in your mind, making you the ultimate bottleneck.",
            },
            {
              icon: Hourglass,
              title: "Zero Bandwidth",
              desc: "Operation fatigue prevents you from building personal authority.",
            },
            {
              icon: UserX,
              title: "Talent Gaps",
              desc: "Scaling requires specialized execution talent you don't have time to vet.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:border-aartec-teal/30 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <item.icon className="text-aartec-teal text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-aartec-charcoal mb-3 serif">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
