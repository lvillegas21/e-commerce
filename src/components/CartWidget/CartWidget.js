import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
    }  
}

const CartWidget =()=>{

    return(
        <div style={estilo.contenedor}>
            <FontAwesomeIcon icon={faShoppingCart} className='icono'/>
        </div>
    );
}

export default CartWidget;

