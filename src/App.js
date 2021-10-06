//REACT
import React from "react";
//estilo
import './App.css';
//react-router-dom
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
//components
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
//context
import { CartProvider} from './CartContext';

const App=()=> {  
    return ( 
        <CartProvider>
            <Router>
                <div className='colorNav'>
                    <NavBar />
                </div>
                <h1 className="titulo">SNEAKERZ!</h1>
                <div className='div' >     
                    <Switch>
                        <Route path='/' exact component={ItemListContainer}/>
                        <Route path='/item/:id' component={ItemDetailContainer}/>
                        <Route path='/category/:categoryId' component={ItemListContainer}/>
                        <Route path='/cart' component={Cart}/>
                    </Switch>
                </div>
            </Router>
        </CartProvider>
    );  
}

export default App;