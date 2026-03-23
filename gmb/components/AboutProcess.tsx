const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We start with a detailed discussion to understand your vision, style, and functional needs."
  },
  {
    number: "02",
    title: "Measurement",
    description: "Our experts visit your site to take precise measurements, ensuring a perfect fit for every window."
  },
  {
    number: "03",
    title: "Fabric Selection",
    description: "Choose from our curated library of premium fabrics, colors, and textures with our guidance."
  },
  {
    number: "04",
    title: "Custom Design",
    description: "Our designers create detailed specifications tailored to your unique architectural requirements."
  },
  {
    number: "05",
    title: "Craftsmanship",
    description: "Your pieces are meticulously hand-crafted by our master artisans in our local workshop."
  },
  {
    number: "06",
    title: "Professional Installation",
    description: "Our certified team installs your window treatments with precision and care for a flawless finish."
  }
];

const AboutProcess = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">Our <span className="gradient-text"><span className="italic">Seamless</span> Process</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From the initial idea to the final installation, we ensure a smooth and enjoyable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="premium-card p-10 glassmorphism relative group hover:bg-transparent transition-all duration-500 rounded-xl">
              <span className="text-4xl font-black text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
