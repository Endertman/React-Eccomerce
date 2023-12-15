import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acumulador, actual) => acumulador + actual.quantity, 0);

  return (
    <Link to='/cart' className='nav-link'>
      <Badge badgeContent={total} color='error'>
        <ShoppingCartIcon fontSize='large' />
      </Badge>
    </Link>
  );
};
