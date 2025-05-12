import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletter-des">
            <h3>Sign for News Letter</h3>
            <p>Get E-mail updates about our latest shop and <span>special offers</span> </p>
        </div>
        <div className="newsletter-input">
            <input type="email" placeholder="example@email.com" />
            <button className="normal">Sign Up</button>
        </div>
    </div>
  )
}

export default Newsletter
