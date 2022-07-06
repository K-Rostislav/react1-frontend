import React, { useState } from "react";
import { ImageViewer } from "react-image-viewer-dv";

import styles from "./Home.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import galleryImg1 from "../../assets/images/home/gallery-img1.jpg";
import galleryImg2 from "../../assets/images/home/gallery-img2.jpg";
import galleryImg3 from "../../assets/images/home/gallery-img3.jpg";
import galleryImg4 from "../../assets/images/home/gallery-img4.jpg";
import galleryImg5 from "../../assets/images/home/gallery-img5.jpg";
import galleryImg6 from "../../assets/images/home/gallery-img6.jpg";

const Galleries: React.FC = () => {

 return(
  <section className={styles.gallery}>
    <h2 className={styles.galleryTitle}>Галерея</h2>
    <ul className={styles.gridGallery}>
      <li className={styles.galleryItem1}>
        <ImageViewer>
            <img src={galleryImg1} />
        </ImageViewer>
      </li>
      <li className={styles.galleryItem2}>
        <ImageViewer>
            <img src={galleryImg2} />
        </ImageViewer>
      </li>
      <li className={styles.galleryItem3}>
        <ImageViewer>
            <img src={galleryImg3} />
        </ImageViewer>
      </li>
      <li className={styles.galleryItem4}>
        <ImageViewer>
            <img src={galleryImg4} />
        </ImageViewer>
      </li>
      <li className={styles.galleryItem5}>
        <ImageViewer>
            <img src={galleryImg5} />
        </ImageViewer>
      </li>
      <li className={styles.galleryItem6}>
        <ImageViewer>
            <img src={galleryImg6} />
        </ImageViewer>
      </li>
    </ul>
  </section>
 );
}

export default Galleries;