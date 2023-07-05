import React from 'react'
import ProductList from '../../components/lista-elementos'
import { useNavigate, useParams } from 'react-router-dom'
import TabCat from '../../components/Tabs'
import { getProd } from '../../sdk/Products'
import { Box } from '@mui/material'
import MainText from '../../components/main-text'

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
            return 'Conjuntos%20Cuchillos'
        case 'Combinado':
            return 'Cuchillos%20Combinados'
        default:
            return 'Cuchillos'
    }
}

export default function ItemContainer() {
    const [items, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const { category } = useParams();
    const navigate = useNavigate();

    const current = CatTabs.some(cat => cat.id === category) ? category : 'all';

    React.useEffect(() => {
        if (!CatTabs.some(cat => cat.id === category)) {
            navigate('/products/all');
        }


    }, [category, navigate])
        
    React.useEffect(() => {
        setLoading(true)
        getProd(selectedsection(category))
            .then(res => res.json())
            .then((res) => {
                const data = res.results?.map((item) => (
                    {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.thumbnail,
                        stock: item.sold_quantity,
                        description: item.title
                    }
                ))
                setitems(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])
    
    return (
        <div>
            <MainText />
            <TabCat current={current} items={CatTabs} />
            <Box>
                <ProductList items={items} loading={loading}/>
            </Box>
        </div>
  )
}
