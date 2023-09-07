import React from 'react'
import Styles from './auth-comp.module.css'
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom'

const Oauth = ({page,text,link}) => {
  return (
    <section className={Styles.google}>
        <p>
        Or {page} With
        </p>

        <button>
            <FcGoogle className={Styles.icon}/>
            Google Account
        </button>

        <div className={Styles.link}>
        <p>{text}</p>

        <Link to={`/${link}`} className={Styles.tag}>{link}</Link>
        
        </div>
        
    </section>
  )
}

export default Oauth
