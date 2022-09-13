import React, { useEffect } from "react"
import cx from "classnames"
import { useForm, SubmitHandler  } from "react-hook-form"
import Icon from "../../components/_icons/Icon"
import { useSelector } from "react-redux"
import { selectorCartSlice } from "../../redux/cartSlice/selectors"
import { useAppDispatch } from "../../redux/store"

import styles from "./Cart.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss"

import CartForm from "./CartForm"
import CartItem from "./CartItem"


const Cart = () => {

  const { cartItems, totalPrice, totalCount } = useSelector(selectorCartSlice)


  if(cartItems.length !== 0){
    return(
      <section className={styles.cart}>
        <div className={cx(styles.grid, common.ContainerPadding)}>

          <CartForm />

          <div>
            <h2>Состав заказа</h2>

            <div>
              {cartItems.map(item => (
                <CartItem key={item.name} 
                  _id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  count={item.count}
                />
              ))}
            </div>

            <div className={styles.payment}>
              <h2 className={styles.title}>Итого:</h2>
              <div className={styles.block}>
                <p className={styles.blockItem}>Товары, {totalCount} шт</p>
                <p className={styles.cost}>{totalPrice - 254} ₽</p>
              </div>
              <div className={styles.block}>
                <p className={styles.blockItem}>Доставка</p>
                <p className={styles.cost}>254 ₽</p>
              </div>
              <p className={styles.totalPrice}>{totalPrice} ₽</p>
              <div className={styles.block}>
                <button type="submit" form="cartForm" className={cx(styles.button, common.BtnBackground)}>Оформить заказ</button>
                <p className={styles.policy}>Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return(
    <h1 className={styles.notFound}>Здесь пока ничего нет 😕</h1>
  )
}

export default Cart;