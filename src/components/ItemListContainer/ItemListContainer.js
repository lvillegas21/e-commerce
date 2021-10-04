import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { db } from '../ItemCollection/ItemCollection';
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';

const ItemListContainer =()=>{   
    const [items,setItems]=useState([])
    const{categoryId}=useParams()

    useEffect(()=>{
        const getItems=()=>{
            db.collection('zapatillaz')  
              .onSnapshot((e)=>{
                const docs=[]
                e.forEach((producto)=>{
                    docs.push({...producto.data(),id:producto.id})
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
                    {items.length=== 0? <Spinner animation="border" variant="primary"/>:<ItemList items={items}/>}                
            </div>  
        </div>
    )
}

export default ItemListContainer;