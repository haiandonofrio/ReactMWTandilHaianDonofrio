import React from 'react'
import '../index.css'
import Navbar from '../../components/navbar'
import TabCat from '../../components/Tabs'
import { FlexCenterCol } from '../../components/container/contenedor'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemContainer from '../../containers/items-container'
import ItemDetailContainer from '../../containers/item-detail'
import ContainerContextProvider from '../../containers/Context'
import CartComponent from '../../components/carrito'



const Main = () => {


  return (
    <BrowserRouter>
      <section>
        <ContainerContextProvider>
          <Navbar cart={0} />

        <FlexCenterCol sx={{ backgroundColor: 'white' }}>
          <Routes>
            <Route path="/" element={<ItemContainer />} />
            <Route path={'/products/:category'} element={<ItemContainer/>}/>
            <Route path={'/product/:id'} element={<ItemDetailContainer />} />
              <Route path={'/cart'} element={<CartComponent/>} />
            <Route path='/*' element={<Navigate to="/" replace={true} />} />
          </Routes>
          <TabCat />
          </FlexCenterCol>
        </ContainerContextProvider>
      </section>
    </BrowserRouter >
  )
}

export default Main
