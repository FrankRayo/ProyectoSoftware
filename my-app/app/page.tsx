"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './page.css'; // Importar CSS específico de la página
import translations from './i18n';
import { useLanguage } from './LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
      <div className="inner-slider" style={{ backgroundImage: 'url(/assets/homepage//Rotator/RotatorFrame2.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', height: '500px' }}>
        <div className="slider-content" style={{ padding: '0px' }}>
          <div className="rotator">
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
            <div>{t.latestNews}</div>
          </div>
          <div className="content">
            {posts.map((post, index) => (
              <div className="newsarticle" key={index}>
                <div className="title">{post.title}</div>
                <div className="news">{post.content}</div>
                <div className="readpost">
                  <Link href={`/news/article/${post.title}`} className="view-link">
                    {t.view}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="purplebox">
          <div className="header">
            <div>{t.roadmap}</div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;