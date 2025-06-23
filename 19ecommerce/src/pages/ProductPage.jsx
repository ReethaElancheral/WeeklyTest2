import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">₹{product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
