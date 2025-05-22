package com.example.demo.controllers;
import com.example.demo.entity.Rental;
import com.example.demo.repository.RentalRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

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
        System.out.println("Получен запрос на добавление: " + rental);
        return rentalRepository.save(rental);
    }
    @GetMapping("")
    public List<Rental> getAllOffers() {
        List<Rental> rentals = rentalRepository.findAll();
        System.out.println("Отправляем данные на фронт: " + rentals);
        return rentals;
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOffer(@PathVariable Long id) {
        rentalRepository.deleteById(id);
        return ResponseEntity.ok("Предложение удалено");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Rental> getOffer(@PathVariable Long id) {
        return rentalRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Rental> updateOffer(@PathVariable Long id, @RequestBody Rental updatedRental) {
        return rentalRepository.findById(id).map(rental -> {
            rental.setTitle(updatedRental.getTitle());
            rental.setArea(updatedRental.getArea());
            rental.setPrice(updatedRental.getPrice());
            rental.setImg(updatedRental.getImg());
            rental.setVideo(updatedRental.getVideo());
            rentalRepository.save(rental);
            return ResponseEntity.ok(rental);
        }).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }


}

