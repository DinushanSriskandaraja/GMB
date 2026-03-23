'use client';

import { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-8 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Our <span className="text-primary italic">Journey</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            A compact look at our evolution from a local workshop to industry leaders.
          </p>
        </div>

        <div className="relative">
          {/* Year Navigation */}
          <div className="flex justify-between items-center mb-8 relative max-w-3xl mx-auto overflow-x-auto px-1">
            {/* Progress line background */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2" />

            {/* Active progress line */}
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 transition-all duration-500 ease-in-out"
              style={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
            />

            {timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative z-10 flex flex-col items-center group"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${index <= activeIndex
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white border-slate-200 text-slate-400'
                    } ${index === activeIndex ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <span className="text-[7px] sm:text-xs font-bold">{item.year}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[380px]">
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === activeIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-110'
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-slate-50/30">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ease-in-out ${index === activeIndex ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-8'
                      }`}
                  >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                      Chapter {index + 1}: {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed italic">
                      "{item.description}"
                    </p>

                    <div className="mt-6 flex gap-4">
                      <button
                        disabled={activeIndex === 0}
                        onClick={() => setActiveIndex(prev => prev - 1)}
                        className="p-3 rounded-full border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400"
                      >
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      </button>
                      <button
                        disabled={activeIndex === timeline.length - 1}
                        onClick={() => setActiveIndex(prev => prev + 1)}
                        className="p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:scale-110 transition-all disabled:opacity-30 disabled:scale-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
