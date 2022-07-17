import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/_icons/Icon";
import cx from "classnames";
import { addItem } from "../../redux/carttSlice/slice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectorCartSlice } from "../../redux/carttSlice/selectors";
import { countCard } from "../../utils/countCard";

import styles from "./Catalog.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";


type CardType = {
  id: number
  name: string
  image: string
  price: number
}

const Card: React.FC<CardType> = ({ id, name, image, price }) => {
  const dispatch = useAppDispatch()
  const { items } = useSelector(selectorCartSlice)

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(addItem({
      id, 
      name, 
      image,
      price,
      count: 0
    }))
  }


  return(
    <li>
    <Link to={`/product/${id}`} className={styles.card}>
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
      <button onClick={addToCart} className={cx(styles.button, common.BtnBackgroundNone)}>
        <Icon icon="header-icon-cart" size={15}/>
        <p>В корзину</p>
        {countCard(id, items) && <div className={cx(styles.count, common.Count)}>{countCard(id, items)}</div>}
      </button>
    </Link>
  </li>
  );
}

export default Card;
