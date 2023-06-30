import {
    Box,
    Tab,
    Tabs,
    Typography,
    ProductCard,
    TextField,
    Card
} from '@mui/material'
import React from 'react'
import Carditem from '../card'
import { getCuchi } from '../../containers/lista-combinados/products'

export default function SeccionList({ loading, items }) {

    return (
        <Box display={'flex'} justifyContent={'center'} gap={5}>
            {Boolean(loading)
                ? <Typography>Cargando...</Typography>
                : items?.map((item, index) => {
                    return (
                        <Carditem
                            key={index + item.nombre}
                            img={item.imageURL}
                            name={item.nombre}
                            id={item.id}
                            price={item.precio}
                            description={item.nombre}
                        />
                    )
                })}
        </Box>
    )
}
