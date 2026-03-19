const stats = [
  { label: "Completed Projects", value: "5,000+" },
  { label: "Exclusive Fabrics", value: "200+" },
  { label: "Years in Industry", value: "20+" },
  { label: "Team Members", value: "50+" }
];

const AboutStats = () => {
  return (
    <section className="py-12 bg-transparent relative overflow-hidden border-y border-primary/10 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-xl blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-xl blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-4xl font-black text-slate-800">{stat.value}</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
