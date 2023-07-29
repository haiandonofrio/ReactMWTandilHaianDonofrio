import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Cartwidget from '../cartwidget';
import logo from './logo.png'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../containers/Context/carrito-context';


export default function Navbar() {

  const { quantityCart } = React.useContext(CarritoContext);


  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={handleRedirect}>
            <Box component='img' src={logo} alt='logo' sx={{ width: '100px', padding: 2 }} />
          </Button>
          <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
            MW TANDIL
          </Typography>
          <Link to="/cart" >{quantityCart ? <Cartwidget CantCarr={quantityCart} /> : null} </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}