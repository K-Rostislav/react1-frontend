import Icon from "../_icons/Icon";
import styles from "./Header.module.scss";

const Search: React.FC = () => {
  return(
    <div className={styles.search}>
      <input className={styles.search} type="text" placeholder="Поиск товара"/>
      <Icon className={styles.searchIcon} color="#A37C7C" size={15} icon="header-icon-search"/>
  </div>
  );
}

export default Search;