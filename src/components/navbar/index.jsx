import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Cartwidget from '../cartwidget';
import logo from './logo.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Navbar({cart}) {
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
          <Cartwidget CantCarr={cart} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}