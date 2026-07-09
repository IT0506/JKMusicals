import { Link } from "react-router-dom";
import { useShop } from "../context/useShop";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useShop();

  // ---------------- SAFE SUBTOTAL ----------------
  const subtotal = cart.reduce((sum, item) => {
    const price = item?.price || 0;
    const qty = item?.qty || 1;
    return sum + price * qty;
  }, 0);

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <section className="page-section">
      <div className="section-heading">
        <p>Cart</p>
        <h1>Your selected products</h1>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty 🛒</p>

          <Link className="primary-button" to="/shop">
            Shop now
          </Link>
        </div>
      ) : (
        <div className="cart-layout">

          {/* LEFT: ITEMS */}
          <div className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
  
  <div className="cart-left">
    <img src={item.image} alt={item.name} />
  </div>

  <div className="cart-middle">
    <h3>{item.name}</h3>
    <p className="cart-price">
      ₹{item.price.toLocaleString("en-IN")}
    </p>

    <div className="qty-controls">
      <button onClick={() => decreaseQty(item.id)}>−</button>
      <span>{item.qty}</span>
      <button onClick={() => increaseQty(item.id)}>+</button>
    </div>
  </div>

  <div className="cart-right">
    <button onClick={() => removeFromCart(item.id)}>
      Remove
    </button>
  </div>

</article>
            ))}
          </div>

          {/* RIGHT: SUMMARY */}
          <aside className="summary-card">
  <h2>Order Summary</h2>

  <div className="summary-row">
    <span>Subtotal</span>
    <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
  </div>

  <div className="summary-row">
    <span>Shipping</span>
    <strong>
      {subtotal > 999 ? "FREE" : "₹99"}
    </strong>
  </div>

  <hr />

  <div className="summary-row total">
    <span>Total</span>
    <strong>
      ₹{(subtotal > 999 ? subtotal : subtotal + 99).toLocaleString("en-IN")}
    </strong>
  </div>

  <Link to="/checkout" className="primary-button full">
    Proceed to Checkout
  </Link>

  <Link to="/shop" className="secondary-button full">
    Continue Shopping
  </Link>
</aside>

        </div>
      )}
    </section>
  );
}