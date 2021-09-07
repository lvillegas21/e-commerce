import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../CartContext/CartContext'

const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
        padding:'10px'
        
    },
    style1:{
        color: 'blue',
		fontSize: 24,
    },
    style2:{
        display:'none'
    }
}



const CartWidget =()=>{
    const {cart}=useCartContext()
    const [items]=useState(cart)
    console.log(items)


    return(
        <div style={estilo.contenedor}>
            {items.length > 0 ? <div><FontAwesomeIcon icon={faShoppingCart} style={estilo.style1}/>
            <p>{items.length}</p></div>:<FontAwesomeIcon icon={faShoppingCart} style={estilo.style2}/>}
        </div>
    );
}

export default CartWidget;

