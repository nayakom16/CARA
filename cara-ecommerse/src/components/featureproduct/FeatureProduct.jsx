import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import ProductDisplayItem from '../productdisplayitem/ProductDisplayItem'
import './FeatureProduct.css'

const FeatureProduct = () => {
    const { product_list } = useContext(ProductContext)
    return (
        <div className='feature-product'>
            <h1>New Arrivals</h1>
            <p>Summer Collection New Morden Design</p>
            <div className='feature-product-container'>
                {product_list.slice(3, 7).map((item) => {
                    return (
                        <ProductDisplayItem id={item.id} name={item.name} price={item.price} img={item.img} category={item.category} brand={item.brand} />
                    )
                })}
            </div>
        </div>
    )
}

export default FeatureProduct
