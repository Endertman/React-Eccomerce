import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <AppBar position="static" className='navbar' sx={{backgroundColor: 'black'}}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }} className='logo_container'>
        <img src="src/assets/logo/aeroco_multicolor.svg" alt="Aeroco Logo" className='logo' />
        </Typography>
        <Button component={Link} to="/categoria/malliots" sx={{ marginLeft: 'auto', textDecoration: 'none' }}>
          Malliots
        </Button>
        <Button component={Link} to="/categoria/culottes" sx={{ textDecoration: 'none' }}>
          Culottes
        </Button>
        <Button component={Link} to="/categoria/accesorios" sx={{ textDecoration: 'none' }}>
          Accesorios
        </Button>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

