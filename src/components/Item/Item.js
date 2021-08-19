import React from 'react'
import './Item.css'

const Item =({data})=>{
    return(
        <div>
            <img src={data.img} alt={data.title}></img>
            <h4>{data.title}</h4>
            <p>${data.price}</p>
            <span>{data.id}</span>            
        </div>
    )
}

export default Item