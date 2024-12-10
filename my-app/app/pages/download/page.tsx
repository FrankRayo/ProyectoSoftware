"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import "./page.css";

const DownloadPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log("Auth Token:", token); // Log the token value
    if (!token) {
      router.push("/pages/login");
    }
  }, [router]);
    
 
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
        <img
          src="/assets/homepage/download.png"
          alt="Download"
          className="mx-auto"
        />
      </div>
    </>
  );
};

export default DownloadPage;
