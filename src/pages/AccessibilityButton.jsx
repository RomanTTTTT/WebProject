import React, { useState } from "react";
import AccessibilityMenu from "./AccessibilityMenu";

const AccessibilityButton = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button 
                className="accessibility-button" 
                onClick={() => setIsOpen(!isOpen)}
            >
                Налаштування доступності
            </button>
            {isOpen && <AccessibilityMenu setIsOpen={setIsOpen} darkMode={darkMode} />}
        </div>
    );
};

export default AccessibilityButton;