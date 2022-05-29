package com.digitazon.Fantacalcio.entities;


import javax.persistence.*;

@Entity
@Table(name = "formations")
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "realplayer_id")
    private RealPlayer realPlayer;

    public Formation() {
    }

    public Formation(int id, Team team, RealPlayer realPlayer) {
        this.id = id;
        this.team = team;
        this.realPlayer = realPlayer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public RealPlayer getRealPlayer() {
        return realPlayer;
    }

    public void setRealPlayer(RealPlayer realPlayer) {
        this.realPlayer = realPlayer;
    }
}
