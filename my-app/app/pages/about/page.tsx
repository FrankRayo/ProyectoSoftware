"use client";

import React from "react";
import "./page.css"; // Import specific CSS for the page
import translations from '../../i18n';
import { useLanguage } from '../../LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;

  return (
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
  );
};

export default About;