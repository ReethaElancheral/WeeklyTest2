import { useCart } from "../context/CartContext";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0)
    return <p className="empty-cart">Your cart is empty.</p>;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>SubTotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ id, name, price, quantity }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => updateQuantity(id, +e.target.value)}
                />
              </td>
              <td>₹{price.toFixed(2)}</td>
              <td>₹{(price * quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
