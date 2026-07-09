package com.jkmusicals.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.jkmusicals.model.Order;
import com.jkmusicals.model.OrderItem;
import com.jkmusicals.repository.OrderRepository;
import com.jkmusicals.dto.OrderRequest;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(OrderRequest request) {
        Order order = new Order();
        order.setName(request.getName());
        order.setEmail(request.getEmail());
        order.setAddress(request.getAddress());
        order.setPhone(request.getPhone());
        order.setTotal(request.getTotal());
        order.setStatus("PENDING");

        List<OrderItem> items = request.getItems().stream()
                .map(itemDTO -> {
                    OrderItem item = new OrderItem();
                    item.setProductId(itemDTO.getProductId());
                    item.setName(itemDTO.getName());
                    item.setQty(itemDTO.getQty());
                    item.setPrice(itemDTO.getPrice());
                    return item;
                }).toList();

        order.setItems(items);
        return orderRepository.save(order);
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with ID: " + id));
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order updateOrderStatus(Long id, String status) {
        Order order = getOrderById(id);
        order.setStatus(status);
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public List<Order> getOrdersByEmail(String email) {
        return orderRepository.findByEmail(email);
    }
}
