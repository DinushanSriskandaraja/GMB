import Image from 'next/image';

const timeline = [
  {
    year: "2005",
    title: "The Beginning",
    description: "Started as a small local workshop specialized in hand-stitched silk curtains. Our focus was on quality and traditional craftsmanship.",
    image: "/images/curtain1.png"
  },
  {
    year: "2010",
    title: "Expanding Horizons",
    description: "Opened our first flagship showroom and introduced automated blind systems, bringing tech to home decor.",
    image: "/images/curtain2.png"
  },
  {
    year: "2015",
    title: "Design Leadership",
    description: "Partnered with top international fabric houses to bring exclusive collections and rare textures to our clients.",
    image: "/images/curtain3.png"
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Launched our virtual consultation platform and smart-home integration services for a modern touch.",
    image: "/images/curtain1.png"
  },
  {
    year: "2026",
    title: "The Future",
    description: "Continuing our journey with a focus on sustainable materials and cutting-edge design for the next generation.",
    image: "/images/curtain2.png"
  }
];

const AboutStory = () => {
  return (
    <section className="py-24 bg-slate-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Incredible Journey</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            From a humble workshop to a luxury brand, our story is one of passion, dedication, and the pursuit of perfection.
          </p>
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/20 to-transparent hidden lg:block rounded-full" />

          <div className="space-y-24 lg:space-y-32">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl premium-card group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-6 bg-transparent/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl">
                      <span className="text-2xl font-black text-primary">{item.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className={`relative ${index % 2 === 0 ? 'text-left' : 'lg:text-right'}`}>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Decorative dot on the line (Desktop only) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-primary shadow-2xl hidden lg:block z-20 transition-transform hover:scale-125
                      ${index % 2 === 0 ? '-left-[116px]' : '-right-[116px]'}`} />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
