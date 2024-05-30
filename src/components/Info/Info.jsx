import React from 'react';
import * as styles from './info.module.css';

const Info = () => {
  return (
    <div className={styles.main}>
        <div className={styles.box}>
            <div>
                <h1>Find out why we’re best-in-class</h1>
                <p>The #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales.</p>
            </div>
            <div>
                <div  className={styles.small_box}>
                    <div>
                        <h1>Up to 25x ROI</h1>
                        <p>seen by Mailchimp users*</p>
                    </div>
                    <div>
                        <h1>22 years experience</h1>
                        <p>helping businesses sell more</p>
                    </div>
                </div>
                <div className={styles.small_box}>
                    <div>
                        <h1>11M+ Users</h1>
                        <p>seen by Mailchimp users*</p>
                    </div>
                    <div>
                        <h1>$1.7K per campaign</h1>
                        <p>generated on average*</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Info