import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

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
    }
}

const CartWidget =()=>{
    return(
        <div style={estilo.contenedor}>
            <FontAwesomeIcon icon={faShoppingCart} style={estilo.style1}/>
        </div>
    );
}

export default CartWidget;

