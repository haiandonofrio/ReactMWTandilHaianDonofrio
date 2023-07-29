import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { ColorButton } from '../container/contenedor'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const emailValidator = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

export default function UserInfo({ item, createNewOrder, lastOrder, onItemDelete }) {

    const [open, setOpen] = React.useState(false);
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefono, setTelefono] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        if (!isFormValid() || !createNewOrder || !item.length) {
            return;
        }
        handleClose();
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items: item,
            createdAt: new Date(),
            total: item.reduce((acc, items) => acc + items.price, 0)
        }
        createNewOrder(order);
        onItemDelete();
    }

    const isFormValid = () => {
        return Boolean(nombre.length) && Boolean(apellido.length) && emailValidator(email) && Boolean(telefono.length);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginRight: '15%', flexDirection: 'column' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Total: ${item.reduce((acc, items) => acc + items.price, 0)}
            </Typography>
            <ColorButton onClick={handleOpen}>
                Continuar Compra
            </ColorButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Complete la información
                    </Typography>


                    <div style={{ display: 'flex', justifyContent: 'center', gap: 30, flexDirection: 'column' }}>
                        <input type="text" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                        <input type="text" placeholder="Apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} />
                        <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <input type="text" placeholder="Teléfono" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ColorButton onClick={handleSubmit} disabled={!isFormValid()}>Finalizar compra</ColorButton>
                    </div>

                </Box>
            </Modal>
        </Box>
    )
}
