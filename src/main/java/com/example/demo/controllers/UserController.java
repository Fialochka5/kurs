package com.example.demo.controllers;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/add")
    public User addOffer(@RequestBody User user) {
        System.out.println("Получен запрос на добавление: " + user);
        return userRepository.save(user);
    }
    @GetMapping("")
    public List<User> getAllOffers() {
        List<User> users = userRepository.findAll();
        System.out.println("Отправляем данные на фронт: " + users);
        return users;
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOffer(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("Предложение удалено");
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getOffer(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }


}
