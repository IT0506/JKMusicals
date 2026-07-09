import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2>JK Musicals</h2>
          <p>
            Premium musical instruments for musicians,
            creators and studios across India.
          </p>

          <div className="socials">
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Youtube size={18} /></a>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h3>Shop</h3>
          <Link to="/shop">Guitars</Link>
          <Link to="/shop">Keyboards</Link>
          <Link to="/shop">Drums</Link>
          <Link to="/shop">Tabla</Link>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h3>Support</h3>

          <Link to="/contact">Contact Us</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Returns & Refunds</Link>
          <Link to="/faq">FAQ</Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JK Musicals. All rights reserved.</p>
      </div>

    </footer>
  );
}