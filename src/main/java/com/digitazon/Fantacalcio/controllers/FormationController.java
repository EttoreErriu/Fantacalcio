package com.digitazon.Fantacalcio.controllers;


import com.digitazon.Fantacalcio.entities.Formation;
import com.digitazon.Fantacalcio.entities.Match;
import com.digitazon.Fantacalcio.repositories.FormationRepository;
import com.digitazon.Fantacalcio.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/formations")
@CrossOrigin(origins = "*")
public class FormationController {

    @Autowired
    private FormationRepository formationRepository;

    @GetMapping
    public Iterable<Formation> showFormation() {
        return formationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Formation getById(@PathVariable int id) {
        return formationRepository.findById(id).orElseThrow();
    }
}
