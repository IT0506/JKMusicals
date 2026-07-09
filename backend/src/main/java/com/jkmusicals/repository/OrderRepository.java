package com.jkmusicals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jkmusicals.model.Order;
public interface OrderRepository extends JpaRepository<Order, Long> {

}
