const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Headline – clean & confident */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Why Choose <span className="gradient-text">GMB</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Premium window elegance — crafted for beauty, comfort, and lasting value.
          </p>
        </div>

        {/* Icons – centered horizontal row, stacks on mobile */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 mb-10">
          <div className="flex flex-col items-center text-center group max-w-[160px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shadow-sm">
              {/* Shield – Quality */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196.001-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-800">Superior Quality</h3>
            <p className="text-sm text-slate-600 mt-1">Finest global fabrics</p>
          </div>

          <div className="flex flex-col items-center text-center group max-w-[160px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shadow-sm">
              {/* Sparkles – Craftsmanship */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-800">Master Crafted</h3>
            <p className="text-sm text-slate-600 mt-1">20+ years precision</p>
          </div>

          <div className="flex flex-col items-center text-center group max-w-[160px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shadow-sm">
              {/* Clock – Speed */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-800">Swift Install</h3>
            <p className="text-sm text-slate-600 mt-1">Clean & professional</p>
          </div>

          <div className="flex flex-col items-center text-center group max-w-[160px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shadow-sm">
              {/* Chat – Consultation */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-800">Free Advice</h3>
            <p className="text-sm text-slate-600 mt-1">Personalized & no-obligation</p>
          </div>
        </div>

        {/* Inspirational visuals – carousel-friendly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 rounded-xl overflow-hidden shadow-md">
          {/* Replace src with your own if needed – these are high-quality luxury examples */}
          <img
            src="https://cdn.mos.cms.futurecdn.net/JQrgjbXv7j8ZdpFiKUeFqm.jpg"
            alt="Elegant teal curtains in luxurious living room"
            className="w-full h-48 object-cover"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0056/1011/1064/files/Shelby_1_1024x1024.jpg?v=1706688467"
            alt="Modern neutral curtains in cozy living space"
            className="w-full h-48 object-cover"
          />
          <img
            src="https://easeeasecurtains.com/cdn/shop/files/homepage_banner_69212116-904f-479e-a606-9b039d7f87f5.webp?v=1715069504&width=3840"
            alt="Sheer white drapes in bright elegant room"
            className="w-full h-48 object-cover"
          />
          <img
            src="https://www.thespruce.com/thmb/VugN0BgoJytiNoZ8UfwPgwLTd-w=/2400x0/filters:no_upscale():max_bytes(150000):strip_icc()/helfordln-1-0722d13eb17e4c8b9ca79e86b1638c69.jpg"
            alt="Beige linen curtains in airy coastal-style room"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Subtle CTA line */}
        <div className="text-center mt-8 text-slate-600 text-sm md:text-base">
          Ready to elevate your windows? Book your free consultation today.
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;