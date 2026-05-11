import { useState } from 'react';
import './Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // закрываем меню после клика
  };

  const services = [
    { name: 'Переезды', id: 'services' },
    { name: 'Демонтаж', id: 'services' },
    { name: 'Погрузка-разгрузка фур', id: 'services' },
    { name: 'Подъём стройматериалов', id: 'services' },
    { name: 'Перевозка габаритных грузов', id: 'services' },
    { name: 'Грузовые машины', id: 'services' }
  ];

  return (
    <div 
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="dropdown-title">Услуги</span>
      {isOpen && (
        <div className="dropdown-menu">
          {services.map((service, index) => (
            <a 
              key={index} 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="dropdown-item"
            >
              {service.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;