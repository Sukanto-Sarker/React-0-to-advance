
import React from 'react';
import { useCart } from './context/CartContext.jsx';

export default function ProductList() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2> 
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >Add to Cart</button>
          </li>
        ))}
      </ul> 
    </div>
  );
}