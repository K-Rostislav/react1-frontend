import React from "react";
import cx from "classnames";
import { Outlet, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import Icon from "../components/_icons/Icon";
import { useSelector } from "react-redux";
import { selectorAuthSlice } from "../redux/authSlice/selectors";

import styles from "./MainLayout.module.scss";
import common from "../assets/scss/_common-styles/common-styles.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import SidebarFilter from "../components/SidebarFilter";
import SidebarCatalog from "../components/SidebarCatalog";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import { windowScrollPos } from "../utils/windowScrollPos";
import ButtonTop from "../components/ButtonTop";



const MainLayout: React.FC = () => {
  const location = useLocation()

  React.useEffect(() => {
    windowScrollPos()
  }, [location])

	return (
    <>
      <Header />

      <main className={styles.main}>
        {location.pathname !=="/product" &&
        location.pathname !=="/search" && 
        location.pathname !=="/cart" &&<Slider/>}

        {location.pathname !=="/" && location.pathname !=="/search" &&
        <div className={styles.path}>
          <div className={cx(styles.wrapper, common.ContainerPadding)}>
            <p>Главная</p>
            <Icon icon="arrow" size={16}/>
            <p>Каталог</p>
            <Icon icon="arrow" size={16}/>
            <p>Макраме</p>
          </div>
        </div>}

        <div 
        className={cx(`${['/catalog', '/payment', '/bonus-programm', '/about'].includes(location.pathname) && styles.container}`, common.ContainerPadding)}>
          
          <MediaQuery minWidth={1340}>
            {location.pathname == "/catalog" && <SidebarFilter/>}
          </MediaQuery>
          <MediaQuery minWidth={1340}>
            {location.pathname == "/payment" && <SidebarCatalog/>}
            {location.pathname == "/bonus-programm" && <SidebarCatalog/>}
            {location.pathname == "/about" && <SidebarCatalog/>}
          </MediaQuery>

          <Outlet />
        
          <Login />
          <Register />
          <Forgot />

        </div>
        
      </main>

      <Footer/>

      <MediaQuery minWidth={1024}>
        <ButtonTop />
      </MediaQuery>
    </>
	);
}

export default MainLayout;