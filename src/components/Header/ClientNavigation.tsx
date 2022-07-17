import React from "react";
import Icon from "../_icons/Icon";
import cx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorCartSlice } from "../../redux/carttSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { calcTotalCount } from "../../utils/calcTotalCount";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";


const arr: TypeArray[] = [
  {
    id: 1,
    href: "",
    icon: "header-icon-login",
    text: "Войти",
  },
  {
    id: 2,
    href: "",
    icon: "favourites",
    text: "Избранное",
  },
];

type TypeArray = {
  id: number;
  href: string;
  icon: string;
  text: string;
}

const ClienNavigation: React.FC = () => {
  const dispatch = useAppDispatch()
  const { items, totalCount } = useSelector(selectorCartSlice)


  React.useEffect(() => {
    const json = JSON.stringify(items)
    localStorage.setItem('cart', json)
  }, [items])


  return(
    <>
      {arr.map((item) => (
        <Link to={item.href} className={cx(common.BtnBackgroundNone, styles.button)} key={item.id}>
          <Icon className={styles.btnIcon} color="#976464" size={15} icon={item.icon}/>
          <p className={styles.text}>{item.text}</p>
        </Link>
      ))}
      <Link to="/cart" className={cx(common.BtnBackgroundNone, styles.button)}>
        <Icon className={styles.btnIcon} color="#976464" size={15} icon="header-icon-cart"/>
        <p className={styles.text}>Корзина</p>
        {totalCount !==0 && <div className={cx(styles.count, common.Count)}>{totalCount}</div>}
      </Link>
    </>
  );
}

export default ClienNavigation;
