import React, { useEffect } from "react";
import Icon from "../_icons/Icon";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorSearchSlice } from "../../redux/searchSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { IItemsCart } from "../../redux/cartSlice/slice";
import cx from "classnames";
import { searchListAction } from "../../redux/actions/searchListAction";

import styles from "./Search.module.scss";
import { setSearchParam } from "../../redux/urlSlice/slice";
import { selectorUrlSlice } from "../../redux/urlSlice/selectors";
import { setSearch } from "../../redux/searchSlice/slice";


const Search: React.FC = () => {
  const [searchValue, setSeacrhValue] = React.useState<string>('')
  const [flag, setFlag] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState<boolean>(false)
  const [dropList, setDropList] = React.useState<any>([])

  const location = useLocation()
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {listItem} = useSelector(selectorSearchSlice)
  const {searchParam} = useSelector(selectorUrlSlice)

  const inputRef = React.useRef<HTMLInputElement>(null)
  const searchRef = React.useRef<HTMLDivElement>(null)
  const dropListRef = React.useRef<HTMLUListElement>(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeacrhValue(event.target.value)
    if (searchValue && !flag) {
      setFlag(true)
    }
    searchValue && setDropList(listItem.filter(item => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
  }
  const searchFunc = (name: string) => {
    dispatch(setSearchParam({search: name}))
    dispatch(setSearch(name))
    console.log(name)
    setSeacrhValue(name)
    searchParam && navigate('/catalog')
    setFlag(false)
  }
  const handleClickOutside = (event: any) => {
    if (open && !flag) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpen(false)
      }
    } 
    if (open && flag) {
      if (searchRef.current && !searchRef.current.contains(event.target) && dropListRef.current && !dropListRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
  }
  const openModal = (event: any) => {
    event.stopPropagation()
    setOpen(!open)
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key == 'Enter') {
      searchParam && navigate('/catalog')
      dispatch(setSearch(searchValue))
      dispatch(setSearchParam({search: searchValue}))
    }
  }
   



  React.useEffect(() => {
    if(location.pathname == '/' && open == false) {
      setSeacrhValue('')
      return
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [open, flag])

  React.useEffect(() => {
    dispatch(searchListAction())
  }, [])



  return(
    <>
      <div ref={searchRef} className={open ? cx(styles.modal, styles.modal_active) : styles.modal}>
        <div className={styles.flex}>
          <input 
            className={styles.input}
            ref={inputRef} 
            onKeyPress={handleKeyPress}
            type="text" 
            value={searchValue} 
            onChange={onChange} 
            placeholder="Поиск товара"
          />

          {searchValue && 
            <Icon 
              onClick={(event) => {setSeacrhValue(''); event.stopPropagation()}}
              className={styles.close} size={18} 
              icon="close" 
            />
          }

        </div>
      </div>
      
      <Icon 
        className={styles.search_icon} 
        color="#A37C7C"
        icon="header-icon-search"
        onClick={openModal}
        size={25}
      />

      {open && searchValue && dropList.length > 0 && flag &&
        <ul ref={dropListRef} className={styles.dropList}>
          {dropList.map((item: IItemsCart) => (
            <li 
              onClick={() => searchFunc(item.name)} 
              className={styles.dropList_item} 
              key={item._id}>{item.name}
            </li>
            ))}
        </ul>
      }
    </>
  );
}

export default Search;

