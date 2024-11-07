// about/page.tsx
"use client";

import React from "react";
import "./page.css"; // Importa el CSS específico de la página About

const About = () => {
  return (
    <div className="about-container">
      <h1 className="text-4xl font-bold my-8">About CWAEmu</h1>
      <div className="about-text-box mb-8">
        <p className="about-text">
          Clone Wars Adventures Emulator is a action-packed online game where you can experience the thrills and
          excitement of Star Wars: The Clone Wars first hand. Battle it out with your friends alongside your favorite
          Star Wars characters like Anakin Skywalker, Obi-Wan Kenobi, Yoda, and Ahsoka Tano.

          It's easy to get started; just launch your web browser, Download the game, sign up for an account
          and you're in within minutes! Play as a Jedi, Padawan or a Clone Trooper.

          Speed through space in Starfighter, take out waves of Battle Droids in Republic Defender or test your brain
          with Droid Programming puzzles.

          Pick up your own protocol Droid or show off your style with legendary Star Wars outfits and items. Check
          up on your friends through their profile page or invite them to your house party. Hang out and chat or just
          brag about your latest trophies. There's no place online like Clone Wars Adventures.
        </p>
      </div>
      <div className="about-image">
      </div>
      <div className="about-text-box">
        <p className="about-text">
          Clone Wars Adventures, the Force is in you.
        </p>
      </div>
    </div>
  );
};

export default About;