import React from "react";
import cx from "classnames";
import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
import { selectorFilterSlice } from "../../redux/filterSlice/selectors";
import { selectorProductSlice } from "../../redux/productSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { filterComposition, filterManufacturer, openSidebar, typeDel } from "../../redux/filterSlice/slice";
import { useNavigate } from "react-router-dom";
import { filterType } from "../../redux/filterSlice/slice";

import styles from "./SidebarFilter.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import { fetchProducts } from "../../redux/axios/asyncActions";


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

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {flag, type, composition, manufacturer} = useSelector(selectorFilterSlice);


  const fetch = () => {
    // axios.get('http://127.0.0.1:8000/products?',{
    //   params: {
    //     filter: ['Шнуры', 'Шпагаты'],
    //   }
    // }).then(response => {
    //   console.log(response)
    // })
    // dispatch(
    //   fetchProducts({
    //     filter
    //   })
    // )
    dispatch(fetchProducts({type, composition, manufacturer}))
  }

  const toggle = (product: string) => {
    if(type.includes(product)){
      dispatch(typeDel(product))
    } else {
      dispatch(filterType(product))
    }
    console.log(type)
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
                  onClick={() => {toggle(item)}} 
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
        <button className={cx(styles.delete,common.BtnBackgroundNone)}>Очистить</button>

      <p className={styles.result}>Подобрано 6 товаров</p>
    </section>
  );
}

export default SidebarFilter;