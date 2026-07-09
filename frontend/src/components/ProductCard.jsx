import { Link } from "react-router-dom";
import { useShop } from "../context/useShop";

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    wishlist,
  } = useShop();

  const liked =
    wishlist?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);

    // optional UX improvement:
    // show toast OR navigate("/cart")
  };

  return (
    <article className="product-card">

      {/* PRODUCT LINK */}
      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>

          <p className="price">
            ₹{(product.price || 0).toLocaleString("en-IN")}
          </p>
        </div>
      </Link>

      {/* ACTIONS */}
      <div className="product-actions">

        {/* WISHLIST */}
        <button
          type="button"
          className={`wishlist-btn ${
            liked ? "active" : ""
          }`}
          onClick={() => toggleWishlist(product)}
        >
          {liked ? "❤️" : "🤍"}
        </button>

        {/* ADD TO CART */}
        <button
          type="button"
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

      </div>
    </article>
  );
}