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

            {/* Trust Indicators Section */}
            <div className="w-full max-w-2xl mx-auto px-4 mt-8 sm:mt-12 border-t border-gray-800 pt-8">
              <h3 className="text-center text-lg sm:text-xl text-gray-200 mb-8">
                Trusted By Athletes & Health Professionals
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {/* GMP Certification */}
                <div className="flex flex-col items-center space-y-3 group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center 
                              transition-all duration-500 ease-in-out
                              group-hover:scale-110 group-hover:bg-green-500 group-hover:shadow-lg group-hover:shadow-green-500/30
                              relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-xl font-bold text-green-500 transition-all duration-500 group-hover:text-white relative z-10">GMP</span>
                  </div>
                  <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-all duration-500">GMP Certified</span>
                </div>

                {/* NSF Certification */}
                <div className="flex flex-col items-center space-y-3 group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center 
                              transition-all duration-500 ease-in-out
                              group-hover:scale-110 group-hover:bg-green-500 group-hover:shadow-lg group-hover:shadow-green-500/30
                              relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-xl font-bold text-green-500 transition-all duration-500 group-hover:text-white relative z-10">NSF</span>
                  </div>
                  <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-all duration-500">NSF Certified</span>
                </div>

                {/* FDA Registered */}
                <div className="flex flex-col items-center space-y-3 group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center 
                              transition-all duration-500 ease-in-out
                              group-hover:scale-110 group-hover:bg-green-500 group-hover:shadow-lg group-hover:shadow-green-500/30
                              relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-xl font-bold text-green-500 transition-all duration-500 group-hover:text-white relative z-10">FDA</span>
                  </div>
                  <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-all duration-500">FDA Registered</span>
                </div>

                {/* Lab Tested */}
                <div className="flex flex-col items-center space-y-3 group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center 
                              transition-all duration-500 ease-in-out
                              group-hover:scale-110 group-hover:bg-green-500 group-hover:shadow-lg group-hover:shadow-green-500/30
                              relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-10 h-10 text-green-500 transition-all duration-500 group-hover:text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-all duration-500">Lab Tested</span>
                </div>
              </div>
            </div>

            {/* Floating Reviews section continues... */}
          </div>

          {/* Right Column - Product Image & Social Proof */}
          <div className="relative flex flex-col items-center">
            {/* Main Product Image */}
            <div className="relative group px-4 md:px-0 -mt-8 sm:-mt-16 md:-mt-20 lg:-mt-28 xl:-mt-32">
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-3xl transition-all group-hover:bg-green-500/30"></div>
              
              {/* Circular container with border */}
              <div className="relative aspect-square w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[600px] mx-auto rounded-full overflow-hidden 
                            border-4 border-green-500/20 shadow-2xl shadow-green-500/20
                            transform transition-all duration-500 group-hover:scale-105
                            hover:border-green-500/30 hover:shadow-green-500/30">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
                
                {/* Image */}
                <img
                  src="/greee01.jpg"
                  alt="Daily Greens Product"
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: 'scale(1.1)'
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Reviews - Optimized spacing for different screens */}
            <div className="w-full max-w-md mx-auto mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40 space-y-4 sm:space-y-6 md:space-y-8 px-4">
              {/* First Review */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-gray-200 mb-2">"Incredible results! More energy, better focus, and improved recovery."</p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Customer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-white font-medium">Michael R.</p>
                    <p className="text-gray-400 text-sm">Professional Athlete</p>
                  </div>
                </div>
              </div>

              {/* Second Review */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-gray-200 mb-2">"Finally found my daily nutrition solution. Worth every penny!"</p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Customer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-white font-medium">Sarah L.</p>
                    <p className="text-gray-400 text-sm">Verified Buyer • 6 months</p>
                  </div>
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
