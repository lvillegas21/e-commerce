import React from 'react'
import './Item.css'
import { Card, Image } from 'semantic-ui-react'

const Item =({data})=>{  
    return(
        <div >         
            <Card className="tamanoDiv">
                <Image src={data.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <p className='tit'>{data.title}</p>
                    </Card.Header>
                    
                    <Card.Meta>
                        <span className='date'>{data.category}</span>
                    </Card.Meta>
                    
                    <Card.Description className='precio'>
                    ${data.price}
                    </Card.Description>
                    
                    <button className="btn btn-primary ver">VER</button>
                </Card.Content>
            </Card>
        </div>        
    );
}

export default Item