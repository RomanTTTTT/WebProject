// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Навігаційне меню */}
        <header>
          <nav>
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/about">Про нас</Link></li>
            </ul>
          </nav>
        </header>

        {/* Роутінг */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
