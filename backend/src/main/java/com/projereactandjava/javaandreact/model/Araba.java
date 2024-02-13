package com.projereactandjava.javaandreact.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name="araba",schema = "public")
public class Araba {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "araba_seq")
    @SequenceGenerator(name = "araba_seq", sequenceName = "araba_seq", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "marka")
    private String marka;

    @Column(name = "model")
    private String model;

    @Column(name = "yıl")
    private Timestamp yil;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "fiyat")
    private Long fiyat;

    @Column(name = "renk")
    private String renk;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarka() {
        return marka;
    }

    public void setMarka(String marka) {
        this.marka = marka;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Timestamp getYil() {
        return yil;
    }

    public void setYil(Timestamp yil) {
        this.yil = yil;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getFiyat() {
        return fiyat;
    }

    public void setFiyat(Long fiyat) {
        this.fiyat = fiyat;
    }

    public String getRenk() {
        return renk;
    }

    public void setRenk(String renk) {
        this.renk = renk;
    }
}
