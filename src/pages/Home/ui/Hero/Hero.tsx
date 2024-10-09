import { useRef } from 'react';
import styles from './Hero.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import title1 from '../../../../assets/image/titleImage1.png';
import title2 from '../../../../assets/image/titleImage2.png';
import title3 from '../../../../assets/image/titleImage3.png';
import title4 from '../../../../assets/image/titleImage2.png';
import { Swiper as SwiperCore } from 'swiper';

export const Hero = () => {
  const sliderData = [
    { imgSrc: title1 },
    { imgSrc: title2 },
    { imgSrc: title3 },
    { imgSrc: title4 },
  ];

  // Используйте useRef для кнопок навигации
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.textFirst}>ONE EXPRESS</h2>
          <div className={styles.line}></div>
          <p className={styles.textSecond}>Быстрая и надежная доставка товаров с Китая</p>
        </div>

        <div className={styles.wrapper}>
          <Swiper
            onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)} // Получаем экземпляр Swiper через onSwiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={1}
            loop={true}
            navigation={false}
            className={styles.swiper}
            breakpoints={{
              368: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {sliderData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Навигационные стрелки */}
          <div className={styles.arrows}>
            <svg
              onClick={() => swiperRef.current?.slidePrev()}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 15H5M5 15L15 25M5 15L15 5" stroke="#686A67" strokeWidth="2" />
            </svg>
            <svg
              onClick={() => swiperRef.current?.slideNext()}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15H25M25 15L15 5M25 15L15 25" stroke="#686A67" strokeWidth="2" />
            </svg>
          </div>

          <div className={styles.divider}>
            <svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L50 0.999999" stroke="#686A67" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 1L0 0.999999" stroke="#686A67" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
