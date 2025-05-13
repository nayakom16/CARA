import React from 'react'
import './HeroContact.css'
import { LuMapPinned } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const HeroContact = () => {
    return (
        <div className='about-location'>
            <div className="location-left">
                <span>GET IN TOUCH</span>
                <h3>Visit one of our agency location or contact us today</h3>
                <h5>Head Office</h5>
                <div className="address">
                    <div>
                        <LuMapPinned />
                        <p>SEC-12 LBS Street West- delhi INDIA</p>
                    </div>
                    <div>
                        <MdOutlineMarkEmailRead />
                        <p>contact@example.com</p>
                    </div>
                    <div>
                        <IoCallOutline />
                        <p>contact@example.com</p>
                    </div>
                    <div>
                        <FiClock />
                        <p>
                            Monday to Saturday: 8.00am to 16.00pm</p>
                    </div>
                </div>
            </div>
            <div className="location-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834887.7475880957!2d81.79503742675237!3d20.175410475835836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2sOdisha!5e0!3m2!1sen!2sin!4v1718979248487!5m2!1sen!2sin" width="600"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default HeroContact
