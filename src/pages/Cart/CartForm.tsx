import React from "react";
import { useForm, SubmitHandler  } from "react-hook-form"
import cx from "classnames"
import Input from 'react-phone-number-input/input'

import styles from "./Cart.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss"



type IAddress = {
  street: string
  house: string
  flat: string
  index: number
}

interface IForm {
  city: string
  address: IAddress
  comments: string
  surename: string
  name: string
  patronymic: string
  number: number
  email: string
  radio: string
}

const CartForm: React.FC = () => {

  const [value, setValue] = React.useState<string>('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>({mode: 'onChange'});
  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data)
    reset()
  }



	return(
		<form id="cartForm" className={styles.form} onSubmit={handleSubmit(onSubmit)}>

			<div>
				<h2 className={styles.title}>Способ получения</h2>

				<div className={styles.city}>

					<input
						className={errors?.city ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						placeholder="Город"
						{...register('city', {
							required: true
						})}
					/>
					<input
						className={errors?.city ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text"  
						placeholder="Почта россии"
						{...register('city', {
							required: true
					})}
					/>

				</div>

				<div className={styles.address}>
					<input 
						placeholder="Улица" 
						className={errors?.city ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text"
						{...register('address.street', {
							required: true
						})}
					/>

					<input 
						placeholder="Дом" 
						className={errors?.city ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)} 
						type="text" 
						{...register('address.house', {
							required: true
						})}
					/>

					<input 
						placeholder="Квартира" 
						className={errors?.address?.house ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text" 
						{...register('address.flat', {
							required: true
						})}
					/>

					<input 
						placeholder="Индекс" 
						className={errors?.address?.index ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text" 
						{...register('address.index', {
							required: true
						})}
					/>
				</div>

				<input 
					placeholder="Добавить комментарий" 
					className={cx(styles.input, common.Input)}
					type="text" 
				/>
			</div>
			
			<div>
				<h2 className={styles.title}>Данные получателя</h2>

				<div className={styles.name}>
					<input 
						placeholder="Фамилия" 
						className={errors?.surename ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text"
						{...register('surename', {
							required: true
						})}
					/>
					<input 
						placeholder="Имя" 
						className={errors?.name ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text"
						{...register('name', {
							required: true
						})}
					/>

					<input 
						placeholder="Отчество"
						className={errors?.patronymic ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="text" 
						{...register('patronymic', {
							required: true
						})}
					/>

				</div>

				<div className={styles.wrapper}>
					<input 
						className={errors?.number ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						placeholder="Введите номер"
						type="number"
						{...register('number', {
							required: true
						})}
					/>

					<p className={styles.text}>По этому номеру телефона мы с вяжемся с вами для подтверждения заказа</p>
				</div>

				<div className={styles.wrapper}>
					<input
						placeholder="E-mail" 
						className={errors?.email ? cx(styles.errorInput, styles.input, common.Input) : cx(styles.input, common.Input)}
						type="email" 
						{...register('email', {
						required: true,
						pattern: {
							value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: "Введите валидный email"
						}
					})}
					/>
					{errors?.email && (
						<p style={{color: 'red'}}>{errors.email.message}</p>
					)}
					<p className={styles.text}>На эту почту вам придет письмо с составом заказа, а так же трэк-номер для его отслеживания</p>
				</div>

				<div className={styles.wrapperCheckbox}>
					<input className={common.СheckboxBig} type="checkbox" />
					<p>Подписаться на рассылку новинок и акций</p>
				</div>
			</div>
			
			<div>
				<h2 className={styles.title}>Способ оплаты</h2>

				<div className={styles.wrapperRadio}>
					<input 
						className={common.Radio} 
						value="Оплата при получении наличными или картой" 
						type="radio" 
						name="radio"
						defaultChecked
					/>
					<p>Оплата при получении наличными или картой</p>
				</div>
				<div className={styles.wrapperRadio}>
					<input 
						className={common.Radio} 
						name="radio"
						value="Оплата банковской картой онлайн" 
						type="radio"
					/>
					<p>Оплата банковской картой онлайн</p>
				</div>
			</div>
		</form>
	)
}

export default CartForm