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
import { CarritoContext } from '../../containers/Context/carrito-context'


const maxinput = 20

export default function Carditem({ key, item , Showdetail }) {
  const { id, title, description , price, thumbnail, sold_quantity } = item;
  const [inputValue, setInputValue] = React.useState(0)
  const [stockValue, setStockValue] = React.useState(sold_quantity)
  const currentValue = React.useRef({ key })

  const { carrito, handlerCarrito, handlerItem, quantityCart } = React.useContext(CarritoContext);

  console.log( item ) 

  const noStock = () => {
    return alert('No stock')
  }

  // agregar carrito
  const handleClick = () => {

    inputValue < stockValue ? setInputValue(inputValue + 1) : noStock()
  }

  const handleReset = () => {

    inputValue > 0 ? setInputValue(inputValue - 1) : setInputValue(0)
  }
  const handleAdd = (event) => {
    console.log(event)
    setInputValue(0)
    let valor = parseInt(stockValue - inputValue);
    setStockValue(valor)
    valor = inputValue + carrito;
    handlerCarrito(valor);
    handlerItem({
      id: id,
      title: title,
      cantidad: inputValue,
      price: price * inputValue,
      thumbnail: thumbnail,
    });
  }

  return (
    <Box>
      <Card sx={{ maxWidth: 400, margin: 2, maxHeight: 700 }}>
        <CardMedia sx={{ height: 200 }} image={thumbnail} title={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
            {key}
          </Typography>
          <Typography variant='body2' color='text.secondary' maxHeight={300}>
            {description || ''}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`Quedan ${stockValue || sold_quantity}` || '0'}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`${price}$`}
          </Typography>
        </CardContent>
        <Centrado>
          <Button sx={{ fontSize: "1.5em" }} size='small' onClick={handleClick}>+</Button>
          <Button sx={{ fontSize: "1.5em" }} size='small' onClick={handleReset}>-</Button>
          {Showdetail ?
            <Link to={'/product/' + id}> <Button size='small'>Detalles</Button></Link> : null}
        </Centrado>
        <Centrado>
          <Typography variant='body' color='text'>
            Cantidad: {useDebounce(inputValue,500)}
          </Typography>
          <Button size='small' onClick={handleAdd}>Agregar al Carrito</Button>

          { !Showdetail && quantityCart ? <Link to={'/cart'}> <Button size='small'>Ver Carrito</Button></Link> : null }
        </Centrado>
      </Card>
    </Box>
  )
}
