import React, { useState } from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';


const Cart=()=>{
    const{cart}=useCartContext()
    
    const[item]=useState(cart)
    console.log(item)
    const{removeItem}=useCartContext()
    const{clear}=useCartContext()

    return(
        <div>
            {item.map((data)=>{
                return(
                    <div>
                        <ul>
                            <li>
                                {data.title} | 
                                ${data.price} |  
                                x{data.quantity} <button className='btn btn-danger' onClick={()=>removeItem(data.id)}>X</button>
                            </li>
                        </ul>
                        <button className='btn btn-danger' onClick={()=>clear(cart)} >Vaciar cart</button>
                    </div>
                )
            })}
            {item == 0 && <div><p>No hay productos en el carrito</p><Link to='/'><button className='btn btn-primary'>ver catalogo</button></Link></div>}
            
        </div>
    )
}

export default Cart