import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cx from "classnames";
import Icon from "../../components/_icons/Icon";
import MediaQuery from 'react-responsive';

import styles from "./Home.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import img1 from "../../assets/images/home/window-1.jpg";
import img2 from "../../assets/images/home/window-2.jpg"
import img3 from "../../assets/images/home/window-3.jpg"
import img4 from "../../assets/images/home/window-4.jpg"
import img5 from "../../assets/images/home/window-5.jpg"

const CategoriesSlider: React.FC = () => {
  return(
    <section className={styles.categories}>

      <div className={styles.switch}>
        <p className={styles.new}>новинки</p>
        <input type="checkbox" />
        <p className={styles.popular}>популярное</p>
      </div>

      <div className={styles.relative}>
          <Swiper
            slidesPerView={5}
            breakpoints={{
              0:{
                spaceBetween: 15,
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".categories-next",
              prevEl: ".categories-prev",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide className={styles.categorySlide}>
              <img src={img1}/>
              <p className={styles.slideText}>Пряжа Macrametr</p>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <img src={img2}/>
              <p className={styles.slideText}>Кольца бамбук</p>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <img src={img3}/>
              <p className={styles.slideText}>Трикотажная пряжа Zefirka</p>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <img src={img4}/>
              <p className={styles.slideText}>Шпагат крученый</p>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <img src={img5}/>
              <p className={styles.slideText}>Джут «Арахна»</p>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <img src={img5}/>
              <p className={styles.slideText}>Джут «Арахна»</p>
            </SwiperSlide>
          </Swiper>
          <MediaQuery minWidth={1920}>
            <button className={cx('categories-next', styles.categoryNext)}>
              <Icon icon="right" size={17} color="#976464"/>
            </button>
            <button className={cx('categories-prev', styles.categoryPrev)}>
              <Icon icon="right" size={17} color="#976464"/>
            </button>
          </MediaQuery>
        </div>
    </section>
  );
}

export default CategoriesSlider;