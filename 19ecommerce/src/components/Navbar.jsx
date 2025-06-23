import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🛒 SnapDeal
      </Link>
      <Link to="/cart" className="cart-link">
        Cart ({cartItems.length})
      </Link>
    </nav>
  );
}
