import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/_icons/Icon";
import cx from "classnames";
import { addItemCart } from "../../redux/cartSlice/slice";
import { addItemFav, removeItemFav } from "../../redux/favouritesSlice/slice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectorCartSlice } from "../../redux/cartSlice/selectors";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { cardCount } from "../../utils/cardCount";
import { favouritesIndicator } from "../../utils/favoritesIndicator";

import styles from "./Catalog.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import CartMessage from "../../components/CartMessage";


type CardType = {
  _id: string
  name: string
  image: string
  price: number
}

const Card: React.FC<CardType> = ({ _id, name, image, price }) => {
  const dispatch = useAppDispatch()
  const { cartItems } = useSelector(selectorCartSlice)
  const { token } = useSelector(selectorAuthSlice)
   const [cartMessage, setCartMessage] = React.useState<boolean>(false)

  const [flag, setFlag] = React.useState<boolean>(false)

  const findItem = cartItems.find(item => item._id == _id)

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(addItemCart({
      _id, 
      name, 
      image,
      price,
      count: 0
    }))
    !findItem && setCartMessage(true)
  }


  const addToFavourites = (event: React.MouseEvent<SVGElement>) => {
    setFlag(!flag)
    event.preventDefault()
    event.preventDefault()
    dispatch(addItemFav({
      _id, 
      name, 
      image,
      price,
    }))
  }

  const removeToFavourites = (event: React.MouseEvent<SVGElement>) => {
    setFlag(!flag)
    event.preventDefault()
    event.preventDefault()
    dispatch(removeItemFav({
      _id,
    }))
  }

  React.useEffect(() => {
    favouritesIndicator(_id) && setFlag(true)
  }, [])


  return(
    <li>
      <Link to={`/product/${_id}`} className={styles.card}>

        <div className={styles.icons}>
          {token &&
          <button className={styles.favourites} type="button">
            {flag ?
              <Icon className={styles.fav_icon} onClick={removeToFavourites} icon="favourites" size={18}/>
            :
              <Icon className={styles.fav_icon_none} onClick={addToFavourites} icon="favourites-none" size={18}/>
            }
          </button>
          }
          <Icon className={styles.icon_menu} color="#976464" icon="card-menu" size={16}/>
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
          {cardCount(_id, cartItems) && <div className={cx(styles.count, common.Count)}>{cardCount(_id, cartItems)}</div>}
        </button>
        
      </Link>

      {cartMessage && 
        <CartMessage />
      }
    </li>
  );
}

export default Card