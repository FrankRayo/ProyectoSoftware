"use client";

import React from "react";
import "./about.css"; // Import specific CSS for the page
import translations from '../../i18n';
import { useLanguage } from '../../LanguageContext';
import { useEffect } from "react";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;
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
        <h1 className="text-4xl font-bold my-8">{t.title}</h1>
        <div className="about-text-box mb-8">
          <p className="about-text">
            {t.about1}
          </p>
          <p className="about-text">
            {t.about2}
          </p>
          <p className="about-text">
            {t.about3}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;