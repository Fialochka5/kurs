package com.example.demo.controllers; // ✅ Проверяем правильность пакета

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000") // ✅ Разрешаем запросы с React
@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/data")
    public Map<String, String> getData() {  // ✅ Возвращаем JSON
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Spring Boot!");
        return response;
    }
}


