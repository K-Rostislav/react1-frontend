import React from "react";
import Icon from "../../components/_icons/Icon";
import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./Product.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";



const Product: React.FC = () => {

  const [product, setProduct] = React.useState<{
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/product/' + id)
    .then(response => {
      setProduct(response.data);
    })
  }, []);

  if(!product){
    return <h1>Загрузка...</h1>
  }

  return(
    <section className={styles.product}>
      <div className={styles.grid}>
        <div className={styles.img}>
          <img src={`/${product.image}`} />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.name}>
            <p>{product.name}</p>
            <Icon className={styles.icon} icon="favourites-none" size={20}/>
          </div>
          <p className={styles.description}>
            {product.description}
          </p>

          <p className={styles.title}>Xарактеристики</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>Длина</p>
              <p>100 м</p>
            </li>
            <li className={styles.item}>
              <p>Производитель</p>
              <p>Россия</p>
            </li>
            <li className={styles.item}>
              <p>Состав</p>
              <p>100% хлопок</p>
            </li>
            <li className={styles.item}>
              <p>Толщина</p>
              <p>4 мм (100 нитей)</p>
            </li>
          </ul>
          <div className={styles.addToCart}>
            <p className={styles.price}>{product.price} ₽</p>
            <div className={styles.count}>
              <button className={styles.minus}>&minus;</button>
              <p className={styles.result}>0</p>
              <button className={styles.plus}>+</button>
            </div>
            <button className={cx(styles.button, common.BtnBackground)}>Добавить в корзину</button>
          </div>
        </div>
      </div>

      {/* <div className={common.Container}>
        <Swiper className={styles.slider}
            slidesPerView={3.5}
            navigation={{
              nextEl: ".intro-next",
              prevEl: ".intro-prev",
            }}
            modules={[Navigation]}
            >
              
              <SwiperSlide className={styles.slide}>
                
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                ergerger
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                ergerger
              </SwiperSlide>
              
              <SwiperSlide className={styles.slide}>
                ergerger
              </SwiperSlide>

            <div className={styles.navigation}>
              <button type="button" className={cx("intro-prev", styles.prev)}>
                <Icon icon="right" size={17} color="#976464"/>
              </button>
              <div className={cx("swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal", styles.pagination)}>
                <span className="swiper-pagination-current"></span>
                /
                <span className="swiper-pagination-total"></span>
              </div>
              <button type="button" className={cx("intro-next", styles.next)}>
                <Icon icon="right" size={17} color="#976464"/>
              </button>
            </div>
          </Swiper>
        </div> */}
    </section>
  );
}

export default Product;