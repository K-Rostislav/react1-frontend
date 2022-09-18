//@ts-nocheck

import React from "react";
import Avatar from "react-avatar-edit";
import { useSelector } from "react-redux";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import axios from "../../redux/axios";

import common from "../../assets/scss/_common-styles/common-styles.module.scss"
import { useAppDispatch } from "../../redux/store";
import { setModal, setUser } from "../../redux/authSlice/slice";

const AvatarEditor = () => {
  const dispatch = useAppDispatch()
  const [src, setSrc] = React.useState(null)
  const [preview, setPreview] = React.useState(null)
  const { token, user } = useSelector(selectorAuthSlice)

  const onClose = () => {
    setPreview(null)
  }
  const onCrop = (view) => {
    setPreview(view)
  }
  const fetchUpload = () => {
    axios.post('/profile/upload', 
    {
      _id: user?._id,
      image: preview
    },
    {
      headers: {
        authorization: token
      }
    }).then(response => {
      dispatch(setUser(response.data))
      dispatch(setModal(false))
    })
  }

  return(
    <div>
      <Avatar 
        width={300}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        src={src}
      />
      <button onClick={fetchUpload} className={common.BtnBackground}>сохранить</button>
    </div>
  )
}

export default AvatarEditor