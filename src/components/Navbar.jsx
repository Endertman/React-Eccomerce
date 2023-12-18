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
    <AppBar position="static" color="warning">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
          Aeroco
        </Typography>
        <Button component={Link} to="/categoria/Malliots" color="inherit" sx={{ marginLeft: 'auto', textDecoration: 'none' }}>
          Malliots
        </Button>
        <Button component={Link} to="/categoria/Culottes" color="inherit" sx={{ textDecoration: 'none' }}>
          Culottes
        </Button>
        <Button component={Link} to="/categoria/Accesorios" color="inherit" sx={{ textDecoration: 'none' }}>
          Accesorios
        </Button>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};
