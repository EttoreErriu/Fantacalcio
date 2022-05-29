package com.digitazon.Fantacalcio.controllers;

import com.digitazon.Fantacalcio.entities.RealPlayer;
import com.digitazon.Fantacalcio.entities.Team;
import com.digitazon.Fantacalcio.repositories.RealPlayerRepository;
import com.digitazon.Fantacalcio.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teams")
@CrossOrigin(origins = "*")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private RealPlayerRepository realPlayerRepository;

    @GetMapping
    public Iterable<Team> showTeam() {
        return teamRepository.findAll(Sort.by(Sort.Direction.DESC, "name"));
    }

    @GetMapping("/{id}")
    public Team getById(@PathVariable int id) {
        return teamRepository.findById(id).orElseThrow();
    }

    @GetMapping("realplayers/{id}")
    public Iterable<RealPlayer> getPlayersByTeam(@PathVariable int id) {
        return realPlayerRepository.getByTeamId(id,Sort.by(Sort.Direction.DESC, "position"));
    }
}
