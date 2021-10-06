import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";
import './NavBar.css'
//CONTEXT
import { useCartContext } from '../../CartContext'

const NavBar = () => {
    const {cart}=useCartContext()

    const items= cart.reduce((acc,item)=>{
        return acc + item.quantity
    },0)

    return (
        <nav>               
            <ul className="nav justify-content-center">       
                <Link className="nav-item link" to="/">
                    <p>Home</p>
                </Link>
                <Link className="nav-item link" to="/category/puma">
                    <p>puma</p>
                </Link>    
                <Link className="nav-item link" to="/category/nike">
                   <p>nike</p>
                </Link>
                <Link className="nav-item link" to='/category/adidas'>
                    <p>adidas</p>
                </Link>
                <Link className="nav-item link" to='/cart'>
                    {cart.length > 0 
                        ? <div className='widget'><CartWidget/><p>{items}</p></div>
                        : <CartWidget/>
                    }
               </Link>
                
            </ul>
        </nav>
    )
}

export default NavBar;