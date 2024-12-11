"use client";

import React, { useEffect, useCallback } from "react";
import "./page.css";
import translations from "../../../i18n";
import { useLanguage } from "../../../LanguageContext";

const ClosedTestingRegistration = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].closedTestingPage;

  // Function to update content-body height
  const updateContentBodyHeight = useCallback(() => {
    const mainContainer = document.querySelector(".main-container");
    const contentBody = document.querySelector(".content-body");
    if (mainContainer && contentBody) {
      const mainContainerHeight = mainContainer.clientHeight;
      (contentBody as HTMLElement).style.height = `${mainContainerHeight}px`;
    }
  }, []);

  useEffect(() => {
    // Update height initially
    updateContentBodyHeight();

    // Observe changes to the main container
    const mainContainer = document.querySelector(".main-container");
    if (mainContainer) {
      const observer = new MutationObserver(() => {
        updateContentBodyHeight();
      });

      observer.observe(mainContainer, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    }

    // Fallback to window resize listener
    window.addEventListener("resize", updateContentBodyHeight);

    return () => {
      window.removeEventListener("resize", updateContentBodyHeight);
    };
  }, [updateContentBodyHeight]);

  // Recalculate height when language changes
  useEffect(() => {
    updateContentBodyHeight();
  }, [language, updateContentBodyHeight]);

  return (
    <>
      <div className="content-body">
        <img src="/assets/layout/content-body.png" className="content-body-img" />
      </div>
      <div className="main-container">
        <h1 className="page-title">{t.title}</h1>
        <p className="greeting">{t.greeting}</p>
        <p className="introduction">{t.introduction}</p>
        <p className="overview">{t.overview}</p>

        <h2 className="section-title">{t.alphaTesting.title}</h2>
        <p className="section-description">{t.alphaTesting.description}</p>
        <ul className="points-list">
          {t.alphaTesting.points.map((point: string, index: number) => (
            <li key={index} className="point-item">
              {point}
            </li>
          ))}
        </ul>

        <h2 className="section-title">{t.roadmapChanges.title}</h2>
        <p className="section-description">{t.roadmapChanges.description}</p>
        <p className="section-details">{t.roadmapChanges.details}</p>
        <p className="closing">{t.closing}</p>
      </div>
    </>
  );
};

export default ClosedTestingRegistration;
