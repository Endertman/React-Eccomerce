import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt={item.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descripcion}
        </Typography>
        <Link to={`/item/${item.id}`}>
          <Button variant="contained" color="primary">
            Más Información
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Item;
