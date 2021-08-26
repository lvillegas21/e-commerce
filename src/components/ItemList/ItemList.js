import React from 'react'
import Item from '../Item/Item'
import {Link} from 'react-router-dom'
import './ItemList.css'

const ItemList = (props)=>{    
    
    return(
        <div className="container-fluid">
            <div className="divDos"> 
                {props.items.map((product) => {
				return ( <div key={product.id} className="div2">
                           <Link to={`/item/${product.id}`}>
                                <Item  data={product} />
                            </Link>
			            </div>)
                })}
            </div>
        </div>
    )
}
export default ItemList