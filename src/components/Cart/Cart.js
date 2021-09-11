import React from 'react';
import { useCartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

const Cart=()=>{
    const{cart, removeItem, clear}=useCartContext()

    const total= cart.reduce((acc,item)=>{
        return acc + item.price * item.quantity
    },0)
    
    return(
        <div>
            {cart.length === 0 ? <div><p>No hay productos en el carrito</p><Link to='/'><button className='btn btn-primary'>ver catalogo</button></Link></div>
            :cart.map((data)=>{
                return(
                    <div key={data.id}>
                        <ul>
                            <li>
                                {data.title} | 
                                ${data.price} |  
                                x{data.quantity} <button className='btn btn-danger' onClick={()=>removeItem(data.id)}>X</button>
                            </li>
                        </ul>  
                    </div>
                )
            })}
            <button className='btn btn-danger' onClick={()=>clear(cart)} >Vaciar cart</button>
            <h4>Precio final:${total}</h4>
        </div>
    )
}

export default Cart