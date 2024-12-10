"use client";

import React, { useState, useEffect } from "react";
import "./page.css"; // Import specific CSS for the page
import Link from "next/link";
import { useRouter } from "next/navigation";
import translations from "../../i18n"; // Import translations
import { useLanguage } from "../../LanguageContext"; // Import Language Context

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to show error messages
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { language } = useLanguage(); // Get the current language
  const t = translations[language as keyof typeof translations].signup; // Get translations for the signup section

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/auth/password/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": language, // Send the current language
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message || t.signupFailed || "Signup failed. Please try again.");
        return;
      }

      setSuccessMessage(t.signupSuccess || "Signup successful! Redirecting...");
      setTimeout(() => router.push("/pages/login"), 2000); // Redirect to login page
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage(t.errorMessage || "Something went wrong. Please try again later.");
    }
  };

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
        <h1 className="text-4xl font-bold my-8">{t.signUpButton || "Sign Up"}</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder={t.email || "Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="password"
            placeholder={t.password || "Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleSignup}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {t.signUpButton || "Sign Up"}
          </button>
          {errorMessage && (
            <p className="text-red-500 mt-2">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
        </div>
        <Link href="/pages/login">
          <div className="mt-4 text-center text-blue-500 underline cursor-pointer">
            {t.backToLoginButton || "Back to Login"}
          </div>
        </Link>
      </div>
    </>
  );
};

export default SignupPage;
