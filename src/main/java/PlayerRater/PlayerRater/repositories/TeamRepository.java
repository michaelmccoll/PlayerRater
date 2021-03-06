package PlayerRater.PlayerRater.repositories;

import PlayerRater.PlayerRater.models.Team;
import PlayerRater.PlayerRater.models.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    Object findTeamByName(String name);

    List<Team> findAllTeamsByLeague(String league);

//    List<Match> findMatchesByTeamId(Team id);
}
