import './Services.css';

function Services() {
  const servicesList = [
    {
      id: 1,
      icon: "/icons/pereezd.png",
      title: "Переезды",
      description: "Квартирные, офисные, дачные переезды. Аккуратно и быстро."
    },
    {
      id: 2,
      icon: "/icons/demontazh.png",
      title: "Демонтаж",
      description: "Разбор перегородок, сантехники, старой отделки."
    },
    {
      id: 3,
      icon: "/icons/pogruz.png",
      title: "Погрузка-разгрузка фур",
      description: "Быстрая выгрузка и загрузка товаров любой сложности."
    },
    {
      id: 4,
      icon: "/icons/podjem.png",
      title: "Подъём стройматериалов",
      description: "Подъём на этаж песка, цемента, плитки, кирпича."
    },
    {
      id: 5,
      icon: "/icons/gabarit.png",
      title: "Перевозка габаритных грузов",
      description: "Доставка крупногабаритной техники и мебели."
    },
    {
      id: 6,
      icon: "/icons/truck.png",
      title: "Грузовые машины",
      description: "Аренда машин с грузчиками на любой срок."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Наши услуги</h2>
        <div className="services-grid">
          {servicesList.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;