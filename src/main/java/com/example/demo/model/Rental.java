package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "rental")
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String area;
    private String price;
    private String img;

    // Геттеры и сеттеры
}

