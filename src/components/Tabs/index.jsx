import React from 'react'
import {
    Box,
    Tab,
    Tabs,
    Typography,
    ProductCard,
    TextField
} from '@mui/material'
import SeccionList from '../lista-elementos'
import SeccionCuchillos from '../../containers/lista-cuchillos'
import SeccionConjuntos from '../../containers/lista-conjuntos'
import SeccionCombinados from '../../containers/lista-combinados'
import Container from '../container'

export default function TabCat() {
    const [currentCategory, setCurrentCat] = React.useState('Cuchillo')

    const handleChange = (_, value) => {
        setCurrentCat(value)
        //   setInputValue(0)
    }
    const selectedsection = selected => {
        switch (selected) {
            case 'Cuchillo':
                return <SeccionCuchillos />
            case 'Conjunto':
                return <SeccionConjuntos/>
            case 'Combinado':
                return <SeccionCombinados/>
            default:
                break
        }
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Container>
                <Tabs
                    value={currentCategory}
                    aria-label='tabs productos'
                    onChange={handleChange}
                >
                    <Tab label='Cuchillos de Madera' value={'Cuchillo'} />
                    <Tab label='Conjuntos' value={'Conjunto'} />
                    <Tab label='Combinados' value={'Combinado'} />
                </Tabs>
            </Container>
            {selectedsection(currentCategory)}
        </Box>
    )
}
