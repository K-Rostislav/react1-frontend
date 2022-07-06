import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cx from "classnames";
import Icon from "../_icons/Icon";

import sliderImg from "../../assets/images/home/slider.jpg";

import styles from "./Slider.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

const Slider: React.FC = () => {
  return(
    <section className={styles.introSlider}>
      <div className={common.Container}>
        <Swiper className={styles.slider}
          breakpoints={{
            1024: {
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            type: 'fraction',
          }}
          navigation={{
            nextEl: ".intro-next",
            prevEl: ".intro-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          >
            
            <SwiperSlide className={styles.introSlide}>
              <img className={styles.introSlideImg} src={sliderImg} />
            </SwiperSlide>

            <SwiperSlide className={styles.introSlide}>
              <img className={styles.introSlideImg} src={sliderImg} />
            </SwiperSlide>

          <div className={styles.navigation}>
            <button type="button" className={cx("intro-prev", styles.introPrev)}>
              <Icon icon="right" size={17} color="#976464"/>
            </button>
            <div className={cx("swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal", styles.pagination)}>
              <span className="swiper-pagination-current"></span>
              /
              <span className="swiper-pagination-total"></span>
            </div>
            <button type="button" className={cx("intro-next", styles.introNext)}>
              <Icon icon="right" size={17} color="#976464"/>
            </button>
          </div>
        </Swiper>
      </div>
  </section>
  );
}

export default Slider;