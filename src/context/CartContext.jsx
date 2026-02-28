import React, { createContext, useState, useContext } from 'react';
const CartContext =createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 
  //add to card 
  function addToCart(product) {
    setCart(prevCart => [...prevCart, product]);
  }
  //remove from card
  const removeFromCart = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};
  //clear card
  function clearCart() {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}  
    </CartContext.Provider>
  );
}

export function useCart() {
return useContext(CartContext);
}