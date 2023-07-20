import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { Centrado } from '../container/contenedor'
import { useDebounce } from '../../hooks/useDebounce'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const maxinput = 20

export default function Carditem({ key, item }) {
  const [inputValue, setInputValue] = React.useState(0)
  const currentValue = React.useRef({ key })

  

  const noStock = () => {
    return alert('No stock')
  }

  // agregar carrito
  const handleClick = () => {
    // if (isNaN(inputValue)) {
    //   return
    // }
    inputValue < maxinput ? setInputValue(inputValue + 1) : noStock()
  }

  const handleReset = () => {
    // if (isNaN(inputValue)) {
    //   return
    // }
    inputValue > 0 ? setInputValue(inputValue - 1) : setInputValue(0)
  }
  const handleAdd = (event) => {
    console.log(event)
    setInputValue(0)

  }



  return (
    <Box>
      <Card sx={{ maxWidth: 400, margin: 2, maxHeight: 700 }}>
        <CardMedia sx={{ height: 200 }} image={item.image} title={item.title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {item.title}
            {item.key}
          </Typography>
          <Typography variant='body2' color='text.secondary' maxHeight={300}>
            {item.description || ''}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`Quedan ${item.stock}` || '0'}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`${item.price}$`}
          </Typography>
        </CardContent>
        <Centrado>
          <Button sx={{ fontSize: "1.5em" }} size='small' onClick={handleClick}>+</Button>
          <Button sx={{ fontSize: "1.5em" }} size='small' onClick={handleReset}>-</Button>
          <Link to={'/product/' + item.id}> <Button size='small'>Detalles</Button></Link>
        </Centrado>
        <Centrado>
          <Typography variant='body' color='text'>
            Cantidad: {useDebounce(inputValue,500)}
          </Typography>
          <Button size='small' onClick={handleAdd}>Agregar al Carrito</Button>
        </Centrado>
      </Card>
    </Box>
  )
}
