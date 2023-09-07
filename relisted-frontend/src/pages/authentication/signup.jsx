import React from 'react';
import Styles from './auth.module.css'
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/form';
import { Oauth } from '../../components/auth-component';


function Signup() {
    const inputElements = [{
        placeholder: "Email",
        type: "email",
        id: "email"
    }, {
        placeholder: "Username",
        type: "text",
        id:"username"

    }, {
        placeholder: "Password",
        type: "password",
        id: "password"
    }]

    const handleSubmit = () => {
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(email, username, password)
        const api = "https://relisted-labels-dev.onrender.com/auth/register"

        const submitForm = async () => {
            const req = await fetch(api, {
                method: "POST",
                body: JSON.stringify({
                    email,
                    username,
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
                <Form el={inputElements} buttonName={"Signup"} handleSubmit={handleSubmit}/>
            </div>

            <Oauth page={'Sign Up'} text={'Already have an account?'} link={"login"}/>
        </section>
            
        </>

    )
}

export default Signup;