import Image from 'next/image';

const team = [
  {
    name: "Alexander Reed",
    role: "Founder & Creative Director",
    image: "/images/team/person1.jpg"
  },
  {
    name: "Elena Petrov",
    role: "Master Artisan",
    image: "/images/team/person2.jpg"
  },
  {
    name: "David Sterling",
    role: "Head of Installation",
    image: "/images/team/person3.jpg"
  },
  {
    name: "Sophia Martinez",
    role: "Senior Designer",
    image: "/images/team/person4.jpg"
  }
];

const AboutTeam = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">Meet Our <span className="gradient-text"><span className="italic">Expert</span> Team</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            The passionate specialists dedicated to bringing artistry and precision to your windows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative h-[350px] rounded-xl overflow-hidden mb-6 premium-card">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Permanent Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-20 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                {/* Hover Social Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
