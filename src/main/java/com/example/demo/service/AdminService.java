package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class AdminService {
    public String authenticateAdmin(String email, String password) {
        // Тут логика проверки данных администратора
        if ("admin@example.com".equals(email) && "password".equals(password)) {
            return "Авторизация успешна!";
        }
        return "Неверный логин или пароль!";
    }
}

