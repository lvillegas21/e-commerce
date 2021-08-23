import React, {useEffect,useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const style = {    
    cont:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }

}

const items= [{
    id: "1",
    title:"Nike Air Force 1",
    price:15000,
    img: "https://essential.vteximg.com.br/arquivos/ids/159243-1000-1000/04696_01.jpg?v=636610295657370000"
}]


const productos = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(items)
        },2000)
} ) 

const ItemListContainer =()=>{   
    
    const [item,setItems]=useState([])

    useEffect(()=>{
        productos.then((respuesta)=>setItems(respuesta))
    },[])


    let stock = 9;
    function Añadir(items) {
	items > stock
		? alert("no tenemos stock suficiente")
		: alert("Añadido al carrito");
    }

    return(
        <div>
            <div style={style.cont}>
                <div >
                    <ItemList items={item}/>
                    <ItemCount 
                    stock={stock}
                    initial={1} 
                    onAdd={Añadir}  
                    producto="Zapatillas" 
                    />
                    
                </div>
            </div>
            
        </div>
    )
}

export default ItemListContainer;