import React from 'react';
import Container from '@mui/material/Container';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};
