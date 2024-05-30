import React from 'react';
import * as styles from './subscription.module.css';
import { IoIosArrowDown, IoMdArrowForward } from "react-icons/io";
import { HiOutlineCheck } from "react-icons/hi";


const Subscription = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p>Limited Offer</p>
            <h1>Save 50% for 12 months</h1>
            <div className={styles.contact_info}><p>How many contacts do you have?</p><div className={styles.price}> 500 <span ><IoIosArrowDown /></span></div></div>
        </div>
        <div className={styles.cards_container}>
            <div className={styles.cards}>
                <h3 className={styles.title_name}>Premium</h3>
                <p style={{fontSize:'1em'}}>Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.</p>
                <div style={{lineHeight:'0.25rem',marginTop:'20px',border:'1px solid transparent',marginTop:'45px'}}>
                    <p>Starts at</p>
                    <p style={{textDecoration:'line-through'}}>₹23,000</p>
                    <h3 style={{fontSize:'1.75rem'}}>₹11,500</h3>
                    <p style={{fontSize:'0.85rem'}}>/month for 12 months*</p>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Phone & Priority Support</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Custom-coded and Pre-built Email Templates</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Multivariate and A/B Testing</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Enhanced Automated Customer Journeys</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Dedicated Personalized Onboarding</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Predictive Segmentation</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Campaign Manager</p>
                    </div>
                </div>
                <button>
                    Buy Now
                </button>
            </div>
            <div className={styles.cards}>
                <h3 className={styles.title_name_second}>Standard</h3>
                <p style={{fontSize:'1em'}}>Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.</p>
                <div style={{lineHeight:'0.25rem',marginTop:'20px',border:'1px solid transparent',marginTop:'45px'}}>
                    <p>Starts at</p>
                    <p style={{textDecoration:'line-through'}}>₹23,000</p>
                    <h3 style={{fontSize:'1.75rem'}}>₹11,500</h3>
                    <p style={{fontSize:'0.85rem'}}>/month for 12 months*</p>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Phone & Priority Support</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Custom-coded and Pre-built Email Templates</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Multivariate and A/B Testing</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Enhanced Automated Customer Journeys</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Dedicated Personalized Onboarding</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Predictive Segmentation</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Campaign Manager</p>
                    </div>
                </div>
                <button>
                    Buy Now
                </button>
            </div>
            <div className={styles.cards}>
                <h3 className={styles.title_name}>Essentials</h3>
                <p style={{fontSize:'1em'}}>Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.</p>
                <div style={{lineHeight:'0.25rem',marginTop:'20px',border:'1px solid transparent',marginTop:'45px'}}>
                    <p>Starts at</p>
                    <p style={{textDecoration:'line-through'}}>₹23,000</p>
                    <h3 style={{fontSize:'1.75rem'}}>₹11,500</h3>
                    <p style={{fontSize:'0.85rem'}}>/month for 12 months*</p>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Phone & Priority Support</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Custom-coded and Pre-built Email Templates</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Multivariate and A/B Testing</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Enhanced Automated Customer Journeys</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Dedicated Personalized Onboarding</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Predictive Segmentation</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Campaign Manager</p>
                    </div>
                </div>
                <button>
                    Buy Now
                </button>
            </div>
            <div className={styles.cards}>
                <h3 className={styles.title_name}>Free</h3>
                <p style={{fontSize:'1em'}}>Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.</p>
                <div style={{lineHeight:'0.25rem',marginTop:'20px',border:'1px solid transparent',marginTop:'45px'}}>
                    <p>Starts at</p>
                    <p style={{textDecoration:'line-through'}}>₹23,000</p>
                    <h3 style={{fontSize:'1.75rem'}}>₹0</h3>
                    <p style={{fontSize:'0.85rem'}}>/month for 12 months*</p>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Phone & Priority Support</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Custom-coded and Pre-built Email Templates</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Multivariate and A/B Testing</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Enhanced Automated Customer Journeys</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Dedicated Personalized Onboarding</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Predictive Segmentation</p>
                    </div>
                </div>
                <div>
                    <div className={styles.terms}>
                    <HiOutlineCheck  className={styles.check_icon}/>
                    <p>Campaign Manager</p>
                    </div>
                </div>
                <button>
                    Buy Now
                </button>
            </div>
        </div>
        <p className={styles.footer_info}>*SeeOffer Terms Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</p>
        <p className={styles.last}>See all plan details <span className={styles.arrow}>
                <IoMdArrowForward className={styles.forward} /></span></p>
    </div>
  )
}

export default Subscription