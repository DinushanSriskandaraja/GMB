import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import RecentWorks from '@/components/RecentWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BlogPreview from '@/components/BlogPreview';
import QuoteCTA from '@/components/QuoteCTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-[70vh]">
      <Navbar />
      <Hero />
      <ScrollReveal><ProductCategories /></ScrollReveal>
      
      <ScrollReveal><RecentWorks /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal><QuoteCTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
