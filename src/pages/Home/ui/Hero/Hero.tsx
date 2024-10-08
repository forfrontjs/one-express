import { useRef } from 'react'; // Import useRef
import styles from './Hero.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import title1 from '../../../../assets/image/titleImage1.png';
import title2 from '../../../../assets/image/titleImage2.png';
import title3 from '../../../../assets/image/titleImage3.png';
import title4 from '../../../../assets/image/titleImage2.png';

export const Hero = () => {
  const sliderData = [
    { imgSrc: title1 },
    { imgSrc: title2 },
    { imgSrc: title3 },
    { imgSrc: title4 },
  ];

  // Create a ref for the swiper with the appropriate type
  const swiperRef = useRef<SwiperType | null>(null);

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
            ref={swiperRef} 
            modules={[Navigation]} 
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            navigation={false} // Disable default navigation
            className={styles.swiper}
            breakpoints={{
              // Mobile devices - 3 slides
              368: {
                slidesPerView: 3, // Show 3 slides on mobile
              },
              // Tablet devices - 2 slides
              768: {
                slidesPerView: 2, // Show 2 slides on tablets
              },
              // Desktop devices - 1 slide
              1024: {
                slidesPerView: 3, // Show 1 slide on larger screens
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

          {/* Navigation arrows */}
          <div className={styles.arrows}>
            <svg 
              onClick={() => swiperRef.current?.slidePrev()} // Use optional chaining
              width="30" height="30" 
              viewBox="0 0 30 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M20 15H5M5 15L15 25M5 15L15 5" stroke="#686A67" strokeWidth="2" />
            </svg>
            <svg 
              onClick={() => swiperRef.current?.slideNext()} // Use optional chaining
              width="30" height="30" 
              viewBox="0 0 30 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
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
