import cx from "classnames";
import MediaQuery from "react-responsive";

import styles from "./Home.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import Product from "./Products";



const Catalog: React.FC = () => {

  return(
    <section className={styles.catalog}>
      <MediaQuery minWidth={1920}>
        <p className={cx(common.TextDecor, styles.catalogDecor)}>Каталог</p>
      </MediaQuery>
        <h2 className={styles.catalogTitle}>Каталог товаров</h2>
        <Product/>
    </section>
  );
}

export default Catalog;