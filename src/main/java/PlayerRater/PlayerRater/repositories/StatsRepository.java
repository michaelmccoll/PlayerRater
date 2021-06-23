package PlayerRater.PlayerRater.repositories;


import PlayerRater.PlayerRater.models.Stats;
import PlayerRater.PlayerRater.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatsRepository extends JpaRepository<Stats, Long> {
}
