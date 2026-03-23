const AboutIntro = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl premium-card">
            <img
              src="/images/curtain1.png"
              alt="Company Introduction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              A Legacy of <span className="gradient-text"><span className="italic">Excellence</span> and Trust</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              GMB started as a small family-owned workshop with a single mission: to provide high-quality, bespoke window treatments that reflect the personality of every home.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we are proud to be a industry leader, trusted by thousands of homeowners and interior designers for our commitment to quality, precision, and unparalleled customer service.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">20+</h4>
                <p className="text-slate-500 font-medium">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">15k+</h4>
                <p className="text-slate-500 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
