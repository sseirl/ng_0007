import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Подключаем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Reviews.css';

function Reviews() {
  // Скрины с отзывами
  const screenshots = [
    { id: 1, src: '/reviews/review1.jpg',  stars: 5 },
    { id: 2, src: '/reviews/review2.jpg',  stars: 5 },
    { id: 3, src: '/reviews/review3.jpg',  stars: 4 },
    { id: 4, src: '/reviews/review4.jpg',  stars: 5 },
    { id: 5, src: '/reviews/review5.jpg',  stars: 5 },
    { id: 6, src: '/reviews/review6.jpg',  stars: 4 },
    { id: 7, src: '/reviews/review7.jpg',  stars: 5 },
    { id: 8, src: '/reviews/review8.jpg',  stars: 5 },
    { id: 9, src: '/reviews/review9.jpg',  stars: 4 },
    { id: 10, src: '/reviews/review10.jpg',  stars: 5 },
    { id: 11, src: '/reviews/review11.jpg',  stars: 5 },
    { id: 12, src: '/reviews/review12.jpg',  stars: 5 },
    { id: 13, src: '/reviews/review13.jpg',  stars: 5 },
  ];

  // Функция для рендера звёзд
  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <h2 className="reviews-title">Отзывы клиентов</h2>
        <p className="reviews-subtitle">Что говорят о нас</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="reviews-swiper"
        >
          {screenshots.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="review-card">
                <div className="review-image">
                  <img src={item.src} alt="Отзыв клиента" />
                </div>
                <div className="review-content">
                  <div className="review-stars">
                    {renderStars(item.stars)}
                  </div>
                  <p className="review-text">"{item.text}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;