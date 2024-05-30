import React from 'react';
import * as styles from './homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
                <h1>
                Turn Emails into Revenue
                </h1>
                <p>Win new customers with the #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales.</p>
                <button className={styles.signup}>Sign Up</button>
        </div>

        <div className={styles.cards}>
            <div>
                <p className={styles.card_text}>Convert with email automations</p>
                <img src="https://eep.io/images/yzco4xsimv0y/5EODYdgDf1houB82RfR8e0/d3a56636ba2d48943ab54513277458bc/Homepage-Feature-Card-Automations-Desktop-INT__1_.png?w=630&fm=avif&q=60" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
            <div>
            <p className={styles.card_text}>Create faster with generative AI</p>
                <img src="https://eep.io/images/yzco4xsimv0y/3JSoRinRB2VTmBiD7NyEUg/f48b012abacf15bc323135c3d9e3cbe2/Homepage-Feature-Card-AI-Desktop.png?w=630&fm=avif&q=60" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
            <div>
            <p className={styles.card_text}>Refine with segmentation</p>
                <img src="https://eep.io/images/yzco4xsimv0y/6QVNtP8As7OHsx5mivPn8f/c802814a27e36ee4a016556501e6ec85/Homepage-Feature-Card-Segmentation-Desktop.png?w=630&fm=avif&q=60" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
            <div>
            <p className={styles.card_text}>Optimize with analytics & reporting</p>
                <img src="https://eep.io/images/yzco4xsimv0y/6JxWAec8e3X3OMFmX9dVvd/9f34fab9dcbe5d69c4faf2c0d1b9b5ae/Homepage-Feature-Card-Analytics-Reporting-Desktop.png?w=630&fm=avif&q=60" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
            <div className={styles.info_box}>
                <p className={styles.info_text}>Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.</p>
                <button className={styles.card_button}>Explore marketing automation</button>
            </div>
            <div className={styles.info_box}>
            <p className={styles.info_text}>Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.</p>
                <button className={styles.card_button}>Explore AI Tools</button>
            </div>
            <div className={styles.info_box}>
            <p className={styles.info_text}>Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.</p>
                <button className={styles.card_button}>Explore audience management</button>
            </div>
            <div className={styles.info_box}>
            <p className={styles.info_text}>Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.</p>
                <button className={styles.card_button}>Explore analytics & reporting</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage