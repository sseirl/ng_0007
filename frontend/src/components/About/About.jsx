import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-title">О компании</h2>
            <p className="about-description">
              Мы — профессиональная команда грузчиков и перевозчиков в Бишкеке и по всему Кыргызстану.
              Более 10 лет помогаем людям и компаниям с переездами, доставкой грузов, подъёмом материалов и уборкой мусора.
            </p>
            <p className="about-description">
              Наш автопарк — это чистые, исправные машины разных типов: от малогабаритных портеров до грузовиков до 10 тонн.
              Все грузчики — опытные, аккуратные, в форме. Мы несём полную ответственность за сохранность вашего имущества.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Работаем 24/7 без выходных</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Фиксированные цены без скрытых доплат</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Собственный автопарк и оборудование</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Страховка груза и договор</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/about-photo.png" alt="Наша команда" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;