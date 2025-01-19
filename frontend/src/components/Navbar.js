import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a2a1e] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="AG1 Logo"
              />
              <span className="text-white font-bold text-xl">AG1</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#ingredients">Ingredients</NavLink>
            <NavLink href="#science">Science</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a 
                href="/login" 
                className="text-white hover:text-green-400 transition"
              >
                Login
              </a>
              <a 
                href="/subscribe" 
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
              >
                Subscribe Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a2a1e] shadow-lg">
          <MobileNavLink href="#benefits">Benefits</MobileNavLink>
          <MobileNavLink href="#ingredients">Ingredients</MobileNavLink>
          <MobileNavLink href="#science">Science</MobileNavLink>
          <MobileNavLink href="#reviews">Reviews</MobileNavLink>
          <MobileNavLink href="#faq">FAQ</MobileNavLink>
          <div className="pt-4 space-y-2">
            <a
              href="/login"
              className="block text-center text-white hover:bg-green-500/20 px-3 py-2 rounded-md text-base font-medium transition"
            >
              Login
            </a>
            <a
              href="/subscribe"
              className="block text-center bg-green-500 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-gray-200 hover:bg-green-500/20 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
  >
    {children}
  </a>
);

export default Navbar;
