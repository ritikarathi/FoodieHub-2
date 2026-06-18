package com.Ritika.foodiesApi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "foods")
public class FoodEntity {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String imageUrl;
    private String category;
}
