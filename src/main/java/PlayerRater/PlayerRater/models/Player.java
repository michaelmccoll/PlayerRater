package PlayerRater.PlayerRater.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="players")

public class Player {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name="first_name")
    private String first_name;

    @Column(name="second_name")
    private String second_name;

    @Column(name="age")
    private Integer age;

    @Column(name="position")
    private String position;

    @Column(name="management")
    private Boolean management;

    @ManyToOne
    @JoinColumn(name="team_id", nullable=false)
    @JsonIgnoreProperties({"players", "matches", "stats"})
    private Team team;

    @OneToMany(mappedBy = "player")
    @JsonIgnoreProperties({"player", "matches"})
    private List<Stats> stats;

    @ManyToMany
    @JsonIgnoreProperties({"teamsheet","stats"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "players_matches",
            joinColumns = { @JoinColumn(
                    name = "player_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "match_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Match> matches;

    // nested ignore properties are not possible
    @OneToMany(mappedBy = "player")
    @JsonIgnoreProperties({"player", "match"})
    private List<Rating> ratings;

    public Player(
            String first_name, String second_name, Integer age, String position, Boolean management, Team team) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.age = age;
        this.position = position;
        this.management = management;
        this.team = team;
        this.matches = new ArrayList<>();
        this.stats = new ArrayList<>();
        this.ratings = new ArrayList<>();
    }

    public Player(){

    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getSecond_name() {
        return second_name;
    }
    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }

    public Boolean getManagement() {
        return management;
    }
    public void setManagement(Boolean management) {
        this.management = management;
    }

    public Team getTeam() {
        return team;
    }
    public void setTeam(Team team) {
        this.team = team;
    }

    public List<Match> getMatches() {
        return this.matches;
    }
    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    public List<Stats> getStats() {
        return stats;
    }

    public void setStats(List<Stats> stats) {
        this.stats = stats;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public void addMatchToPlayer(Match match) {
        this.matches.add(match);
    }

    public void addStatsToPlayer(Stats stat) {
        this.stats.add(stat);
    }
}
