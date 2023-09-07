import React from 'react'
import Styles from './auth.module.css'
import { Form } from '../../components/form'
import { Oauth } from '../../components/auth-component'

const login = () => {
    const inputElements = [{
        placeholder: "Username",
        type: "text",
        id: "login_username"
    }, {
        placeholder: "Password",
        type: "password",
        id: "login_password"
    }]

    
    const handleSubmit = () => {
        const username = document.getElementById('login_username').value;
        const password = document.getElementById('login_password').value;
        console.log(username, password)
        const api = "https://relisted-labels-dev.onrender.com/auth/login"

        const submitForm = async () => {
            const req = await fetch(api, {
                method: "POST",
                body: JSON.stringify({
                    identifier: username,
                    password
                }),
            })
            console.log(req);
            const res = await req.json();
            console.log(res);
        }
        submitForm();
    }
  return (
    <>
    <section className={Styles.form}>


    <div>
      <Form el={inputElements} buttonName={"Login"} handleSubmit={handleSubmit}/>
    </div>
    

        <Oauth page={'login'} text={`Don't have an account?`} link={"signup"}/>

      
    </section>
   
    </>
  )
}

export default login
