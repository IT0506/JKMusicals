import { useState } from "react";
import { createPaymentOrder } from "../services/api.js";
import { useShop } from "../context/useShop";

export default function Checkout() {
  const { cart } = useShop();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = subtotal * 0.18;
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal + tax + shipping;

  const [status, setStatus] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setStatus("Creating secure payment order...");

    try {
      const order = await createPaymentOrder({
        amount: total,
        cart,
      });

      setStatus(
        "Order created: " +
          (order.orderId || order.id)
      );
    } catch {
      setStatus(
        "Backend not connected or payment keys missing."
      );
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
              <input required placeholder="Full Name" />
              <input required type="email" placeholder="Email Address" />
              <input required placeholder="Phone Number" />
            </div>
          </div>

          {/* ADDRESS */}
          <div className="form-section">
            <h3>Delivery Address</h3>

            <textarea
              required
              placeholder="Full Delivery Address (Street, City, State, PIN)"
              rows="4"
            />
          </div>

          {/* BUTTON */}
          <button
            className="primary-button checkout-btn"
            disabled={cart.length === 0}
          >
            Create Payment Order
          </button>

          {/* STATUS */}
          {status && <p className="status">{status}</p>}
        </form>

        {/* ================= SUMMARY ================= */}
        <aside className="summary-card">

          <h2>Order Summary</h2>

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

        </aside>

      </div>
    </section>
  );
}