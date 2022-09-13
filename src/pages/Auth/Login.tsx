import React from "react";
import cx from "classnames"
import Icon from "../../components/_icons/Icon";
import { useAppDispatch } from "../../redux/store";
import { setLogin, setRegister, setForgot, setToken } from "../../redux/authSlice/slice";
import { useSelector } from "react-redux";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { noScrollBody } from "../../utils/noScrollBody";
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from "./Auth.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss";
import axios from "../../redux/axios.js";



interface ILoging {
  phone: string
  password: string
}

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const { loginFlag } = useSelector(selectorAuthSlice)
  const [error, setError] = React.useState<string>('')
  const [remember , setRemember] = React.useState<boolean>(false)


  const schema = yup.object({
    phone: yup.string().required('Заполните поле'),
    password: yup.string().min(6, 'Пароль должен содержать от 6 символов').required('Заполните поле'),
  }).required();

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ILoging>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });


  const closeLogin = () => {
    dispatch(setLogin(false))
    noScrollBody(false)
    reset()
  }

  const openRegister = () => {
    dispatch(setRegister(true))
    dispatch(setLogin(false))
  }

  const openForgot = () => {
    dispatch(setForgot(true))
    dispatch(setLogin(false))
  }

  const stopPropagation = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation()
  }


  const onSubmit = async ({phone, password}: ILoging) => {
    await axios.post('/login', {
      phone,
      password,
    }).then(response => {
      remember ? localStorage.setItem('token', response.data.token) : sessionStorage.setItem('token', response.data.token)
      dispatch(setToken(response.data.token))
      closeLogin()
      reset()
    }).catch(error => {
      setError('error')
    })
  }

  return(
    <div onClick={closeLogin} className={loginFlag ? styles.background : common.DisplayNone}>
      <form onSubmit={handleSubmit(onSubmit)} onClick={stopPropagation} className={loginFlag ? cx(styles.modal, styles.scale) : styles.modal}>
        <button type="button" onClick={closeLogin} className={styles.close}>
          <Icon className={styles.icon} size={25} icon="close" />
        </button>
        <h2 className={styles.title}>Войти в личный кабинет</h2>
        <div className={styles.blockInput}>
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
              placeholder="Пароль" 
              className={errors.phone ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="password" 
              {...register('password')}
            />
            {errors.password && <p className={common.ErrorMessage}>{errors.password.message}</p>}
            {error && <p className={common.ErrorMessage}>Пользователь не найден</p>}
          </div>
        </div>
        <div className={styles.checkbox}>
          <input onClick={() => {setRemember(!remember)}} className={common.СheckboxBig} type="checkbox" />
          <p>Запомнить меня</p>
        </div>
        <div className={styles.btnWrapper}>
          <button type="submit" className={cx(styles.buttonLogin, common.BtnBackground)}>Войти</button>
          <button type="button" onClick={openForgot} className={styles.buttonForgot}>Забыли пароль?</button>
        </div>
        <p className={styles.text}>Вы еще не зарегистрированы?</p>
        <button onClick={openRegister} type="button" className={cx(styles.buttonRegister, common.BtnGray)}>регистрация</button>
      </form>
    </div>
  )
}

export default Login