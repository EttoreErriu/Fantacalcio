package com.digitazon.Fantacalcio.entities;


import javax.persistence.*;

@Entity
@Table(name = "leaguetables")
public class LeagueTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    private String game;

    private String win;

    private String draw;

    private String lose;

    private String goalscored;

    private String goalconceded;

    private String point;

    @ManyToOne
    @JoinColumn(name = "championship_id")
    private Championship championship;

    public LeagueTable() {
    }

    public LeagueTable(int id, Team team, String game, String win, String draw, String lose, String goalscored, String goalconceded, String point, Championship championship) {
        this.id = id;
        this.team = team;
        this.game = game;
        this.win = win;
        this.draw = draw;
        this.lose = lose;
        this.goalscored = goalscored;
        this.goalconceded = goalconceded;
        this.point = point;
        this.championship = championship;
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

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public String getWin() {
        return win;
    }

    public void setWin(String win) {
        this.win = win;
    }

    public String getDraw() {
        return draw;
    }

    public void setDraw(String draw) {
        this.draw = draw;
    }

    public String getLose() {
        return lose;
    }

    public void setLose(String lose) {
        this.lose = lose;
    }

    public String getGoalscored() {
        return goalscored;
    }

    public void setGoalscored(String goalscored) {
        this.goalscored = goalscored;
    }

    public String getGoalconceded() {
        return goalconceded;
    }

    public void setGoalconceded(String goalconceded) {
        this.goalconceded = goalconceded;
    }

    public String getPoint() {
        return point;
    }

    public void setPoint(String point) {
        this.point = point;
    }

    public Championship getChampionship() {
        return championship;
    }

    public void setChampionship(Championship championship) {
        this.championship = championship;
    }
}
