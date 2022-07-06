import cx from "classnames";
import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
import { selectorFilterSlice } from "../../redux/filterSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { openSidebar } from "../../redux/filterSlice/slice";

import styles from "./SidebarFilter.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";



const SidebarFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const flag = useSelector(selectorFilterSlice);

  return(
    <section className={flag ? cx(styles.sidebar, styles.sidebarActive) : styles.sidebar}>
      <MediaQuery maxWidth={1340}>
      <button onClick={() => {dispatch(openSidebar(false))}} className={cx(styles.close, common.Close)}>
        <span className={common.Line1}></span>
        <span className={common.Line2}></span>
      </button>
      </MediaQuery>
      <div className={styles.flex}>
        <div className={styles.block}>
          <p className={styles.type}>Тип изделий</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Шпагат, шнуры, веревки</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Кольца, бусины</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Джут</p>
            </li>
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.type}>Состав</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Трикотажная</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Шерсть</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Хлопок</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Меринос</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Альпака</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Мохер</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Вискоза</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Кашемир</p>
            </li>
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.type}>Производитель</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Macrametr</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Гамма</p>
            </li>
            <li className={styles.item}>
              <input className={styles.checkbox} type="checkbox" />
              <p>Сибшнур</p>
            </li>
          </ul>
        </div>
      </div>
      <button className={cx(styles.view, common.BtnBackground)}>Показать</button>
      <button className={cx(styles.delete,common.BtnBackgroundNone)}>Очистить</button>
      <p className={styles.result}>Подобрано 6 товаров</p>
    </section>
  );
}

export default SidebarFilter;