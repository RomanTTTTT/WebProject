import React, { useState, useEffect } from "react";
import './styles.css'

const AccessibilityMenu = ({ setIsOpen, darkMode }) => {
    const [screenReader, setScreenReader] = useState(
        JSON.parse(localStorage.getItem("screenReader")) || false
    );
    const [highlightLinks, setHighlightLinks] = useState(
        JSON.parse(localStorage.getItem("highlightLinks")) || false
    );
    const [easyReading, setEasyReading] = useState(
        JSON.parse(localStorage.getItem("easyReading")) || false
    );
    const [textSize, setTextSize] = useState(
        parseInt(localStorage.getItem("textSize")) || 18
    );
    const [lineSpacing, setLineSpacing] = useState(
        localStorage.getItem("lineSpacing") || "standard"
    );

    useEffect(() => {
        localStorage.setItem("screenReader", JSON.stringify(screenReader));
        localStorage.setItem("highlightLinks", JSON.stringify(highlightLinks));
        localStorage.setItem("easyReading", JSON.stringify(easyReading));
        localStorage.setItem("textSize", textSize);
        localStorage.setItem("lineSpacing", lineSpacing);
    }, [screenReader, highlightLinks, easyReading, textSize, lineSpacing]);

    return (
        <div className={`accessibility-menu ${darkMode ? "dark-theme" : ""}`}>
            <div className="close-btn-container">
                <button className="close-btn" onClick={() => setIsOpen(false)}>Закрити панель</button>
            </div>
            <div className={`accessibility-menu-container ${darkMode ? "dark-theme" : ""}`}>
                <div className="accessibility-settings">
                    <h2>Налаштування доступності</h2>
                </div>
                <div className="filters-container">
                    <h3>Швидкі фільтри</h3>
                    <button className="reset-btn" onClick={() => {
                        setScreenReader(false);
                        setHighlightLinks(false);
                        setEasyReading(false);
                        setTextSize(18);
                        setLineSpacing("standard");
                    }}>Скинути всі фільтри</button>
                </div>
                <h3>Покращення доступності</h3>
                <div className="option">
                    <span>Зчитувач екрана</span>
                    <button onClick={() => setScreenReader(!screenReader)}>
                        {screenReader ? "Вимк" : "Увімк"}
                    </button>
                </div>

                <div className="option">
                    <span>Виділити всі посилання</span>
                    <button onClick={() => setHighlightLinks(!highlightLinks)}>
                        {highlightLinks ? "Вимк" : "Увімк"}
                    </button>
                </div>

                <div className="option">
                    <span>Зручне читання</span>
                    <button onClick={() => setEasyReading(!easyReading)}>
                        {easyReading ? "Вимк" : "Увімк"}
                    </button>
                </div>

                <h3>Збільшення тексту та інтервалу між рядками</h3>
                <div className="option">
                    <label>Розмір тексту</label>
                    <input
                        type="number"
                        value={textSize}
                        onChange={(e) => setTextSize(parseInt(e.target.value))}
                        min="12"
                        max="30"
                    />
                </div>

                <div className="option">
                    <label>Інтервал між рядками</label>
                    <select value={lineSpacing} onChange={(e) => setLineSpacing(e.target.value)}>
                        <option value="standard">Стандартний</option>
                        <option value="large">Великий</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityMenu;