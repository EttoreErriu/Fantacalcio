package com.digitazon.Fantacalcio.repositories;

import com.digitazon.Fantacalcio.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  UserRepository extends JpaRepository<User, Integer> {
}
