import { products } from "../data/newproducts";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
