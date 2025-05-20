package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/admin")
public class RentalRepository {
    private final AdminService adminService;

    public RentalRepository(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest request) {
        return adminService.authenticateAdmin(request);
    }
}
