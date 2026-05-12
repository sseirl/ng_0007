import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Колонка 1: Логотип и описание */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="footer-logo-text">NurGruz</span>
            </div>
            <p className="footer-description">
              Надёжные грузоперевозки и грузчики 24/7 по Бишкеку и всему Кыргызстану.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div className="footer-col">
            <h4 className="footer-title">Меню</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Главная</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>О нас</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Услуги</a></li>
              <li><a href="#fleet" onClick={(e) => { e.preventDefault(); scrollToSection('fleet'); }}>Автопарк</a></li>
              <li><a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Отзывы</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Контакты</a></li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div className="footer-col">
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-contacts">
              <li> <a href="tel:+996709032948">+996 709 032 948</a></li>
              <li> <a href="https://wa.me/996709032948" target="_blank">WhatsApp</a></li>
              <li> <a href="https://www.instagram.com/nur_gruz_" target="_blank">Instagram</a></li>
              <li> г. Бишкек, Кыргызстан</li>
            </ul>
          </div>
        </div>

        {/* Нижняя полоска с копирайтом */}
        <div className="footer-bottom">
          <p>© {currentYear} NurGruz. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;