'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "The quality of the curtains is exceptional. It transformed my living room into a luxury space. Highly recommend their service!",
    avatar: "/images/curtain1.png"
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    content: "As a designer, I'm very picky with fabrics. GMB consistently delivers premium quality that my clients love.",
    avatar: "/images/curtain2.png"
  },
  {
    name: "Emma Wilson",
    role: "Architect",
    content: "Professional, timely, and beautiful work. Their automated blackout curtains are a game changer for modern homes.",
    avatar: "/images/curtain3.png"
  },
  {
    name: "David Aris",
    role: "Real Estate Developer",
    content: "We outfitted our entire new luxury condo building with their sheer and motorized options. The feedback from buyers has been incredible.",
    avatar: "/images/curtain4.png"
  },
  {
    name: "Jessica Lane",
    role: "Boutique Owner",
    content: "The custom motorized blinds give my store an incredibly high-end feel. Installation was fast and pristine.",
    avatar: "/images/curtain5.png"
  },
  {
    name: "Robert Fox",
    role: "Hotel Manager",
    content: "We upgraded 50 suites with GMB's signature blackout velvet drapes. Guests constantly ask where we got them.",
    avatar: "/images/curtain6.png"
  }
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [startIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      // Shift by 1 testimonial each time
      setStartIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const getDisplayedTestimonials = () => {
    return [0, 1, 2].map(offset => testimonials[(startIndex + offset) % testimonials.length]);
  };

  return (
    <section className="py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {getDisplayedTestimonials().map((testimonial, idx) => (
            <div key={idx} className="premium-card p-6 md:p-8 glassmorphism flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 italic text-sm md:text-base leading-relaxed mb-6 font-light">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
