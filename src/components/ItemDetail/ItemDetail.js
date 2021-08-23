import React from 'react'
import './ItemDetail.css'

const ItemDetail =({data})=>{
    return(
    
    <div className='card'>
        <img src={data.image} alt={data.title}></img>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <p>${data.price}</p>
    </div>
    
    )
}

export default ItemDetail