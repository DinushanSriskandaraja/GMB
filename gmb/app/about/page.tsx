import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About <span className="gradient-text">CurtainMaster</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2005, we've been transforming houses into homes with our bespoke window treatments and interior solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that every window tells a story. Our mission is to provide high-quality, elegant, and functional curtains that complement your unique style and enhance your living experience.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From contemporary minimalist designs to classic luxury fabrics, our collection is carefully curated to meet the highest standards of quality and aesthetics.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <img src="/images/curtain2.png" alt="Our Workshop" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Quality Materials', desc: 'We source only the finest fabrics from around the world.' },
            { title: 'Expert Craftsmanship', desc: 'Every curtain is hand-finished by our skilled artisans.' },
            { title: 'Custom Solutions', desc: 'Tailored designs to fit any window size or style.' }
          ].map((item, index) => (
            <div key={index} className="premium-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
