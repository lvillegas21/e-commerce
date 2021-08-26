import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail =({data})=>{

    
    let stock = 9;
    function Añadir(items) {
	items > stock
		? alert("no tenemos stock suficiente")
		: alert("Añadido al carrito");
    }

    return(  
    <div className='card'>
        <img src={data.image} alt={data.title}></img>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <p>${data.price}</p>
        <ItemCount 
                    stock={stock}
                    initial={1} 
                    onAdd={Añadir}  
                    producto="Zapatillas" 
            /> 
    </div>
    )
}

export default ItemDetail