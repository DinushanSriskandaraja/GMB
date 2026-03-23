const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24  relative overflow-hidden">
      {/* Very soft ambient gradient + noise for tactile luxury feel */}
      <div className="absolute inset-0 pointer-events-none" />
      {/* <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#cbd5e1_0.6px,transparent_1px)] [background-size:28px_28px] pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Hero-style text block – bold, emotional, trend-forward */}
        <div className="text-center mb-14 md:mb-18">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
            Your windows deserve
            <span className="gradient-text"><span className="italic">more than Ordinary</span>
              
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            At GMB we don’t just hang curtains — we craft calm, beauty and quiet confidence for the homes that matter most.
          </p>
        </div>

        {/* Four elegant spotlight features – asymmetrical stagger + reveal on hover */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          {/* Feature 1 – spans more, left aligned */}
          <div className="md:col-span-7 group bg-gradient-to-br from-white to-teal-50/30 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-teal-100/40">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary  flex items-center justify-center shadow-xl shadow-teal-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                  Fabrics You Fall For
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Luxuriously soft, fade-defying textiles sourced from the world’s most respected mills — touchable elegance built to age beautifully.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 – right side, offset up */}
          <div className="md:col-span-5 md:mt-12 group bg-gradient-to-br from-white to-cyan-50/30 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-cyan-100/40">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary   flex items-center justify-center shadow-xl shadow-cyan-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors">
                  Made by Hand
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  20+ years of artisan precision — every stitch thoughtful, every edge flawless.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 – left, offset down */}
          <div className="md:col-span-5 md:-mt-8 group bg-gradient-to-br from-white to-teal-50/30 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-teal-100/40">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary   flex items-center justify-center shadow-xl shadow-teal-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                  Installed Flawlessly
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  One clean visit. No dust. No stress. Just perfect fit the first time.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 – right, larger span */}
          <div className="md:col-span-7 group bg-gradient-to-br from-white to-cyan-50/30 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-cyan-100/40">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary  flex items-center justify-center shadow-xl shadow-cyan-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors">
                  Guided by You
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Free in-home visit. Honest conversation. Recommendations that truly fit your life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Friendly, standout CTA – magnetic & inviting */}
        <div className="text-center mt-16 md:mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 px-10 py-6 bg-[var(--accent-yellow)] text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
          >
            Let’s make your windows feel like home
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-base text-gray-500">Takes 2 minutes • Always free • Zero pressure</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;