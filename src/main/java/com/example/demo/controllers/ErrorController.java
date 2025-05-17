package com.example.demo.controllers; // ✅ Убедись, что пакет указан

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorController {
    @GetMapping("/error")
    public String handleError() {
        return "notFound"; // Возвращает notFound.html
    }
}
