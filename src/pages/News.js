import React, { useState, useEffect } from 'react';
import './styles.css';

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
        </div>
    );
}

export default News;