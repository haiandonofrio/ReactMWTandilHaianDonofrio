import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CarritoContext } from '../../containers/Context/carrito-context';
import { ColorButton } from '../container/contenedor';

export default function CarditemDetail({ index, item, onItemDelete }) {
    const { deleteItem } = React.useContext(CarritoContext);

    const handleClick = () => {
        deleteItem(index);
        onItemDelete();
    }

    return (
        <Card sx={{ maxHeight: '20%', marginTop: '50px', display: 'flex', flexDirection: 'row' }}>
            <CardMedia
                component="img"
                height="194"

                sx={{ maxWidth: "20%" }}
                image={item.thumbnail}
                alt={item.title}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '15%', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" display={'flex'}>
                    {item.cantidad} unidades.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <ColorButton sx={{ fontSize: "1em" }} size='small' onClick={handleClick}>Quitar del carrito</ColorButton>
            </CardActions>
        </Card>
    );
}