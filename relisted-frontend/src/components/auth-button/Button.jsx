import React from 'react'
import Styles from './button.module.css'

const Button = ({name, handleSubmit}) => {
  return (
    <button className={Styles.button} onClick={handleSubmit}>
        {name}
    </button>
  )
}

export default Button
