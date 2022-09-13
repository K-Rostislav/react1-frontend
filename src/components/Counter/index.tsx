import { useAppDispatch } from "../../redux/store"
import { minus, removeItemCart, plus } from "../../redux/cartSlice/slice"

import styles from "./Counter.module.scss"


interface ICount {
  _id: string
  count?: number
}

const Counter: React.FC<ICount> = ({ _id, count }) => {
  const dispatch = useAppDispatch()

  const plusItem = () => {
    dispatch(plus({_id}))
  }

  const minusItem = () => {
    dispatch(minus({_id}))
  }



  return(
    <div className={styles.Counter}>
      <button onClick={minusItem} className={count == 1 ?  styles.disabled : styles.minus}>&minus;</button>
      <p className={styles.result}>{count}</p>
      <button onClick={plusItem} className={styles.plus}>+</button>
    </div>
  )
}

export default Counter