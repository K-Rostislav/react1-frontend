import React from "react"
import cx from "classnames"
import Icon from "../../components/_icons/Icon"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectorFavouritesSlice } from "../../redux/favouritesSlice/slectors"
import { selectorAuthSlice } from "../../redux/authSlice/selectors"
import { useAppDispatch } from "../../redux/store"
import { profileAction } from "../../redux/actions/profileAction"
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"


import styles from "./Profile.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss"

import Card from "../../components/Card"
import { setToken } from "../../redux/authSlice/slice"
import InputMyData from "./InputMyData"
import axios from "../../redux/axios"

// interface IForm {
//   name: string
//   surename: string
//   patronymic: string
//   phone: string
//   email: string
// }

const Profile: React.FC = () => {
  const schema = yup.object({
    name: yup.string().required('Заполните поле'),
    surename: yup.string().required('Заполните поле'),
    patronymic: yup.string().required('Заполните поле'),
    phone: yup.string().required('Заполните поле'),
    email: yup.string().email('Введите валидный email').required('Заполните поле'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [state, setState] = React.useState<string>('myData')
  const [myData, setMyData] = React.useState({})
  const { favouritesItems } = useSelector(selectorFavouritesSlice)
  const { user, token } = useSelector(selectorAuthSlice)

  const arr = [
    'name', 'surename', 'patronymic', 'phone', 'email'
  ]

  const data = user && [
    {
      name: 'Имя',
      item: user!.name
    },
    {
      name: 'Фамилия',
      item: user!.surename
    },
    {
      name: 'Отчество',
      item: user!.patronymic
    },
    // {
    //   name: 'Дата рождения',
    //   item: ''
    // },
    {
      name: 'Номер',
      item: user!.phone
    },
    {
      name: 'E-mail',
      item: user!.email
    },
    // {
    //   name: 'Адрес',
    //   item: ''
    // },
  ]

  const logout = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    dispatch(setToken(''))
    navigate('/')
  } 
  const openMyData = () => {
    setState('myData')
  }
  const openFavourites = () => {
    setState('favourites')
  }
  const setData = (name: any, value: any) => {
    setMyData({...myData,[name]: value})
    console.log(myData)
  }
  const onSubmit = async (props: any) => {
    // await axios.post('/me/edit', {
    //   surename,
    //   name,
    //   patronymic,
    //   email,
    //   phone: Number(phone),
    // })
    console.log(props)
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
              <img src="https://via.placeholder.com/100x100" alt="" />
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

        {state == 'myData' &&
          <div className={styles.block}>
            <h2 className={cx(styles.name, styles.name_margin)}>Мои данные</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.profileData}>
                {data?.map((item, index) => (
                  // <InputMyData 
                  //   key={index} 
                  //   item={item.item}
                  //   name={item.name}
                  //   setData={setData}
                  // />
                  <div key={index}>
                    <div className={cx(styles.input, common.Input)}>
                      <p>{item.name}:</p>
                      <input 
                        type="text"
                        placeholder={String(item.item)}
                        {...register(`${arr.map((item) => {return item})}`)}
                      />
                      <div className={styles.edit}>
                        <Icon className={styles.icon} icon="edit" />
                        Изменить
                      </div>
                    </div>
                    {errors.name && <p className={common.ErrorMessage}>flfllflf</p>}
                  </div>
                ))}
              </div>
              <button type="submit" className={cx(styles.save, common.BtnBackground)}>Сохранить данные</button>
            </form>
          </div>
        }
        {state == 'favourites' &&
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
    </section>
  )
}

export default Profile