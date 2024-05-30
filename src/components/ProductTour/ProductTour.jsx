import React from 'react';
import * as styles from './product.module.css';
import { IoMdArrowForward } from "react-icons/io";

const ProductTour = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.info}>
                <h1>Get started easily with a personalized product tour</h1>
                <p>An onboarding specialist is here to help you get started with confidence—it’s included with Standard and Premium plans.*</p>
                <p>Learn more about onboarding <span className={styles.arrow}>
                <IoMdArrowForward className={styles.forward} /></span></p>
            </div>
            <div className={styles.image_box}>
                <img src="https://eep.io/images/yzco4xsimv0y/eeOxTgGvLZjag4xB9SK7h/18bbe5f5514e075ae697322976223c1f/Onboarding_Placement_-_Woman_on_phone_and_laptop.png?w=842&fm=avif&q=60" alt="" width='100%' height='100%' />
            </div>
        </div>
    </div>
  )
}

export default ProductTour