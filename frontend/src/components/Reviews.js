import React, { useState } from 'react';

const Reviews = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'athletes', label: 'Athletes' },
    { id: 'professionals', label: 'Professionals' },
    { id: 'wellness', label: 'Wellness' }
  ];

  const reviews = [
    {
      id: 1,
      category: 'athletes',
      name: 'John Doe',
      role: 'Professional Athlete',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      review: 'AG1 has been a game-changer for my daily routine. I feel more energized and focused throughout my training sessions.',
      verified: true,
      date: '2024-12-15'
    },
    {
      id: 2,
      category: 'professionals',
      name: 'Jane Smith',
      role: 'Fitness Instructor',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      review: 'I recommend AG1 to all my clients. The comprehensive nutrition profile is exactly what active people need.',
      verified: true,
      date: '2024-12-10'
    },
    {
      id: 3,
      category: 'wellness',
      name: 'Mike Johnson',
      role: 'CrossFit Trainer',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      review: 'Finally found a supplement that covers all bases. AG1 is now an essential part of my morning routine.',
      verified: true,
      date: '2024-12-05'
    }
  ];

  const filteredReviews = activeCategory === 'all'
    ? reviews
    : reviews.filter(review => review.category === activeCategory);

  return (
    <section id="reviews" className="py-20 bg-[#0f3528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their health with AG1.
          </p>
        </div>

        {/* Category Filters */}
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#0a2a1e] p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 text-green-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-6">"{review.review}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>

              {/* Verification Badge */}
              {review.verified && (
                <div className="mt-4 flex items-center text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified Purchase • {review.date}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: '50,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '96%', label: 'Would Recommend' },
            { value: '1M+', label: 'Servings Sold' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
