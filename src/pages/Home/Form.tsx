import React from 'react';
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import cx from "classnames";
import MediaQuery from 'react-responsive';

import styles from "./Home.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";



const Form: React.FC = () => {
  const [value, setValue] = React.useState('');


  return(
    <section className={styles.sectionForm}>
      <MediaQuery minWidth={1920}>
        <p className={cx(common.TextDecor, styles.formDecor)}>Вопросы</p>
      </MediaQuery>

      <h2 className={styles.formTitle}>Есть вопрос? Мы перезвоним!</h2>
      <form className={styles.form} method="POST" action="">
        <input required name="name" placeholder="Ваше имя" className={cx(styles.formName, common.Input)} type="text" />
        <Input name="number" className={cx(styles.formNumber, common.Input)}
          international
          withCountryCallingCode
          country='RU'
          defaultCountry='RU'
          value={value}
          onChange={() => {setValue(value)}}
        />
        <div className={styles.submit}>
          <button className={cx(styles.submitBtn, common.BtnBackground)} type="submit">Отправить</button>
          <p>*нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
        </div>
      </form>

    </section>
  );
}

export default Form;