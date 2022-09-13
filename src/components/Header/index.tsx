import React, { useRef } from "react";
import MediaQuery from 'react-responsive';
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import mainLogo from "../../assets/images/home/logo.png";

import TopNavigation from "./TopNavigation";
import PagesNavigation from "./PagesNavigation";

import BurgerMenu from "./BurgerMenu";
import ClientNavigation from "./ClientNavigation";
import HeaderModal from "./HeaderModal";

const Header: React.FC = () => {
  const [menu, setActiveMenu] = React.useState(false);
  const headerHeight = useRef<HTMLElement>(null)


  return(
    <header ref={headerHeight} className={styles.header}>

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

          <ClientNavigation/>

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

      <MediaQuery minWidth={1200}>
        <HeaderModal />
      </MediaQuery>

    </header>
  );
}

export default Header;