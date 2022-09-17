import React from "react";
import Icon from "../../components/_icons/Icon";

import styles from "./Message.module.scss";





const CartMessage: React.FC = () => {

  return(
    <div className={styles.message}>
      <p>Товар добавлен в корзину</p>
      <div className={styles.icon}>
        <Icon className={styles.complete} icon="complete" color="rgb(0, 202, 0)" />
      </div>
    </div>
  )
}

export default CartMessage;
