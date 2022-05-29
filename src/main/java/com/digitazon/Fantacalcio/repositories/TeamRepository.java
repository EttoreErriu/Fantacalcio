package com.digitazon.Fantacalcio.repositories;

import com.digitazon.Fantacalcio.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Integer> {
}
