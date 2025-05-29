import React from 'react';
import './styles.css'

function News({ darkMode }) {

    return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
        <header>
          <div className="container">
            <h1>Новини</h1>
            <nav>
              <ul>
                <li><a href="#">Головна</a></li>
                <li><a href="#">Меню</a></li>
              </ul>
              <div className="search">
                <input type="text" />
              </div>
            </nav>
          </div>
        </header>
    </div>
    );}
export default News