import React from 'react'

const style = {    
    cont:{
        height: "330px",
        width: "210px",
        padding: "3px",
        margin: "10px 0px",
        borderStyle:"solid",
        borderRadius:"2%"
    },
}

const ItemListContainer =({producto})=>{
    return(
        <div>
            <div style={style.cont}>
                <h4>{producto}</h4>
            </div>
        </div>
    )
}

export default ItemListContainer;