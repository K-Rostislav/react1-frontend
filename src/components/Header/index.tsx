import React from "react";
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import mainLogo from "../../assets/images/home/logo.png";

import TopNavigation from "./TopNavigation";
import PagesNavigation from "./PagesNavigation";
import ClienNavigation from "./ClientNavigation";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search";

const Header: React.FC = () => {
  const [menu, setActiveMenu] = React.useState(false);


  return(
    <header className={styles.header}>

      <MediaQuery minWidth={1024}>
      <div className={styles.headerTop}>
        <div className={common.ContainerPadding}>
            <TopNavigation/>
        </div>
      </div>
      </MediaQuery>

      <div className={styles.headerBottom}>

        <MediaQuery minWidth={1580}>
          <PagesNavigation/>
        </MediaQuery>

        <Link to="/">
        <div className={styles.logo}>
          <img src={mainLogo} alt="Хобби арт" />
        </div>
        </Link>

        <div className={styles.navigationClient}>

          <MediaQuery minWidth={767}>
            <Search/>
          </MediaQuery>

          <ClienNavigation/>

          <MediaQuery maxWidth={1024}>
            <button onClick={() => {setActiveMenu(!menu)}} className={styles.buttonBurger}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </button>
            <BurgerMenu menu={menu} setActiveMenu={setActiveMenu}/>
          </MediaQuery>

        </div>
      </div>

      <MediaQuery maxWidth={1580} minWidth={1024}>
        <div className={styles.adaptive}>
          <PagesNavigation/>
        </div>
      </MediaQuery>

    </header>
  );
}

export default Header;