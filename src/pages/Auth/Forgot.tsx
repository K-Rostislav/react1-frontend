import cx from "classnames"
import Icon from "../../components/_icons/Icon";
import { useAppDispatch } from "../../redux/store";
import { setForgot, setLogin, setRegister } from "../../redux/authSlice/slice";
import { useSelector } from "react-redux";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { noScrollBody } from "../../utils/noScrollBody";
import React, { useEffect } from "react";
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from "./Auth.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss";



interface IForgot {
  email: string
}

const Forgot: React.FC = () => {
  const dispatch = useAppDispatch()
  const { forgotFlag } = useSelector(selectorAuthSlice)


  const schema = yup.object({
    email: yup.string().email('Введите валидный email').required('Заполните поле'),
  }).required();

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IForgot>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });


  const closeForgot = () => {
    dispatch(setForgot(false))
    noScrollBody(false)
  }

  const openRegister = () => {
    dispatch(setRegister(true))
    dispatch(setLogin(false))
  }

  const stopPropagation = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation()
  }

  const onSubmit = (data: IForgot) => {
    console.log(data)
  }

  return(
    <div onClick={closeForgot} className={forgotFlag ? styles.background : common.DisplayNone}>
      <form onSubmit={handleSubmit(onSubmit)} onClick={stopPropagation} className={forgotFlag ? cx(styles.modal, styles.scale) : styles.modal}>
        <button type="button" onClick={closeForgot} className={styles.close}>
          <Icon className={styles.icon} size={25} icon="close" />
        </button>
        <h2 className={styles.title}>Забыли пароль?</h2>
        <div className={cx(styles.blockInput, styles.marginUnset)}>
          <div>
            <input 
              placeholder="E-mail" 
              className={errors.email ? cx(styles.input, common.Input, common.ErrorInput) : cx(styles.input, common.Input)} 
              type="email" 
              {...register('email')}
            />
            {errors.email && <p className={common.ErrorMessage}>{errors.email.message}</p>}
          </div>
        </div>
        <p className={styles.message}>На E-mail придет письмо со ссылкой на смену пароля</p>
        <button type="submit" className={cx(styles.buttonLogin, common.BtnBackground)}>Отправить</button>
      </form>
    </div>
  )
}

export default Forgot