package com.projereactandjava.javaandreact.service;

import com.projereactandjava.javaandreact.model.Araba;
import com.projereactandjava.javaandreact.repository.ArabaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArabaService {

    final ArabaRepository arabaRepository;

    public ArabaService(ArabaRepository arabaRepository) {
        this.arabaRepository = arabaRepository;
    }

    public List<Araba> getAllAraba() {
        return arabaRepository.findAll();
    }







    public Araba login(String username, String password) {
        List<Araba> listAraba = arabaRepository.findArabaByUsernameAndPassword(username, password);
        if (listAraba.size() > 0) {
            return listAraba.get(0);
        }
        return null;
    }


    public Araba getArabaById(Long id) {
        return arabaRepository.findById(id).orElse(null);
    }

    public Araba addAraba(Araba araba) {

        return arabaRepository.save(araba);
    }

    public Araba editAraba(Long id, Araba araba) {
        Araba arabadb = arabaRepository.findById(id).orElseThrow(() -> new IllegalStateException("Böyle bir araba yok!"));
        arabadb.setMarka(araba.getMarka());
        arabadb.setModel(araba.getModel());
        arabadb.setFiyat(araba.getFiyat());
        arabadb.setRenk(araba.getRenk());
        arabadb.setYil(araba.getYil());
        return arabaRepository.save(arabadb);
    }

    public void removeAraba(Long id) {
        arabaRepository.deleteById(id);

    }
}
