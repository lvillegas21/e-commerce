import React, {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const ItemListContainer =()=>{   
    
    const [items,setItems]=useState([])

    const {categoryId}=useParams()

    useEffect(() => {
		axios('https://fakestoreapi.com/products').then((items) =>{
            categoryId
                ?setItems(items.data.filter((x)=>x.category===categoryId))
		        :setItems(items.data)
		});
	}, [categoryId]);

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