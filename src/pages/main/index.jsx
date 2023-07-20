import React from 'react'
import '../index.css'
import ButtonCustom from '../../components/button'
import Navbar from '../../components/navbar'
import { Box, Tab, Tabs, Typography, ProductCard, TextField } from '@mui/material'
import TabCat from '../../components/Tabs'
import { FlexCenterCol } from '../../components/container/contenedor'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemContainer from '../../containers/items-container'
import ItemDetailContainer from '../../containers/item-detail'



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


  return (
    <BrowserRouter>
      <section>

        <Navbar cart={inputValue} />

        <FlexCenterCol sx={{ backgroundColor: 'white' }}>
          
          <Routes>
            <Route path="/" element={<ItemContainer />} />
            <Route path={'/products/:category'} element={<ItemContainer/>}/>
            <Route path={'/product/:id'} element={<ItemDetailContainer />} />
            <Route path={'/cart'} element={<p>Cart</p>} />
            <Route path='/*' element={<Navigate to="/" replace={true} />} />
          </Routes>
          <TabCat />
        </FlexCenterCol>
      </section>
    </BrowserRouter >
  )
}

export default Main
