package com.example.demo.controllers;
import com.example.demo.dto.AdminLoginRequest;
import com.example.demo.service.AdminService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest request) {
        String result = adminService.authenticateAdmin(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(result);
    }
}

