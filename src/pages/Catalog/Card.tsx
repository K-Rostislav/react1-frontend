import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/_icons/Icon";
import cx from "classnames";

import styles from "./Catalog.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";


type CardType = {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Card: React.FC<CardType> = ({id, name, image, price}) => {

  return(
    <li key={id}>
    <Link to="/product" className={styles.card}>
      <div className={styles.icons}>
        <button className={styles.favourites} type="button">
          <Icon icon="favourites-none" size={16}/>
        </button>
        <Icon icon="card-menu" size={16}/>
      </div>
      <div className={styles.img}>
        <img src={image} />
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.description}>
        <p>100% хлопок</p>
        <p>Вес: 380 г, длина нити: 100 м </p>
      </div>
      <p className={styles.price}>{price} ₽</p>
      <button className={cx(styles.button, common.BtnBackgroundNone)}>
        <Icon icon="header-icon-cart" size={15}/>
        <p>В корзину</p>
      </button>
    </Link>
  </li>
  );
}

export default Card;
