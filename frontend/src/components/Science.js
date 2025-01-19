import React, { useState } from 'react';

const Science = () => {
  const [activeTab, setActiveTab] = useState('research');

  const tabs = [
    { id: 'research', label: 'Research' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const research = [
    {
      title: "Clinical Trial Results",
      description: "In a 12-week clinical trial, AG1 users showed significant improvements in energy levels, cognitive function, and immune response.",
      stats: [
        { value: "94%", label: "Reported improved energy" },
        { value: "89%", label: "Better mental clarity" },
        { value: "78%", label: "Enhanced immunity" }
      ]
    },
    {
      title: "Peer-Reviewed Studies",
      description: "Our formula is backed by over 50 peer-reviewed studies on key ingredients and their synergistic effects.",
      stats: [
        { value: "50+", label: "Research papers" },
        { value: "25", label: "Universities" },
        { value: "10+", label: "Years of research" }
      ]
    }
  ];

  const ingredients = [
    {
      category: "Vitamins & Minerals",
      items: ["Vitamin D3", "Vitamin K2", "Magnesium", "Zinc", "Selenium"],
      description: "Essential micronutrients in their most bioavailable forms for optimal absorption."
    },
    {
      category: "Superfoods",
      items: ["Spirulina", "Chlorella", "Moringa", "Ashwagandha", "Rhodiola"],
      description: "Nutrient-dense whole food sources packed with antioxidants and phytonutrients."
    },
    {
      category: "Probiotics",
      items: ["L. acidophilus", "B. lactis", "L. plantarum", "B. longum", "L. rhamnosus"],
      description: "Clinically studied probiotic strains for gut health and immune support."
    }
  ];

  const certifications = [
    {
      name: "NSF Certified for Sport®",
      description: "Tested for 272 banned substances and verified for label claims and contaminants.",
      icon: "🏆"
    },
    {
      name: "GMP Certified Facility",
      description: "Manufactured in an FDA-registered facility following strict quality control standards.",
      icon: "🏭"
    },
    {
      name: "Third-Party Tested",
      description: "Every batch is tested by independent laboratories for purity and potency.",
      icon: "🔬"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'research':
        return (
          <div className="space-y-12">
            {research.map((item, index) => (
              <div key={index} className="bg-[#0a2a1e] p-8 rounded-xl border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-8">{item.description}</p>
                <div className="grid grid-cols-3 gap-6">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'ingredients':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {ingredients.map((category, index) => (
              <div key={index} className="bg-[#0a2a1e] p-6 rounded-xl border border-green-500/20">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'certifications':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#0a2a1e] p-6 rounded-xl border border-green-500/20 text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{cert.name}</h3>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="science" className="py-20 bg-[#0f3528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Science Behind AG1
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our formula is backed by extensive research and developed by leading nutrition experts.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#0a2a1e] rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-green-500 hover:text-green-400 transition"
          >
            <span className="text-lg font-medium">Download Research Paper</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Science;
