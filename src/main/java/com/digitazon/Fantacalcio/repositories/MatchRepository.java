package com.digitazon.Fantacalcio.repositories;

import com.digitazon.Fantacalcio.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository  extends JpaRepository<Match, Integer> {
}
