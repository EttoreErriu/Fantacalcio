package com.digitazon.Fantacalcio.controllers;


import com.digitazon.Fantacalcio.repositories.ChampionshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/championships")
@CrossOrigin(origins = "*")
public class ChampionshipController {

    @Autowired
    private ChampionshipRepository championshipRepository;
}
