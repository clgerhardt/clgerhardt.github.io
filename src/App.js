import React, { useEffect } from 'react';

import KaticismLogoWhite from './assets/katicismLogos/Primary_White Logo.png';
import './App.css';
import Typewriter from 'typewriter-effect/dist/core';
 

const App = () => {
  useEffect(() => {

    const typewriter = new Typewriter("#title", {
      autoStart: true,
      deleteChars: 0
    })
    typewriter
      .typeString('Christian Gerhardt,')
      .pauseFor(1000)
      .typeString('<br>Software Developer,')
      .pauseFor(1000)
      .typeString('<br>Lover of Coffee')
      .pauseFor(1000)
      .typeString('<br>& Casual Streamer')
      .start()

  })
  return (
    <div className="App">
      <header className="App-header">
        <p id="title">
        </p>
        <img src={KaticismLogoWhite} className="App-logo" alt="logo" />
        <p>
        <a
          className="App-link"
          href="https://twitch.tv/katicism"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://twitch.tv/katicism
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
