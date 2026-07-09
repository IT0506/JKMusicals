package com.jkmusicals.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.jkmusicals.model.Product;
import com.jkmusicals.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Product not found with ID: " + id));
    }

    // Add product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Update product
    public Product updateProduct(Long id, Product updatedProduct) {

        Product existing = getProductById(id);

        existing.setName(updatedProduct.getName());
        existing.setBrand(updatedProduct.getBrand());
        existing.setCategory(updatedProduct.getCategory());
        existing.setPrice(updatedProduct.getPrice());
        existing.setOldPrice(updatedProduct.getOldPrice());
        existing.setRating(updatedProduct.getRating());
        existing.setDescription(updatedProduct.getDescription());
        existing.setThumbnail(updatedProduct.getThumbnail());
        existing.setStock(updatedProduct.getStock());
        existing.setImage(updatedProduct.getImage());

        return productRepository.save(existing);
    }

    // Delete product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    // Search by product name
    public List<Product> searchProducts(String keyword) {
        return productRepository.findByNameContainingIgnoreCase(keyword);
    }

    // Filter by category
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    // Filter by brand
    public List<Product> getProductsByBrand(String brand) {
        return productRepository.findByBrand(brand);
    }
}