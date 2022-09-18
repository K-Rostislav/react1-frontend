import React, { useState } from "react";
import Icon from "../_icons/Icon";
import cx from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorCartSlice } from "../../redux/cartSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { setLogin, setSection } from "../../redux/authSlice/slice";
import { noScrollBody } from "../../utils/noScrollBody";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { selectorFavouritesSlice } from "../../redux/favouritesSlice/slectors";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import Search from "../Search";
import MediaQuery from "react-responsive";
import BurgerMenu from "./BurgerMenu";



const ClientNavigation: React.FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { cartItems, totalCount } = useSelector(selectorCartSlice)
  const { favouritesItems, favouritesCount } = useSelector(selectorFavouritesSlice)
  const { token } = useSelector(selectorAuthSlice)
  const [menu, setActiveMenu] = React.useState(false);


  const openLogin = () => {
    dispatch(setLogin(true))
    noScrollBody(true)
  }
  const openFavorites = () => {
    dispatch(setSection('favourites'))
  }


  React.useEffect(() => {
    const json = JSON.stringify(cartItems)
    localStorage.setItem('cart', json)
  }, [cartItems])

  React.useEffect(() => {
    const json = JSON.stringify(favouritesItems)
    localStorage.setItem('favourites', json)
  }, [favouritesItems])

  React.useEffect(() => {
    setActiveMenu(false)
  }, [location])

  return(
    <div className={styles.clientNavigation}>
      <Search />
      {token ?
        <>
          <Link onClick={openFavorites} to="profile" className={cx(common.BtnBackgroundNone, styles.button)}>
            <Icon className={styles.btnIcon} color="#976464" size={15} icon="favourites"/>
            <p className={styles.text}>Избранное</p>
            {favouritesCount !==0 && <div className={cx(styles.count, common.Count)}>{favouritesCount}</div>}
          </Link>
        </>
        :
        <button onClick={openLogin} className={cx(common.BtnBackgroundNone, styles.button)}>
          <Icon className={styles.btnIcon} color="#976464" size={15} icon="header-icon-login"/>
          <p className={styles.text}>Войти</p>
        </button>
      }

      <Link to="/cart" className={cx(common.BtnBackgroundNone, styles.button)}>
        <Icon className={styles.btnIcon} color="#976464" size={15} icon="header-icon-cart"/>
        <p className={styles.text}>Корзина</p>
        {totalCount !==0 && <div className={cx(styles.count, common.Count)}>{totalCount}</div>}
      </Link>

      {token && 
        <Link to="/profile" className={cx(common.BtnBackgroundNone, styles.button)}>
          <p className={styles.text}>Профиль</p>
        </Link>
      }
      <MediaQuery maxWidth={1023}>
        <button onClick={() => {setActiveMenu(!menu)}} className={styles.buttonBurger}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </button>
        <BurgerMenu menu={menu} setActiveMenu={setActiveMenu}/>
      </MediaQuery>
    </div>
  );
}

export default ClientNavigation

function setActiveMenu(arg0: boolean) {
  throw new Error("Function not implemented.");
}
