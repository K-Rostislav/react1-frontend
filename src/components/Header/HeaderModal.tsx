import React from "react";
import cx from "classnames";

import styles from "./Header.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import ClientNavigation from "./ClientNavigation";
import PagesNavigation from "./PagesNavigation";

const HeaderModal: React.FC = () => {

  const [flag, setFlag] = React.useState<boolean>(false)
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY
    const headerHeight = document.querySelector('.Header_header__6370a')!.clientHeight
    if (scrollPos > headerHeight!) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  })

  return(
    <div className={flag ? cx(styles.headerModal, styles.headerModal_active) : cx(styles.headerModal, styles.headerModal_close)}>
      <div className={cx(styles.container, common.Container)}>
        <PagesNavigation />
        <ClientNavigation />
      </div>
    </div>
  )
}

export default HeaderModal