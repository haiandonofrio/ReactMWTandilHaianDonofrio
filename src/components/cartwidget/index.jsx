import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import { IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export default function Cartwidget ({ CantCarr }) {
  return (
    <IconButton>
      <Badge badgeContent={CantCarr} max={999} color='error' min={0} showZero>
        <ShoppingCartIcon sx={{ color: 'white', width: '50px', height: '50px' }} />
      </Badge>
    </IconButton>
  )
}
