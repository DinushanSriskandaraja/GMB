const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/8 rounded-xl blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight text-slate-900">
            Crafting Elegance for <br />
            <span className="gradient-text">Every Window</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Since 2005, GMB has been at the forefront of premium window treatments, combining traditional artistry with modern innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
