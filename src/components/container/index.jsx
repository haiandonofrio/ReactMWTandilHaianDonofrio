import { Box, styled } from '@mui/material'
import React from 'react'
import { Contenedor } from './contenedor'


export default function Container({ children }) {
    return (
        // <Contenedor>
        <Contenedor>
                {children}
        </Contenedor>
        // </Contenedor>
    )
}
