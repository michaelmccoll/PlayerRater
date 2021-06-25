package PlayerRater.PlayerRater.repositories;


import PlayerRater.PlayerRater.models.Match;
import PlayerRater.PlayerRater.models.Player;
import PlayerRater.PlayerRater.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {

//    List<Match> findMatchesByTeamID(Long id);

//    List<Match> findTeamsheetByMatches(Match match);

}
