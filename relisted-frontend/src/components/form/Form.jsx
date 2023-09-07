import React from 'react'
import Styles from './form.module.css'
import Input from '../input'
import { Button } from '../auth-button'

const Form = ({el, buttonName, handleSubmit}) => {
  return (
    <div className={Styles.form}>
 
    {
        el.map((value, index)=>(
            <Input placeholder={value.placeholder} type={value.type} key={index} id={value.id}/>
        ))
    }
      <Button name={buttonName} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Form

