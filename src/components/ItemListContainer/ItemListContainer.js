import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
//REACT-ROUTER-DOM
import { useParams } from 'react-router';
//FIREBAE
import { db } from '../../Firebase/Firebase'

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
                categoryId 
                    ?setItems(docs.filter((x)=>x.category===categoryId))
                    :setItems(docs)
            })        
        }
        getItems()
    },[categoryId])

    return(
        <div>
            <div>      
                {items.length=== 0
                    ? <Spinner animation="border" variant="primary" />
                    :<ItemList items={items}/>}                
            </div>  
        </div>
    )
}

export default ItemListContainer;