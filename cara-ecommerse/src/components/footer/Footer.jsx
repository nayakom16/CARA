import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sec-1">
            <div className="contact">
                <div className="contact-des">
                    <img src={assets.logo} alt="" />
                    <h2>Contact</h2>
    
                    <p><strong>Address: </strong>Sambalpur, Odisha, INDIA</p>
                    <p><strong>Phone:  </strong>+01 2222 365 /(+91) 01 2345 6789</p>
                </div>
                <div className="social">
                    <h2>Follow us</h2>
                    <FaFacebookF className='icon'/>
                    <FaTwitter className='icon'/>
                    <RiInstagramFill className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                    
                </div>
            </div>
            <div className="about">
                <h2>About us</h2>
                <p>Delivery Information</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Term & Condition</p>
                <p>Contact us</p>
            </div>
    
            <div className="account">
                <h2>My Account</h2>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help</p>
            </div>
            <div className="app">
                <h2>Install App</h2>
                <p>From App Store or Google Play</p>
                <div className="app-img">
                    <img src={assets.appstore} alt="" />
                    <img src={assets.play} alt="" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src={assets.pay} alt="" />
            </div>
        </div>

        <div className="copyright">
            <p>© 2025 cara - Ecommerce Tempelate</p>
        </div>
    </div>
  )
}

export default Footer
