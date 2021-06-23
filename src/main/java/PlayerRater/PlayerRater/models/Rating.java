package PlayerRater.PlayerRater.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="ratings")
public class Rating {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="player_id", nullable=false)
    @JsonIgnoreProperties({"ratings"})
    private Player player;

    @ManyToOne
    @JoinColumn(name="match_id", nullable=false)
    @JsonIgnoreProperties({"ratings"})
    private Match match;

    @Column
    private int rating;

    public Rating(Player player, Match match, int rating) {
        this.player = player;
        this.match = match;
        this.rating = rating;
    }

    public Rating(){}


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

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
