import React from 'react';
import { CarritoContext } from './carrito-context';
import Swal from 'sweetalert2';
import { getDoc, addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore';

export default function ContainerContextProvider({ children }) {
    const [carrito, setCarrito] = React.useState(0);
    const [item, setItem] = React.useState([]);
    const [orderId, setOrderId] = React.useState('');
    const [RecomendCat, setRecomend] = React.useState();

    const findItemWithHighestQ = (items) => {
        if (items.length === 0) {
            return null; // Return null if the array is empty
        }

        let maxQ = items[0].cantidad; // Initialize maxQ with the first item's q value
        let maxId = items[0].categoryID; // Initialize maxId with the first item's id

        // Iterate through the array starting from the second item
        for (let i = 1; i < items.length; i++) {
            if (items[i].q > maxQ) {
                // If the current item's q value is greater than maxQ, update maxQ and maxId
                maxQ = items[i].cantidad;
                maxId = items[i].categoryID;
            }
        }

        return maxId; // Return the id of the item with the highest "q" value
    }

    const handlerCarrito = (nuevoValor) => {
        setCarrito(nuevoValor)
    }

    const handlerItem = (nuevoValor) => {
        const productoEncaontrado = item.findIndex((producto) => producto.id === nuevoValor.id);

        productoEncaontrado >= 0
            ? (
                setItem((prevItem) =>
                    prevItem.map((item, index) => index === productoEncaontrado ? {
                        ...item, cantidad: item.cantidad + nuevoValor.cantidad,
                        price: item.price + nuevoValor.price,
                    } : item
                    )
                )) :
            setItem([...item, nuevoValor]);
    };

    const deleteItem = (index) => {
        setItem(item.filter((item, i) => i !== index));
    }

    const createNewOrder = (order) => {
        const db = getFirestore();
        const orders = collection(db, 'orders');
        const batch = writeBatch(db);
        const MaxId = findItemWithHighestQ(order.items)
        console.log(MaxId , order.items)
        Boolean(MaxId) && setRecomend(MaxId);
        addDoc(orders, order)
            .then((snapshot) => {
                setOrderId(snapshot.id)
                setItem([]);
                Swal.fire(
                    'Good job!',
                    `Su orden #${snapshot.id} fué procesada correctamente!`,
                    'success'
                );

                const getDocOr = doc(db, 'orders', snapshot.id);
                updateDoc(getDocOr, { orderId: snapshot.id });

                try {
                    // Loop through the order.items array to create an array of promises for stock updates
                    const stockUpdatePromises = order.items.map(async (item) => {
                        const productId = item.id;
                        const productRef = doc(db, 'productos', productId);
                        const stockDelta = item.cantidad; // Assuming item.cantidad represents the quantity to update stock

                        // Get the current stock value
                        const snapshot = await getDoc(productRef);
                        if (snapshot.exists()) {
                            const currentStock = snapshot.data().sold_quantity;

                            // Calculate the new stock value
                            const newStock = currentStock - stockDelta; // Decrease stock based on item quantity

                            // Update the stock field in the batch
                            batch.update(productRef, { sold_quantity: newStock });
                        }
                    });

                    // Wait for all stock update promises to complete before committing the batch
                    Promise.all(stockUpdatePromises)
                        .then(() => {
                            // Commit the batch after all updates have been added
                            return batch.commit();
                        })
                        .then(() => {
                            console.log('Stocks updated successfully.');
                        })
                        .catch((error) => {
                            console.error('Error updating stocks:', error);
                        });

                } catch (error) {
                    console.error('Error updating stocks:', error);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <CarritoContext.Provider value={{
            carrito, handlerCarrito, item, handlerItem, quantityCart: item.length,
            deleteItem, createNewOrder, lastOrder: orderId, RecomendCat
        }}>
            {children}
        </CarritoContext.Provider>
    )
}
