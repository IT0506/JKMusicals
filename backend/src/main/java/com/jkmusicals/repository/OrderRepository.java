package com.jkmusicals.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jkmusicals.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByEmail(String email);
    
    List<Order> findByStatus(String status);
}
