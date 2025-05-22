package com.example.demo.service;

import com.example.demo.repository.RentalRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.GalleryRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatabaseCheckService {

    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private GalleryRepository galleryRepository;

    @Autowired
    private UserRepository userRepository;
    @PostConstruct
    public void testDatabaseConnection() {
        System.out.println("Количество записей в таблице rental: " + rentalRepository.count());
        System.out.println("Количество записей в таблице gallery: " + galleryRepository.count());
        System.out.println("Количество записей в таблице user: " + userRepository.count());
    }
}
