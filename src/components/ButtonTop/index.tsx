import React from "react";
import styles from "./ButtonTop.module.scss";
import Icon from "../_icons/Icon";
import cx from "classnames";

const ButtonTop: React.FC = () => {
  const [flag, setFlag] = React.useState<boolean>()

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  window.addEventListener('scroll', () => {
    const elem = document.querySelector('.Header_header__6370a')
    if (window.scrollY > elem?.clientHeight!) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  })

  window.addEventListener('touchmove', () => {
    const elem = document.querySelector('.Header_header__6370a')
    if (window.scrollY > elem?.clientHeight!) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  })


  return(
    <div onClick={scroll} className={flag ? cx(styles.button, styles.active) : styles.button}>
      <Icon className={styles.icon} icon="right"/>
    </div>
  )
}

export default ButtonTop