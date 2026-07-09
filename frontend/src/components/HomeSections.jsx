import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import { brands, categories, products } from "../data/products.js";

export default function HomeSections() {
  const featured = products.slice(0, 8);

  return (
    <div className="home">

      {/* ================= HERO ================= */}
      {/* ================= WELCOME ================= */}
<section className="welcome-section">

  <motion.span
    className="welcome-badge"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    🎵 INDIA'S PREMIUM MUSIC STORE
  </motion.span>

  <motion.h1
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Discover Your Next
    <span> Musical Instrument</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
  >
    From premium guitars and keyboards to drums, traditional
    instruments and professional audio equipment, JK Musicals
    brings together trusted brands and quality products for every
    musician.
  </motion.p>

  <div className="welcome-actions">
    <Link to="/shop" className="primary-button">
      Shop Instruments
      <ArrowRight size={18} />
    </Link>

    <Link to="/about" className="secondary-button">
      Learn More
    </Link>
  </div>

</section>

      {/* ================= TRUST BAR ================= */}
      <section className="trust-row">
        <div><Truck /> Fast Delivery</div>
        <div><ShieldCheck /> 100% Genuine</div>
        <div><BadgeCheck /> Warranty Support</div>
        <div><Headphones /> Expert Guidance</div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section">
        <div className="section-heading">
          <h2>Shop by Category</h2>
          <p>Find instruments by type</p>
        </div>

        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c} to={`/shop?category=${c}`} className="category-tile">
              <div className="cat-img" />
              <h3>{c}</h3>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="section">
        <div className="section-heading row">
          <div>
            <h2>Featured Products</h2>
            <p>Best picks for musicians</p>
          </div>
          <Link to="/shop">View All →</Link>
        </div>

        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="brand-band">
        <h2>Top Brands</h2>
        <div>
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter">
        <h2>Get Exclusive Deals</h2>
        <p>Subscribe for offers & new arrivals</p>

        <div className="newsletter-box">
          <input placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

    </div>
  );
}