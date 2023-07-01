import React from 'react'
import SeccionList from '../../components/lista-elementos'
import { fakelist } from '../../sdk/fakeapi'

export default function SeccionConjuntos() {
    const [items, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        fakelist(8)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setitems(res)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <SeccionList items={items} loading={loading} />
    )
}
