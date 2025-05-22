package com.example.demo.controllers;
import com.example.demo.entity.Gallery;
import com.example.demo.repository.GalleryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {
    private final GalleryRepository galleryRepository;

    @Autowired
    public GalleryController(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    @PostMapping("/add")
    public Gallery addOffer(@RequestBody Gallery gallery) {
        System.out.println("Получен запрос на добавление: " + gallery);
        return galleryRepository.save(gallery);
    }
    @GetMapping("")
    public List<Gallery> getAllOffers() {
        List<Gallery> galleries = galleryRepository.findAll();
        System.out.println("Отправляем данные на фронт: " + galleries);
        return galleries;
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOffer(@PathVariable Long id) {
        galleryRepository.deleteById(id);
        return ResponseEntity.ok("Предложение удалено");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Gallery> getOffer(@PathVariable Long id) {
        return galleryRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }


}