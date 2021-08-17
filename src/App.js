import './App.css';

import React from "react";

import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const style ={
    style1:{
        display: 'flex',
        justifyContent: 'center',
        padding:'0px 100px ',
        margin:"10px",
    },
    style2:{
        backgroundColor:"lightgreen"
    },
    style3:{
        backgroundColor:"lightgoldenrodyellow"
    }

}

class App extends React.Component {
    render() {
        return ( <div className='div'style={style.style3} >
            <div style={style.style2} >
            <NavBar />
            </div>
            <div style={style.style1}>
            <ItemListContainer
                    
                    producto="PRODUCTO"
                    
            />            
            </div>
            </div>
            

        );
    }
}

export default App;