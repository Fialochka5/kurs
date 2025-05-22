package com.example.demo.controllers;
import com.example.demo.dto.UserLoginRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import java.util.UUID;
import java.util.Collections;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

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
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest request) {
        System.out.println("Попытка входа: " + request.getEmail());
        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (user.isEmpty()) {
            System.out.println("Пользователь не найден");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Пользователь не найден");
        }

        if (!user.get().getPassword().equals(request.getPassword())) {
            System.out.println("Неверный пароль");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Неверный пароль");
        }

        String token = UUID.randomUUID().toString(); // Генерируем токен
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }

}
