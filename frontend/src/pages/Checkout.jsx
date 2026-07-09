import { useState } from "react";
import { createOrder } from "../services/api.js";
import { useShop } from "../context/useShop";

export default function Checkout() {
  const { cart, clearCart } = useShop();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = subtotal * 0.18;
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal + tax + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone || !formData.address) {
        throw new Error("Please fill in all fields");
      }

      if (cart.length === 0) {
        throw new Error("Cart is empty");
      }

      // Prepare order items
      const orderItems = cart.map((item) => ({
        productId: item.id,
        name: item.name,
        qty: item.qty,
        price: item.price,
      }));

      // Create order
      const order = await createOrder({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        total: total,
        items: orderItems,
      });

      setStatus(`Order created successfully! Order ID: ${order.id}`);
      clearCart();
      setFormData({ name: "", email: "", phone: "", address: "" });
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section">
      <div className="section-heading">
        <p>Checkout</p>
        <h1>Secure Payment & Delivery</h1>
      </div>

      <div className="checkout-layout">

        {/* ================= FORM ================= */}
        <form className="checkout-form" onSubmit={handlePayment}>

          {/* CUSTOMER DETAILS */}
          <div className="form-section">
            <h3>Customer Details</h3>

            <div className="form-grid">
              <input
                required
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                required
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div className="form-section">
            <h3>Delivery Address</h3>

            <textarea
              required
              placeholder="Full Delivery Address (Street, City, State, PIN)"
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <button
            className="primary-button checkout-btn"
            type="submit"
            disabled={cart.length === 0 || loading}
          >
            {loading ? "Creating Order..." : "Create Order"}
          </button>

          {/* STATUS */}
          {status && (
            <p className={status.includes("Error") ? "error" : "success"}>
              {status}
            </p>
          )}
        </form>

        {/* ================= SUMMARY ================= */}
        <aside className="summary-card">

          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="summary-row">
                  <span>{item.name} x {item.qty}</span>
                  <strong>₹{(item.price * item.qty).toLocaleString("en-IN")}</strong>
                </div>
              ))}

              <hr />

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>

              <div className="summary-row">
                <span>GST (18%)</span>
                <strong>₹{tax.toLocaleString("en-IN")}</strong>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <strong>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </strong>
              </div>

              <hr />

              <div className="summary-row total">
                <span>Total</span>
                <strong>₹{total.toLocaleString("en-IN")}</strong>
              </div>
            </>
          )}

        </aside>

      </div>
    </section>
  );
}