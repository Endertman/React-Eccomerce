import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ItemCounter = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    if (count > initial) setCount((c) => c - 1);
  };

  const handleIncrease = () => {
    if (stock > count) setCount((c) => c + 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <>
      <br />
      <br />
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        <Button variant="outlined" onClick={handleDecrease}>
          -
        </Button>
        <Typography variant="h4" style={{ margin: '0 16px' }}>
          {count}
        </Typography>
        <Button variant="outlined" onClick={handleIncrease}>
          +
        </Button>
      </div>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        Agregar al carrito
      </Button>
    </>
  );
};

