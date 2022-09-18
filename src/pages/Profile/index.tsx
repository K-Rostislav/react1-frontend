import React, { ReactNode } from "react";
import cx from "classnames";
import Icon from "../../components/_icons/Icon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorFavouritesSlice } from "../../redux/favouritesSlice/slectors";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { profileAction } from "../../redux/actions/profileAction";
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { setModal, setSection, setUser } from "../../redux/authSlice/slice";
import * as yup from "yup";

import styles from "./Profile.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

import Card from "../../components/Card";
import { setToken } from "../../redux/authSlice/slice";
import axios from "../../redux/axios";
import UploadModal from "./UploadModal";

interface IForm {
  name: string
  surename: string
  patronymic: string
  phone: string
  email: string
}

const Profile: React.FC = () => {
  const schema = yup.object({
    name: yup.string(),
    surename: yup.string(),
    patronymic: yup.string(),
    phone: yup.string(),
    email: yup.string().email('Введите валидный email'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [input, setInput] = React.useState<string>('')
  const { favouritesItems } = useSelector(selectorFavouritesSlice)
  const { user, token, profileSection } = useSelector(selectorAuthSlice)

  const data = [
    {
      id: 1,
      name: 'Имя',
      placeholder: user?.name,
      register: 'name',
      errors: errors.name,
      message: errors.name?.message
    },
    {
      id: 2,
      name: 'Фамилия',
      placeholder: user?.surename,
      register: 'surename',
      errors: errors.surename,
    },
    {
      id: 3,
      name: 'Отчество',
      placeholder: user?.patronymic,
      register: 'patronymic',
      errors: errors.patronymic,
    },
    {
      id: 4,
      name: 'Номер',
      placeholder: user?.phone,
      register: 'phone',
      errors: errors.phone,
    },
    {
      id: 5,
      name: 'E-mail',
      placeholder: user?.email,
      register: 'email',
      errors: errors.email,
    },
  ]

  const logout = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    dispatch(setToken(''))
    navigate('/')
  } 
  const openMyData = () => {
    dispatch(setSection('myData'))
  }
  const openFavourites = () => {
    dispatch(setSection('favourites'))
  }
  const openModal = () => {
    dispatch(setModal(true))
  }
  const openInput = (nameInput: string) => {
    setInput(nameInput)
  }
  const blurInput = () => {
    setInput('')
  }
  const onSubmit = async ({surename, name, patronymic, email, phone}: any) => {
    await axios.patch('/me/edit', {
      _id: user?._id,
      surename: surename ? surename : user?.surename,
      name: name ? name : user?.name,
      patronymic: patronymic ? patronymic : user?.patronymic,
      email: email ? email : user?.email,
      phone: phone ? Number(phone) : Number(user?.phone),
    },
    {
      headers: {
        authorization: token
      }
    }).then(response => {
      dispatch(setUser(response.data))
      setInput('')
    })
  }

  React.useEffect(() => {
    !user && dispatch(profileAction(token!))
  }, [])

  if(!user){
    return <h1>Загрузка...</h1>
  }

  return(
    <section className={styles.profile}>
      <h2 className={styles.title}>личный кабинет</h2>
      <div className={styles.grid}>
        <div className={styles.block}>
          <div className={styles.user}>
            <div className={styles.img}>
              <div onClick={openModal} className={styles.img__wrapper}>
                {user.avatarUrl ?
                <img src={user.avatarUrl} alt="" />
                :
                <img src="https://via.placeholder.com/100x100" alt="" />
                }
              </div>
              <div className={styles.add}>
                <span></span>
                <span></span>
              </div>
            </div>
            <p className={styles.name}>{user!.name} {user!.patronymic}</p>
          </div>
          <nav>
            <ul className={styles.navigation}>
              <li onClick={openMyData} className={styles.navItem}>Мои данные</li>
              <li onClick={openFavourites} className={styles.navItem}>Избранные товары</li>
              <li className={styles.navItem}>История заказов</li>
              <li className={styles.navItem}>Отзывы</li>
            </ul>
          </nav>
          <button onClick={logout} className={styles.back}>Выйти из личного кабинета</button>
        </div>

        {profileSection == 'myData' &&
          <div className={styles.block}>
            <h2 className={cx(styles.name, styles.name_margin)}>Мои данные</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.profileData}>

                {data.map((item) => (
                  <div key={item.id} className={input == item.register ? cx(styles.input, styles.input_active, common.Input) : cx(styles.input, common.Input)}>
                    <p className={styles.nameInput}>{item.name}:</p>
                    <input
                      type="text"
                      placeholder={String(item.placeholder)}
                      {...register(item.register)}
                    />
                    {input == item.register ?
                      <div className={styles.flex}>
                        <Icon onClick={blurInput} className={styles.icon_save} icon="complete" />
                      </div>
                      :
                      <div onClick={() => {openInput(item.register)}} className={styles.edit}>
                        <Icon className={styles.icon} icon="edit" />
                        Изменить
                      </div>
                    }
                    {item.errors && <p className={cx(styles.errorMessage,common.ErrorMessage)}><>{item.errors.message}</></p>}
                  </div>
                ))}

              </div>
              <button type="submit" className={cx(styles.save, common.BtnBackground)}>Сохранить данные</button>
            </form>
          </div>
        }
        {profileSection == 'favourites' &&
          <div className={styles.block}>
            <h2 className={cx(styles.name, styles.name_margin)}>Избранные товары</h2>
            <ul className={styles.grid_items}>
              {favouritesItems.map((item) => (
                <Card 
                  key={item._id} 
                  _id={item._id} 
                  name={item.name} 
                  image={item.image} 
                  price={item.price}
                />
              ))}
              {favouritesItems.length == 0 &&
                <h2>Здесь пока ничего нет</h2>
              }
            </ul>
          </div>
        }
      </div>
      
      <UploadModal />

    </section>
  )
}

export default Profile