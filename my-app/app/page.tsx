"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './page.css'; // Import specific CSS for the page
import translations from './i18n';
import { useLanguage } from './LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [refresh, setRefresh] = useState(false); // State to trigger refresh

  const files = [
    '/assets/homepage/Rotator/unknown.png',
    '/assets/homepage/Rotator/WIPLIFEDAY.png',
    '/assets/homepage/Rotator/CONTENT_TEAM_1.png',
    '/assets/homepage/Rotator/LauncherBackground-1.png',
    '/assets/homepage/Rotator/Slider 2.png',
    '/assets/homepage/Rotator/PreVizslaFailure (2).gif',
    '/assets/homepage/Rotator/Slider 3.png',
    '/assets/homepage/Rotator/TUYFCWAMAGACTBAT_Final.png',
  ];

  useEffect(() => {
        setRefresh(true);
  }, []);

  const posts = [
    {
      title: 'CLOSED TESTING REGISTRATION NOW OPEN!',
      url: 'closed-testing',
      content: 'before we get started the team would like to wish everyone a very happy new year. With the new year, we have decided to take a new direction for the game so we have introduced a few changes to alpha testing and our roadmap.',
    },
    {
      title: 'Post 2',
      url: 'post-2',
      content: 'Content of the second post.',
    },
    {
      title: 'Post 3',
      url: 'post-3',
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
  }, 7000); // Change slide every 7 seconds
  return () => clearInterval(interval);
}, [currentSlide]);

return (
  <div className="main-container" style={{ paddingTop: '2rem' }}>
    <div className="inner-slider" style={{ backgroundImage: 'url(/assets/homepage/Rotator/RotatorFrame2.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', height: '500px', width: '825px', marginLeft: '50px' }}>
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

      <div className="second-row">
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
                  <Link href={`/pages/newspost/${post.url}`} className="view-link">
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