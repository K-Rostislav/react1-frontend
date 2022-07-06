import styles from "./Home.module.scss";

import productImg from "../../assets/images/home/home-product1.png";


type TypeArray = {
  id: number;
  name: string;
  price: number;
  img: string;
}

const Product: React.FC = () => {
  const arr: TypeArray[] = [
    {id: 1,name: "Макраме",price: 250,img: productImg},
    {id: 2,name: "Макраме",price: 250,img: productImg},
    {id: 3,name: "Макраме",price: 250,img: productImg},
    {id: 4,name: "Макраме",price: 250,img: productImg},
    {id: 5,name: "Макраме",price: 250,img: productImg},
    {id: 6,name: "Макраме",price: 250,img: productImg},
    {id: 7,name: "Макраме",price: 250,img: productImg},
    {id: 8,name: "Макраме",price: 250,img: productImg},
  ]

  return(
    <ul className={styles.products}>
    {arr.map((item) => (
      <li key={item.id}>
        <a className={styles.product} href="">
            <p className={styles.productName}>{item.name}</p>
            <p className={styles.productPrice}>от {item.price} ₽</p>
            <p className={styles.productText}>Подробнее</p>
            <img className={styles.productImg} src={item.img} />
        </a>
      </li>))}
    </ul>
  );
}

export default Product;