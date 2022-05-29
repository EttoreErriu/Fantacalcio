package com.digitazon.Fantacalcio.controllers;



import com.digitazon.Fantacalcio.entities.RealPlayer;
import com.digitazon.Fantacalcio.repositories.RealPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/realplayers")
@CrossOrigin(origins = "*")
public class RealPlayerController {

    @Autowired
    private RealPlayerRepository realPlayerRepository;

    @GetMapping
    public Iterable<RealPlayer> showPlayer() {
        return realPlayerRepository.findAll(Sort.by(Sort.Direction.DESC, "position"));
    }

    @GetMapping("/{id}")
    public RealPlayer getById(@PathVariable int id) {
        return realPlayerRepository.findById(id).orElseThrow();
    }

    @GetMapping("/find/{realPlayerSurnameLike}")
    public ResponseEntity findRealPlayerBySurnameCustomQuery(@PathVariable String realPlayerSurnameLike) {
        try{
            List<RealPlayer> realPlayers = realPlayerRepository.findRealPlayerBySurnameCustomQuery(realPlayerSurnameLike);
            return ResponseEntity.ok(realPlayers);
        }catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
