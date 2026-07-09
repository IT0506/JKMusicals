package com.jkmusicals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jkmusicals.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
