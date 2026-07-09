const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

/* ----------------------------
   Generic Request Helper
----------------------------- */
async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    let message = "Something went wrong";

    try {
      const error = await response.json();
      message = error.message || message;
    } catch {
      message = response.statusText || message;
    }

    throw new Error(message);
  }

  // Handle No Content responses
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

/* ----------------------------
   PRODUCTS
----------------------------- */

// Get all products
export function getProducts() {
  return request("/products");
}

// Get single product
export function getProductById(id) {
  return request(`/products/${id}`);
}

// Search products
export function searchProducts(query) {
  return request(`/products/search?query=${encodeURIComponent(query)}`);
}

/* ----------------------------
   ORDERS
----------------------------- */

// Create Order
export function createOrder(orderData) {
  return request("/orders", {
    method: "POST",
    body: JSON.stringify(orderData),
  });
}

// Get all orders (Admin)
export function getOrders() {
  return request("/orders");
}

/* ----------------------------
   CONTACT
----------------------------- */

export function sendContactMessage(data) {
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/* ----------------------------
   PAYMENTS (Future)
----------------------------- */

export function createPaymentOrder(payload) {
  return request("/payments/create-order", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}