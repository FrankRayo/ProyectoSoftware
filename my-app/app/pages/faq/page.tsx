"use client"; // Add this directive at the top

import React, { useState } from 'react';
import './page.css'; // Correct import path for page-specific CSS

const faqs = [
  {
    question: 'What is CWAEmu?',
    answer: 'CWAEmu is a sample website built with Next.js and Tailwind CSS for testing purposes.',
  },
  {
    question: 'How do I use this site?',
    answer: 'You can navigate through the site using the menu options and explore the different sections.',
  },
  {
    question: 'Who developed this site?',
    answer: 'This site was developed by a team of developers using modern web technologies.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;