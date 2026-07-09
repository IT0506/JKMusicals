import ProductCard from "../components/ProductCard.jsx";
import { useShop } from "../context/useShop";

export default function Wishlist() {
  const { wishlist } = useShop();

  return (
    <section className="page-section">
      <div className="section-heading">
        <p>Wishlist</p>
        <h1>Saved instruments</h1>
      </div>

      {wishlist.length === 0 ? (
        <p>No wishlist items yet.</p>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}