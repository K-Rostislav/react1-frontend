import React from "react";
import cx from "classnames";
import Icon from "../../components/_icons/Icon";

import styles from "./Profile.module.scss";
import common from "../../assets/scss/_common-styles/common-styles.module.scss";

const InputMyData: React.FC<any> = ({name, item, setData }) => {
  // const [value, setValue] = React.useState<string>(item)
  // const [flag, setFlag] = React.useState<boolean>(true)

  // const inputRef = React.useRef<HTMLInputElement>(null)
  // const dataItemRef = React.useRef<HTMLDivElement>(null)

  // const editClick = () => {
  //   setFlag(!flag)
  //   flag ? inputRef.current?.focus() : inputRef.current?.blur()
  // }
  // const handleClickOutside = (event: any) => {
  //   if (dataItemRef && !dataItemRef.current?.contains(event.target)) {
  //     setFlag(true)
  //   }
  // }
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value)
  //   setData(name, value)
  // }

  // React.useEffect(() => {
  //   document.body.addEventListener('click', handleClickOutside)
  //   return () => document.body.removeEventListener('click', handleClickOutside)
  // }, [flag])

  return(
  //   <div ref={dataItemRef} className={!flag ? cx(styles.input, common.Input, styles.input_active) : cx(styles.input, common.Input)}>
  //     <p>{name}:</p>
  //     <input 
  //       ref={inputRef} 
  //       onChange={onChange}
  //       className={flag ? common.PointerNone : null} 
  //       type="text" 
  //       value={value}
  //     />
  //     <div onClick={editClick} className={!flag ? cx(styles.edit, styles.edit_active) : styles.edit}>
  //       <Icon className={styles.icon} icon="edit" />
  //       Изменить
  //     </div>
  //   </div>
  <></>
  )
}

export default InputMyData