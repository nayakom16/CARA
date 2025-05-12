import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import { CiShoppingCart } from "react-icons/ci";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu , setMenu] = useState("Home")
    return (
        <div>
            <section className="header">
                <img src={assets.logo} alt="" />
                    <div className="nav">
                        <ul id="navbar">
                            <Link to = '/' className={menu === "Home" ? "active" : ""} onClick={()=>setMenu("Home")}>Home</Link>
                            <Link to = '/shop' className={menu === "Shop" ? "active" : ""} onClick={()=>setMenu("Shop")}>Shop</Link>
                            <li className={menu === "Blog" ? "active" : ""} onClick={()=>setMenu("Blog")}>Blog</li>
                            <li className={menu === "About" ? "active" : ""} onClick={()=>setMenu("About")}>About</li>
                            <li className={menu === "Contact" ? "active" : ""} onClick={()=>setMenu("Contact")}>Contact</li>
                            <li className='cart-icon'><CiShoppingCart color='#fff' /></li>
                            
                       </ul>
                    </div>

                   
            </section>
        </div>
    )
}

export default Navbar
