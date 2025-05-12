import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import ProductDisplayItem from '../productdisplayitem/ProductDisplayItem'
import './Arrival.css'

const Arrival = () => {
    const { product_list } = useContext(ProductContext)
  return (
    <div className='arrival-product'>
            <h1>Featured Products</h1>
            <p>Summer Collection New Morden Design</p>
            <div className='arrival-product-container'>
                {product_list.slice(12, 16).map((item) => {
                    return (
                        <ProductDisplayItem id={item.id} name={item.name} price={item.price} img={item.img} category={item.category} brand={item.brand} />
                    )
                })}
            </div>
        </div>
  )
}

export default Arrival
