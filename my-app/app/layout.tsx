import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto px-4 text-center">
          <header className="py-4">
            <Link href="/">
              <button className="text-4xl font-bold my-8 bg-transparent border-none cursor-pointer">
                CLONE WARS ADVENTURES EMULATOR
              </button>
            </Link>
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
          </header>
          {children}
          <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Built with <a href="https://nextjs.org" className="underline">Next.js</a> and <a href="https://tailwindcss.com" className="underline">Tailwind CSS</a>.
            </p>
            <div className="mt-4 flex justify-center space-x-4 mb-8"> {/* Added mb-8 for margin-bottom */}
              <span>|</span>
              <Link href="/pages/footer/privacy_policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
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