import React, {useState} from 'react';
import { useCartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import { db } from '../ItemCollection/ItemCollection';
import firebase from 'firebase/app';


const Cart=()=>{
    const{cart, removeItem, clear}=useCartContext()
    const [userName,setUserName]=useState()
    const [userPhone,setUserPhone]=useState()
    const [userMail,setUserMail]=useState()

    const total= cart.reduce((acc,item)=>{
        return acc + item.price * item.quantity
    },0)

    const finalizarCompra= async(e)=>{
        const compra={
            items:{
                cart,
                total,
                date:firebase.firestore.Timestamp.fromDate(new Date()),
            },
            user:{
                name:userName,
                phone:userPhone,
                mail:userMail
            }       
        }
        e.preventDefault()
        await db.collection('compras').doc().set(compra)
        db.collection('compras').onSnapshot((e) => {
			e.forEach((itemCompra) => {
				alert(itemCompra.id);
			});
		});
        clear();
        setUserMail('');
        setUserName('');
        setUserPhone('')
    }
    
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
            <div>
				<form onSubmit={finalizarCompra}>
					<input 
                    placeholder='Ingresar nombre' 
                    type='text'
                    onChange={(e)=>{setUserName(e.target.value)}}
                    value={userName}
                    />
                    <input 
                    placeholder='Ingresar teléfono' 
                    type='text'
                    onChange={(e)=>{setUserPhone(e.target.value)}}
                    value={userPhone}
                    />
                    <input 
                    placeholder='Ingresar mail' 
                    type='text'
                    onChange={(e)=>{setUserMail(e.target.value)}}
                    value={userMail}
                    />
					<button className='btn btn-success' type='submit'>Comprar</button>
				</form>
			</div>
        </div>
    )
}

export default Cart