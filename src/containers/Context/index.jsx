import React from 'react'
import { CarritoContext } from './carrito-context';



export default function ContainerContextProvider({ children }) {
    const [carrito, setCarrito] = React.useState(0);
    const [item, setItem] = React.useState([]);

    const handlerCarrito = (nuevoValor) => {
        setCarrito(nuevoValor)
    }

    const handlerItem = (nuevoValor) => {
        setItem([...item,nuevoValor])
    }

    const deleteItem = (id) => {
        setItem(prevData => prevData.filter(item => item.id !== id));
    }

    console.log(CarritoContext);

    return (
        <CarritoContext.Provider value={{
            carrito, handlerCarrito, item, handlerItem, quantityCart: item.length ,
            deleteItem}}>
            {children}
        </CarritoContext.Provider>
    )
}
