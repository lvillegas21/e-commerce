import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../ItemCollection/ItemCollection';

const ItemDetailContainer =({match})=>{
    console.log(match)
    const [items,setItems]=useState()

    useEffect(()=>{
        
        const ItemCollection=db.collection('zapatillaz')
        const item=ItemCollection.doc()
       
        item.get().then((doc)=>{
            if(!doc.exists){
                console.log('no funciona')
                return
            }
            console.log('funciona')
            setItems({id:doc.id,...doc.data()})
        })       
    },[])
  
    return(
        <div>
            <ItemDetail data={items}/>    
        </div>
    )
}

export default ItemDetailContainer