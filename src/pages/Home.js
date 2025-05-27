import React, { useState } from 'react';
import './styles.css'

// Import images
import photoNearBuilding from './img/photo_near_building.png';
import luggage6 from './img/luggage6.png';
import contractEdit from './img/contract_edit.png';
import language2 from './img/language2.png';
import directionsCar from './img/directions_car.png';
import homePin from './img/home_pin.png';
import psychologyAlt from './img/psychology_alt.png';
import mapSearch from './img/map_search.png';
import newsmode from './img/newsmode.png';
import octiconLaw24 from './img/octicon_law-24.png';
import sponsor1 from './img/sponsor_1.png';
import sponsor2 from './img/sponsor_2.png';
import sponsor3 from './img/sponsor_3.png';
import sponsor4 from './img/sponsor_4.png';
import sponsor5 from './img/sponsor_5.png';
import searchIcon from './img/search.png';
import homeIcon from './img/home.png';
import menuArrowIcon from './img/menu-arrow.png';
import contactIcon from './img/contact.png';
import sideMenuIcon from './img/side-menu.png';

function openFormWindow() {
  const formWindow = window.open("", "FormWindow", "width=400,height=300");
  formWindow.document.write(`
    <html>
      <head>
        <title>Форма</title>
        <style>
        .form-button {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #0051ba;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }
        input, textarea {
          width: 100%;
          padding: 8px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        textarea {
          height: 100px;
          resize: none;
        }


        </style>
      </head>
      <body>
        <h2>Заповніть форму</h2>
        <form id="myForm">
          <label>Ім'я: <input type="text" name="name"></label><br>
          <label>Email: <input type="email" name="email"></label><br>
          <label>Повідомлення:</label>
          <textarea name="message"></textarea>

          <button type="submit" class="form-button">Відправити</button>
        </form>
        <button onclick="window.close()" class="form-button">Закрити</button>

        <script>
          document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Запобігає перезавантаженню сторінки
            alert("Форма успішно відправлена!"); // Можеш замінити це на реальну логіку відправки
          });
        </script>
      </body>
    </html>
  `);
}

