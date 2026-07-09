import { createContext, useMemo, useState } from "react";
import { products as productData } from "../data/products";

export const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  // ---------------- PRODUCTS ----------------
  const products = productData;

  // ---------------- SEARCH ----------------
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  // ---------------- CART ----------------
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // ---------------- WISHLIST ----------------
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  // ---------------- COUNTS ----------------
  const cartCount = useMemo(
    () =>
      cart.reduce((total, item) => total + item.qty, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      ),
    [cart]
  );

  // ---------------- CONTEXT ----------------
  const value = {
    products,

    searchQuery,
    setSearchQuery,

    selectedCategory,
    setSelectedCategory,

    selectedBrand,
    setSelectedBrand,

    cart,
    cartCount,
    cartSubtotal,

    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,

    wishlist,
    toggleWishlist,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}