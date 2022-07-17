import React from "react";
import Icon from "../_icons/Icon";
import { useNavigate } from 'react-router';
import { search } from "../../redux/searchSlice/slice";
import { useSelector } from "react-redux";
import { selectorSearchSlice } from "../../redux/searchSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { useDebounce } from "../../redux/debounce/debounce";

import styles from "./Header.module.scss";


const Search: React.FC = () => {

  const [valueSearch, searchValue] = React.useState<string>('')
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const value = useSelector(selectorSearchSlice);
  const debounced = useDebounce(valueSearch, 400);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchValue(event.target.value)
  }

  React.useEffect(() => {
    dispatch(search(debounced))
  }, [debounced])

  const redirect = () => {
    value && navigate('/catalog');
  }


  return(
    <div className={styles.search}>
      <input className={styles.search} type="text" value={valueSearch} onChange={onChange} placeholder="Поиск товара"/>
      <Icon onClick={() => {redirect()}} className={styles.searchIcon} color="#A37C7C" size={15} icon="header-icon-search"/>
    </div>
  );
}

export default Search;