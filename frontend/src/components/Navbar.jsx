import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";

import logo from "../assets/logo/jkmusicallogo.jpg";
import { useShop } from "../context/useShop";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const {
    products,
    searchQuery,
    setSearchQuery,
    wishlist,
    cart,
    setSelectedCategory,
  } = useShop();

  const closeMenu = () => setMenuOpen(false);

  // 🔍 LIVE PRODUCT SEARCH (NOT CATEGORIES)
  const filteredProducts =
    searchQuery.trim() === ""
      ? []
      : products
          .filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 6);

  const handleSearchSelect = (product) => {
    setSearchQuery("");
    setShowDropdown(false);
    navigate(`/product/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${searchQuery}`);
      setShowDropdown(false);
    }
  };

  return (
    <header className="site-header">
      {/* TOP STRIP */}
      <div className="top-strip">
  <div className="top-strip-container">
    <span>🔥 Free shipping on orders above ₹999</span>
    <span>📞 Support: +91 9811721524</span>
  </div>
</div>

      {/* NAVBAR */}
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="JK Musicals" className="brand-logo" />
          <div className="brand-text">
            <h2>JK Musicals</h2>
            <p>Instruments & Pro Audio</p>
          </div>
        </Link>

        {/* LINKS */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* SEARCH */}
        <div className="search-wrapper">
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search instruments..."
          />

          {/* LIVE PRODUCT DROPDOWN */}
          {showDropdown && searchQuery && (
            <div className="search-dropdown">
              {filteredProducts.length === 0 ? (
                <p className="no-results">No products found</p>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="search-item"
                    onClick={() => handleSearchSelect(product)}
                  >
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <p>₹{product.price.toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="nav-actions">
          <Link to="/wishlist" className="icon-btn">
            <Heart />
            {wishlist.length > 0 && <span>{wishlist.length}</span>}
          </Link>

          <Link to="/cart" className="icon-btn">
            <ShoppingCart />
            {cart.length > 0 && <span>{cart.length}</span>}
          </Link>

          <Link to="/login" className="icon-btn">
            <User />
          </Link>

          {/* MOBILE MENU */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/shop" onClick={closeMenu}>
          Shop
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </header>
  );
}