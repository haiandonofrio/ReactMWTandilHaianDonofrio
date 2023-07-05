import React from 'react'
import {
    Box,
    Tab,
    Tabs,
} from '@mui/material'

import Container from '../container'
import { useNavigate } from 'react-router-dom'


export default function TabCat({ current, items }) {

    const navigate = useNavigate();

    const handleChange = (_, newValue) => {
        navigate('/products/' + newValue)
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Container>
                <Tabs
                    value={current}
                    aria-label='tabs productos'
                    onChange={handleChange}
                >
                    {items?.map((item, index) =>
                        <Tab key={item.id + index} label={item.title} value={item.id} />
                    )}

                </Tabs>
            </Container>

        </Box>
    )
}
