package com.formulario.form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
@RequestMapping("/grupo16/form")
public class presentacionController {

    @GetMapping("/grupo16/presentacion")
    public String presentacion() {
        return ("paginaPresentacion.html");
    }
    
}
