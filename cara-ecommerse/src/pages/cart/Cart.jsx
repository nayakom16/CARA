import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import './cart.css'

const Cart = () => {
    const { product_list, productId, setProductId, product_details, size, setSize, quantity, setQuantity, cartItem, setCartItem ,addToCart , removerFromCart,addSize } = useContext(ProductContext)
  return (
    <div className='cart'>
      <div className="cart-tems">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {console.log(cartItem)}
        {product_list.map((item) => {
          if (cartItem[item.id]) {
            return (
              <div>
                <div className="cart-items-tittle cart-items-item">
                  <img src={item.img} alt="" />
                  <p className='item-name'>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItem[item.id]}</p>
                  <p>Rs.{item.price * cartItem[item.id]}</p>
                  <p onClick={() => removerFromCart(item.id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
