package com.jkmusicals.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.jkmusicals.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Product> findByNameContainingIgnoreCase(@Param("keyword") String keyword);

    List<Product> findByCategory(String category);

    List<Product> findByBrand(String brand);

    @Query("SELECT DISTINCT p.category FROM Product p")
    List<String> findAllCategories();

    @Query("SELECT DISTINCT p.brand FROM Product p")
    List<String> findAllBrands();
}
