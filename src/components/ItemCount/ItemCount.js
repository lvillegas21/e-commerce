import React from 'react'
import './ItemCount.css'

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

  return(
    <div className='contenedor'>
      <div className='botones'>
        
          <button onClick={sumar} className="btn btn-success margenes">+</button> 
            <p>{items}</p>
          <button onClick={restar} className="btn btn-danger margenes">-</button>
        
      </div>
      <div className='botones'>
        <button className="btn btn-primary" onClick={()=> onAdd(items)}>Comprar</button>
      </div>
    </div>)
}
  
export default ItemCount