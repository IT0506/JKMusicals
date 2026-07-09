package com.jkmusicals.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {

    private String name;
    private String email;
    private String address;
    private String phone;
    private double total;
    private List<OrderItemDTO> items;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class OrderItemDTO {
    private Long productId;
    private String name;
    private int qty;
    private double price;
}
