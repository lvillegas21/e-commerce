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
}
const NavBar = () => {
         const {cart}=useCartContext()

        return ( <nav style={estilo.contenedor}>               
                    <ul className="nav justify-content-center">       
                        <Link className="nav-item" to="/">
                            <p className="nav-link active">Home</p>
                        </Link>

                        <Link className="nav-item" to="/category/men's clothing">
                            <p className="nav-link active">Hombre</p>
                        </Link>
                
                        <Link className="nav-item" to="/category/women's clothing">
                            <p className="nav-link active">Mujer</p>
                        </Link>

                        <Link className="nav-item" to='/category/jewelery'>
                            <p className="nav-link active">Accesorios</p>
                        </Link>

                        <Link className="nav-item" to='/category/electronics'>
                            <p className="nav-link active">Tecnología</p>
                        </Link>
                        <Link className="nav-item" to='/cart'>
                            <p className="nav-link active">Cart</p>
                        </Link>

                        {cart.length >0 ?<Link className="nav-item" to='/'>
                            <CartWidget/>
                        </Link>:<li></li>}
                        
                        
                    </ul>
                </nav>
        )
    }


export default NavBar;