import styles from "./SidebarCatalog.module.scss";

import productImg from "../../assets/images/home/home-product1.png";


const SidebarCatalog: React.FC = () => {
  return(
    <section className={styles.sidebar}>
      <h2 className={styles.title}>Каталог</h2>
      <ul className={styles.list}>
        <li>
          <a href="" className={styles.item}>
            <p className={styles.name}>Макраме</p>
            <div className={styles.img}>
              <img src={productImg}/>
            </div>
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            <p className={styles.name}>Макраме</p>
            <div className={styles.img}>
              <img src={productImg}/>
            </div>
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            <p className={styles.name}>Макраме</p>
            <div className={styles.img}>
              <img src={productImg}/>
            </div>
          </a>
        </li>
        <li>
          <a href="" className={styles.item}>
            <p className={styles.name}>Макраме</p>
            <div className={styles.img}>
              <img src={productImg}/>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SidebarCatalog;