package com.jkmusicals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jkmusicals.repository.ProductRepository;
import com.jkmusicals.model.Product;
@RestController
@RequestMapping("/api/products")
@CrossOrigin("http://localhost:5173")
public class ProductController {

  @Autowired
  private ProductRepository repo;

  @GetMapping
  public List<Product> getAll() {
    return repo.findAll();
  }

  @GetMapping("/{id}")
  public Product getById(@PathVariable Long id) {
    return repo.findById(id).orElse(null);
  }
}
