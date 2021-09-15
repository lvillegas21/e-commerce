import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { collection,query, getDocs } from 'firebase/firestore';
import { db } from '../ItemCollection/ItemCollection';


const ItemDetailContainer =({ match })=>{
    console.log('match',match)

    const [items,setItems]=useState([])
    const getItems= async()=>{
        const docs=[]
        
        const q=query(collection(db,"zapatillaz"))
        
        const querySnapShot= await getDocs(q)
        
        querySnapShot.forEach((item)=>{
            docs.push({ ...item.data(),id: item.id})
        })
        setItems(docs)
    }

    useEffect(()=>{
        getItems()
    },[])
  
    return(
        <div>
            <ItemDetail data={items}/>    
        </div>
    )
}

export default ItemDetailContainer