import styles from "./Bonus.module.scss";



const Bonus: React.FC = () => {
  return(
    <section className={styles.bonus}>
      <h2 className={styles.title}>Бонусная программа</h2>
      <p className={styles.text}>
        Что такое Бонусная программа?<br/>
        <br/>Мы полагаем, что каждая покупка должна вам приносить не только радость, но и выгоду! Поэтому, мы создали для вас бонусную программу, которая позволит вам вернуть до 10 % от стоимости товаров к себе на счет.<br/>
        <br/>Вы совершаете покупки и автоматически получаете бонусы на свой бонусный счет
        Используя накопленные бонусы, можно получить скидку до 50% стоимости новых покупок.
        Как работает бонусная программа?<br/>
        <br/>Становясь участником нашей бонусной программы, вы получаете часть от стоимости покупок в виде бонусных рублей, которыми можно оплатить до 50% стоимости в чеке.*<br/>
        <br/>Бонусными рублями можно воспользоваться только при оплате заказа в интернет-магазине.***<br/>
        <br/>Бонусный рубль - условная единица. 1 бонусный рубль = 1 ₽ скидки<br/>
      </p>
      <p className={styles.text}>
        За что мне начислят бонусы?<br/>
        За покупки Акции
      </p>
      <p className={styles.text}>
        Как долго я могу хранить свои бонусные рубли?<br/>
        Срок жизни баллов 1 год. После этого они аннулируются.
      </p>
      <p className={styles.text}>
        Какие правила использования бонусов?<br/>
        Вы можете оплачивать бонусными рублями до 50% от стоимости товаров. Нельзя обменивать бонусы на рубли, нельзя продавать их, передаривать.
      </p>
      <p className={styles.text}>
        Как воспользоваться бонусами?<br/>
        При оформлении заказа, под выбором способа оплаты, будут отображаться бонусы (Подробнее). Для того, чтобы воспользоваться бонусами, нужно выбрать "Использовать" (Подробнее). После применения бонусов, скидка отобразится в поле "Скидка за бонусы" (Подробнее).
      </p>
      <p className={styles.text}>
        Когда мне начислят бонусы?<br/>
        Бонусы начисляются после получения заказа.
      </p>
    </section>
  );
}

export default Bonus;