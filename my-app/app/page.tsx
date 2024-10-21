"use client"; // Add this directive at the top

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css'; // Assuming you have a CSS file for styles

const Home = () => {
  const files = [
    'https://cdn.discordapp.com/attachments/942929527686959185/1270818242918875156/Screen_Shot_2024-08-07_at_2.57.03_PM.jpg?ex=67174cf7&is=6715fb77&hm=40b29520faa56574c106b6115e5deac2c2b3182429b9841418b896ae9033ba6a&',
    'https://cdn.discordapp.com/attachments/942929527686959185/1274928773371920384/image.png?ex=671717f2&is=6715c672&hm=a8e62019cc83c0bf95c5494efb2a442f5ebff6cfa5e36b3558f8d44a06e8b738&',
    'https://cdn.discordapp.com/attachments/942929527686959185/1294389133770494044/Screenshot_1844.png?ex=67175b92&is=67160a12&hm=0e96920cddff0f5f7d91feed0d94c362fcaac039652ff509eb2e1e4167aee7a6&',
  ];

  const posts = [
    {
      title: 'Post 1',
      content: 'Content of the first post.',
    },
    {
      title: 'Post 2',
      content: 'Content of the second post.',
    },
    {
      title: 'Post 3',
      content: 'Content of the third post.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? files.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === files.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold my-8">CWAEmu test website</h1>
      <p className="mb-8">This is a sample website built with Next.js and Tailwind CSS for CWAEmu.</p>
      
      <ol className="list-decimal list-inside mb-8">
        <li>Open the file 
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="rotator">
        <div className="sliderBackground">
          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {files.map((file, index) => (
              <div className="slide" key={index}>
                <img src={file} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="prev" onClick={prevSlide}>❮</a>
          <a className="next" onClick={nextSlide}>❯</a>
        </div>
      </div>

      <div className="second-row mt-8"> {/* Added margin-top class */}
        <div className="newsbox">
          <div className="header">
            <div>LATEST NEWS</div>
          </div>
          <div className="content">
            {posts.map((post, index) => (
              <div className="newsarticle" key={index}>
                <div className="title">{post.title}</div>
                <div className="news">{post.content}</div>
                <div className="readpost">
                  <Link href={`/news/article/${post.title}`} className="view-link">
                    VIEW >>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="purplebox">
          <div className="header">
            <div>ROADMAP</div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;