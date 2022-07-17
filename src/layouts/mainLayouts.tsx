import React from "react";
import cx from "classnames";
import { Outlet, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import Icon from "../components/_icons/Icon";

import styles from "./MainLayout.module.scss";
import common from "../assets/scss/_common-styles/common-styles.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import SidebarFilter from "../components/SidebarFilter";
import SidebarCatalog from "../components/SidebarCatalog";



const MainLayout: React.FC = () => {
  const location = useLocation();

	return (
    <>
      <Header />

      <main className={styles.main}>
        {
          location.pathname !=="/product" &&
          location.pathname !=="/search" && 
          location.pathname !=="/cart" && <Slider/>
        }
        {
        location.pathname !=="/" && location.pathname !=="/search" &&
        <div className={styles.path}>
          <div className={cx(styles.wrapper, common.ContainerPadding)}>
            <p>Главная</p>
            <Icon icon="arrow" size={16}/>
            <p>Каталог</p>
            <Icon icon="arrow" size={16}/>
            <p>Макраме</p>
          </div>
        </div>
        }

        <div className={cx(`${location.pathname !== "/" && styles.container}`, common.ContainerPadding)}>
          <MediaQuery minWidth={1340}>
            {location.pathname == "/catalog" && <SidebarFilter/>}
          </MediaQuery>
          <MediaQuery minWidth={1340}>
            {location.pathname == "/payment" && <SidebarCatalog/>}
            {location.pathname == "/bonus-programm" && <SidebarCatalog/>}
            {location.pathname == "/about" && <SidebarCatalog/>}
          </MediaQuery>
          <Outlet />
        </div>
        
      </main>

      <Footer/>
    </>
	);
}

export default MainLayout;