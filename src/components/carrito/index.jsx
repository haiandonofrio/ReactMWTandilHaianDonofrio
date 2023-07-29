import React from 'react'
import { CarritoContext } from '../../containers/Context/carrito-context';
import CarditemDetail from '../card-item-detail';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import UserInfo from '../user-info';

export default function CartComponent() {
    const [count , setCount] = React.useState(0);

    const handleItemDelete = () => {
        // Update the parent component state when an item is deleted
        setCount(prevCount => prevCount + 1);
    };

    const { item, createNewOrder, lastOrder } = React.useContext(CarritoContext);


    if (item.length === 0) {
        return (
            <>No hay items en el carro
                <Link to={'/'}> <Button size='small'>Volver a comprar</Button></Link>
            </>
        )
    }
    return (
        <>
            {item.map((items, index) => (
                <CarditemDetail
                    key={index}
                    index={index}
                    item={items}
                    onItemDelete={handleItemDelete}
                />
            ))}
            <UserInfo item={item} createNewOrder={createNewOrder} lastOrder={lastOrder} onItemDelete={handleItemDelete} />
        </>

    );
}
