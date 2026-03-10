const stats = [
  { label: "Completed Projects", value: "5,000+" },
  { label: "Exclusive Fabrics", value: "200+" },
  { label: "Years in Industry", value: "20+" },
  { label: "Team Members", value: "50+" }
];

const AboutStats = () => {
  return (
    <section className="py-24 bg-emerald-900/40 text-white relative overflow-hidden border-y border-primary/20 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-5xl md:text-6xl font-black text-white">{stat.value}</div>
              <div className="text-primary-foreground/70 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
