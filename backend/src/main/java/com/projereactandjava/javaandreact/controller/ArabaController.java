package com.projereactandjava.javaandreact.controller;

import com.projereactandjava.javaandreact.model.Araba;
import com.projereactandjava.javaandreact.service.ArabaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/araba")
public class ArabaController {
    final ArabaService arabaService;

    public ArabaController(ArabaService arabaService) {
        this.arabaService = arabaService;
    }

    @GetMapping("/")
    public List<Araba> getAllAraba() {
        return arabaService.getAllAraba();
    }

    @GetMapping("/id")
    public Araba getArabaById(@RequestParam Long id) {
        return arabaService.getArabaById(id);
    }

    @PostMapping("/add")
    public Araba addAraba(@RequestBody Araba araba) {
        return arabaService.addAraba(araba);
    }

    @PutMapping("/edit")
    public Araba editAraba(@RequestParam Long id, @RequestBody Araba araba) {
        return arabaService.editAraba(id, araba);
    }

    @DeleteMapping("/delete")
    public void removeAraba(@RequestParam Long id) {
        arabaService.removeAraba(id);

    }


    @GetMapping("/login")
    public Araba login(@RequestParam String username, @RequestParam String password) {
        return arabaService.login(username, password);
    }


}
