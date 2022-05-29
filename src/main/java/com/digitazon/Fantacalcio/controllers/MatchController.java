package com.digitazon.Fantacalcio.controllers;


import com.digitazon.Fantacalcio.entities.Match;
import com.digitazon.Fantacalcio.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/matches")
@CrossOrigin(origins = "*")
public class MatchController {

    @Autowired
    private MatchRepository matchRepository;

    @GetMapping
    public Iterable<Match> showMatches() {
        return matchRepository.findAll(Sort.by(Sort.Direction.ASC, "matchesnumber"));
    }

    @GetMapping("/{id}")
    public Match getById(@PathVariable int id) {
        return matchRepository.findById(id).orElseThrow();
    }
}
