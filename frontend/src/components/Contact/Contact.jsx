import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Переезд',
    comment: ''
  });

  const [status, setStatus] = useState('');

  const services = [
    'Переезд',
    'Демонтаж',
    'Погрузка-разгрузка фур',
    'Подъём стройматериалов',
    'Перевозка габаритных грузов',
    'Грузовые машины'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: 'Переезд', comment: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <div className="contact-grid">
          {/* Левая колонка — контакты */}
          <div className="contact-info">
            <h3>Контакты</h3>

            <a href="tel:+996709032948" className="contact-item">
              <div className="contact-icon">
  <img src="/icons/call.png" alt="Телефон" width="32" height="32" />
</div>
              <div className="contact-details">
                <span className="contact-label">Телефон</span>
                <span className="contact-value">+996 709 032 948</span>
              </div>
            </a>

            <a href="https://wa.me/996709032948" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <img src="/icons/whats.png" alt="WhatsApp" width="38" height="38" />
              </div>
              <div className="contact-details">
                <span className="contact-label">WhatsApp</span>
                <span className="contact-value">+996 709 032 948</span>
              </div>
            </a>

            <a href="https://www.instagram.com/nur_gruz_" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                  <img src="/icons/insta.png" alt="Instagram" width="31" height="31" />
              </div>
              <div className="contact-details">
                <span className="contact-label">Instagram</span>
                <span className="contact-value">@nur_gruz_</span>
              </div>
            </a>

            <div className="contact-item no-link">
              <div className="contact-icon">
                <img src="/icons/add.png" alt="Адрес" width="35" height="35" />
              </div>
              <div className="contact-details">
                <span className="contact-label">Адрес</span>
                <span className="contact-value">г. Бишкек, Кыргызстан</span>
              </div>
            </div>
          </div>

          {/* Правая колонка — форма */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select name="service" value={formData.service} onChange={handleChange}>
              {services.map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </select>
            <textarea
              name="comment"
              placeholder="Комментарий (необязательно)"
              rows="3"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
            </button>
            {status === 'success' && <p className="success-msg">Заявка отправлена!</p>}
            {status === 'error' && <p className="error-msg">Ошибка, попробуйте позже</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;