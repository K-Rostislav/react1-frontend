import React from "react";
import { useAppDispatch } from "../../redux/store"
import Icon from "../../components/_icons/Icon";
import { minus, removeItemCart, plus } from "../../redux/cartSlice/slice"

import styles from "./Cart.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss"

import Counter from "../../components/Counter/index"



type ItemType = {
  _id: string
  name: string
  image: string
  price: number
  count?: number
}

const CartItems: React.FC<ItemType> = ({_id, name, image, price, count}) => {
  const dispatch = useAppDispatch()

  const deleteItemCart = () => {
    dispatch(removeItemCart({
      _id
    }))
  }


  return(
    <div className={styles.item} key={_id}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <p className={styles.nameItem}>{name}</p>
      <div className={styles.counter}>
        <Counter _id={_id} count={count}/>
      </div>
      <p className={styles.price}>{count ? price * count : price} ₽</p>
      <Icon onClick={deleteItemCart} className={styles.delete} icon="icon-delete" size={24}/>
    </div>
  )
}

export default CartItems