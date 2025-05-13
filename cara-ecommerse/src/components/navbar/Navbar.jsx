import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { CiShoppingCart } from "react-icons/ci";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { FaBarsProgress } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [menu, setMenu] = useState("Home")
    const { cartItem } = useContext(ProductContext)
    const [right, setRight] = useState("-280px")
    { console.log(cartItem) }
    return (
        <div>
            <section className="header">
                <img src={assets.logo} alt="" />
                <div className="nav">
                    <ul id="navbar" style={{right:right}}>
                        <Link to='/' className={menu === "Home" ? " navli active" : "navli"} onClick={() => setMenu("Home")}>Home</Link>
                        <Link to='/shop' className={menu === "Shop" ? " navli active" : "navli"} onClick={() => setMenu("Shop")}>Shop</Link>
                        <Link to='/blog' className={menu === "Blog" ? " navli active" : "navli"} onClick={() => setMenu("Blog")}>Blog</Link>
                        <Link to="/about" className={menu === "About" ? " navli active" : "navli"} onClick={() => setMenu("About")}>About</Link>
                        <Link to="/contact" className={menu === "Contact" ? " navli active" : "navli"} onClick={() => setMenu("Contact")}>Contact</Link>
                        <div className="navbar-cart cart-icon-special">
                            <Link to='/cart' className='cart-icon '><CiShoppingCart color='#fff' /></Link>
                            {Object.keys(cartItem).length === 0 ? <></> : <div className="cart-dot"></div>}
                        </div>
                        <div className="navbar-cross" onClick={()=>setRight("-280px")}><RxCross2 /></div>
                    </ul>
                </div>

                <div class="mobile">
                    <div className="mobile-icon">
                        <div className="navbar-cart">
                            <Link to='/cart' className='cart-icon'><CiShoppingCart color='#fff' /></Link>
                            {Object.keys(cartItem).length === 0 ? <></> : <div className="cart-dot"></div>}
                        </div>
                        <div className='cart-icon' onClick={()=>setRight("0")}><FaBarsProgress /></div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Navbar
