package PlayerRater.PlayerRater.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="stats")
public class Stats {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="player_id", nullable=false)
    @JsonIgnoreProperties({"stats"})
    private Player player;

    @Column(name="goals")
    private Integer goals;

    @Column(name="assists")
    private Integer assists;

    @Column(name="yellowCards")
    private Integer yellowCards;

    @Column(name="redCards")
    private Integer redCards;

    @ManyToMany
    @JsonIgnoreProperties({"stats"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "stats_matches",
            joinColumns = { @JoinColumn(
                    name = "stats_id",
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

    public Stats(Player player, Integer goals, Integer assists, Integer yellowCards, Integer redCards) {
        this.player = player;
        this.goals = goals;
        this.assists = assists;
        this.yellowCards = yellowCards;
        this.redCards = redCards;
        this.matches = new ArrayList<>();
    }

    public Stats(){

    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }
    public void setPlayer(Player player) {
        this.player = player;
    }

    public Integer getGoals() {
        return goals;
    }
    public void setGoals(Integer goals) {
        this.goals = goals;
    }

    public Integer getAssists() {
        return assists;
    }
    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    public Integer getYellowCards() {
        return yellowCards;
    }
    public void setYellowCards(Integer yellowCards) {
        this.yellowCards = yellowCards;
    }

    public Integer getRedCards() {
        return redCards;
    }
    public void setRedCards(Integer redCards) {
        this.redCards = redCards;
    }

    public List<Match> getMatches() {
        return matches;
    }
    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    public void addMatchToStats(Match match){
        this.matches.add(match);
    }
}
