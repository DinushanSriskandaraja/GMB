const AboutMission = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            className="premium-card glassmorphism p-12 text-white relative overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/20 border border-primary/30 bg-emerald-900/40"
          >
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-white leading-relaxed">
                To transform indoor spaces into havens of comfort and style through artisan craftsmanship, innovative design, and personalized service that exceeds expectations.
              </p>
            </div>
          </div>

          <div className="premium-card p-12 bg-slate-900/20 border-primary/10 relative overflow-hidden rounded-[3rem]">
            {/* Decorative background circle */}
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="text-xl text-slate-200 leading-relaxed">
                To be the global benchmark for luxury window treatments, recognized for our commitment to sustainability, artistic integrity, and the elevation of modern living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
