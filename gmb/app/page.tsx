import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

import BlogPreview from '@/components/BlogPreview';
import QuoteCTA from '@/components/QuoteCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCategories />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />

      <BlogPreview />
      <QuoteCTA />
      <Footer />
    </main>
  );
}

