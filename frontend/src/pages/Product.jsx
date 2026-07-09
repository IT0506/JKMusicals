import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function Product() {
  const { id } = useParams();

  // FIX: convert id properly
  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p>Please go back to shop.</p>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />

      <div>
        <h1>{product.name}</h1>
        <p>₹{product.price}</p>
        <p>{product.description}</p>

        <button className="primary-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}