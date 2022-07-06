
import Icon from "../_icons/Icon";

import styles from "./Footer.module.scss";

import logo from "../../assets/images/home/logo.png";



const Logo: React.FC = () => {
  return(
    <div>
      <img className={styles.logo} src={logo} />
      <ul className={styles.blockLogo}>
        <li>
          <a href="">
            <Icon icon="header-icon-phone" size={25}/>
            +7 (924) 765 28 20
          </a>
        </li>
        <li>
          <a href="">
            <Icon icon="header-icon-location" size={25}/>
            г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
          </a>
        </li>
        <li>
          <a href="">
            <Icon icon="header-icon-clock" size={25}/>
            Ежедневно с 10:00 до 19:00
          </a>
        </li>
        <li>
          <a href="">
            <Icon icon="footer-icon-inst" size={25}/>
            @hobbyart_dv
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Logo;