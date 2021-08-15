import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const estilo = {
    contenedor:{
        display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-around',
    },
}
const NavBar = () => {

        return ( <div style={estilo.contenedor}>               
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <p className="nav-link active">Home</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Productos</p>
                        </li>
                        <li className="nav-item">
                        <CartWidget/>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Ofertas</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Contacto</p>
                        </li>
                    </ul>
                </div>
        )
    }


export default NavBar;