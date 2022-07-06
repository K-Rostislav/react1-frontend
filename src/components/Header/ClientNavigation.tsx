import Icon from "../_icons/Icon";
import cx from "classnames";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

type TypeArray = {
  id: number;
  href: string;
  icon: string;
  text: string;
}

const ClienNavigation: React.FC = () => {
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
    {
      id: 3,
      href: "",
      icon: "header-icon-cart",
      text: "Корзина",
    },
  ];

  return(
    <>
      {arr.map((item) => (
        <a href={item.href} className={cx(common.BtnBackgroundNone, styles.button)} key={item.id}>
          <Icon className={styles.btnIcon} color="#976464" size={15} icon={item.icon}/>
          <p className={styles.text}>{item.text}</p>
        </a>
      ))}
    </>
  );
}

export default ClienNavigation;