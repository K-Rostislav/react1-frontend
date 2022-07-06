import cx from "classnames";
import Icon from "../_icons/Icon";
import MediaQuery from "react-responsive";

import styles from "./Footer.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import Email from "./Email";
import Logo from "./Logo";



const Footer: React.FC = () => {
  return(
    <footer className={styles.footer}>
      <div className={cx(common.ContainerPadding, styles.grid)}>
        <MediaQuery minWidth={1370}>
          <Logo/>
        </MediaQuery>
        <ul className={styles.blockLinks}>
          <li><a href="">Каталог</a></li>
          <li><a href="">Акции</a></li>
          <li><a href="">Новинки</a></li>
          <li><a href="">Популярное</a></li>
          <li><a href="">Гарантия и возврат</a></li>
        </ul>
        <ul className={styles.blockLinks}>
          <li><a href="">Оплата и доставка</a></li>
          <li><a href="">Бонусная программа</a></li>
          <li><a href="">О компании</a></li>
          <li><a href="">Преимущества</a></li>
          <li><a href="">Личный кабинет</a></li>
        </ul>
        <MediaQuery minWidth={1620}>
          <Email/>
        </MediaQuery>

        <MediaQuery maxWidth={1370}>
          <Logo/>
        </MediaQuery>
        <MediaQuery maxWidth={1620}>
          <Email/>
        </MediaQuery>
      </div>
    </footer>
  );
}

export default Footer;