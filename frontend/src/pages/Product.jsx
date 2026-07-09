import { useParams } from "react-router-dom";
import { useShop } from "../context/useShop";
import { getProductById } from "../services/api";
import { useState, useEffect } from "react";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useShop();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>;

  if (error || !product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p>Please go back to shop.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
    alert("Product added to cart!");
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />

      <div>
        <h1>{product.name}</h1>
        <p className="brand">{product.brand}</p>
        <p className="rating">★ {product.rating || 4.5}</p>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>

        <button className="primary-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}