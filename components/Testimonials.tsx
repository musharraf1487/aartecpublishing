import React from "react";

interface TestimonialData {
  id: number;
  category: string;
  categoryIcon: string;
  title: string;
  description: string;
  compositeImage: string;
  authorName: string;
  siteUrl?: string;
  videoUrl?: string;
  amazonUrl?: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    category: "Book Publishing",
    categoryIcon: "fas fa-bolt",
    title:
      "Turn Your Words into a Professionally Published Book That Stands Out.",
    description:
      "Trish Odusami is a coach that helps leaders. A book gives her the credibility to spread her message further and become a thought leader in her industry.",
    compositeImage: "/images/risingleaders.png",
    authorName: "Trish Odusami",
    siteUrl: "https://www.trishodusami.com/",
    videoUrl: "https://www.youtube.com/watch?v=6Q4sdDtVr8s",
    amazonUrl:
      "https://www.amazon.com/Rising-Leaders-Powerful-Habits-Success/dp/B0CPJNJP94",
  },
  {
    id: 2,
    category: "Business Strategy",
    categoryIcon: "fas fa-bullseye",
    title: "Scaling New Heights with Data-Driven Decision Making.",
    description:
      "Eula Clarke is a former UK banking professional with over 47 years of experience, now dedicated to empowering women through coaching and consultancy. Her debut book A Call to Elevate inspires readers to turn ambition into action and create meaningful change.",
    compositeImage: "/images/A call to elevate.png",
    authorName: "Eula Clarke",
    siteUrl: "https://eulaclarke.com/",
    videoUrl: "#",
    amazonUrl:
      "https://www.amazon.com/Call-Elevate-Transform-Ambition-Action/dp/B0CPJNF697",
  },
  {
    id: 3,
    category: "Creative Mindset",
    categoryIcon: "fas fa-lightbulb",
    title: "Unlock Creative Potential You Never Knew You Had.",
    description:
      "Trish Odusami is a passionate leadership advocate dedicated to developing future leaders. Her book Rising Talents and the Key to Leadership empowers readers with the mindset and skills needed to lead with confidence and impact.",
    compositeImage: "/images/the key to leadership.png",
    authorName: "Trish Odusami",
    siteUrl: "https://www.trishodusami.com/",
    videoUrl: "https://www.youtube.com/watch?v=6Q4sdDtVr8s",
    amazonUrl:
      "https://www.amazon.com/Key-Leadership-Trish-Odusami/dp/B0CQH2Y2HX/ref=sr_1_1?crid=28L2XYBLX9WN4&dib=eyJ2IjoiMSJ9.v9NJHI97Q1H6nWGyyry6tdOWmk4SckwCG7l8GVVxDuE.bV26wadpkd1hN-PGKCH99Sm9si5D95_V02cUo1mBLnc&dib_tag=se&keywords=key+to+leadership+by+trish&qid=1770544907&s=books&sprefix=key+to+leadership+by+tris%2Cstripbooks-intl-ship%2C339&sr=1-1",
  },
  {
    id: 4,
    category: "Success Habits",
    categoryIcon: "fas fa-star",
    title: "Building the Discipline of World-Class Achievers.",
    description:
      "Dr. Eraldo Fezaj is a dental professional with over 15 years of clinical experience, passionate about the connection between smiling, confidence, and well-being. His book How a Smile Can Build Your Self-Esteem blends science, psychology, and practical guidance to help readers improve their smile—and their self-confidence.",
    compositeImage: "/images/smile.png",
    authorName: "Dr. Eraldo Fezaj",
    siteUrl:
      "https://www.linkedin.com/in/dr-eraldo-fezaj-59ab98103?originalSubdomain=al",
    videoUrl: "#",
    amazonUrl: "https://www.amazon.com/dp/B0CC4JC757",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="space-y-24 md:space-y-40 py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-teal-700 tracking-tight">
          Our Published Works
        </h2>
        {/* <p className="text-lg md:text-xl text-slate-800 font-medium max-w-3xl mx-auto">
          Experience the Aartec difference. We help you turn your expertise into
          a high-impact legacy through professional publishing.
        </p> */}
      </div>

      {testimonials.map((item, index) => (
        <section
          key={item.id}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Text Content Column */}
            <div
              className={`space-y-6 md:space-y-8 order-2 ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="flex items-center space-x-2 text-teal-600 font-bold tracking-widest text-sm uppercase">
                <i className={item.categoryIcon}></i>
                <span>{item.category}</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
                {item.title}
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                {item.description}
              </p>

              {/* Smaller Vertical Teal Button Stack */}
              <div className="flex flex-col gap-3 max-w-[260px] pt-2">
                {item.siteUrl && (
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-teal-700 transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <i className="fas fa-globe"></i>
                    <span>Visit the Website</span>
                  </a>
                )}

                {item.amazonUrl && (
                  <a
                    href={item.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-teal-700 transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <i className="fas fa-shopping-cart"></i>
                    <span>Buy now at Amazon</span>
                  </a>
                )}
              </div>
            </div>

            {/* Visual Column (Single Composite Image) */}
            <div
              className={`relative flex items-center justify-center order-1 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}
            >
              {/* Subtle Decorative Backdrop */}
              <div className="absolute w-[65%] aspect-square bg-teal-50/50 rounded-full -z-10 scale-110 blur-3xl opacity-50"></div>

              <div className="relative group w-2/3">
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src={item.compositeImage}
                    alt={`${item.authorName} Success Story`}
                    className="w-full h-auto object-cover block"
                  />

                  {/* Subtle Gradient Overlay for Branding Consistency */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 via-transparent to-transparent pointer-events-none"></div>

                  {/* Optional: Minimalist Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center space-x-2 border border-white/50 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                      <span className="text-xs font-black text-slate-800 uppercase tracking-widest">
                        {item.authorName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Simplified Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-24 text-center">
        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-teal-400 to-teal-700 shadow-xl">
          <button className="bg-white text-teal-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors">
            Become our next Success Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
