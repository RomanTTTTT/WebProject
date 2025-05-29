import React from 'react';
import cat from './img/cat.jpg'
import './styles.css'

function About({ darkMode }) {
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <h2>Про нас</h2>
      <p>Це друга сторінка.</p>
      <p>А це кіт.</p>
      <img src={cat} alt="cat" style={{width:'200px', height:'auto'}} />
    </div>
  );
}

export default About;