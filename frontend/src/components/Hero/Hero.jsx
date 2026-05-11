import './Hero.css';

function Hero() {
  const handleOrder = () => {
    // Позже сделаем плавный скролл к форме
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Надёжные грузчики и грузоперевозки 24/7: <span className="orange">Ваши вещи — наша ответственность.</span>
          </h1>
          <p className="hero-description">
            Переезд, доставка мебели, подъём на этаж, вынос строительного мусора — наши грузчики справятся с любой задачей быстро и аккуратно. Профессионализм, честные цены и пунктуальность — наши принципы.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={handleOrder}>
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;