import React from 'react'

const ItemCount = ({initial,stock, onAdd, producto}) =>{
    
const [items, setItems] = React.useState(initial);

const sumar = () => {
  if (items <9){
    setItems(items + 1);
    alert("añadido al carrito")
  }else{
      alert("no hay stock")
      return false
  }  
  };

  const restar = () => {
    if(items>1){
      setItems(items - 1);
      alert("quitado del carrito")
    }else{
      return false
    }
  };

  const style ={
    style1:{
        width:"165px",
        background:"greenyellow",
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
    <h4>{producto}</h4>
    <p>En stock:{stock}</p>
    <p>Tu Pedido:{items}</p>
    <div style={style.style2}>
      <button onClick={sumar} className="btn btn-success">+</button>
      <button onClick={restar} className="btn btn-danger">-</button>
    </div>
    <div style={style.style2}>
    <button className="btn btn-primary" onClick={()=> onAdd(items)}>añadir al carrito</button>
    </div>
    </div>)
}
  export default ItemCount