import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import './ProductDisplayItem.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';


const ProductDisplayItem = ({id, name, price, img, category, brand} ) => {
    const {  productId, setProductId } = useContext(ProductContext)
    const nevigate = useNavigate()
    return (
        <div className='product' onClick={()=>setProductId(id)}>

            <img src={img} alt="" />
                <div class="product-details">
                    <p>{brand}</p>
                    <h5>{name}</h5>
                    <div class="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                    <h4>Rs.{price}</h4>
                </div>
                <div className='cart' onClick={()=>nevigate('/product-Details')}><FaLongArrowAltRight /></div>
                {console.log(productId)}
        </div>
    )
}

export default ProductDisplayItem
