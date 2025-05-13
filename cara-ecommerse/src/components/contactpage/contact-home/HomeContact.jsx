import React from 'react'
// import { Form } from 'react-router-dom'
import { assets } from '../../../assets/assets'
import './HomeContact.css'

const HomeContact = () => {
  return (
    <div className='about-review'>
      <div className="form">
            <span>LEAVE A MESSAGE</span>
            <h4>We love to hear from you <i className="fa-solid fa-heart"></i></h4>
            <form>
                <input type="text" placeholder='Your name' />
                <input type="Email" placeholder='Email' />
                <input type="Email" placeholder='subject' />
                <textarea rows="10" cols="5" placeholder='Your Message'></textarea>
            
                
            </form>
            <button className="normal">Submit</button>
        </div>

        <div className="customer-review">
            <div className="people">
                
                <img src={assets.people1} alt="" />
                <div className="people-description">
                    <h5>John Dee</h5>
                    <p>Senior Marketing Manager</p>
                    <p>Phone: +000 123 456 789</p>
                    <p>Email: contact@exmple.com</p>
                </div>
            </div>
            <div className="people">
                <img src={assets.people2} alt="" />
                <div className="people-description">
                    <h5>Willim Smith</h5>
                    <p>Senior Marketing Manager</p>
                    <p>Phone: +000 123 456 789</p>
                    <p>Email: contact@exmple.com</p>
                </div>
            </div>
            <div className="people">
                <img src={assets.people3} alt="" />
                <div className="people-description">
                    <h5>Emma Stone</h5>
                    <p>Senior Marketing Manager</p>
                    <p>Phone: +000 123 456 789</p>
                    <p>Email: contact@exmple.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContact
