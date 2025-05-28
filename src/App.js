// src/App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import AccessibilityButton from "./pages/AccessibilityButton";
import './pages/styles.css'


import lightIcon from './pages/img/light_mode.png'
import darkIcon from './pages/img/dark_mode.png'

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleTheme = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <Router>
      <div className="App">
        {/* Навігаційне меню */}
        <header>
          <nav>
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/about">Про нас</Link></li>
              <li><AccessibilityButton darkMode={darkMode}/></li>
              <li>
              <img 
                  src={darkMode ? darkIcon : lightIcon} 
                  alt="Перемикач теми"
                  className="theme-toggle"
                  onClick={toggleTheme}
                />
              </li>

            </ul>
          </nav>
        </header>

        {/* Роутінг */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
