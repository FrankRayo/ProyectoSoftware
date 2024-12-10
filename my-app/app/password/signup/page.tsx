"use client";

import React, { useState, useEffect } from "react";
import "./page.css"; // Import specific CSS for the page
import Link from "next/link";
import { useRouter } from "next/navigation";
import translations from "../../i18n"; // Import translations
import { useLanguage } from "../../LanguageContext"; // Import Language Context

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [emailError, setEmailError] = useState("");
  const router = useRouter();
  const { language } = useLanguage(); // Get the current language
  const t = translations[language as keyof typeof translations]; // Get translations for the current language

  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t.signup?.invalidEmail || "Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    try {
      const res = await fetch("/api/auth/password/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();
      setMessage(result.message);

      if (res.status === 201) {
        setIsSuccessful(true);
        setMessage(t.signup?.signupSuccess || "Signup successful! Redirecting...");
        setTimeout(() => router.push("/pages/login"), 2000); // Redirect to login page
      } else {
        setIsSuccessful(false);
        setMessage(t.signup?.signupFailed || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage(t.signup?.errorMessage || "Something went wrong. Please try again later.");
      setIsSuccessful(false);
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
        <h1 className="text-4xl font-bold my-8">{t.signup?.signUpButton || "Sign Up"}</h1>
        <div className="login-form">
          <input
            type="email"
            placeholder={t.signup?.email || "Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="password"
            placeholder={t.signup?.password || "Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleSignup}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {t.signup?.signUpButton || "Sign Up"}
          </button>
          {emailError && (
            <p className="text-red-500 mt-2">{emailError}</p>
          )}
          {message && (
            <p
              className={`text-center mt-4 ${
                isSuccessful ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <Link href="/pages/login">
          <div className="mt-4 text-center text-blue-500 underline cursor-pointer">
            {t.signup?.backToLoginButton || "Back to Login"}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Signup;
