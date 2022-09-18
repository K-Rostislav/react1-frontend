import React, { useCallback, useEffect } from "react";
import Icon from "../../components/_icons/Icon";
import cx from "classnames";
import MediaQuery from "react-responsive";
import { useAppDispatch } from "../../redux/store";
import { openSidebar } from "../../redux/filterSlice/slice";
import { useSelector } from "react-redux";
import { selectorFilterSlice } from "../../redux/filterSlice/selectors";
import { selectorProductSlice } from "../../redux/productSlice/selectors";
import { selectorSearchSlice } from "../../redux/searchSlice/selectors";
import { productsAction } from "../../redux/actions/productsAction";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import styles from "./Catalog.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import Sidebar from "../../components/SidebarFilter";
import Card from "../../components/Card";
import Skeleton from "../../components/skeleton";
import { setOrderBy, setSearchParam } from "../../redux/urlSlice/slice";
import { selectorUrlSlice } from "../../redux/urlSlice/selectors";

const Catalog: React.FC = () => {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = React.useState<string>('')
  const dispatch = useAppDispatch()

  const {flag} = useSelector(selectorFilterSlice)
  const {products, status} = useSelector(selectorProductSlice)
  const {orderByParam, searchParam} = useSelector(selectorUrlSlice)
  const {search} = useSelector(selectorSearchSlice)

  const isMounted = React.useRef<boolean>(false)
  const isSearch = React.useRef<boolean>(false)

  const skeletons = [...new Array(8)].map((_, index) => (<li className={styles.skeleton} key={index}><Skeleton/></li>))
  const items = products.map((item) => (
    <Card key={item._id}
      _id={item._id} 
      name={item.name} 
      image={item.image} 
      price={item.price}
    />
  ))

  const fetchProducts = () => {
    const searchUrl = `${searchParam ? `search=${searchParam}` : ''}`
    const orderByUrl = `${orderByParam ? `${searchParam && '&'}orderBy=${orderByParam}` : ''}`
    dispatch(
      productsAction({
        searchUrl,
        orderByUrl,
      })
    )
  }
  const setFlag = () => {
    dispatch(openSidebar(!flag))
  }

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        search: searchParam,
        orderBy: sortBy,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [search, sortBy])
  useEffect(() => {
    if (window.location.search) {
      const queryParse = qs.parse(window.location.search.substring(1))
      dispatch(setOrderBy({
        orderBy: String(queryParse.orderBy),
      }))
      dispatch(setSearchParam({
        search: String(queryParse.search)
      }))
    }
    isSearch.current = true
  }, [search, sortBy])
  useEffect(() => {
    if (isSearch.current) fetchProducts()
  }, [search, orderByParam]); 
  useEffect(() => {
    if (!isSearch.current) fetchProducts()
  }, [search])

  return(
    <section className={styles.catalog}>
      <div  className={styles.container}>
        <div className={styles.sort}>

          <MediaQuery maxWidth={1340}>
            <button onClick={setFlag} className={cx(styles.filter, common.BtnGray)}>
              Фильтр
            </button>
          </MediaQuery>

          <button onClick={() =>setSortBy('asc')} className={cx(styles.asc, common.BtnGray)}>
            Цена
            <span><Icon className={styles.sortIcon} icon="arrow" size={15}/></span>
          </button>
          <button onClick={() => setSortBy('desc')} className={cx(styles.desc, common.BtnGray)}>
            Цена
            <span><Icon className={styles.sortIcon} icon="arrow" size={15}/></span>
          </button>
        </div>

        <ul className={styles.list}>
          {status == 'loading' ? skeletons : items}
        </ul>
        {status == 'error' &&
        <div className={styles.error}>
          <h2>Упс...Что то пошло не так 😞</h2>
        </div>}
        {products.length == 0 && status == 'success' &&
        <div className={styles.notFound}>
          {search.length < 10 ?
            <h2>По запросу "{search}" ничего не найдено</h2>
            :
            <h2>По запросу "{search.slice(0, 10)} . . ." ничего не найдено</h2>
          }
        </div>}

      </div>
      <MediaQuery maxWidth={1340}>
        <Sidebar/>
      </MediaQuery>
    </section>
  );
}

export default Catalog;
