import React, { useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'
import { useCartContext } from '../../CartContext';


const ItemDetail =({data})=>{

    const[productos,setProductos]=useState(0)
    
    let stock = 9;
    function Añadir(items) {
	items > stock
		? alert("no tenemos stock suficiente")
		: alert(items + " productos añadidos al carrito");
        setProductos(items)
        addToCart(data,items)
    }

    const {addToCart}=useCartContext()


    console.log(productos)

    return(  
    <div className='card'>
        <img src={data.image} alt={data.title}></img>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <p>${data.price}</p>
        {productos > 0 ?(<Link to={`/cart`}>
            <button className="btn btn-warning" >Terminar compra</button>
        </Link>):           
            <ItemCount 
            stock={stock}
            initial={1} 
            onAdd={Añadir}   
         /> 
           }
    </div>
    )
}

export default ItemDetail