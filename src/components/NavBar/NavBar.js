import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";
import './NavBar.css'
import { useCartContext } from '../../CartContext'

const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
    },
    link:{
        fontSize:"30px"
    }
}
const NavBar = () => {
         const {cart}=useCartContext()

        return ( <nav style={estilo.contenedor}>               
                    <ul className="nav justify-content-center">       
                        <Link className="nav-item" to="/">
                            <p className="nav-link active">Home</p>
                        </Link>

                        <Link className="nav-item" to="/category/puma">
                            <p className="nav-link active">puma</p>
                        </Link>
                
                        <Link className="nav-item" to="/category/nike">
                            <p className="nav-link active">nike</p>
                        </Link>

                        <Link className="nav-item" to='/category/adidas'>
                            <p className="nav-link active">adidas</p>
                        </Link>

                        {cart.length >0 ?<Link className="nav-item" to='/cart'>
                            <CartWidget/>
                        </Link>:<li></li>}
                        
                        
                    </ul>
                </nav>
        )
    }


export default NavBar;