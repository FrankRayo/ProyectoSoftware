"use client"; // Add this directive at the top

import React, { useState } from 'react';
import './page.css'; // Correct import path for page-specific CSS
import translations from '../../i18n';
import { useLanguage } from '../../LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language].faqPage;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">{t.title}</h1>
      <div className="faq-list">
        {t.questions.map((faq, index) => (
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