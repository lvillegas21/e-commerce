import React, { useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import {  Item } from 'semantic-ui-react'
import swal from 'sweetalert';
//CONTEXT
import { useCartContext } from '../../CartContext';
//REACT-ROUTER-DOM
import {Link} from 'react-router-dom'

const ItemDetail =({data})=>{

    const[productos,setProductos]=useState(0)

    let stock = 9;
    
    function Añadir(items) {
      items > stock
        ? console.log("no tenemos stock suficiente")
        : swal({
          title: "Genial!",
          text: " Tu producto fue añadido al carrito! ("+ items +" unidades)",
          icon: "success",
          button: false,
          timer: 2000,
        }); 
          setProductos(items)
          addToCart(data,items)
    }

    const {addToCart}=useCartContext()

    return(  
      <div className="card" >
          <Item.Group>
            <Item>
              <Item.Image className="img" size="medium" src={data.image} />
              <Item.Content >
                  <Item.Header >
                     <h2 className='estiloLetra'>{data.title}</h2>
                  </Item.Header>
                  <Item.Description>
                    <h3 className='estiloLetra'>{data.description}</h3>
                  </Item.Description>
                  <Item.Meta>
                    <h4 className='estiloLetra'>${data.price}</h4>
                    {productos > 0 
                      ?(<Link to={`/cart`}>
                          <button className="btn btn-warning boton" >Terminar compra</button>
                        </Link>)
                      :<ItemCount 
                          stock={stock}
                          initial={1} 
                          onAdd={Añadir}   
                        /> 
                    }
                  </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>  
      </div>
    )
}

export default ItemDetail