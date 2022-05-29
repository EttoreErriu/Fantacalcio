package com.digitazon.Fantacalcio.repositories;

import com.digitazon.Fantacalcio.entities.RealPlayer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RealPlayerRepository extends JpaRepository<RealPlayer, Integer> {
    @Query("select c from RealPlayer c where c.surname like %:like%")
    List<RealPlayer> findRealPlayerBySurnameCustomQuery(String like);
    public Iterable<RealPlayer> getByTeamId(int id, Sort name);
}
