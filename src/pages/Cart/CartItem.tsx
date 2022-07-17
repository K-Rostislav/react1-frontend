import { useAppDispatch } from "../../redux/store"
import Icon from "../../components/_icons/Icon";
import { minus, removeItem, plus } from "../../redux/carttSlice/slice"
import cx from "classnames"

import styles from "./Cart.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss"



type ItemType = {
  id: number
  name: string
  image: string
  price: number
  count?: number
}

const CartItems: React.FC<ItemType> = ({id, name, image, price, count}) => {
  const dispatch = useAppDispatch()

  const deleteItemCart = () => {
    dispatch(removeItem({
      id
    }))
  }

  const plusItem = () => {
    dispatch(plus({id}))
  }

  const minusItem = () => {
    dispatch(minus({id}))
  }



  return(
    <div className={styles.item} key={id}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.nameItem}>{name}</p>
        <div className={common.CountItem}>
          <button onClick={minusItem} className={count == 1 ?  common.disabled : common.minus}>&minus;</button>
          <p className={common.result}>{count}</p>
          <button onClick={plusItem} className={common.plus}>+</button>
        </div>
        <p className={styles.price}>{count ? price * count : price} ₽</p>
        <Icon onClick={deleteItemCart} className={styles.delete} icon="icon-delete" size={24}/>
      </div>
    </div>
  )
}

export default CartItems