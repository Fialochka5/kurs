package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository, BCryptPasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity<?> authenticateAdmin(AdminLoginRequest request) {
        Admin admin = adminRepository.findByEmail(request.getEmail());
        if (admin != null && passwordEncoder.matches(request.getPassword(), admin.getPassword())) {
            return ResponseEntity.ok("Авторизация успешна!");
        }
        return ResponseEntity.status(401).body("Неверный логин или пароль!");
    }
}
