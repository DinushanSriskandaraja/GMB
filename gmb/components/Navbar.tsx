import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              CurtainMaster
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium">Contact</Link>
              <Link href="/track" className="text-gray-600 hover:text-primary transition-colors font-medium">Track Order</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-600 hover:text-primary transition-colors font-medium">Login</Link>
            <Link href="/auth/register" className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
