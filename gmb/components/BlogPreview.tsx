import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    title: "How to Choose the Right Fabric for Your Living Room",
    excerpt: "Discover the secrets to selecting curtains that balance light and privacy...",
    date: "March 5, 2026",
    category: "Design Tips",
    image: "/images/curtain1.png"
  },
  {
    title: "Trending Curtain Styles of 2026",
    excerpt: "From minimalist sheer to tech-integrated blackout, see what's trending...",
    date: "February 28, 2026",
    category: "Trends",
    image: "/images/curtain2.png"
  },
  {
    title: "The Impact of Curtains on Home Energy Efficiency",
    excerpt: "Learn how thermal curtains can save up to 25% on your energy bills...",
    date: "February 20, 2026",
    category: "Advice",
    image: "/images/curtain3.png"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Latest from our <span className="gradient-text">Blog</span></h2>
            <p className="text-slate-500 text-lg">
              Explore our latest articles on interior design, fabric care, and window treatment trends.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary transition-all shadow-lg shadow-slate-900/10 hover:shadow-primary/20 group whitespace-nowrap"
          >
            View All Articles
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4 premium-card">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-xl text-xs font-bold text-primary">
                  {post.category}
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium mb-3">{post.date}</p>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-bold text-slate-800 group-hover:text-primary group-hover:gap-4 transition-all">
                Read More
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
