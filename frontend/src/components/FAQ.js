import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "Product Information",
      questions: [
        {
          q: "What is AG1?",
          a: "AG1 is a comprehensive daily nutrition drink that combines 75 high-quality vitamins, minerals, whole-food sourced superfoods, probiotics, and adaptogens to help you meet your foundational nutrition needs."
        },
        {
          q: "How do I take AG1?",
          a: "Mix one scoop with 8-12 oz of cold water and consume first thing in the morning on an empty stomach. You can also blend it with your favorite smoothie."
        },
        {
          q: "Is AG1 safe for everyone?",
          a: "AG1 is generally safe for most adults. However, if you're pregnant, nursing, have a medical condition, or take medications, please consult your healthcare provider before use."
        }
      ]
    },
    {
      title: "Benefits & Results",
      questions: [
        {
          q: "How long until I see results?",
          a: "Many customers report feeling increased energy and improved digestion within the first week. However, as with any nutrition program, individual results may vary."
        },
        {
          q: "Can AG1 replace my other supplements?",
          a: "AG1 is designed to provide comprehensive daily nutrition and may replace many common supplements. However, individual needs vary, so consult your healthcare provider about your specific requirements."
        }
      ]
    },
    {
      title: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Orders typically ship within 1-2 business days. Domestic delivery takes 3-5 business days, while international shipping may take 7-14 business days."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location."
        }
      ]
    },
    {
      title: "Subscription & Account",
      questions: [
        {
          q: "Can I cancel my subscription anytime?",
          a: "Yes, you can cancel your subscription at any time through your account dashboard or by contacting our customer support team."
        },
        {
          q: "How does the subscription work?",
          a: "With a subscription, you'll receive AG1 automatically every month at a 20% discount. You can adjust your delivery frequency or cancel anytime."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const questionId = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section id="faq" className="py-20 bg-[#0f3528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about AG1, shipping, and subscriptions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-[#0a2a1e] rounded-full p-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === index
                    ? 'bg-green-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className="max-w-3xl mx-auto">
          {categories[activeCategory].questions.map((item, questionIndex) => (
            <div
              key={questionIndex}
              className="mb-4 bg-[#0a2a1e] rounded-lg border border-green-500/20"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleQuestion(activeCategory, questionIndex)}
              >
                <span className="text-white font-medium">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-green-500 transform transition-transform duration-200 ${
                    openQuestion === `${activeCategory}-${questionIndex}` ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === `${activeCategory}-${questionIndex}` && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
          >
            <span>Contact Support</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
