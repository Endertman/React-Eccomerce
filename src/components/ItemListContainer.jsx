import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ItemList } from './ItemList';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();

      const refCollection = id
        ? query(collection(db, 'items'), where('categoria', '==', id))
        : collection(db, 'items');

      try {
        const snapshot = await getDocs(refCollection);
        if (snapshot.size === 0) {
          console.log('No se encontraron resultados.');
        } else {
          setItems(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <Container className="mt-4">
      {loading ? <Typography variant="h6">Cargando...</Typography> : <ItemList items={items} />}
    </Container>
  );
};
