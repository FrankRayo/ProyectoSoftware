"use client"; // Añadir esta directiva en la parte superior

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './page.css'; // Importar CSS específico de la página

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña

  const files = [
    '/assets/homepage/Rotator/Slider 1.jpg',
    '/assets/homepage/Rotator/Slider 2.png',
    '/assets/homepage/Rotator/Slider 3.png',
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

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? files.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === files.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Cambiar diapositiva cada 7 segundos
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="container mx-auto px-4 text-center" style={{ paddingTop: '5rem' }}>
      <header className="py-4 relative">
        <div className="flex justify-between items-start">
          <div className="text-left">
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
          </div>
          <div className="login-form bg-gray-100 p-4 rounded shadow-md">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded w-full"
            />
            <Link href="/pages/download">
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Enter</button>
            </Link>
          </div>
        </div>
      </header>
      <div className="inner-slider" style={{ backgroundImage: 'url(/assets/homepage//Rotator/RotatorFrame2.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', height: '720px' }}>
        <div className="slider-content" style={{ padding: '0px' }}>
          <div className="rotator" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {files.map((file, index) => (
              <div className="slide" key={index}>
                <img src={file} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="prev" onClick={prevSlide}></a>
          <a className="next" onClick={nextSlide}></a>
        </div>
      </div>

      <div className="second-row mt-8">
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
                    VIEW
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