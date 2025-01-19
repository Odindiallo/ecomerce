import React, { useState } from 'react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-green-500 transition"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative pt-[56.25%]">
          <div className="relative w-full aspect-video bg-gray-800 rounded-lg shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400">Product Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const pricing = {
    monthly: {
      price: 99,
      savings: '20%',
      period: 'month',
      description: 'Perfect for first-time users'
    },
    quarterly: {
      price: 89,
      savings: '30%',
      period: '3 months',
      description: 'Most popular choice'
    }
  };

  return (
    <div className="bg-[#0a2a1e] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Top Banner */}
        <div className="bg-green-500/20 rounded-full py-2 px-6 mb-12 max-w-xl mx-auto text-center">
          <span className="text-green-400 font-medium">🌟 Rated #1 Supplement by Health Magazine 2025</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Problem-focused headline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="bg-green-500 h-1 w-12"></span>
                <span className="text-green-500 uppercase tracking-wider text-sm font-medium">Revolutionary Formula</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Transform Your Health with
                <span className="text-green-500 block mt-2">One Daily Scoop</span>
              </h1>
              <p className="text-xl text-gray-300">
                Ditch the cabinet full of supplements. Get complete daily nutrition in one delicious drink, backed by science.
              </p>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center space-x-2 text-green-500 hover:text-green-400 transition"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8l6 4-6 4V8z"/>
                </svg>
                <span className="text-lg">Watch How It Works</span>
              </button>
            </div>

            {/* Key Benefits with Enhanced Icons */}
            <div className="space-y-6 bg-[#0f3528] p-6 rounded-xl border border-green-500/20">
              <h3 className="font-semibold text-lg">Why People Love AG1:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 hover:bg-green-500/10 p-3 rounded-lg transition">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8 8-4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Complete Daily Nutrition</h4>
                    <p className="text-gray-400 text-sm">75+ vitamins, minerals & whole food ingredients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:bg-green-500/10 p-3 rounded-lg transition">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Third-Party Tested</h4>
                    <p className="text-gray-400 text-sm">NSF Certified for Sport®, FDA Registered Facility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:bg-green-500/10 p-3 rounded-lg transition">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Clean & Natural</h4>
                    <p className="text-gray-400 text-sm">Vegan, Gluten-Free, No Artificial Anything</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Tabs and CTA */}
            <div className="space-y-6">
              <div className="bg-[#0f3528] p-2 rounded-full inline-flex">
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-6 py-2 rounded-full transition ${
                    activeTab === 'monthly'
                      ? 'bg-green-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab('quarterly')}
                  className={`px-6 py-2 rounded-full transition ${
                    activeTab === 'quarterly'
                      ? 'bg-green-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Quarterly
                </button>
              </div>

              <div className="bg-[#0f3528] p-6 rounded-xl border border-green-500/20">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-4xl font-bold">${pricing[activeTab].price}</span>
                  <span className="text-xl text-gray-400">/{pricing[activeTab].period}</span>
                  <span className="text-green-500 ml-2">Save {pricing[activeTab].savings}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{pricing[activeTab].description}</p>
                <div className="space-y-4">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300 flex items-center justify-center space-x-2 group">
                    <span>Subscribe & Save</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="w-full border border-white hover:border-green-500 hover:text-green-500 px-8 py-4 rounded-full text-lg font-medium transition duration-300">
                    One-time Purchase
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    30-day guarantee
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Free shipping
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-4">Trusted By Athletes & Health Professionals:</p>
              <div className="flex items-center space-x-8">
                <img src="/nsf-certified.svg" alt="NSF Certified" className="h-16 opacity-80 hover:opacity-100 transition" />
                <img src="/gmp-certified.svg" alt="GMP Certified" className="h-16 opacity-80 hover:opacity-100 transition" />
                <img src="/vegan.svg" alt="Vegan" className="h-16 opacity-80 hover:opacity-100 transition" />
              </div>
            </div>
          </div>

          {/* Right Column - Product Image & Social Proof */}
          <div className="relative">
            {/* Main Product Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-3xl transition-all group-hover:bg-green-500/30"></div>
              <img
                src="/product-image.svg"
                alt="AG1 Athletic Greens Product"
                className="relative w-full h-auto max-w-lg mx-auto transform transition duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Reviews */}
            <div className="absolute top-10 right-0 bg-[#0f3528] p-4 rounded-xl shadow-xl max-w-xs animate-float hover:scale-105 transition">
              <div className="flex items-center space-x-1 text-green-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-300">"Incredible results! More energy, better focus, and improved recovery."</p>
              <div className="flex items-center mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Customer"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium">Michael R.</p>
                  <p className="text-xs text-gray-400">Professional Athlete</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 bg-[#0f3528] p-4 rounded-xl shadow-xl max-w-xs animate-float-delayed hover:scale-105 transition">
              <div className="flex items-center space-x-1 text-green-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-300">"Finally found my daily nutrition solution. Worth every penny!"</p>
              <div className="flex items-center mt-3">
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Customer"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium">Sarah L.</p>
                  <p className="text-xs text-gray-400">Verified Buyer • 6 months</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-4 right-4 bg-[#0f3528] p-4 rounded-xl shadow-xl hover:scale-105 transition">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">300k+</p>
                  <p className="text-sm text-gray-400">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">4.9</p>
                  <p className="text-sm text-gray-400">Avg. Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
};

export default Hero;
