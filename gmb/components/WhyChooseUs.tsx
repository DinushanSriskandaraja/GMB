const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Premium Quality",
    description: "We use only the finest fabrics sourced from around the globe."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Expert Craftsmanship",
    description: "Over 20 years of experience in creating custom window treatments."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Installation",
    description: "Professional measurement and installation services in no time."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Free Consultation",
    description: "Get expert advice and personal style guidance at no cost."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-2 border-primary/30 rounded-xl p-8 bg-white/60 backdrop-blur-sm shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-800">Why Choose <span className="gradient-text">GMB?</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just sell curtains; we provide complete window solutions that enhance the beauty and energy efficiency of your home.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl premium-card">
            <img 
              src="/images/curtain2.png" 
              alt="Quality Craftsmanship" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
