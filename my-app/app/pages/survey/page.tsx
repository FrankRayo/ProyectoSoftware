"use client";

import React, { useEffect } from "react";
import "./page.css";

const DownloadPage = () => {
    useEffect(() => {
        const updateContentBodyHeight = () => {
          const mainContainer = document.querySelector(".main-container");
          const contentBody = document.querySelector(".content-body");
          if (mainContainer && contentBody) {
            const mainContainerHeight = mainContainer.clientHeight;
            (contentBody as HTMLElement).style.height = `${mainContainerHeight}px`;
          }
        };
      
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
      
          // Cleanup on unmount
          return () => {
            observer.disconnect();
          };
        }
      
        // Fallback to window resize listener
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
        <h1 className="text-4xl font-bold text-center" style={{ paddingTop: '15px' }}>Player Survey</h1>
        
        {/* Embed Google Form */}
        <div className="google-form-container mx-auto" style={{ width: '100%', maxWidth: '800px', maxHeight: '480px' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeQFVZW3BGwYp0Ln48d_9qm1GQbaLg13k8PPHfQl_j3o9GHig/viewform?embedded=true"
            width="100%"
            height="800"
            style={{ border: "none" }}
          >
            Loading…
          </iframe>
        </div>

        {/* Embed Looker Studio Report */}
        <div className="looker-studio-container mx-auto mt-10" style={{ width: "100%", maxWidth: "800px", maxHeight: '480px' }}>
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/7ca63d10-690b-4cc7-8284-6f4209c5f493/page/RHpYE"
            width="100%"
            height="400"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;
