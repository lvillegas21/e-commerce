import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { db } from '../ItemCollection/ItemCollection';
import { useParams } from 'react-router';

const ItemListContainer =()=>{   
    const [items,setItems]=useState([])
    const{categoryId}=useParams()

    useEffect(()=>{
        const getItems= async()=>{
            db.collection('zapatillaz')  
              .onSnapshot((querySnapShot)=>{
                const docs=[]
                querySnapShot.forEach((doc)=>{
                    docs.push({...doc.data(),id:doc.id})
                })
                categoryId ?setItems(docs.filter((x)=>x.category===categoryId))
                :setItems(docs)
            })        
        }
        getItems()
    },[categoryId])

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