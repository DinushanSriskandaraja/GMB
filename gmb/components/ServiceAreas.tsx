const areas = [
  "New York City", "Brooklyn", "Queens", "The Bronx", "Staten Island",
  "Jersey City", "Hoboken", "Newark", "Yonkers", "New Rochelle",
  "White Plains", "Greenwich", "Stamford", "Fort Lee", "Princeton"
];

const ServiceAreas = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Serving the <span className="gradient-text">Tri-State Area</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We provide professional consultation, measurement, and installation services across multiple regions. Check if we cover your area!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 rounded-xl bg-primary" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              Check out all service locations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
          <div className="h-[250px] lg:h-[500px] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 premium-card">
            <img 
              src="/images/curtain3.png" 
              alt="Service Areas Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
