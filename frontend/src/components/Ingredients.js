import React, { useState } from 'react';

const Ingredients = () => {
  const [activeCategory, setActiveCategory] = useState('vitamins');

  const categories = [
    { id: 'vitamins', label: 'Vitamins & Minerals' },
    { id: 'superfoods', label: 'Superfoods' },
    { id: 'adaptogens', label: 'Adaptogens' },
    { id: 'probiotics', label: 'Probiotics' }
  ];

  const ingredients = {
    vitamins: [
      {
        name: 'Vitamin D3',
        benefit: 'Immune support & bone health',
        amount: '4000 IU',
        source: 'Lichen-derived',
        icon: '☀️'
      },
      {
        name: 'Vitamin K2',
        benefit: 'Cardiovascular & bone health',
        amount: '100 mcg',
        source: 'MK-7 form',
        icon: '🫀'
      },
      {
        name: 'B-Complex',
        benefit: 'Energy & cognitive function',
        amount: 'Full spectrum',
        source: 'Methylated forms',
        icon: '⚡'
      },
      {
        name: 'Magnesium',
        benefit: 'Muscle & nerve function',
        amount: '400 mg',
        source: 'Chelated form',
        icon: '💪'
      },
      {
        name: 'Zinc',
        benefit: 'Immune & skin health',
        amount: '15 mg',
        source: 'Bisglycinate chelate',
        icon: '🛡️'
      }
    ],
    superfoods: [
      {
        name: 'Spirulina',
        benefit: 'Antioxidant & nutrient dense',
        amount: '2000 mg',
        source: 'Blue-green algae',
        icon: '🌿'
      },
      {
        name: 'Chlorella',
        benefit: 'Detoxification support',
        amount: '1000 mg',
        source: 'Cracked cell wall',
        icon: '🌱'
      },
      {
        name: 'Moringa',
        benefit: 'Anti-inflammatory',
        amount: '500 mg',
        source: 'Leaf powder',
        icon: '🍃'
      },
      {
        name: 'Wheatgrass',
        benefit: 'Alkalizing & nutrient-rich',
        amount: '1000 mg',
        source: 'Organic juice powder',
        icon: '🌾'
      },
      {
        name: 'Matcha',
        benefit: 'Energy & antioxidants',
        amount: '500 mg',
        source: 'Ceremonial grade',
        icon: '🍵'
      }
    ],
    adaptogens: [
      {
        name: 'Ashwagandha',
        benefit: 'Stress & anxiety support',
        amount: '600 mg',
        source: 'KSM-66® extract',
        icon: '🌟'
      },
      {
        name: 'Rhodiola',
        benefit: 'Mental performance',
        amount: '200 mg',
        source: 'Root extract',
        icon: '🧠'
      },
      {
        name: 'Cordyceps',
        benefit: 'Energy & endurance',
        amount: '500 mg',
        source: 'Mushroom extract',
        icon: '🍄'
      },
      {
        name: 'Holy Basil',
        benefit: 'Stress response',
        amount: '300 mg',
        source: 'Leaf extract',
        icon: '🌺'
      },
      {
        name: 'Reishi',
        benefit: 'Immune modulation',
        amount: '400 mg',
        source: 'Mushroom extract',
        icon: '🍄'
      }
    ],
    probiotics: [
      {
        name: 'L. acidophilus',
        benefit: 'Digestive health',
        amount: '2 billion CFU',
        source: 'Strain LA-14',
        icon: '🦠'
      },
      {
        name: 'B. lactis',
        benefit: 'Gut barrier function',
        amount: '2 billion CFU',
        source: 'Strain Bl-04',
        icon: '🦠'
      },
      {
        name: 'L. plantarum',
        benefit: 'Nutrient absorption',
        amount: '2 billion CFU',
        source: 'Strain LP-115',
        icon: '🦠'
      },
      {
        name: 'B. longum',
        benefit: 'Immune support',
        amount: '1 billion CFU',
        source: 'Strain Bl-05',
        icon: '🦠'
      },
      {
        name: 'L. rhamnosus',
        benefit: 'Digestive balance',
        amount: '1 billion CFU',
        source: 'Strain LR-32',
        icon: '🦠'
      }
    ]
  };

  return (
    <section id="ingredients" className="py-20 bg-[#0f3528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Ingredients
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every ingredient in AG1 is carefully selected for quality, potency, and bioavailability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#0a2a1e] rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients[activeCategory].map((ingredient, index) => (
            <div
              key={index}
              className="bg-[#0a2a1e] p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{ingredient.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {ingredient.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-500">Benefit:</span> {ingredient.benefit}
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-500">Amount:</span> {ingredient.amount}
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-500">Source:</span> {ingredient.source}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#0a2a1e] rounded-xl border border-green-500/20">
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-white mb-2">Third-Party Tested</h3>
            <p className="text-gray-400">Every batch is tested for purity and potency by independent labs</p>
          </div>
          <div className="text-center p-6 bg-[#0a2a1e] rounded-xl border border-green-500/20">
            <div className="text-3xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-white mb-2">Clean Sourcing</h3>
            <p className="text-gray-400">Premium ingredients from trusted suppliers worldwide</p>
          </div>
          <div className="text-center p-6 bg-[#0a2a1e] rounded-xl border border-green-500/20">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Bioavailable Forms</h3>
            <p className="text-gray-400">Optimized for maximum absorption and effectiveness</p>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300 group"
          >
            <span>Download Full Ingredient List</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
