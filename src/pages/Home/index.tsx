import React from "react";

import 'swiper/css';

import CategoriesSlider from "./CategoriesSlider";
import Catalog from "./Catalog";
import Experience from "./Experience";
import Galleries from "./Galleries";
import Form from "./Form";


const Home: React.FC = () => {
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
