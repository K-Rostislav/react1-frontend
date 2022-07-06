import cx from "classnames";

import styles from "./Footer.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";



const Email: React.FC = () => {
  return(
    <div className={styles.blockEmail}>
      <h4 className={styles.title}>Узнавайте первым о новинках и новостях</h4>

      <form className={styles.form} method="POST" action="">
          <input className={styles.input} placeholder="Ваш Email" type="email" />
          <button type="submit" className={cx(common.BtnBackground, styles.button)}>подписаться</button>
      </form>
      <p className={styles.btnPrivacy}>Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
      <p className={styles.privacy}>
          © 2012-2021 ХОББИ АРТ — официальный интернет-магазин товаров для хобби.
          Все права защищены. Условия использования и политика конфиденциальности
      </p>
    </div>
  );
}

export default Email;