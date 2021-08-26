import React from 'react'
import './Item.css'
//import ItemCount from '../ItemCount/ItemCount';
//import {Link} from 'react-router-dom'

const Item =({data})=>{

    
    return(
        <div >
            <div className="tamanoDiv">
            <img src={data.image} alt={data.title}></img>
            <h4>{data.title}</h4>
            <p>${data.price}</p>
            <button className="btn btn-primary">VER</button>
            </div>          
        </div>
    );
}

export default Item