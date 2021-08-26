import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import axios from 'axios'


const ItemDetailContainer =({ match })=>{

    const [items,setItems]=useState([])
    console.log('match',match)

    useEffect(() => {
		axios(`https://fakestoreapi.com/products/${match.params.id}`).then((res) =>
		    setItems(res.data),
		);
	}, [match.params.id]);

    console.log(items)
  
    return(
        <div>
            <ItemDetail data={items}/>    
        </div>
    )
}

export default ItemDetailContainer