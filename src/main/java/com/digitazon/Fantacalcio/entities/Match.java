package com.digitazon.Fantacalcio.entities;

import javax.persistence.*;


@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int homegol;

    private int awaygol;

    private int matchesnumber;

    @ManyToOne
    @JoinColumn(name = "team_id_home")
    private Team teamHome;

    @ManyToOne
    @JoinColumn(name = "team_id_away")
    private Team teamAway;

      @ManyToOne
      @JoinColumn(name = "championship_id")
      private Championship championship;

      public Match() {
      }

    public Match(int id, int homegol, int awaygol, int matchesnumber, Team teamHome, Team teamAway, Championship championship) {
        this.id = id;
        this.homegol = homegol;
        this.awaygol = awaygol;
        this.matchesnumber = matchesnumber;
        this.teamHome = teamHome;
        this.teamAway = teamAway;
        this.championship = championship;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getHomegol() {
        return homegol;
    }

    public void setHomegol(int homegol) {
        this.homegol = homegol;
    }

    public int getAwaygol() {
        return awaygol;
    }

    public void setAwaygol(int awaygol) {
        this.awaygol = awaygol;
    }

    public int getMatchesnumber() {
        return matchesnumber;
    }

    public void setMatchesnumber(int matchesnumber) {
        this.matchesnumber = matchesnumber;
    }

    public Team getTeamHome() {
        return teamHome;
    }

    public void setTeamHome(Team teamHome) {
        this.teamHome = teamHome;
    }

    public Team getTeamAway() {
        return teamAway;
    }

    public void setTeamAway(Team teamAway) {
        this.teamAway = teamAway;
    }

    public Championship getChampionship() {
        return championship;
    }

    public void setChampionship(Championship championship) {
        this.championship = championship;
    }
}
