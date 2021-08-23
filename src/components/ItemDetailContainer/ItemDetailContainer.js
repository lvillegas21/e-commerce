import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer =()=>{

    const [items,setItems]=useState({})

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/1')
            .then((respuesta)=>{
                return respuesta.json()
            })
           .then((res)=>{
               console.log(res)
              setItems(res)

           })

      },2000)
    },[])


    return(
        <div>
        <ItemDetail data={items}/>
        </div>
    )

}

export default ItemDetailContainer