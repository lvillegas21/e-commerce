import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";
import './NavBar.css'

const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
    },
}
const NavBar = () => {

        return ( <nav style={estilo.contenedor}>               
                    <ul className="nav justify-content-center">       
                        <Link className="nav-item" to="/category/men's clothing">
                            <p className="nav-link active">Hombre</p>
                        </Link>
                
                        <Link className="nav-item" to="/category/women's clothing">
                            <p className="nav-link active">Mujer</p>
                        </Link>
                       
                        <Link className="nav-item" to='/'>
                            <CartWidget/>
                        </Link>

                        <Link className="nav-item" to='/category/jewelery'>
                            <p className="nav-link active">Accesorios</p>
                        </Link>

                        <Link className="nav-item" to='/category/electronics'>
                            <p className="nav-link active">Tecnología</p>
                        </Link>
                    </ul>
                </nav>
        )
    }


export default NavBar;