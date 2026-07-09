import { useState, useEffect } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const clearWishlist = () => setWishlist([]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return {
    wishlist,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
  };
};