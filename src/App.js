import './App.css';
import React from "react";

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { CartProvider} from './components/CartContext/CartContext';

const style ={
    style2:{
        backgroundColor:"lightgreen"
    },
}

const App=()=> {  
        return ( 
            <CartProvider>
            <Router>
            <div style={style.style2} >
                <NavBar />
            </div>
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