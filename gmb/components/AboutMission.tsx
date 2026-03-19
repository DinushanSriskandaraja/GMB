const AboutMission = () => {
  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E5A]/20 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative premium-card p-12 h-full flex flex-col justify-between overflow-hidden rounded-xl border-slate-200/50 glassmorphism-light group-hover:border-primary/20 transition-all duration-500">
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 bg-slate-900/5 rounded-xl flex items-center justify-center border border-slate-200 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                    <svg className="w-10 h-10 text-slate-700 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">Our Purpose</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">Our <span className="gradient-text">Mission</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    To transform indoor spaces into <span className="text-slate-900 font-medium italic">havens of comfort</span> and style through artisan craftsmanship, innovative design, and personalized service that exceeds expectations.
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl transition-all duration-700 group-hover:bg-primary/5" />
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E5A]/20 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative premium-card p-12 h-full flex flex-col justify-between overflow-hidden rounded-xl border-slate-200/50 glassmorphism-light group-hover:border-primary/20 transition-all duration-500">
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 bg-slate-900/5 rounded-xl flex items-center justify-center border border-slate-200 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                    <svg className="w-10 h-10 text-slate-700 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">Future Focus</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">Our <span className="gradient-text">Vision</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    To be the <span className="text-slate-900 font-medium italic">global benchmark</span> for luxury window treatments, recognized for our commitment to sustainability, artistic integrity, and the elevation of modern living.
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl transition-all duration-700 group-hover:bg-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
