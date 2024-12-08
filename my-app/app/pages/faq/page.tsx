"use client"; // Add this directive at the top

import React, { useState } from 'react';
import './faq.css'; // Correct import path for page-specific CSS
import translations from '../../i18n';
import { useLanguage } from '../../LanguageContext';
import { useEffect } from "react";

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language].faqPage;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    const updateContentBodyHeight = () => {
      const mainContainer = document.querySelector('.main-container');
      const contentBody = document.querySelector('.content-body');
      if (mainContainer && contentBody) {
        const mainContainerHeight = mainContainer.clientHeight;
        contentBody.style.height = `${mainContainerHeight}px`;
      }
    };

    updateContentBodyHeight();
    window.addEventListener('resize', updateContentBodyHeight);

    return () => {
      window.removeEventListener('resize', updateContentBodyHeight);
    };
  }, []);
  return (
  <>
    <div className="content-body">
            <img
              src="/assets/layout/content-body.png"
              className="content-body-img"
            />
    </div>
    <div className="main-container">
      <div className="faq-title">{t.title}
      </div>
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
  </>
  );
};

export default FAQ;