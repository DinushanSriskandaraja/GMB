import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/categories';

const ProductCategories = () => {
  return (
    <section className="py-16 bg-transparent" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">Our <span className="gradient-text"><span className="italic">Product</span> Categories</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Choose from our wide range of premium window treatments tailored to your style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ALL_PRODUCTS.slice(0, 6).map((category, index) => (
            <div key={index} className="premium-card relative h-[380px] overflow-hidden rounded-xl">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{category.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{category.description}</p>
                <Link href={`/products?category=${category.slug}`} className="mt-4">
                  <button className="text-white font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    Browse Category
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* View All Card */}
          <div className="premium-card relative h-[380px] overflow-hidden rounded-xl bg-slate-900 flex flex-col items-center justify-center sm:col-span-2 group hover:shadow-2xl transition-all border border-slate-800">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
            <div className="relative z-10 flex flex-col items-center text-center p-8">
              <h3 className="text-white text-3xl font-bold mb-4">View All Categories</h3>
              <p className="text-slate-400 mb-8 max-w-sm">
                Explore our complete collection of premium window treatments, smart tech, and accessories.
              </p>
              <Link href="/products">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-3 group-hover:gap-5 shadow-lg shadow-primary/20">
                  Explore Catalog
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
