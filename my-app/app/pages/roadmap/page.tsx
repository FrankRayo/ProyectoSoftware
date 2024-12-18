"use client";

import React, { useEffect } from "react";
import "./page.css";

const Page = () => {
  useEffect(() => {
    const updateContentBodyHeight = () => {
      // Cast elements to HTMLElement to access the 'style' property
      const mainContainer = document.querySelector('.main-container') as HTMLElement;
      const contentBody = document.querySelector('.content-body') as HTMLElement;

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
        <img
          src="/assets/roadmap/Roadmap2023_Transparent_BG.png"
          alt="Roadmap 2023"
          className="mx-auto"
        />
      </div>
    </>
  );
};

export default Page;
