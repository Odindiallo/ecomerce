import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Science from './components/Science';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a2a1e]">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        {/* Hero Section */}
        <Hero />

        {/* Benefits Section */}
        <section id="benefits" className="bg-[#0f3528] text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Daily Nutrition Made Simple</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">75 High-Quality Ingredients</h3>
                <p className="text-gray-300">Comprehensive nutrition from real, whole food sources</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">NSF Certified</h3>
                <p className="text-gray-300">Tested for quality, purity, and potency</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">One Daily Scoop</h3>
                <p className="text-gray-300">Quick and easy to prepare in under 30 seconds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <Science />

        {/* Ingredients Section */}
        <section id="ingredients" className="bg-[#0a2a1e] text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What's Inside</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#0f3528] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Vitamins & Minerals</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Vitamin A</li>
                  <li>Vitamin C</li>
                  <li>Vitamin D3</li>
                  <li>Vitamin E</li>
                  <li>B-Complex</li>
                </ul>
              </div>
              <div className="bg-[#0f3528] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Superfoods</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Spirulina</li>
                  <li>Chlorella</li>
                  <li>Wheatgrass</li>
                  <li>Matcha Green Tea</li>
                  <li>Coconut Water</li>
                </ul>
              </div>
              <div className="bg-[#0f3528] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Probiotics</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Lactobacillus</li>
                  <li>Bifidobacterium</li>
                  <li>Digestive Enzymes</li>
                  <li>Prebiotic Fiber</li>
                  <li>Mushroom Complex</li>
                </ul>
              </div>
              <div className="bg-[#0f3528] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Adaptogens</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Ashwagandha</li>
                  <li>Rhodiola</li>
                  <li>Astragalus</li>
                  <li>Reishi Mushroom</li>
                  <li>Cordyceps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews />

        {/* FAQ Section */}
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
