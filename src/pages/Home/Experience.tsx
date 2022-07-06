import styles from "./Home.module.scss";

import expImg1 from "../../assets/images/home/exp-img1.png";
import expImg2 from "../../assets/images/home/exp-img2.png";
import expImg3 from "../../assets/images/home/exp-img3.png";

type TypeArr = {
  id: number;
  img: string;
  title: string;
  text:string;
}

const Experience: React.FC = () => {
  const arr: TypeArr[] = [
    {id: 1,img: expImg1,title: "Поставщики",text: "Мы работаем только с надежными и проверенными поставщиками товаров для творчества"},
    {id: 2,img: expImg2,title: "товары",text: "Мы привозим актуальные и новые товары, инструменты для вашего творчества по низким ценам"},
    {id: 3,img: expImg3,title: "Бонусы",text: "У нас действует накопительная бонусная система скидок. Дарим в день рождения 500 бонусных рублей"},
  ]

  return(
    <section className={styles.experience}>
      <h2 className={styles.expTitle}>Хобби арт: 9 лет на рынке</h2>
      <ul className={styles.expList}>
        {arr.map((item) => (
        <li className={styles.expItem} key={item.id}>
          <img className={styles.expImg} src={item.img}/>
          <div>
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.itemText}>{item.text}</p>
          </div>
        </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;