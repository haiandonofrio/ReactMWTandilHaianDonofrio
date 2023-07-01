import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { Centrado } from '../container/contenedor'

export default function Carditem({ id, img, title, stock, price, description }) {
  const [inputValue, setInputValue] = React.useState(0)

  const noStock = () => {
    // return alert('No stock')
  }

  // agregar carrito
  const handleClick = (stocks) => {
    if (isNaN(inputValue)) {
      return
    }
    inputValue <= 15 ? setInputValue(parseInt(inputValue) + 1) : noStock()
  }

  const handleReset = () => {
    if (isNaN(inputValue)) {
      return
    }
    setInputValue(parseInt(inputValue) - 1) 
  }

  return (
    <Box>
      <Card sx={{ maxWidth: 400, margin: 2, maxHeight: 700 }}>
        <CardMedia sx={{ height: 200 }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
            {id}
          </Typography>
          <Typography variant='body2' color='text.secondary' maxHeight={300}>
            {description || ''}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`Quedan ${stock}` || '0'}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`${price}$`}
          </Typography>
        </CardContent>
        <Centrado>
          <Button size='small' onClick={handleClick(15)}>Agregar al carrito</Button>
          <Button size='small'>Detalles</Button>
        </Centrado>
        <Centrado>
          <Typography variant='body' color='text'>
            Cantidad: {inputValue}
          </Typography>
          <Button size='small' onClick={handleReset}>Quitar</Button>
        </Centrado>
      </Card>
    </Box>
  )
}
