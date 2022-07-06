import Icon from "../_icons/Icon";

import styles from "./Header.module.scss";


type TypeArray = {
  id: number;
  href: string;
  icon: string;
  text: string;
}

const TopNavigation: React.FC = () => {
  const arr: TypeArray[] = [
    {
      id: 1,
      href: "tel:+79247652820",
      icon: "header-icon-phone",
      text: "+7 (924) 765 28 20",
    },
    {
      id: 2,
      href: "",
      icon: "header-icon-location",
      text: "г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”",
    },
    {
      id: 3,
      href: "",
      icon: "header-icon-clock",
      text: "Ежедневно с 10:00 до 19:00",
    },
  ];

  return(
      <ul className={styles.list}>
      {arr.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <a href={item.href}>
            <Icon className={styles.topListIcon} icon={item.icon} size={14} color="white"/>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TopNavigation;