import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { collection,query, getDocs } from 'firebase/firestore';
import { db } from '../ItemCollection/ItemCollection';


const ItemListContainer =()=>{   
    
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

    console.log(items)

    return(
        <div>
            <div>
                
                    <ItemList items={items}/>                 
                
            </div>  
        </div>
    )
}

export default ItemListContainer;