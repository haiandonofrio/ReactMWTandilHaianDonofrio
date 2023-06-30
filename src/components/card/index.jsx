import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Carditem ({ img, name, id, price, description, stock }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title={id} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
          {price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description || ''}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {stock}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Comprar</Button>
      </CardActions>
    </Card>
  )
}
