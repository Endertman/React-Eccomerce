import React, { useContext, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const clearBuyer = { name: '', phone: '', email: '' };

export const Cart = () => {
  const [buyer, setBuyer] = useState(clearBuyer);
  const { clear, items, removeItem } = useContext(CartContext);

  const total = items.reduce((acumulado, actual) => acumulado + actual.price * actual.quantity, 0);

  const handleSendOrder = () => {
    const order = { buyer, items, total };
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          Swal.fire({
            title: 'Genial!',
            text: 'Su orden ha sido completada',
            icon: 'success',
          });
        }
      })
      .finally(() => {
        setBuyer(clearBuyer);
        clear();
      });
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setBuyer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!items.length) return <div>Carrito de compras vacío</div>;

  return (
    <Container>
      <div className='d-flex'>
        {items.map((item) => (
          <div key={item.id}>
            <h1>{item.nombre}</h1>
            <h2>Precio: {item.precio}</h2>
            <h3>Cantidad: {item.quantity}</h3>
            <p>{item.descripcion}</p>
            <img src={item.img} alt={item.nombre} width={200} />
            <Button variant='contained' color='secondary' onClick={() => removeItem(item.id)}>
              Eliminar
            </Button>
          </div>
        ))}
      </div>
      <form>
        <TextField
          label='Nombre'
          type='text'
          value={buyer.name}
          onChange={handleChange}
          required
          name='name'
        />
        <TextField
          label='Teléfono'
          type='text'
          value={buyer.phone}
          onChange={handleChange}
          required
          name='phone'
        />
        <TextField
          label='Email'
          type='email'
          value={buyer.email}
          onChange={handleChange}
          required
          name='email'
        />
        <div>${total}</div>
        <div>
          <Button variant='contained' color='primary' onClick={handleSendOrder}>
            Comprar
          </Button>
          <Button variant='contained' color='default' onClick={clear}>
            Vaciar Carrito
          </Button>
        </div>
      </form>
    </Container>
  );
};
