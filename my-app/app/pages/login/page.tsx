"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import Link from "next/link"; // Import Link for navigation
import "./page.css";
import translations from "../../i18n"; // Import translations
import { useLanguage } from "../../LanguageContext"; // Import Language Context

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to show error messages
  const router = useRouter(); // Hook for redirection
  const { language } = useLanguage(); // Get the current language
  const t = translations[language]; // Get translations for the current language

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/password/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message || t.login?.loginFailed || "Invalid username or password");
        return;
      }

      // Store the token or flag in localStorage
      if (result.token) {
        localStorage.setItem("authToken", result.token); // Store the token returned by the API
      } else {
        localStorage.setItem("authToken", "user_authenticated"); // Placeholder if no token is returned
      }

      // Redirect on successful login
      router.push("/pages/download");
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(t.login?.errorMessage || "Something went wrong. Please try again later.");
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
        <h1 className="text-4xl font-bold my-8">{t.login?.enter || "Login"}</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder={t.login?.username || "Email"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="password"
            placeholder={t.login?.password || "Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleLogin}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {t.login?.enter || "Login"}
          </button>
          {errorMessage && (
            <p className="text-red-500 mt-2">{errorMessage}</p>
          )}
        </div>
        <Link href="/password/signup">
          <div className="mt-4 text-center text-blue-500 underline cursor-pointer">
            {t.login?.backToSignup || "Don't have an account? Sign Up"}
          </div>
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
