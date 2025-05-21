package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public String authenticateUser(String email, String password) {
        // Тут логика проверки данных администратора
        if ("user@example.com".equals(email) && "password".equals(password)) {
            return "Авторизация успешна!";
        }
        return "Неверный логин или пароль!";
    }
}