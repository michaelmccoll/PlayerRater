package PlayerRater.PlayerRater;

import PlayerRater.PlayerRater.models.Match;
import PlayerRater.PlayerRater.models.Player;
import PlayerRater.PlayerRater.models.Team;
import PlayerRater.PlayerRater.repositories.MatchRepository;
import PlayerRater.PlayerRater.repositories.PlayerRepository;
import PlayerRater.PlayerRater.repositories.StatsRepository;
import PlayerRater.PlayerRater.repositories.TeamRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest
class PlayerRaterApplicationTests {

	@Autowired
	MatchRepository matchRepository;

	@Autowired
	PlayerRepository playerRepository;

	@Autowired
	StatsRepository statsRepository;

	@Autowired
	TeamRepository teamRepository;

	@Test
	void contextLoads() {
	}

//	@Test
//	public void canGetPlayersByTeamName(){
//		List<Player> found = playerRepository.findPlayersByTeamName("Leith Walkers");
//		assertEquals(7,found.size());
//	}

//	@Test
//	public void	canGetMatchesByTeam(){
//		List<Match> found = matchRepository.findMatchesByTeamName("Leith Walkers");
//		assertEquals(5,found.size());
//	}

	@Test
	public void	canGetTeamsByLeague(){
		List<Team> found = teamRepository.findAllTeamsByLeague("Edinburgh Amateurs");
		assertEquals(6,found.size());
	}

//	@Test
//	public void	canGetTeamsheetByMatch(){
//		Match testMatch = matchRepository.getById(14L);
//		List<Match> found = matchRepository.findTeamsheetByMatches(testMatch);
//		assertEquals(5,found.size());
//	}
}
