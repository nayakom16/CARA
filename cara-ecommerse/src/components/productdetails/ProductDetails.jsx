import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import ProductDetailsItem from '../productdetailsitem/ProductDetailsItem'


const ProductDetails = () => {
    const { product_list, productId, setProductId , product_details } = useContext(ProductContext)
  return (
    <div>
        {product_details.map((item)=>{
            if (item.id === productId) {
                return <ProductDetailsItem id={item.id} name={item.name} price={item.price} img={item.img} category={item.category} brand={item.brand}  description={item.description} seller={item.seller} mfg={item.mfg} sale={item.total_sales_6months} sizes_available={item.sizes_available} />
            } 
            
        })}
      
    </div>
  )
}

export default ProductDetails
