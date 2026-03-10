'use client';

import Navbar from '@/components/Navbar';
import ContactHero from '@/components/ContactHero';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

import QuoteCTA from '@/components/QuoteCTA';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />

      <QuoteCTA />
      <Footer />
    </main>
  );
}
