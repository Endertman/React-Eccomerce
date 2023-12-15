import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const onAdd = (item, quantity) => {
    const exists = items.some((i) => i.id === item.id);
    if (exists) {
      const updatedItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      );
      setItems(updatedItems);
    } else {
      setItems((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newItems = items.filter((prev) => prev.id !== id);
    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ onAdd, clear, items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
