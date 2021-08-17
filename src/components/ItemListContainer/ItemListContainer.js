import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const style = {    
    cont:{
        height: "330px",
        width: "210px",
        padding: "3px",
        margin: "10px 0px",
        borderStyle:"solid",
        borderRadius:"2%",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }

}

const ItemListContainer =({producto})=>{    
    return(
        <div>
            <div style={style.cont}>
                <h4>{producto}</h4>
                <div ><ItemCount 
                    stock={9}
                    initial={1}    
                    />
                </div>
            </div>
            
        </div>
    )
}

export default ItemListContainer;