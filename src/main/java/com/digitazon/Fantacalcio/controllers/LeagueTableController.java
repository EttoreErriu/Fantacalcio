package com.digitazon.Fantacalcio.controllers;


import com.digitazon.Fantacalcio.entities.LeagueTable;
import com.digitazon.Fantacalcio.repositories.LeagueTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/leaguetables")
@CrossOrigin(origins = "*")
public class LeagueTableController {

    @Autowired
    private LeagueTableRepository leagueTableRepository;

    @GetMapping
    public Iterable<LeagueTable> showLeagueTable() {
        return leagueTableRepository.findAll(Sort.by(Sort.Direction.DESC, "point"));
    }

    @GetMapping("/{id}")
    public LeagueTable getById(@PathVariable int id) {
        return leagueTableRepository.findById(id).orElseThrow();
    }
}
