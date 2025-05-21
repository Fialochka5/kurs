package com.example.demo.controllers;
import com.example.demo.dto.UserLoginRequest;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest request) {
        String result = userService.authenticateUser(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(result);
    }
}
