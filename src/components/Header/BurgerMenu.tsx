import TopNavigation from "./TopNavigation";
import cx from "classnames";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import PagesNavigation from "./PagesNavigation";
import MediaQuery from "react-responsive";
import Search from "./Search";

type TypeProps = {
  menu: boolean;
  setActiveMenu: any;
}

const BurgerMenu: React.FC<TypeProps> = ({menu, setActiveMenu}) => {
  if(menu){
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  return(
    <div onClick={() => {setActiveMenu(false)}} className={menu ? cx(styles.backgroundBurger, styles.active) : styles.backgroundBurger}>
      <div onClick={(event) => {event.stopPropagation()}} className={styles.burgerMenu}>
        <button className={common.Close} onClick={() => {setActiveMenu(!menu)}}>
          <span className={common.Line1}></span>
          <span className={common.Line2}></span>
        </button>
        <MediaQuery maxWidth={766}>
            <Search/>
        </MediaQuery>
        <PagesNavigation/>
        <TopNavigation/>
      </div>
    </div>
  );
}

export default BurgerMenu;