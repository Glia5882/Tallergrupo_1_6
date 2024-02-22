package com.formulario.form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
@RequestMapping("/grupo16/form")
public class menuController {

    @GetMapping("/grupo16/menu")
    public String menu() {
        return ("menu.html");
    }
}
