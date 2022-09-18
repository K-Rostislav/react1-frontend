import React from "react";
import cx from "classnames";

import styles from "./Profile.module.scss"
import common from "../../assets/scss/_common-styles/common-styles.module.scss"
import Icon from "../../components/_icons/Icon";
import MyEditor from "../../components/AvatarEditor";
import { useSelector } from "react-redux";
import { selectorAuthSlice } from "../../redux/authSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { setModal } from "../../redux/authSlice/slice";

const UploadModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const { profileModal } = useSelector(selectorAuthSlice)

  const closeModal = () => {
    dispatch(setModal(false))
  }

  return(
    <div className={profileModal ? common.ModalBackground : cx(common.ModalBackground, common.DisplayNone)}>
      <div className={common.modal}>
        <button onClick={closeModal} type="button" className={common.close}>
          <Icon className={common.icon} size={25} icon="close" />
        </button>
        <MyEditor />
      </div>
    </div>
  )
}

export default UploadModal