package com.projereactandjava.javaandreact.repository;

import com.projereactandjava.javaandreact.model.Araba;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArabaRepository extends JpaRepository<Araba,Long> {
    List<Araba> findArabaByUsernameAndPassword(String username, String password);
}
