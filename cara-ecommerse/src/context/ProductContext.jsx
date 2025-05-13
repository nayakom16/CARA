import { createContext, useState } from "react";
import { product_list } from "../assets/assets";
import { product_details } from "../assets/assets";


export const ProductContext = createContext();

export const ProductContextProvider = ({children})=>{

    const [productId , setProductId] = useState()
    const [size , setSize] = useState({})
    const [quantity , setQuantity] = useState(0)
    const [cartItem , setCartItem] = useState({})
    
    function addToCart(itemID){
        if(!cartItem[itemID]){
            setCartItem(prev=>({...prev ,[itemID]:quantity}))
            alert("Item Added to Cart")
        }else{
            setCartItem(prev=>({...prev , [itemID]:quantity}))
            alert("Item Added to Cart")
        }
    }

    function removerFromCart(id){
        setCartItem(prev=>({...prev , [id]:prev[id]-1}))
    }

    function addSize(id , size){
        setSize(prev=>({...prev , [id]:size}))
    }
    
    const ProductContextValue = {
        product_list,
        productId,
        setProductId,
        product_details,
        size,
        setSize,
        quantity,
        setQuantity,
        cartItem,
        setCartItem,
        addToCart,
        removerFromCart,
        addSize
    }





    return(
        <ProductContext.Provider value={ProductContextValue}>
            {children}
        </ProductContext.Provider>
    )
}