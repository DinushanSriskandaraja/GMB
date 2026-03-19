const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-slate-900">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Whether you have a question about our products or want to schedule a professional measurement, our team is ready to assist you.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
