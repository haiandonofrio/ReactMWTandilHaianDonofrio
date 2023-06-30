import React from 'react'
import { getCuchi } from './products'
import SeccionList from '../../components/lista-elementos'

export default function SeccionCuchillos() {
    const [items, setitems] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        getCuchi()
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
