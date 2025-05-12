import React, { useContext } from 'react'
import './productdetailsitem.css'
import { ProductContext } from '../../context/ProductContext'

const ProductDetailsItem = ({ id, name, price, img, category, brand, description, seller, mfg, sale, sizes_available }) => {

    const { product_list, productId, setProductId, product_details, size, setSize, quantity, setQuantity, cartItem, setCartItem ,addToCart , removerFromCart,addSize } = useContext(ProductContext)

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
                    </div>
                    {quantity > 0 ?
                        <div>
                            <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
                            <p>{quantity}</p>
                            <button onClick={()=>{setQuantity(quantity-1)}}>-</button>
                        </div>
                        :
                        <div><button onClick={()=>{setQuantity(quantity+1)}}>+</button></div>
                    }
                </div>
                <button className='addtocart' onClick={()=>{addToCart(id)}}>ADD TO CART</button>
                
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
