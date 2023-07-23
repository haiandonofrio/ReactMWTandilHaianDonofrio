import React from 'react'
import ItemDetail from '../../components/item-detail'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { getItem } from '../../sdk/Products';

export default function ItemDetailContainer() {
    const [item, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const { id } = useParams();

    React.useEffect(() => {
        setLoading(true)
        // getItem(id)
        //     .then(res => res.json())
        //     .then((res) => {
        //         setitems(res)
        //     })
        const db = getFirestore();
        const getProduct = doc(db, 'productos', id)
        getDoc(getProduct).then((snapshot) => {
            if (snapshot.exists()) {
                setitems({ id: snapshot.id, ...snapshot.data() })
            }
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
