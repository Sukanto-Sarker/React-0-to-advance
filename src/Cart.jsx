import { useCart } from './context/CartContext.jsx';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
             <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}  

    </div>
  )
}