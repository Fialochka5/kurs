package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("name", "Main page");
        return "home";
    }

}
