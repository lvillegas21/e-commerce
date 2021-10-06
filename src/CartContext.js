import React,{createContext, useState,useContext} from 'react';
import swal from 'sweetalert';
//CONTEXT
export const CartContext=createContext();
export const useCartContext=()=>useContext(CartContext)

export const CartProvider=({ children})=>{
    const [cart,setCart]=useState([])

    const isInCart=(id)=>cart.some((item)=>item.id===id)
    
    const addToCart=(item,quantity)=>{
        if(isInCart(item.id)){
            const newCart=cart.map((cartElement)=>{
                if(cartElement.id===item.id){
                    return{...cartElement, quantity: cartElement.quantity +quantity}
                }else 
                    return cartElement
            })
            setCart(newCart)
        }else{
            setCart((prev)=>[...prev,{...item,quantity}])
        }
    }

    const removeItem=(itemId)=>{
        setCart(cart.filter((elem)=>elem.id !== itemId));
        swal({
            title:"Producto quitado del carrito!!",
            text:false,
            icon: "error",
            button: false,
            timer: 2000,
        })
    }

    const clear =()=>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart,setCart,clear, removeItem,addToCart}}>
            {children}
        </CartContext.Provider> 
    )
}