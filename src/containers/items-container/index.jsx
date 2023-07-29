import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore"
import MainText from '../../components/main-text'
import TabCat from '../../components/Tabs'
import { Box } from '@mui/material'
import ProductList from '../../components/lista-elementos'
import { CarritoContext } from '../Context/carrito-context'
import Recomended from '../recomend-container'


const CatTabs = [{ id: 'all', title: 'Todos los productos' },
{ id: 'Cuchillo', title: 'Cuchillos' },
{ id: 'Conjunto', title: 'Conjuntos' },
{ id: 'Combinado', title: 'Combinado' }]

const selectedsection = (id) => {
    switch (id) {
        case 'all':
        // return <
        case 'Cuchillo':
            return 'Cuchillos'
        case 'Conjunto':
            return 'Conjuntos'
        case 'Combinado':
            return 'Combinado'
        default:
            return 'Cuchillos'
    }
}

export default function ItemContainer() {
    const [items, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const { category } = useParams();
    const navigate = useNavigate();
    const { RecomendCat } = React.useContext(CarritoContext);

    const current = CatTabs.some(cat => cat.id === category) ? category : 'all';

    React.useEffect(() => {
        if (!CatTabs.some(cat => cat.id === category)) {
            navigate('/products/all');
        }


    }, [category, navigate])

    React.useEffect(() => {
        setLoading(true)

        const db = getFirestore();
        const getCollection = query(collection(db, 'productos'), limit(8));
        const q = query(collection(db, "productos"), where("categoryID", "==", selectedsection(category)), limit(8));

        if (category === 'all') {
            getDocs(getCollection).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No hay resultados");
                }

                setitems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }).finally(() => {
                setLoading(false)
            })
        } else if (CatTabs.some(categories => categories.id === category)) {
            getDocs(q).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No hay resultados");
                }

                setitems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }).finally(() => {
                setLoading(false)
            })
        }


    }, [category])

    return (
        <div>
            <MainText />
            <TabCat current={current} items={CatTabs} />
            <Box>
                <ProductList items={items} loading={loading} />
            </Box>
            {
                RecomendCat &&
                <Recomended recomend={RecomendCat} styles={{ marginTop: '50px' }} />
            }
        </div>
    )
}
