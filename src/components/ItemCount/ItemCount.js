import React from 'react'



const ItemCount = ({initial,stock, onAdd}) =>{
  
  
const [items, setItems] = React.useState(initial);

const sumar = () => {
    setItems(items + 1);
  };

  const restar = () => {
    setItems(items - 1);
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