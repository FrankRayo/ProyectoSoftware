"use client";
import { useState } from "react";
import AuthForm from "../../../components/AuthForm";
import "./page.css"; // Import specific CSS for the page
import Link from "next/link";
import { useEffect } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSignup = async (data: { email: string; password: string }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setEmailError("Email Invalid");
      setIsSuccess(false); // Ensure the success flag is false
      return;
    } else {
      setEmailError("");
    }

    const res = await fetch("/api/auth/password/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setMessage(result.message);

    if (res.status === 201) {
      setIsSuccessful(true);
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    const updateContentBodyHeight = () => {
      const mainContainer = document.querySelector(".main-container");
      const contentBody = document.querySelector(".content-body");
      if (mainContainer && contentBody) {
        const mainContainerHeight = mainContainer.clientHeight;
        contentBody.style.height = `${mainContainerHeight}px`;
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
        <div className="sign-container">
          {isSuccessful ? (
            <>
              <p className="text-green-500 text-center text-lg font-semibold">
                Welcome!
              </p>
            </>
          ) : (
            <>
              <AuthForm mode="Signup" onSubmit={handleSignup} />
            </>
          )}
          {message && (
            <p
              className={`text-center mt-4 ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          {isSuccessful && (
            <Link href="/pages/login">
              <p className="text-center text-blue-500 font-bold underline py-4">
                Back to login
              </p>
            </Link>
          )}
        </div>
        {!isSuccess && emailError && (
          <p
            className="text-red-500 text-center mt-4"
            style={{ marginTop: "10px" }}
          >
            {emailError}
          </p>
        )}
      </div>
    </>
  );
};

export default Signup;
