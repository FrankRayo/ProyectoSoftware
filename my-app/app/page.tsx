"use client"; // Añadir esta directiva en la parte superior

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './page.css'; // Importar CSS específico de la página

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en'); // Estado para gestionar el idioma actual
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña

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

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en')); // Alternar entre inglés y español
  };

  const text = {
    en: {
      title: 'CWAEmu test website',
      description: 'This is a sample website built with Next.js and Tailwind CSS for CWAEmu.',
      instructions: [
        'Open the file',
        'Save and see your changes instantly.',
      ],
      latestNews: 'LATEST NEWS',
      view: 'VIEW',
      roadmap: 'ROADMAP',
    },
    es: {
      title: 'Sitio de prueba de CWAEmu',
      description: 'Este es un sitio web de muestra construido con Next.js y Tailwind CSS para CWAEmu.',
      instructions: [
        'Abre el archivo',
        'Guarda y ve tus cambios al instante.',
      ],
      latestNews: 'ÚLTIMAS NOTICIAS',
      view: 'VER',
      roadmap: 'HOJA DE RUTA',
    },
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <header className="py-4 relative">
        <button
          onClick={toggleLanguage}
          className="language-toggle bg-blue-500 text-white px-4 py-2 rounded"
        >
          {language === 'en' ? 'Español' : 'English'}
        </button>
        <div className="login-form">
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
        </div>
        <h1 className="text-4xl font-bold my-8">{text[language].title}</h1>
        <p className="mb-8">{text[language].description}</p>
        
        <ol className="list-decimal list-inside mb-8">
          <li>{text[language].instructions[0]} 
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>{text[language].instructions[1]}</li>
        </ol>
      </header>
      <div className="slider-content">
        <div className="rotator" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {files.map((file, index) => (
            <div className="slide" key={index}>
              <img src={file} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <a className="prev" onClick={prevSlide}>❮</a>
        <a className="next" onClick={nextSlide}>❯</a>
      </div>

      <div className="second-row mt-8">
        <div className="newsbox">
          <div className="header">
            <div>{text[language].latestNews}</div>
          </div>
          <div className="content">
            {posts.map((post, index) => (
              <div className="newsarticle" key={index}>
                <div className="title">{post.title}</div>
                <div className="news">{post.content}</div>
                <div className="readpost">
                  <Link href={`/news/article/${post.title}`} className="view-link">
                    {text[language].view}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="purplebox">
          <div className="header">
            <div>{text[language].roadmap}</div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;