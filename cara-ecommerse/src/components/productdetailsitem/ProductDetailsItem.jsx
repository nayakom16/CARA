import React, { useContext } from 'react'
import './productdetailsitem.css'
import { ProductContext } from '../../context/ProductContext'

const ProductDetailsItem = ({ id, name, price, img, category, brand, description, seller, mfg, sale, sizes_available }) => {

    const { size,  quantity, setQuantity, cartItem, addToCart ,addSize } = useContext(ProductContext)

    return (
        <div className='product-details-item'>
            <div className="product-details-item-left">
                <img src={img} alt="" />
            </div>
            <div className="product-details-item-right">
                <h1>{name}</h1>
                <p>{description}</p>
                <div className='product-cat-brand-price'>
                    <b>Rs.{price}</b>
                    <div className="product-cat-brand">
                        <p className='cat-brand'>{category}</p>
                        <p className='cat-brand'>{brand}</p>
                    </div>
                </div>
                <div className="product-size-quant">
                    
                    <div className="product-size-avaliable">
                        {sizes_available.map((size) => {
                            return <p onClick={()=>{addSize(id , size)}} className='size'>{size}</p>
                        })}
                        <p>{size[id]}</p>
                    </div>
                    {quantity > 0 ?
                        <div className='more-then-one-qunt'>
                            <button className='add-rem-btn' onClick={()=>{setQuantity(quantity+1)}}>+</button>
                            <p>{quantity}</p>
                            <button className='add-rem-btn' onClick={()=>{setQuantity(quantity-1)}}>-</button>
                        </div>
                        :
                        <div><button className='add-rem-btn' onClick={()=>{setQuantity(quantity+1)}}>+</button></div>
                    }
                </div>
                <button className={quantity > 0 && size[id] ? "addtocart" : "addtocart activeee"}   onClick={quantity > 0 && size[id] ?  ()=>{addToCart(id)} : ()=>{} }>ADD TO CART</button>
                
                {console.log(cartItem)}
                {console.log(size)}
                <div className="seller-info">
                    <p>{seller}</p>
                    <p>{mfg}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailsItem
