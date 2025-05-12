import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext'
import ProductDisplayItem from '../../productdisplayitem/ProductDisplayItem'


const Product = () => {
    const { product_list } = useContext(ProductContext)
    return (
        <div className='feature-product'>
            <div className='feature-product-container'>
                {product_list.map((item) => {
                    return (
                        <ProductDisplayItem id={item.id} name={item.name} price={item.price} img={item.img} category={item.category} brand={item.brand} />
                    )
                })}
            </div>
        </div>
    )
}

export default Product
