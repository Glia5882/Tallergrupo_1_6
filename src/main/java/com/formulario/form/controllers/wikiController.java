package com.formulario.form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/grupo16/form")
public class wikiController {
    
    @GetMapping("/wiki")
    public String wiki() {
        return ("wiki.html");
    }
}
