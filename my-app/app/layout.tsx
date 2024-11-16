"use client"; // Añadir esta directiva en la parte superior

import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
import { useState } from 'react';
import "./layout.css"; // Import layout-specific CSS

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState('en'); // Estado para gestionar el idioma actual

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en')); // Alternar entre inglés y español
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto px-4 text-center">
          <header className="py-4 relative">
            <button
              onClick={toggleLanguage}
              className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              {language === 'en' ? 'Español' : 'English'}
            </button>
            <div className="dropdown-container">
              <div className="dropdown">
                <button className="dropdown-button">THE GAME</button>
                <div className="dropdown-content">
                  <Link href="/pages/about">ABOUT</Link>
                  <Link href="/pages/faq">FAQ</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-button">SOCIAL MEDIA</button>
                <div className="dropdown-content">
                  <Link href="https://www.youtube.com/c/CWAEmu">YOUTUBE</Link>
                  <Link href="https://discord.gg/a3Ugb9dzzv">DISCORD</Link>
                  <Link href="https://www.instagram.com/cwaemu/">INSTAGRAM</Link>
                  <Link href="https://x.com/CWAEMU">X</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-button">UPDATES</button>
                <div className="dropdown-content">
                  <Link href="/news">NEWS</Link>
                  <Link href="/release_notes">RELEASE NOTES</Link>
                  <Link href="/pages/roadmap">ROADMAP</Link>
                </div>
              </div>
              <div className="dropdown">
                <Link href="/contact">
                  <button className="dropdown-button">CONTACT US</button>
                </Link>
              </div>
            </div>
            <Link href="/">
              <button className="text-4xl font-bold my-8 bg-transparent border-none cursor-pointer">
                CLONE WARS ADVENTURES EMULATOR
              </button>
            </Link>
          </header>
          {children}
          <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Built with <a href="https://nextjs.org" className="underline">Next.js</a> and <a href="https://tailwindcss.com" className="underline">Tailwind CSS</a>.
            </p>
            <div className="mt-4 flex justify-center space-x-4 mb-8"> {/* Added mb-8 for margin-bottom */}
              <span>|</span>
              <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</Link>
              <span>|</span>
              <Link href="/press" className="text-blue-500 hover:underline">Press</Link>
              <span>|</span>
              <Link href="/join-the-team" className="text-blue-500 hover:underline">Join The Team</Link>
              <span>|</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}