import React from "react";
import cx from "classnames";
import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
import { selectorFilterSlice } from "../../redux/filterSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { filterComposition, filterManufacturer, openSidebar, typeDel } from "../../redux/filterSlice/slice";
import { filterType } from "../../redux/filterSlice/slice";
import axios from "axios";

import styles from "./SidebarFilter.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import { productsAction } from "../../redux/actions/productsAction";


const typeArray = [
  "Шпагаты",
  "Шнуры",
  "Пряжа",
]
const compositionArray = [
  "Трикотажная",
  "Хлопок",
  "Джут",
  "Лён",
]
const manufacturerArray = [
  "Macrametr",
  "Gamma",
  "Zефирка",
  "Arachna",
  "Katia Merino Flame",
  "Сибшнур",
]

const SidebarFilter: React.FC = () => {

  const dispatch = useAppDispatch();
  const {flag, type, composition, manufacturer} = useSelector(selectorFilterSlice);


  const fetch = () => {
    dispatch(productsAction({type, composition, manufacturer}))
  }

  const clear = () => {
    axios.get('http://127.0.0.1:8000/products')
    .then(response => {
      dispatch(productsAction(response.data))
    })
  }


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
              {typeArray.map((item, index) => (
              <li key={index} className={styles.item}>
                <input 
                  onClick={() => {dispatch(filterType(item))}}
                  className={common.Сheckbox} 
                  type="checkbox" 
                />
                <p>{item}</p>
              </li>))
              }
            </ul>
          </div>

          <div className={styles.block}>
            <p className={styles.type}>Состав</p>
            <ul className={styles.list}>
              {compositionArray.map((item, index) => (
                <li key={index} className={styles.item}>
                  <input 
                    onClick={() => {dispatch(filterComposition(item))}} 
                    className={common.Сheckbox} 
                    type="checkbox" 
                  />
                  <p>{item}</p>
                </li>))
              }
            </ul>
          </div>

          <div className={styles.block}>
            <p className={styles.type}>Производитель</p>
            <ul className={styles.list}>
              {manufacturerArray.map((item, index) => (
                <li key={index} className={styles.item}>
                  <input 
                    onClick={() => {dispatch(filterManufacturer(item))}} 
                    className={common.Сheckbox} 
                    type="checkbox" 
                  />
                  <p>{item}</p>
                </li>))
              }
            </ul>
          </div>
        </div>
        <button onClick={fetch} className={cx(styles.view, common.BtnBackground)}>Показать</button>
        <button onClick={clear} className={cx(styles.delete,common.BtnBackgroundNone)}>Очистить</button>

      <p className={styles.result}>Подобрано 6 товаров</p>
    </section>
  );
}

export default SidebarFilter;