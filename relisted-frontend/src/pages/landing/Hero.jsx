import React from 'react'
import HomePage from '../../assets/Image/homepage-1.svg'
import Image1 from '../../assets/Image/image-1.svg'
import Image2 from '../../assets/Image/image-2.svg'
import Image3 from '../../assets/Image/image-3.svg'
import Style from "./hero.module.css"
import { Button } from '../../components/auth-button'


const Hero = () => {
  return (
    <>
    <div className={Style.navbar}>
        <h3>RelistedLabels</h3>
    </div>
    <div className={Style.home}>

        <div>
            <h2>
                Join The World's Largest Shared Wardrobe
            </h2>
            <p>Buy, Sell and Rent Your Favourite Cloths</p>

            <Button name={'Get Started'}/>
        </div>

        <img src={HomePage} alt="" />
        
    </div>

    <div className={Style.about}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
    </div>

    <div className={Style.footer}>
        <p>Ready Now?</p>
        <Button name={'Get Started'} />
    </div>
    </>
  )
}

export default Hero
