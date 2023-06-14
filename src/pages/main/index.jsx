import React from 'react';
import '../index.css';
import ButtonCustom from '../../components/button';
import Navbar from '../../components/navbar';
import Message from '../../components/message';
import { Box, Tab, Tabs, Typography, ProductCard } from '@mui/material';
import { Padding } from '@mui/icons-material';


const Main = () => {
    //SIEMPRE CREAMOS ESTADOS ASI
//          estado     accion / update                  valor inicial
    const [inputValue, setInputValue] = React.useState('0');

    const noStock = () => {
            return (
                alert('No stock'))
    }   
//agregar carrito
    const handleClick = () => {
        if (isNaN(inputValue)) {
            return;
        }
        inputValue < 5 ? setInputValue(parseInt(inputValue) + 1) : noStock()
    }
//reiniciar
    const resetClick = () => {
    setInputValue(0);
    }

    const handlevalue = (event) => {
    setInputValue(event.target.value)
    }

    const [currentCategory, setCurrentCat] = React.useState('Cuchillos')

    const handleChange  = (_,value) => {
        setCurrentCat(value);
        setInputValue(0);
    }
    return (
        <section>
            <Navbar label={inputValue} />   
            <div className='contenedor' style={{ display: 'flex', flexDirection: 'column', alignItems:'center', backgroundColor:'white'}}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Somos una empresa dedicada a la manufacturación de cuchillos regionales!</h2>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={currentCategory} aria-label='tabs productos' onChange={handleChange}>
                        <Tab label="Cuchillos de Madera" value={'Cuchillo'} />
                        <Tab label="Conjuntos" value={'Conjunto'} />
                        <Tab label="Combinados" value={'Combinado'} />
                    </Tabs>
                </Box>
                {/* CUCHILLO DE MADEIRA */}
                <Box>
                    <Typography>
                        {currentCategory}
                    </Typography>
                    <ButtonCustom label={`Agregar ${currentCategory} al carrito`} color={'red'} handleClick={handleClick} />
                    <ButtonCustom label={'Reiniciar'} color={'red'} handleClick={resetClick} />
                </Box>

                <div style={{paddingTop: '20px'}}>
                                                            {/* evento que recibe el valor en el cambio */}
                    <input style={{}} value={inputValue} onChange={handlevalue} />
                </div>

            </div>
        </section>
    )
}

export default Main