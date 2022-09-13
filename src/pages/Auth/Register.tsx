import React from "react";
import cx from "classnames"
import Icon from "../../components/_icons/Icon";
import { useAppDispatch } from "../../redux/store";
import { setLogin, setRegister, setToken } from "../../redux/authSlice/slice";
import { useSelector } from "react-redux";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { noScrollBody } from "../../utils/noScrollBody";
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "../../redux/axios.js";

import styles from "./Auth.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss";




interface IRegister {
  name: string
  surename: string
  patronymic: string
  phone: string
  email: string
  password: string
  confirm_password: string
}

const Register: React.FC = () => {
  const dispatch = useAppDispatch()
  const { registerFlag } = useSelector(selectorAuthSlice)

  const closeRegister = () => {
    dispatch(setRegister(false))
    noScrollBody(false)
  }

  const stopPropagation = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation()
  }

  const openLogin = () => {
    dispatch(setRegister(false))
    dispatch(setLogin(true))
  }


  const schema = yup.object({
    name: yup.string().required('Заполните поле'),
    surename: yup.string().required('Заполните поле'),
    patronymic: yup.string().required('Заполните поле'),
    phone: yup.string().required('Заполните поле'),
    email: yup.string().email('Введите валидный email').required('Заполните поле'),
    password: yup.string().min(6, 'Пароль должен содержать от 6 символов').required('Заполните поле'),
    confirm_password: yup.string().oneOf([yup.ref('password')], 'Пароль не совпадает').required('Заполните поле')
  }).required();

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IRegister>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const onSubmit = async ({surename, name, patronymic, email, phone, password}: IRegister) => {
    await axios.post('/register', {
      surename,
      name,
      patronymic,
      email,
      phone: Number(phone),
      password,
    }).then(response => {
      localStorage.setItem('token', response.data.token)
      dispatch(setToken(response.data.token))
    })
    localStorage.getItem('token') && closeRegister() 
  }

  return(
    <div onClick={closeRegister} className={registerFlag ? styles.background : common.DisplayNone}>
      <form onSubmit={handleSubmit(onSubmit)} onClick={stopPropagation} className={registerFlag ? cx(styles.scale, styles.modal) : styles.modal}>
        <button type="button" onClick={closeRegister} className={styles.close}>
          <Icon className={styles.icon} size={25} icon="close" />
        </button>
        <h2 className={styles.title}>Регистрация</h2>

        <div className={cx(styles.blockInput, styles.marginBottom)}>
          <div>
            <input 
              placeholder="Имя" 
              className={errors.name ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="text"
              {...register('name')}
            />
            {errors.name && <p className={common.ErrorMessage}>{errors.name.message}</p>}
          </div>
          <div>
            <input 
              placeholder="Фамилия" 
              className={errors.surename ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="text" 
              {...register('surename')}
            />
            {errors.surename && <p className={common.ErrorMessage}>{errors.surename.message}</p>}
          </div>
          <div>
            <input 
              placeholder="Отчество" 
              className={errors.patronymic ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="text" 
              {...register('patronymic')}
            />
            {errors.patronymic && <p className={common.ErrorMessage}>{errors.patronymic.message}</p>}
          </div>
          <div>
            <input 
              placeholder="Номер телефона" 
              className={errors.phone ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="text" 
              {...register('phone')}
            />
            {errors.phone && <p className={common.ErrorMessage}>{errors.phone.message}</p>}
          </div>
          <div>
            <input 
              placeholder="E-mail" 
              className={errors.email ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="email" 
              {...register('email')}
            />
            {errors.email && <p className={common.ErrorMessage}>{errors.email.message}</p>}
          </div>
          <div>
            <input 
              placeholder="Придумайте пароль" 
              className={errors.password ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="password" 
              {...register('password')}
            />
            {errors.password && <p className={common.ErrorMessage}>{errors.password.message}</p>}
          </div>
          <div>
            <input 
              placeholder="Повторите пароль" 
              className={errors.password ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="password" 
              {...register('confirm_password')}
            />
            {errors.confirm_password && <p className={common.ErrorMessage}>{errors.confirm_password.message}</p>}
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <button type="submit" className={cx(styles.buttonLogin, common.BtnBackground)}>Зарегистрироваться</button>
        </div>
        <div className={styles.flex}>
          <p className={cx(styles.text, styles.marginUnset)}>Есть аккаунт? </p>
          <button onClick={openLogin} type="button" className={cx(styles.buttonRegister, common.BtnGray)}>войти</button>
        </div>
      </form>
    </div>
  )
}

export default Register