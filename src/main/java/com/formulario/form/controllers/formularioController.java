package com.formulario.form.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;
import com.formulario.form.entity.Application;
import com.formulario.form.ApplicationRepository.ApplicationRepository;



@Controller
@RequestMapping("/grupo16/form")
public class formularioController {
    @GetMapping("/formulario")
    public String formulario(){
        return("formulario.html");
    }

    @Autowired
    private ApplicationRepository applicationRepository;

    @PostMapping("/submit")
    public String enviarFormulario(Application formData, Model model){
        String nombres = formData.getNombres();
        String apellidos = formData.getApellidos();
        String correo = formData.getCorreos();
        int semestre = formData.getSemestre();
        String descripcion = formData.getDescripcion();
        
        Application application = new Application();
        application.setNombres(nombres);
        application.setApellidos(apellidos);
        application.setCorreos(correo);
        application.setSemestre(semestre);
        application.setDescripcion(descripcion);

        applicationRepository.save(application);

        model.addAttribute("graciasMensaje","Gracias por enviar el formulario!");
        return "formulario.html";
    }
}
