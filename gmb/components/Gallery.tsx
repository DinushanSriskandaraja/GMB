import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Minimalist Sheer',
    description: 'Perfect for living rooms',
    image: '/images/curtain1.png',
  },
  {
    id: 2,
    title: 'Royal Velvet',
    description: 'Deep textures for luxury',
    image: '/images/curtain2.png',
  },
  {
    id: 3,
    title: 'Morning Breeze',
    description: 'Light and airy linen',
    image: '/images/curtain3.png',
  },
  {
    id: 4,
    title: 'Modern Classic',
    description: 'Timeless elegance',
    image: '/images/curtain1.png',
  },
  {
    id: 5,
    title: 'Nightfall Blackout',
    description: 'Ultimate privacy',
    image: '/images/curtain2.png',
  },
  {
    id: 6,
    title: 'Linen Collection',
    description: 'Natural aesthetic',
    image: '/images/curtain3.png',
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Premium <span className="gradient-text">Gallery</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated collection of luxury curtains that define elegance and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="premium-card group relative h-96 overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                <p className="text-white/80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.description}</p>
                <button className="mt-4 text-white font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
