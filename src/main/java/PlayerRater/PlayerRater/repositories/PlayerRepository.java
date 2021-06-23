package PlayerRater.PlayerRater.repositories;

import PlayerRater.PlayerRater.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

//    List<Player> findById(Long id);
}
