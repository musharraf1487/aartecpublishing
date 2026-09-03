import React from "react";

const Giftbeyond: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <p className="text-xs font-bold text-aartec-amber tracking-widest uppercase mb-4">
            A GIFT BEYOND WORDS
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-aartec-charcoal mb-6 serif leading-tight">
            The Gift They Will Never Forget.
            <em className="text-aartec-amber italic block">
              It&apos;s Already Inside Them.
            </em>
          </h2>
          <div className="h-1 w-16 bg-aartec-amber mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A professionally published book, written in their voice and drawn
            from their life, is the most personal and lasting gift in the world.
            We do all the work. They get all the credit.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <article className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-aartec-teal/30 transition-all">
            <p className="text-xs font-bold text-aartec-teal tracking-widest uppercase mb-3">
              FOR A PARENT
            </p>
            <h3 className="text-2xl font-bold text-aartec-charcoal mb-4 serif">
              Your Father. Your Mother.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Decades of wisdom, stories, and sacrifices, finally preserved. A
              book of their life, in their words. A legacy that outlives all of
              us.
            </p>
          </article>
          <article className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-aartec-teal/30 transition-all">
            <p className="text-xs font-bold text-aartec-teal tracking-widest uppercase mb-3">
              FOR A MENTOR
            </p>
            <h3 className="text-2xl font-bold text-aartec-charcoal mb-4 serif">
              The Person Who Shaped You.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              They have built businesses, led teams, and made the hard calls.
              Their hard-won knowledge deserves a wider audience. Give them the
              authority they have already earned.
            </p>
          </article>
          <article className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-aartec-teal/30 transition-all">
            <p className="text-xs font-bold text-aartec-teal tracking-widest uppercase mb-3">
              FOR A FRIEND
            </p>
            <h3 className="text-2xl font-bold text-aartec-charcoal mb-4 serif">
              The Expert Who Never Got Credit.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Everyone knows a person with a story worth telling. A consultant,
              a coach, a founder. This is the gift that says: your ideas matter,
              and now the world will know it.
            </p>
          </article>
        </div>

        <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <blockquote className="text-center mb-16">
            <p className="text-2xl font-serif text-aartec-charcoal italic mb-6">
              &ldquo;Anyone can buy flowers. Very few people give someone their
              book.&rdquo;
            </p>
            <div className="h-1 w-16 bg-aartec-amber mx-auto rounded-full"></div>
          </blockquote>

          <div className="text-center mb-12">
            <p className="text-xs font-bold text-aartec-teal tracking-widest uppercase mb-2">
              THE PROCESS
            </p>
            <h3 className="text-3xl font-bold text-aartec-charcoal serif">
              How It Works
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-aartec-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-bold text-aartec-charcoal mb-3">
                We Interview Them
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                A series of guided conversations that draw out their best
                stories, insights, and expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aartec-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-bold text-aartec-charcoal mb-3">
                We Write It For Them
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ghostwritten in their exact voice. They approve every word. No
                writing required on their part.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aartec-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-bold text-aartec-charcoal mb-3">
                We Publish It For Them
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professionally designed, printed, and distributed. A real book.
                Their name on the cover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giftbeyond;
