const stats = [
  { label: "Completed Projects", value: "5,000+" },
  { label: "Exclusive Fabrics", value: "200+" },
  { label: "Years in Industry", value: "20+" },
  { label: "Team Members", value: "50+" }
];

const Stats = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl md:text-4xl font-black gradient-text tracking-tighter">{stat.value}</div>
              <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs italic">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
