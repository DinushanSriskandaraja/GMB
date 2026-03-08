import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      
      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/curtain1.png" 
                alt="About Us" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Crafting Excellence for <span className="gradient-text">Over 20 Years</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At CurtainMaster, we believe that curtains are more than just window coverings; they are the soul of a room. Our artisans combine traditional craftsmanship with modern design to create pieces that transform spaces.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-1">500+</h4>
                  <p className="text-gray-500 font-medium">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-1">50+</h4>
                  <p className="text-gray-500 font-medium">Exclusive Fabrics</p>
                </div>
              </div>
              <Link href="/about">
                <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="text-2xl font-bold gradient-text mb-6 block">
                CurtainMaster
              </Link>
              <p className="text-gray-500">
                Premium window treatments for modern homes and offices.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/track" className="hover:text-primary transition-colors">Track Order</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link href="/auth/login" className="hover:text-primary transition-colors">Login</Link></li>
                <li><Link href="/auth/register" className="hover:text-primary transition-colors">Register</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-500">
                <li>123 Curtain Street, Fabric City</li>
                <li>info@curtainmaster.com</li>
                <li>+1 (234) 567-890</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-400">
            <p>&copy; 2026 CurtainMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
