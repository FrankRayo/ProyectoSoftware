"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
import "./layout.css";
import translations from './i18n';
import { LanguageProvider, useLanguage } from './LanguageContext';

const cloneWarsFont = localFont({
  src: "../public/fonts/CloneWars.ttf",
  variable: "--font-clone-wars",
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <html lang={language}>
      <body
        className={`${cloneWarsFont.variable} antialiased`}
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
                <button className="dropdown-button">{t.theGame}</button>
                <div className="dropdown-content">
                  <Link href="/pages/about">{t.about}</Link>
                  <Link href="/pages/faq">{t.faq}</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-button">{t.socialMedia}</button>
                <div className="dropdown-content">
                  <Link href="https://www.youtube.com/c/CWAEmu">YOUTUBE</Link>
                  <Link href="https://discord.gg/a3Ugb9dzzv">DISCORD</Link>
                  <Link href="https://www.instagram.com/cwaemu/">INSTAGRAM</Link>
                  <Link href="https://x.com/CWAEMU">X</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-button">{t.updates}</button>
                <div className="dropdown-content">
                  <Link href="/news">{t.news}</Link>
                  <Link href="/pages/release_notes">{t.releaseNotes}</Link>
                  <Link href="/pages/roadmap">{t.roadmap}</Link>
                </div>
              </div>
              <div className="dropdown">
                <Link href="/contact">
                  <button className="dropdown-button">{t.contactUs}</button>
                </Link>
              </div>
            </div>
            <Link href="/">
              <button className="text-4xl font-bold my-8 bg-transparent border-none cursor-pointer clone-wars-font">
                CLONE WARS ADVENTURES EMULATOR
              </button>
            </Link>
          </header>
          {children}
          <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Built with <a href="https://nextjs.org" className="underline">Next.js</a> and <a href="https://tailwindcss.com" className="underline">Tailwind CSS</a>.
            </p>
            <div className="mt-4 flex justify-center space-x-4 mb-8">
              <span>|</span>
              <Link href="/privacy-policy" className="text-blue-500 hover:underline">{t.privacyPolicy}</Link>
              <span>|</span>
              <Link href="/terms-of-service" className="text-blue-500 hover:underline">{t.termsOfService}</Link>
              <span>|</span>
              <Link href="/press" className="text-blue-500 hover:underline">{t.press}</Link>
              <span>|</span>
              <Link href="/join-the-team" className="text-blue-500 hover:underline">{t.joinTheTeam}</Link>
              <span>|</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}