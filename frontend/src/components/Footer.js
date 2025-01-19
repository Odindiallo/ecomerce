import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a2a1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="AG1 Logo"
              />
              <span className="text-white font-bold text-xl">AG1</span>
            </a>
            <p className="text-gray-400 text-sm">
              Transform your health with our science-backed nutrition solution.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#benefits">Benefits</FooterLink>
              <FooterLink href="#ingredients">Ingredients</FooterLink>
              <FooterLink href="#science">Science</FooterLink>
              <FooterLink href="#reviews">Reviews</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/shipping">Shipping</FooterLink>
              <FooterLink href="/returns">Returns</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for health tips and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-[#0f3528] border border-green-500/20 focus:border-green-500 focus:outline-none text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} AG1. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {/* Visa */}
              <svg className="h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#1A1F71"/>
                <path d="M18.1 21H15.7L17.6 11H20L18.1 21ZM27.5 11.3C26.9 11.1 25.9 10.9 24.7 10.9C22 10.9 20.1 12.3 20.1 14.2C20.1 15.7 21.5 16.5 22.5 17C23.5 17.5 23.9 17.8 23.9 18.3C23.9 19 23 19.3 22.2 19.3C21.2 19.3 20.6 19.2 19.7 18.8L19.3 18.6L18.9 20.7C19.6 21 20.8 21.2 22 21.2C24.9 21.2 26.7 19.8 26.7 17.8C26.7 16.6 26 15.7 24.4 14.9C23.4 14.4 22.8 14.1 22.8 13.5C22.8 13 23.3 12.5 24.4 12.5C25.3 12.5 26 12.7 26.5 12.9L26.8 13L27.2 11.3H27.5ZM35.5 11H33.6C32.9 11 32.3 11.2 32 11.9L28.1 21H31C31 21 31.5 19.7 31.6 19.4C31.9 19.4 34.5 19.4 34.9 19.4C35 19.8 35.3 21 35.3 21H38L35.5 11ZM32.4 17.4C32.6 16.9 33.6 14.3 33.6 14.3C33.6 14.3 33.8 13.8 34 13.4L34.2 14.2C34.2 14.2 34.8 16.9 34.9 17.4H32.4ZM13.6 11L10.9 17.9L10.6 16.7C10 14.8 8.3 12.7 6.3 11.6L8.8 21H11.7L16.5 11H13.6Z" fill="white"/>
                <path d="M8.3 11H4L3.9 11.2C7.2 12 9.4 14.2 10.2 16.7L9.2 12C9 11.2 8.7 11.1 8.3 11Z" fill="#F7B600"/>
              </svg>

              {/* Mastercard */}
              <svg className="h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="white"/>
                <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24 23.3C26.6 21.2 28.2 18.2 28.2 15C28.2 11.8 26.6 8.8 24 6.7C21.4 8.8 19.8 11.8 19.8 15C19.8 18.2 21.4 21.2 24 23.3Z" fill="#FF5F00"/>
              </svg>

              {/* American Express */}
              <svg className="h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#2E77BC"/>
                <path d="M6 19.8V12.1H9.2L10.4 14.5L11.6 12.1H14.8V19.7H12.6V14.4L11.2 17H9.6L8.2 14.4V19.8H6ZM15.8 19.8L19 12.1H21.8L25 19.8H22.6L22 18.4H18.8L18.2 19.8H15.8ZM19.6 16.6H21.2L20.4 14.4L19.6 16.6ZM26 19.8V12.1H29.2L30.4 14.5L31.6 12.1H34.8V19.7H32.6V14.4L31.2 17H29.6L28.2 14.4V19.8H26ZM35.8 19.8L39 12.1H41.8L45 19.8H42.6L42 18.4H38.8L38.2 19.8H35.8ZM39.6 16.6H41.2L40.4 14.4L39.6 16.6Z" fill="white"/>
              </svg>

              {/* PayPal */}
              <svg className="h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#F7F7F7"/>
                <path d="M35.5 13.5C35.5 15.7 33.9 17.5 31.8 17.5H29.4C29.2 17.5 29 17.7 29 17.9L28.4 21.5C28.4 21.6 28.3 21.8 28.1 21.8H25.5C25.3 21.8 25.2 21.7 25.2 21.5L27.1 9.5C27.1 9.4 27.2 9.2 27.4 9.2H32.6C34.3 9.2 35.5 11.1 35.5 13.5Z" fill="#27346A"/>
                <path d="M20.5 13.5C20.5 15.7 18.9 17.5 16.8 17.5H14.4C14.2 17.5 14 17.7 14 17.9L13.4 21.5C13.4 21.6 13.3 21.8 13.1 21.8H10.5C10.3 21.8 10.2 21.7 10.2 21.5L12.1 9.5C12.1 9.4 12.2 9.2 12.4 9.2H17.6C19.3 9.2 20.5 11.1 20.5 13.5Z" fill="#2790C3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
    >
      {children}
    </a>
  </li>
);

export default Footer;
