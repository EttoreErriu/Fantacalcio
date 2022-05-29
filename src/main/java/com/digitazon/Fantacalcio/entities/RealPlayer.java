package com.digitazon.Fantacalcio.entities;


import javax.persistence.*;

@Entity
@Table(name = "realplayers")
public class RealPlayer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String surname;

    private String realteam;

    private String position;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    private int age;

    private double average;

    private int golscored;

    private int assist;

    private int matchplayed;

    private int golconceded;

    private String card;

    public RealPlayer() {
    }

    public RealPlayer(int id, String name, String surname, String realteam, String position, Team team, int age, double average, int golscored, int assist, int matchplayed, int golconceded, String card) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.realteam = realteam;
        this.position = position;
        this.team = team;
        this.age = age;
        this.average = average;
        this.golscored = golscored;
        this.assist = assist;
        this.matchplayed = matchplayed;
        this.golconceded = golconceded;
        this.card = card;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getRealteam() {
        return realteam;
    }

    public void setRealteam(String realteam) {
        this.realteam = realteam;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getAverage() {
        return average;
    }

    public void setAverage(double average) {
        this.average = average;
    }

    public int getGolscored() {
        return golscored;
    }

    public void setGolscored(int golscored) {
        this.golscored = golscored;
    }

    public int getAssist() {
        return assist;
    }

    public void setAssist(int assist) {
        this.assist = assist;
    }

    public int getMatchplayed() {
        return matchplayed;
    }

    public void setMatchplayed(int matchplayed) {
        this.matchplayed = matchplayed;
    }

    public int getGolconceded() {
        return golconceded;
    }

    public void setGolconceded(int golconceded) {
        this.golconceded = golconceded;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }
}