function Home({ darkMode }) {
  // State for side menu
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Toggle side menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <header>
        <div className="container">
          <h1>Інформація під час війни для людей з інвалідністю та людей старшого віку</h1>
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

      <main className="container">
        <section id="welcome" className="welcome">
          <div className="text">
            <h2>Вітаємо на порталі!</h2>
            <p>Ви знаходитеся на ресурсі, який ми створили для того,
                 щоби зібрати всю інформацію про повномасштабну війну
                  в Україні, максимально адаптовану до потреб людей з
                   інвалідністю та людей старшого віку. Тут Ви знайдете
                    корисну інформацію і для тих, хто знаходиться в Україні, і
                     для тих, хто виїхав за кордон через повномасштабну війну.</p>
            <p>Ми – це три організації, а саме ВГО «Національна
                 Асамблея людей з інвалідністю України», ГО «Про.УД |
                  Універсальний дизайн» та ВГО «Коаліція захисту прав осіб
                   з інвалідністю внаслідок інтелектуальних порушень»</p>
            <a href="#" className="btn">Перейти до навігації сторінки</a>
          </div>
          <div className="image">
            <img src={photoNearBuilding} alt="Picture near building" />
          </div>
        </section>

        <section id="questions" className="questions">
          <h2>На які питання Ви знайдете відповіді на цьому ресурсі?</h2>
          <div className="question-grid">
        
            <div className="question-card">
              <div className="question-content">
                <h3>Які правила перетину кордону?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={luggage6} alt="luggage6" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Який порядок отримання статусу переселенця (ВПО) або біженця, або статусу тимчасового захисту?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={contractEdit} alt="contract_edit" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Які ви маєте права на отримання допомоги в Україні та за кордоном?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={language2} alt="language2" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Як евакуюватись у країни Європейського Союзу на авто, потягом або іншими шляхами?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={directionsCar} alt="directions_car" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Де можна зупинитися тимчасово, якщо Ви переїхали з іншого населеного пункту в Україні?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={homePin} alt="home_pin" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Як та де отримати психологічну допомогу?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={psychologyAlt} alt="psychology_alt" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Де отримати гуманітарну допомогу, зокрема засоби гігієни, одяг чи продукти харчування?</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={mapSearch} alt="map_search" />
            </div>
        
            <div className="question-card">
              <div className="question-content">
                <h3>Інші новини</h3>
                <a href="#">Переглянути →</a>
              </div>
              <img src={newsmode} alt="newsmode" />
            </div>
        
          </div>
        </section>
        

        <section id="steps" className="steps-section">
          <img src={octiconLaw24} alt="octicon_law-24" />
          <h2>Консультативно-правова допомога постраждалим від війни, зокрема особам з інвалідністю</h2>
          <p>Національна Асамблея людей з інвалідністю України в рамках проєкту «Посилення потенціалу
             громадських організацій людей з інвалідністю у процесі прийняття рішень у відновленні та
              створенні доступного середовища» надає консультативно-правову допомогу постраждалим від
               війни в Україні, зокрема людям з інвалідністю.</p>
          <p>Якщо у Вас є питання, пов'язані з відновленням документів, або Ви чи Ваші близькі потребуєте
             реабілітаційних, соціальних або інших послуг, опіки (піклування), забезпечення допоміжними
              засобами реабілітації, підтримки в оформленні пенсійних та інших соціальних виплат чи у
               працевлаштуванні, захисту прав, гарантованих людям з інвалідністю, тощо:</p>
        
          <div className="steps">
            <div className="step">
              <div className="step-marker"></div>
              <div className="step-content">
                <strong>Крок 1</strong>
                <p>Заповніть форму та натисніть «надіслати»</p>
              </div>
            </div>
          
            <div className="step">
              <div className="step-marker"></div>
              <div className="step-content">
                <strong>Крок 2</strong>
                <p>Ваше звернення в порядку черговості опрацює юрист</p>
              </div>
            </div>
          
            <div className="step">
              <div className="step-marker"></div>
              <div className="step-content">
                <strong>Крок 3</strong>
                <p>Вам буде надано кваліфіковану консультативно-правову допомогу за телефоном, номер якого Ви зазначите</p>
              </div>
            </div>
          </div>
          
        
          <p className="note">
            Питання з надання грошової допомоги не розглядаються, оскільки ми, на жаль,
             позбавлені можливості підтримувати людей фінансово.
          </p>
        
          <button onClick={openFormWindow} className="form-button">Заповнити форму</button>
        </section>
        
        

        <section id="partners" className="partners">
          <div className="partner-grid">
            <div className="partner-item">
                <img id="sponsor-1" src={sponsor1} alt="DPOD" />
            </div>
            <div className="partner-item">
                <p>Проєкт «Посилення потенціалу 
                громадських організацій людей з
                 інвалідністю у процесі прийняття рішень 
                у відновленні та створенні доступного 
                середовища» реалізується Всеукраїнським
                 громадським об'єднанням «Національна
                  Асамблея людей з інвалідністю України»
                   (НАІУ) за підтримки Організації людей з
                    інвалідністю Данії (DPOD). </p>
            </div>
            <div className="partner-item">
                <img id="sponsor-2" src={sponsor2} alt="Pro.UD" />
            </div>
            <div className="partner-item">
                <img id="sponsor-3" src={sponsor3} alt="Усі рівні" />
            </div>
            <div className="partner-item">
                <img id="sponsor-4" src={sponsor4} alt="НАІУ" />
            </div>
            <div className="partner-item">
                <img id="sponsor-5" src={sponsor5} alt="UNDP" />
            </div>
          </div>
          
        </section>
        <p>Цей вебресурс було створено і підтримано в 2022 році ГС
             ВГО «Національна Асамблея людей з інвалідністю України» (НАІУ)
              у співпраці з ГО «Про.УД|Універсальний дизайн» та ВГО «Коаліція
               захисту прав осіб з інвалідністю внаслідок інтелектуальних порушень» 
               в рамках проєкту «Підтримка людей з інвалідністю, осіб старшого віку 
               та їхніх сімей, які потребують допомоги в Україні». Наразі його підтримку
                здійснює Проєкт «Надання міжсекторальної гуманітарної допомоги населенню
                , постраждалому від війни в Україні», який реалізує НАІУ за фінансової
                 підтримки Європейського Союзу.</p>
        <p>Погляди, рекомендації та висновки, представлені на вебресурсі,
             належать виключно їхнім безпосереднім авторам та не обов'язково
              відображають офіційну позицію ЄС.</p>
        <section className="feedback-section">
          <div className="feedback-row">
            <h2>Чи була ця сторінка корисною?</h2>  
            <div className="yes-no-buttons">
              <button>Так</button>
              <button>Ні</button>
            </div>
              <button className="report-button">Повідомити про проблему</button>
          </div>
        </section>
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
      
      {/* Кнопка-іконка для меню */}
      <div id="menu-toggle" onClick={toggleMenu}>
        <img src={sideMenuIcon} alt="side-menu" />
      </div>

      {/* Бічне меню */}
      <nav id="side-menu" className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#welcome">Вітаємо на порталі!</a></li>
          <li><a href="#questions">На які питання Ви знайдете відповіді на цьому ресурсі?</a></li>
          <li><a href="#steps">Консультативно-правова допомога</a></li>
          <li><a href="#partners">Наші партери</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

// Add CSS to match the original functionality
const styles = `
  #side-menu {
    /* Basic styling for the side menu - adjust as needed */
    position: fixed;
    top: 0;
    right: -250px; /* Start off-screen */
    width: 250px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0,0,0,0.2);
    transition: right 0.3s ease;
    z-index: 1000;
    padding: 20px;
  }
  
  #side-menu.open {
    right: 0; /* Show menu when open */
  }
  
  #menu-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1001;
  }
  
  #menu-toggle img {
    width: 30px;
    height: 30px;
  }
`;