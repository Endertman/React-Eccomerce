import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ItemCounter } from './ItemCounter';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { onAdd } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = async () => {
      const db = getFirestore();
      const refDoc = doc(db, 'items', id);

      try {
        const snapshot = await getDoc(refDoc);
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error('No se encontró el producto con el ID proporcionado.');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const add = (quantity) => {
    onAdd(item, quantity);
  };

  if (loading) {
    return <Typography variant="h6">Cargando...</Typography>;
  }

  return (
    <Container className="mt-4">
      <Typography variant="h4">{item.nombre}</Typography>
      <img src={item.img} alt={item.nombre} width={200} />
      <Typography variant="body1">{item.descripcion}</Typography>
      <Typography variant="body1">Stock: {item.stock}</Typography>
      <Typography variant="h5">${item.precio}</Typography>
      <ItemCounter initial={1} stock={item.stock} onAdd={add} />
    </Container>
  );
};

