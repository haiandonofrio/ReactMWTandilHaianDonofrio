import React from 'react'
import Container from '../container'
import CircularProgressTabs from '../circular-progress'
import CarditemDetail from '../card-item-detail'
import Carditem from '../card'

export default function ItemDetail({ item, loading }) {
    
    return (
       
        <Container>
            {Boolean(loading)
                ? <CircularProgressTabs />
                : 
                        <Carditem
                            key={item.id}
                            item={item}
                        />
                    
                }
        </Container>
    )
}
