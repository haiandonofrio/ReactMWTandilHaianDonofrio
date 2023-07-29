import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { Centrado, ColorButton, FlexCenterCol } from '../container/contenedor'
import { useDebounce } from '../../hooks/useDebounce'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CarritoContext } from '../../containers/Context/carrito-context'
import Swal from 'sweetalert2'


export default function Carditem({ item, Showdetail }) {
  const { id, title, description, price, thumbnail, sold_quantity, categoryID } = item;
  const [inputValue, setInputValue] = React.useState(0)
  const [stockValue, setStockValue] = React.useState(sold_quantity)

  const { carrito, handlerCarrito, handlerItem, quantityCart } = React.useContext(CarritoContext);


  const noStock = () => {
    return Swal.fire(
      'Lo sentimos',
      `No hay más stock del producto elegido`,
      'error'
    );
  }

  // agregar carrito
  const handleClick = () => {

    inputValue < stockValue ? setInputValue(inputValue + 1) : noStock()
  }

  const handleReset = () => {

    inputValue > 0 ? setInputValue(inputValue - 1) : setInputValue(0)
  }
  const handleAdd = (event) => {
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
      categoryID: categoryID,
    });
  }

  return (
    <Box>
      <Card sx={{ maxWidth: 400, margin: 2, maxHeight: 700 }}>
        <CardMedia component="img" sx={{ height: 200 }} image={thumbnail} title={title} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
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
          <ColorButton sx={{ fontSize: "1.5em" }} size='small' onClick={handleClick}>+</ColorButton>
          <ColorButton sx={{ fontSize: "1.5em" }} size='small' onClick={handleReset}>-</ColorButton>
          {Showdetail ?
            <Link to={'/product/' + id}> <ColorButton size='small'>Detalles</ColorButton></Link> : null}
        </Centrado>
        <FlexCenterCol>
          <Typography variant='body' color='text' fontSize='1em'>
            Cantidad: {useDebounce(inputValue, 200)}
          </Typography>
          <ColorButton size='small' onClick={handleAdd}>Agregar al Carrito</ColorButton>

          {!Showdetail && quantityCart ? <Link to={'/cart'}> <Button size='small'>Ver Carrito</Button></Link> : null}
        </FlexCenterCol>
      </Card>
    </Box>
  )
}
