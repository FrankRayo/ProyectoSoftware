"use client";

import React, { useEffect } from "react";
import "./page.css"; // Assuming styles are shared
import translations from "../../../i18n";
import { useLanguage } from "../../../LanguageContext";

const ClosedTestingRegistration = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].closedTestingPage; // Assuming `closedTestingPage` exists in translations

  useEffect(() => {
    const updateContentBodyHeight = () => {
      const mainContainer = document.querySelector(".main-container");
      const contentBody = document.querySelector(".content-body");
      if (mainContainer && contentBody) {
        const mainContainerHeight = mainContainer.clientHeight;
        (contentBody as HTMLElement).style.height = `${mainContainerHeight}px`;
      }
    };

    updateContentBodyHeight();
    window.addEventListener("resize", updateContentBodyHeight);

    return () => {
      window.removeEventListener("resize", updateContentBodyHeight);
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
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#e3b51d",
          }}
        >
          {t.title}
        </h1>
        <p>{t.greeting}</p>
        <p>{t.introduction}</p>
        <p>{t.overview}</p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {t.alphaTesting.title}
        </h2>
        <p>{t.alphaTesting.description}</p>
        <ul>
          {t.alphaTesting.points.map((point: string, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {t.roadmapChanges.title}
        </h2>
        <p>{t.roadmapChanges.description}</p>
        <p>{t.roadmapChanges.details}</p>
        <p>{t.closing}</p>
      </div>
    </>
  );
};

export default ClosedTestingRegistration;
