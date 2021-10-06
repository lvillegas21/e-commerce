import React, {useState} from 'react';
import { Item } from 'semantic-ui-react'
import './Cart.css'
import swal from 'sweetalert';
//FIREBASE
import firebase from 'firebase/app';
//REACT-ROUTER-DOM
import { Link } from 'react-router-dom';
//CONTEXT
import { useCartContext } from '../../CartContext';
import { db } from '../../Firebase/Firebase'


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
                swal({
                    title: "Gracias por tu compra!",
                    text: "El id de tu compra es: "+ itemCompra.id,
                    icon: "success",
                    button: "OK",
                  }); 
			});
		});
        clear();
        setUserMail('');
        setUserName('');
        setUserPhone('')
    }
    
    return(
        <div className='div'>
            <h2 className='titCart'> TUS COMPRAS</h2>
            {cart.length> 0 &&cart.map((data)=>{
                return(
                    <div key={data.id} className='div'>
                        <Item.Group>
                            <Item>
                                <Item.Image size='small' src={data.image} />
                                <Item.Content>
                                    <Item.Header><h3 className='h3'>{data.title}</h3></Item.Header>
                                    <Item.Meta>
                                        <h4 className='datoCart'>${data.price}</h4>
                                        <h4 className='datoCart'>Unidades: {data.quantity}</h4>
                                        <button className='btn btn-danger' onClick={()=>{removeItem(data.id)}}> X</button>
                                    </Item.Meta>
                                </Item.Content>
                            </Item>
                        </Item.Group> 
                    </div>
                )
            })}
            {
            cart.length === 0
                ? (
                    <Link to='/'>
                        <h3 className='h3'>No hay productos!Observa nuestro catálogo si deseas comprar</h3>
                    </Link>
                )
            : (
            <div>
                <form onSubmit={finalizarCompra} >
                    <div className='form-group'>
                        <input 
                            placeholder='Ingresar nombre' 
                            type='text'
                            onChange={(e)=>{setUserName(e.target.value)}}
                            value={userName}
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            placeholder='Ingresar teléfono' 
                            type='number'
                            onChange={(e)=>{setUserPhone(e.target.value)}}
                            value={userPhone}
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            placeholder='Ingresar mail' 
                            type='email'
                            onChange={(e)=>{setUserMail(e.target.value)}}
                            value={userMail}
                            className='form-control '
                        />
                    </div>
                    <h3 className="h3">Precio final:${total}</h3>
                    <button 
                        className='btn btn-success button' 
                        type='submit'>Comprar
                    </button>
                    </form>
                <button 
                    className='btn btn-danger button' 
                    onClick={()=>clear(cart)} >Vaciar carrito
                </button>
            </div>
              )
            }
            
				
        </div>
    )
}

export default Cart