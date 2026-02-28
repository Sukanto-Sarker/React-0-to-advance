import { useCart } from './context/CartContext.jsx';
export default function CartTotal() {
  const { cart} = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h1>Cart Total</h1>
      <h3>Total: ${total}</h3>
    </div>
  )
}