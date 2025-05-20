package com.example.demo.controllers;
import com.example.demo.model.Rental;
import com.example.demo.repository.RentalRepository;
import org.springframework.web.bind.annotation.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/rental")
public class RentalController {
    private final RentalRepository rentalRepository;

    @Autowired
    public RentalController(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }

    @PostMapping("/add")
    public Rental addOffer(@RequestBody Rental rental) {
        return rentalRepository.save(rental);
    }
}

