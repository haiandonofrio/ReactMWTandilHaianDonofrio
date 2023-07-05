import React from 'react'
import Container from '../container'
import CircularProgressTabs from '../circular-progress'
import CarditemDetail from '../card-item-detail'

export default function ItemDetail({ item, loading }) {
    return (
        <Container>
            {Boolean(loading)
                ? <CircularProgressTabs />
                : 
                        <CarditemDetail
                            key={item.id}
                            item={item}
                        />
                    
                }
        </Container>
    )
}
