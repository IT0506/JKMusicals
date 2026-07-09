import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { categories, brands } from "../data/products";
import { useShop } from "../context/useShop";
import { getProducts } from "../services/api";

export default function Shop() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
  } = useShop();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from Spring Boot
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        p.category === selectedCategory;

      const matchBrand =
        selectedBrand === "All" ||
        p.brand === selectedBrand;

      return matchSearch && matchCategory && matchBrand;
    });
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedBrand,
  ]);

  return (
    <section className="page-section">
      <div className="section-heading">
        <p>Shop</p>
        <h1>Find your next instrument</h1>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by product or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="All">All Brands</option>

          {brands.map((brand) => (
            <option
              key={brand}
              value={brand}
            >
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="loading-state">
          Loading products...
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="error-state">
          {error}
        </div>
      )}

      {/* PRODUCTS */}
      {!loading && !error && (
        <>
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try changing your search or filters.</p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}