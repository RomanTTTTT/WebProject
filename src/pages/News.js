import React, { useState, useEffect } from 'react';
import './styles.css';

import searchIcon from './img/search.png';
import homeIcon from './img/home.png';
import menuArrowIcon from './img/menu-arrow.png';
import contactIcon from './img/contact.png';

function News({ darkMode }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/news') // Замініть URL на актуальний
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Помилка отримання новин:', error));
    }, []);

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

            <main className="news-container">
                {news.length === 0 ? (
                    <p>Новин поки немає...</p>
                ) : (
                    news.map((item) => (
                      <article key={item.id} className="news-item">
                        <img src={item.image} alt={item.title} />
                        <div className="news-content">
                          <h2>{item.title}</h2>
                          <p className="date">{item.date}</p>
                          <p>{item.text.slice(0, 100)}...</p>
                          <button className="read-more">Читати далі</button>
                        </div>
                      </article>
                    ))
                )}
            </main>
            <footer className="footer">
              <div className="footer-top">
                <div className="subscribe">
                  <h4>Підпишіться на наші новини</h4>
                  <div className="subscribe-form">
                    <input type="email" placeholder="E-Mail" />
                    <button>Підписатися</button>
                  </div>
                </div>
                <div className="search">
                  <h4>Пошук</h4>
                  <div className="search-container">
                    <input type="text" placeholder="" />
                    <img src={searchIcon} alt="Пошук" className="search-icon" />
                  </div>
                </div>
              </div>
            
              <div className="footer-menu">
                <a href="#"><span className="icon"><img src={homeIcon} alt="Home" /></span> Головна</a>
                <div className="divider">|</div>
                <a href="#"><span className="icon"><img src={menuArrowIcon} alt="Menu" /></span> Меню</a>
                <div className="divider">|</div>
                <a href="#"><span className="icon"><img src={contactIcon} alt="Contact" /></span> Контакти</a>
              </div>
            
              <div className="footer-bottom">
                © 2024, Інформація під час війни для людей з інвалідністю та людей старшого віку. Підтримка Access Lab
              </div>
            </footer>
        </div>
    );
}

export default News;