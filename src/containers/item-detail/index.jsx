import React from 'react'
import ItemDetail from '../../components/item-detail'
import { useParams } from 'react-router-dom';
import { getItem } from '../../sdk/Products';

export default function ItemDetailContainer() {
    const [item, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const { id } = useParams();

    React.useEffect(() => {
        setLoading(true)
        getItem(id)
            .then(res => res.json())
            .then((res) => {
                setitems(res)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            <ItemDetail item={item} loading={loading} />
        </div>
    )
}
