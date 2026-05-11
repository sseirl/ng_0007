import './Fleet.css';

function Fleet() {
  const fleetList = [
    {
      id: 1,
      name: "Mercedes Sprinter (будка)",
      image: "/images/sprinter-box.jpg",
      specs: "Длина: 4.2м | Ширина: 1.8м | Высота: 2.0м | Объём: 15м³ | Грузоподъёмность: 1.5т"
    },
    {
      id: 2,
      name: "Mercedes Sprinter (открытый борт)",
      image: "/images/sprinter-open.jpg",
      specs: "Длина: 4.2м | Ширина: 1.8м | Грузоподъёмность: 1.5т | Для длинномеров"
    },
    {
      id: 3,
      name: "Hyundai Porter",
      image: "/images/porter.webp",
      specs: "Длина: 3.0м | Ширина: 1.6м | Высота: 1.5м | Объём: 7м³ | Грузоподъёмность: 1.0т"
    },
    {
      id: 4,
      name: "Hyundai Porter (самосвал)",
      image: "/images/porter-dump.jpg",
      specs: "Длина: 3.0м | Ширина: 1.6м | Грузоподъёмность: 1.0т | Свалочный тип"
    },
    {
      id: 5,
      name: "Mercedes Sprinter (цельнометалл)",
      image: "/images/sprinter-metal.jpg",
      specs: "Длина: 4.2м | Ширина: 1.8м | Высота: 2.1м | Объём: 16м³ | Грузоподъёмность: 1.5т"
    },
    {
      id: 6,
      name: "Mercedes Sprinter (лопата / самосвал)",
      image: "/images/lopata.jpg",
      specs: "Длина: 4.2м | Ширина: 1.8м | Грузоподъёмность: 1.5т | Для стройматериалов"
    },
    {
      id: 7,
      name: "Автолифт (подъемник)",
      image: "/images/auto-lift.jpg",
      specs: "Грузоподъёмность: 0.5т | Высота подъёма: 15м | Размер платформы: 1.2 м"
    },
    {
      id: 8,
      name: "Грузовой автомобиль до 10 тонн",
      image: "/images/tonn.jpeg",
      specs: "Длина: 6.0м | Ширина: 2.4м | Высота: 2.5м | Объём: 36м³ | Грузоподъёмность: 10т"
    }
  ];

  return (
    <section id="fleet" className="fleet">
      <div className="fleet-container">
        <h2 className="fleet-title">Наш автопарк</h2>
        <div className="fleet-grid">
          {fleetList.map(truck => (
            <div key={truck.id} className="fleet-card">
              <div className="fleet-card-inner">
                <div className="fleet-image">
                  <img src={truck.image} alt={truck.name} />
                </div>
                <h3 className="fleet-name">{truck.name}</h3>
                <p className="fleet-specs">{truck.specs}</p>
                <button className="fleet-btn">Заказать</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;