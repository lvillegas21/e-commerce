import React from 'react'

const ItemCount = ({initial,stock, onAdd}) =>{
    
const [items, setItems] = React.useState(initial);

const sumar = () => {
  if (items <9){
    setItems(items + 1);
  
  }else{
      
      return false
  }  
  };

  const restar = () => {
    if(items>1){
      setItems(items - 1);
      
    }else{
      return false
    }
  };

  const style ={
    style1:{
        width:"165px",
        display: 'flex',
        justifyContent: 'center',
        flexDirection:"column"
    },
    style2:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection:"row",
      width:"155px",
      alignItems:'center'
    }
  }

  return(
    <div style={style.style1}>
    
    <div style={style.style2}>
    <p>stock:{stock}</p>
    </div>

    
    <div style={style.style2}>
    <p><button onClick={sumar} className="btn btn-success">+</button> {items} <button onClick={restar} className="btn btn-danger">-</button></p>
    </div>
    <div style={style.style2}>
    <button className="btn btn-primary" onClick={()=> onAdd(items)}>Comprar</button>
    </div>
    </div>)
}
  export default ItemCount