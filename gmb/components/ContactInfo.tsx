import Image from 'next/image';

const ContactInfo = () => {
  const infoItems = [
    {
      title: "Call Us",
      value: "+1 (234) 567-890",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email Us",
      value: "info@curtainmaster.com",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Our Showroom",
      value: "123 Curtain Street, Fabric City, NY 10001",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            <div className="glassmorphism rounded-xl p-4 md:p-6 border border-white/60 shadow-2xl shadow-slate-200/50 flex-1 relative overflow-hidden group">
              {/* Decorative subtle glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10 mb-4">
                <div className="inline-flex items-center gap-2 mb-1">
                  <div className="w-5 h-px bg-primary" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary">Get In Touch</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  We'd love to hear from you
                </h2>
              </div>

              <div className="space-y-2 relative z-10 flex-1">
                {infoItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/60 border border-transparent hover:border-white/80 hover:shadow-sm group/card cursor-pointer"
                  >
                    <div className="w-8 h-8 shrink-0 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-400 transition-all duration-500 group-hover/card:bg-primary group-hover/card:text-white group-hover/card:shadow-primary/20 group-hover/card:-translate-y-[2px]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">{item.title}</h3>
                      <p className="text-xs md:text-sm font-bold text-slate-800 transition-colors group-hover/card:text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Integration - Sleek Redesign */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-xl p-4 md:p-5 bg-slate-900 shadow-xl shadow-slate-900/20 group hover:-translate-y-[2px] transition-all duration-500 border border-slate-800 flex items-center justify-between gap-3"
            >
              {/* Animated Green Glow Matrix */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.15)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-[7px] font-bold uppercase tracking-[0.2em] mb-1.5 border border-[#25D366]/20">
                  Online Consultation
                </span>
                <h3 className="text-sm md:text-base font-bold text-white mb-0.5 decoration-2 underline-offset-4 group-hover:underline">WhatsApp Chat</h3>
                <p className="text-slate-400 text-[10px] md:text-xs font-medium">Instant answers & design advice</p>
              </div>
              <div className="relative z-10 shrink-0 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Right Column: Showroom Image & Map */}
          <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[10px] rounded-xl overflow-hidden shadow-2xl shadow-slate-300/50 group flex flex-col justify-end">
            {/* Showroom Image Background */}
            <Image 
              src="/images/curtain5.png" 
              alt="Our Luxury Showroom" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Elegant Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            
            {/* Content Wrapper */}
            <div className="relative z-10 p-5 md:p-6 flex flex-col justify-end h-full">
              <div className="max-w-md transform transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center mb-3 border border-white/20 shadow-xl">
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-primary opacity-50 blur-lg rounded-full animate-pulse z-0" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-white drop-shadow-md">
                  Visit Our Showroom
                </h3>
                
                <p className="text-slate-300 text-xs leading-relaxed mb-4 font-medium line-clamp-2">
                  Located in the heart of the design district. Experience our fabrics, motorized systems, and premium craftsmanship in person.
                </p>
                
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full font-bold text-[9px] uppercase tracking-[0.2em] shadow-xl hover:bg-primary hover:text-white transition-all duration-300 w-max"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Google Maps
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
