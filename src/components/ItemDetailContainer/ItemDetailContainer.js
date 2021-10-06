import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'
//FIREBASE
import { db } from '../../Firebase/Firebase'

const ItemDetailContainer =({match})=>{
    
    const [items,setItems]=useState()
    
    useEffect(()=>{
        
        const ItemCollection=db.collection('zapatillaz')
        const item=ItemCollection.doc(match.params.id)
        
        item.get()
            .then((doc)=>{
                if(!doc.exists){
                console.log('no funciona')
                return
            }
            setItems({id:doc.id,...doc.data()})
        })       
    },[match])
  
    return(
        <div>
            {items === undefined 
                ? <Spinner animation="border" variant="primary" />
                : <ItemDetail data={items}/>}   
        </div>
    )
}

export default ItemDetailContainer