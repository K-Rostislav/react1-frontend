import React from "react";

import 'swiper/css';

import CategoriesSlider from "./CategoriesSlider";
import Catalog from "./Catalog";
import Experience from "./Experience";
import Galleries from "./Galleries";
import Form from "./Form";
import { useSelector } from "react-redux";
import { selectorSearchSlice } from "../../redux/searchSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { searchListAction } from "../../redux/actions/searchListAction";


const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const { listItem } = useSelector(selectorSearchSlice)

  const isMounted = React.useRef<boolean>(true)

  React.useEffect(() => {
    isMounted.current && dispatch(searchListAction())
    isMounted.current = false
  }, [])

	return(
    <>
      <CategoriesSlider/>
      <Catalog/>
      <Experience/>
      <Galleries/>
      <Form/>
    </>
  );	
}

export default Home;
