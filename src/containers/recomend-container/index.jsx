import { Box, Typography } from '@mui/material'
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';
import React from 'react'
import ProductList from '../../components/lista-elementos';

export default function Recomended({ recomend }) {
    const [items, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true)

        const db = getFirestore();
        const q = query(collection(db, "productos"), where("categoryID", "==", recomend), limit(3));
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No hay resultados");
            }

            setitems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }).finally(() => {
            setLoading(false)
        })
    }, [recomend])

    return (
        <Box>
            <Typography gutterBottom variant='h5' component='div'>
                Porque te gustaron nuestros {recomend} :
            </Typography>
            <Box>
                <ProductList items={items} loading={loading} />
            </Box>
        </Box>
    )
}
