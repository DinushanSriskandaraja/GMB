import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import AboutStory from '@/components/AboutStory';
import AboutMission from '@/components/AboutMission';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutProcess from '@/components/AboutProcess';
import AboutTeam from '@/components/AboutTeam';
import AboutStats from '@/components/AboutStats';
import ScrollReveal from '@/components/ScrollReveal';

import QuoteCTA from '@/components/QuoteCTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-[70vh]">
      <Navbar />
      <AboutHero />
      <ScrollReveal><AboutIntro /></ScrollReveal>
      {/* <ScrollReveal><AboutStory /></ScrollReveal> */}
      <ScrollReveal><AboutStats /></ScrollReveal>
      {/* <ScrollReveal><AboutMission /></ScrollReveal> */}
      <ScrollReveal><AboutTeam /></ScrollReveal>
      <ScrollReveal><AboutProcess /></ScrollReveal>
      <ScrollReveal><QuoteCTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
