import './Header.css';
import Dropdown from '../Dropdown/Dropdown';

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
  <img src="/logo.png" alt="NurGruz Logo" className="logo-image" />
  <span className="logo-text">NurGruz</span>
</div>
        <nav className="nav">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Главная</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>О нас</a>
          <div onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            <Dropdown />
          </div>
          <a href="#fleet" onClick={(e) => { e.preventDefault(); scrollToSection('fleet'); }}>Автопарк</a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Отзывы</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Контакты</a>
        </nav>
         <a href="tel:+996709032948" className="btn-order">Звонок</a>
      </div>
    </header>
  );
}

export default Header;