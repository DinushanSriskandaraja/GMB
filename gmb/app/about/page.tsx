import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import AboutStory from '@/components/AboutStory';
import AboutMission from '@/components/AboutMission';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutProcess from '@/components/AboutProcess';
import AboutTeam from '@/components/AboutTeam';
import AboutStats from '@/components/AboutStats';

import QuoteCTA from '@/components/QuoteCTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutMission />
      <WhyChooseUs />
      <AboutProcess />
      <AboutTeam />
      <AboutStats />

      <QuoteCTA />
      <Footer />
    </main>
  );
}
