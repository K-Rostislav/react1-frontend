import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

type TypeArray = {
    id: number;
    text: string;
    link: string;
  }


const PagesNavigation: React.FC = () => {
  const arr: TypeArray[] = [
    {
      id: 1,
      text: "Главная",
      link: '/',
    },
    {
      id: 2,
      text: "Каталог",
      link: 'catalog',
    },
    {
      id: 3,
      text: "Оплата и доставка",
      link: 'payment',
    },
    {
      id: 4,
      text: "Бонусная программа",
      link: 'bonus-programm',
    },
    {
      id: 5,
      text: "О компании",
      link: 'about',
    },
  ];

  return (
    <nav className={styles.navigationPages}>
      <ul className={styles.navList}>
        {arr.map((item) => (
          <li className={styles.navItem} key={item.id}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PagesNavigation;