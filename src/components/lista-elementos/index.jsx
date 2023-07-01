import {
    Box,
    Tab,
    Tabs,
    Typography,
    ProductCard,
    TextField,
    Card,
    LinearProgress,
    styled,
} from '@mui/material'
import React from 'react'
import Carditem from '../card'
import CircularProgressTabs from '../circular-progress'
import Container from '../container'


export default function SeccionList({ loading, items }) {

    return (
        <Container>
            {Boolean(loading)
                ? <CircularProgressTabs />
                : items?.map((item, index) => {
                    return (
                        <Carditem
                            key={index + item.title}
                            img={item.image}
                            title={item.title}
                            stock={item.stock}
                            price={item.price}
                            description={item.description}
                        />
                    )
                })}
        </Container>
    )
}
