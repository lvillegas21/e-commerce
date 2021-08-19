import React from 'react'
import Item from '../Item/Item'

const ItemList = (props)=>{    
    
    return(
        <div className="divUno">
            <h1>NUESTROS PRODUCTOS</h1>
            <div className="divDos">
                <div>
                {props.items.map((product) => {
				return <Item key={product.id} data={product} />;
			})}
                </div>
            </div>
        </div>
    )
}
export default ItemList