import { MessageCircle, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/919811721524"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>

      <Link to="/cart" aria-label="Cart">
        <ShoppingCart />
      </Link>
    </div>
  );
}