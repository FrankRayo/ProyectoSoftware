"use client";

import React, { useEffect } from "react";
import "./about.css"; // Import specific CSS for the page
import translations from '../../i18n';
import { useLanguage } from '../../LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].aboutPage;

  useEffect(() => {
    const updateContentBodyHeight = () => {
      const mainContainer = document.querySelector(".main-container");
      const contentBody = document.querySelector(".content-body");
      if (mainContainer && contentBody) {
        const mainContainerHeight = mainContainer.scrollHeight; // Use scrollHeight for dynamic updates
        (contentBody as HTMLElement).style.height = `${mainContainerHeight}px`;
      }
    };

    // Initial update
    updateContentBodyHeight();

    // Observe changes to the main-container
    const mainContainer = document.querySelector(".main-container");
    let observer: MutationObserver | null = null;

    if (mainContainer) {
      observer = new MutationObserver(() => {
        updateContentBodyHeight();
      });

      observer.observe(mainContainer, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    // Watch for language changes as an additional trigger
    const languageObserver = new MutationObserver(() => {
      updateContentBodyHeight();
    });

    const body = document.querySelector("body");
    if (body) {
      languageObserver.observe(body, { attributes: true, subtree: true });
    }

    // Add resize listener for safety
    window.addEventListener("resize", updateContentBodyHeight);

    return () => {
      if (observer) observer.disconnect();
      languageObserver.disconnect();
      window.removeEventListener("resize", updateContentBodyHeight);
    };
  }, [language]); // Trigger effect on language change

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
          <p className="about-text">{t.about1}</p>
          <p className="about-text">{t.about2}</p>
          <p className="about-text">{t.about3}</p>
        </div>
      </div>
    </>
  );
};

export default About;
