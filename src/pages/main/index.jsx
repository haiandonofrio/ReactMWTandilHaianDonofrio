import React from 'react'
import '../index.css'
import ButtonCustom from '../../components/button'
import Navbar from '../../components/navbar'
import { Box, Tab, Tabs, Typography, ProductCard, TextField } from '@mui/material'
import TabCat from '../../components/Tabs'



const Main = () => {
  // SIEMPRE CREAMOS ESTADOS ASI
  //          estado     accion / update                  valor inicial
  const [inputValue, setInputValue] = React.useState('0')

  const noStock = () => {
    return alert('No stock')
  }
  // agregar carrito
  const handleClick = () => {
    if (isNaN(inputValue)) {
      return
    }
    inputValue < 5 ? setInputValue(parseInt(inputValue) + 1) : noStock()
  }
  // reiniciar
  const resetClick = () => {
    setInputValue(0)
  }

  const handlevalue = event => {
    setInputValue(event.target.value)
  }



//   const handleChange = (_, value) => {
//     setCurrentCat(value)
//     setInputValue(0)
//     }
    
  return (
    <section>
      <Navbar cart={inputValue} />

      <div
        className='contenedor'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <h2 style={{ textAlign: 'center', color: 'white' }}>
          Somos una empresa dedicada a la manufacturación de cuchillos
          regionales!
        </h2>
        
        <TabCat/>

        <Box>

          <ButtonCustom
            label={`Agregar al carrito`}
            color={'red'}
            handleClick={handleClick}
          />
          <ButtonCustom
            label={'Reiniciar'}
            color={'red'}
            handleClick={resetClick}
          />
        </Box>

        <Box style={{ paddingTop: '20px' }}>
          {/* evento que recibe el valor en el cambio */}

          <TextField
            id='outlined-number'
            label='Cantidad '
            type='number'
            value={inputValue}
            onChange={handlevalue}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
      </div>
    </section>
  )
}

export default Main
