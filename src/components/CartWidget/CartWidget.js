import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../CartContext';

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

    const items= cart.reduce((acc,item)=>{
        return acc + item.quantity
    },0)

    return(
        <div style={estilo.contenedor}>
            <FontAwesomeIcon icon={faShoppingCart} style={estilo.style1}/><p>{items}</p>
        </div>
    );
}

export default CartWidget;

