import { useRef } from 'react';
import styles from './Hero.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperCore } from 'swiper';
import { useGetImagesQuery } from '../../../Login/store/loginSlice'; 

import title1 from '../../../../assets/images/titleImage1.png';
import title2 from '../../../../assets/images/titleImage2.png';
import title3 from '../../../../assets/images/titleImage3.png';
import title4 from '../../../../assets/images/titleImage2.png'; // Убедитесь, что это правильный путь к изображению

interface Image {
  id: number; 
  url: string; 
}

export const Hero = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const { data: images = [], isLoading } = useGetImagesQuery(); 

  // Логирование массива картинок
  console.log('Images received:', images);

  if (isLoading) {
    return <div>Loading...</div>; 
  }


  // Если нет изображений, покажем временные изображения
  const fallbackImages: Image[] = [
    { id: 1, url: title1 }, 
    { id: 2, url: title2 },
    { id: 3, url: title3 },
    { id: 4, url: title4 },
  ];

  const finalImages = images.length > 0 ? images : fallbackImages;

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
            onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            loop={true}
            navigation={false}
            className={styles.swiper}
            breakpoints={{
              369: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {finalImages.map((slide: Image) => (
              <SwiperSlide key={slide.id}>
                <div className={styles.card}>
                  <img src={slide.url} alt={`Slide ${slide.id}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

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
