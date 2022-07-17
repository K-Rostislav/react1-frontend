import React from "react";
import Icon from "../../components/_icons/Icon";
import cx from "classnames";
import MediaQuery from "react-responsive";
import { useAppDispatch } from "../../redux/store";
import { openSidebar } from "../../redux/filterSlice/slice";
import { useSelector } from "react-redux";
import { selectorFilterSlice } from "../../redux/filterSlice/selectors";
import { selectorProductSlice } from "../../redux/productSlice/selectors";
import { selectorSearchSlice } from "../../redux/searchSlice/selectors";

import styles from "./Catalog.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import Sidebar from "../../components/SidebarFilter";
import Card from "./Card";
import { fetchProducts } from "../../redux/axios/asyncActions";
import { productsType } from "../../redux/productSlice/slice";



const Catalog: React.FC = () => {

  const [sort, setSort] = React.useState<string>('')

  const dispatch = useAppDispatch()
  const {flag, type, composition, manufacturer} = useSelector(selectorFilterSlice)
  const products = useSelector(selectorProductSlice)
  const searchf = useSelector(selectorSearchSlice)

  // const searchUrl = `${search ? `search=${search}` : ""}`
  // const sortUrl = `${filter ? `orderBy=${filter}` : ""}`
  const search = searchf
  const orderBy = sort

  const setFlag = () => {
    dispatch(openSidebar(!flag))
  }

  const asc = () => {
    setSort('asc')
  }
  const desc = () => {
    setSort('desc')
  }

  React.useEffect(() => {
    dispatch(
      fetchProducts({
        search,
        orderBy,
        type,
        composition,
        manufacturer
      })
    )
  }, [search, sort]); 



  return(
    <section className={styles.catalog}>
      <div  className={styles.container}>
        <div className={styles.sort}>
          <MediaQuery maxWidth={1340}>
            <button onClick={setFlag} className={cx(styles.filter, common.BtnGray)}>
              Фильтр
            </button>
          </MediaQuery>
          <button onClick={asc} className={cx(styles.asc, common.BtnGray)}>
            Цена
            <span><Icon className={styles.sortIcon} icon="arrow" size={15}/></span>
          </button>
          <button onClick={desc} className={cx(styles.desc, common.BtnGray)}>
            Цена
            <span><Icon className={styles.sortIcon} icon="arrow" size={15}/></span>
          </button>
        </div>
        <ul className={styles.list}>

        {products.map((item: productsType) => (
          <Card key={item.id}
            id={item.id} 
            name={item.name} 
            image={item.image} 
            price={item.price} 
          />
          ))
        }

        </ul>
      </div>
      <MediaQuery maxWidth={1340}>
        <Sidebar/>
      </MediaQuery>
    </section>
  );
}

export default Catalog;
