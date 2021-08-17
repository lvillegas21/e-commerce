import React from 'react'

const ItemCount = ({initial,stock, onAdd}) =>{
    
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

  return(
    <div>
    <p>En stock:{stock}</p>
    <p>Tu Pedido:{items}</p>
    <button onClick={sumar} className="btn btn-success">+</button>
    <button onClick={restar} className="btn btn-danger">-</button>
    </div>)
}
  export default ItemCount