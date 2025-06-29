// src/pages/FaqPage.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is FoodWalk India?",
    answer:
      "FoodWalk India connects tourists with local food guides for unique and authentic street food tours in Indian cities.",
  },
  {
    question: "How do I become a food guide?",
    answer:
      "Click the 'Register Now' button on the Become a Guide section, fill in your details, and we’ll get back to you.",
  },
  {
    question: "Is this service free for travelers?",
    answer:
      "Yes! Browsing guides and connecting via WhatsApp is completely free for travelers.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Use the contact form at the bottom of the homepage or message us on our social channels.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-200 shadow-md rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-orange-800 hover:bg-orange-100 transition"
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
