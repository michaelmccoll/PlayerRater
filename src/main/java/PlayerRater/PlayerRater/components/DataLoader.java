package PlayerRater.PlayerRater.components;

import PlayerRater.PlayerRater.models.*;
import PlayerRater.PlayerRater.repositories.*;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.awt.*;
import java.nio.file.Paths;
import java.sql.Blob;
import java.time.LocalDate;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MatchRepository matchRepository;

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    StatsRepository statsRepository;

    @Autowired
    RatingRepository ratingRepository;

    public DataLoader() {

    }
    public void run(ApplicationArguments args){
// Setup the default teams
        Team team1 = new Team("Leith Walkers","Leith Links","Edinburgh Amateurs", "#009933","#FFFFFF", "https://image.shutterstock.com/image-vector/soccer-football-badge-logo-green-600w-1657859611.jpg");
        teamRepository.save(team1);
        Team team2 = new Team("Gorgie F.C.","Murrayfield","Edinburgh Amateurs","#FF00FF","#808080","https://image.shutterstock.com/image-vector/jaguar-icon-football-logo-design-600w-1491309332.jpg");
        teamRepository.save(team2);
//        Team team3 = new Team("Queensferry Park Rangers","Forth Stadium","Edinburgh Amateurs","#0000FF","#000000","https://image.shutterstock.com/image-vector/soccer-championship-logo-design-600w-712129708.jpg");
//        teamRepository.save(team3);
//        Team team4 = new Team("Stockbridge United","Raeburn","Edinburgh Amateurs","#FFFF00","#FFC0CB","https://image.shutterstock.com/image-vector/soccer-football-logo-template-vector-600w-1421509361.jpg");
//        teamRepository.save(team4);
//        Team team5 = new Team("Portobello Pirates","Joppa","Edinburgh Amateurs","#FF0000","#000000", "https://image.shutterstock.com/image-vector/soccer-football-badge-logo-design-600w-1939560655.jpg");
//        teamRepository.save(team5);
//        Team team6 = new Team("Morningsliders","Colinton","Edinburgh Amateurs","#FFA500","#00FFFF","https://image.shutterstock.com/image-vector/football-badge-logo-set-600w-1110035066.jpg");
//        teamRepository.save(team6);

// Setup the default players for Leith Walkers
        Player player1 = new Player("Lionel","Messi",33,"Forward",Boolean.FALSE,team1);
        playerRepository.save(player1);
        team1.addPlayerToTeam(player1);
        teamRepository.save(team1);
        Player player2 = new Player("Cristiano","Ronaldo",34,"Forward",Boolean.FALSE,team1);
        playerRepository.save(player2);
        team1.addPlayerToTeam(player2);
        teamRepository.save(team1);
        Player player3 = new Player("Paul","Pogba",27,"Midfield",Boolean.FALSE,team1);
        playerRepository.save(player3);
        team1.addPlayerToTeam(player3);
        teamRepository.save(team1);
        Player player4 = new Player("Tiago","Alacantra",30,"Midfield",Boolean.FALSE,team1);
        playerRepository.save(player4);
        team1.addPlayerToTeam(player4);
        teamRepository.save(team1);
        Player player5 = new Player("Andy","Robertson",26,"Defender",Boolean.FALSE,team1);
        playerRepository.save(player5);
        team1.addPlayerToTeam(player5);
        teamRepository.save(team1);
        Player player6 = new Player("Jordi","Alba",31,"Defender",Boolean.FALSE,team1);
        playerRepository.save(player6);
        team1.addPlayerToTeam(player6);
        teamRepository.save(team1);
        Player player7 = new Player("David","Marshall",36,"Goalkeeper",Boolean.TRUE,team1);
        playerRepository.save(player7);
        team1.addPlayerToTeam(player7);
        teamRepository.save(team1);

// Setup default player for Gorgie FC
        Player player8 = new Player("Roy","Keane",50,"Midfielder",Boolean.FALSE,team2);
        playerRepository.save(player8);
        team2.addPlayerToTeam(player8);
        teamRepository.save(team2);
        Player player9 = new Player("Eric","Cantona",54,"Forward",Boolean.FALSE,team2);
        playerRepository.save(player9);
        team2.addPlayerToTeam(player9);
        teamRepository.save(team2);
        Player player10 = new Player("Diego","Maradona",60,"Forward",Boolean.FALSE,team2);
        playerRepository.save(player10);
        team2.addPlayerToTeam(player10);
        teamRepository.save(team2);
        Player player11 = new Player("Baggio","Roberto",47,"Midfield",Boolean.FALSE,team2);
        playerRepository.save(player11);
        team2.addPlayerToTeam(player11);
        teamRepository.save(team2);
        Player player12 = new Player("Stam","Jaap",52,"Defender",Boolean.FALSE,team2);
        playerRepository.save(player12);
        team2.addPlayerToTeam(player12);
        teamRepository.save(team2);
        Player player13 = new Player("Roberto","Carlos",56,"Defender",Boolean.FALSE,team2);
        playerRepository.save(player13);
        team2.addPlayerToTeam(player13);
        teamRepository.save(team2);
        Player player14 = new Player("Andy","Goram",59,"Goalkeeper",Boolean.TRUE,team2);
        playerRepository.save(player14);
        team2.addPlayerToTeam(player14);
        teamRepository.save(team2);

        LocalDate testDate1 = LocalDate.of(2021, 5, 30);
        LocalDate testDate2 = LocalDate.of(2021, 5, 31);
        LocalDate testDate3 = LocalDate.of(2021, 6, 1);
        LocalDate testDate4 = LocalDate.of(2021, 6, 2);
        LocalDate testDate5 = LocalDate.of(2021, 4, 22);
        LocalDate testDate6 = LocalDate.of(2021, 7, 28);
        LocalDate testDate7 = LocalDate.of(2021, 5, 11);
        LocalDate testDate8 = LocalDate.of(2021, 6, 12);

// Setup matches for Leith Walkers
        Match match1 = new Match(testDate1, true, "Gorgie F.C.",true,3,0,team1);
        match1.addPlayerToTeamsheet(player1);
        match1.addPlayerToTeamsheet(player4);
        match1.addPlayerToTeamsheet(player5);
        match1.addPlayerToTeamsheet(player6);
        match1.addPlayerToTeamsheet(player7);
        matchRepository.save(match1);
        team1.addMatchToTeam(match1);
        teamRepository.save(team1);

        Match match2 = new Match(testDate1, true,"Queensferry Park Rangers",true,1,2,team1);
        match2.addPlayerToTeamsheet(player1);
        match2.addPlayerToTeamsheet(player2);
        match2.addPlayerToTeamsheet(player3);
        match2.addPlayerToTeamsheet(player6);
        match2.addPlayerToTeamsheet(player7);
        matchRepository.save(match2);
        team1.addMatchToTeam(match2);
        teamRepository.save(team1);

        Match match3 = new Match(testDate2, true,"Stockbridge United",false,2,2,team1);
        match3.addPlayerToTeamsheet(player1);
        match3.addPlayerToTeamsheet(player2);
        match3.addPlayerToTeamsheet(player3);
        match3.addPlayerToTeamsheet(player4);
        match3.addPlayerToTeamsheet(player7);
        matchRepository.save(match3);
        team1.addMatchToTeam(match3);
        teamRepository.save(team1);

        Match match4 = new Match(testDate3, true,"Portobello Pirates",true,0,2,team1);
        match4.addPlayerToTeamsheet(player1);
        match4.addPlayerToTeamsheet(player2);
        match4.addPlayerToTeamsheet(player4);
        match4.addPlayerToTeamsheet(player5);
        match4.addPlayerToTeamsheet(player7);
        matchRepository.save(match4);
        team1.addMatchToTeam(match4);
        teamRepository.save(team1);

        Match match5 = new Match(testDate4, false,"Morningsliders",true,null,null,team1);
        match5.addPlayerToTeamsheet(player1);
        match5.addPlayerToTeamsheet(player2);
        match5.addPlayerToTeamsheet(player3);
        match5.addPlayerToTeamsheet(player6);
        match5.addPlayerToTeamsheet(player7);
        matchRepository.save(match5);
        team2.addMatchToTeam(match5);
        teamRepository.save(team2);

// Setup matches for Gorgie FC
        Match match6 = new Match(testDate5, true, "Leith Walkers",true,3,3,team2);
        match6.addPlayerToTeamsheet(player8);
        match6.addPlayerToTeamsheet(player9);
        match6.addPlayerToTeamsheet(player10);
        match6.addPlayerToTeamsheet(player11);
        match6.addPlayerToTeamsheet(player12);
        matchRepository.save(match6);
        team2.addMatchToTeam(match6);
        teamRepository.save(team2);

        Match match7 = new Match(testDate6, true,"Queensferry Park Rangers",true,2,1,team2);
        match7.addPlayerToTeamsheet(player13);
        match7.addPlayerToTeamsheet(player14);
        match7.addPlayerToTeamsheet(player8);
        match7.addPlayerToTeamsheet(player9);
        match7.addPlayerToTeamsheet(player10);
        matchRepository.save(match7);
        team2.addMatchToTeam(match7);
        teamRepository.save(team2);

        Match match8 = new Match(testDate7, true,"Stockbridge United",false,4,2,team2);
        match8.addPlayerToTeamsheet(player11);
        match8.addPlayerToTeamsheet(player12);
        match8.addPlayerToTeamsheet(player13);
        match8.addPlayerToTeamsheet(player14);
        match8.addPlayerToTeamsheet(player8);
        matchRepository.save(match8);
        team2.addMatchToTeam(match8);
        teamRepository.save(team2);

        Match match9 = new Match(testDate8, true,"Portobello Pirates",true,0,3,team2);
        match9.addPlayerToTeamsheet(player9);
        match9.addPlayerToTeamsheet(player10);
        match9.addPlayerToTeamsheet(player11);
        match9.addPlayerToTeamsheet(player12);
        match9.addPlayerToTeamsheet(player13);
        matchRepository.save(match9);
        team2.addMatchToTeam(match9);
        teamRepository.save(team2);

        Stats stat1 = new Stats(player1,2,1,0,0);
        stat1.addMatchToStats(match1);
        match1.addStatsToMatch(stat1);
        player1.addMatchToPlayer(match1);
        player1.addStatsToPlayer(stat1);
        statsRepository.save(stat1);

        Stats stat2 = new Stats(player2,1,1,1,0);
        player2.addStatsToPlayer(stat2);
        statsRepository.save(stat2);

        Stats stat3 = new Stats(player3,3,2,0,0);
        player3.addStatsToPlayer(stat3);
        statsRepository.save(stat3);

        Stats stat4 = new Stats(player4,0,1,0,1);
        player4.addStatsToPlayer(stat4);
        statsRepository.save(stat4);

        Stats stat5 = new Stats(player5,2,2,0,0);
        player5.addStatsToPlayer(stat5);
        statsRepository.save(stat5);

        Stats stat6 = new Stats(player6,0,3,1,0);
        player6.addStatsToPlayer(stat6);
        statsRepository.save(stat6);

        Stats stat7 = new Stats(player7,2,1,0,0);
        player7.addStatsToPlayer(stat7);
        statsRepository.save(stat7);

        Stats stat8 = new Stats(player8,4,2,0,0);
        player8.addStatsToPlayer(stat8);
        statsRepository.save(stat8);

        Stats stat9 = new Stats(player9,1,1,0,0);
        player9.addStatsToPlayer(stat9);
        statsRepository.save(stat9);

        Stats stat10 = new Stats(player10,1,3,0,0);
        player10.addStatsToPlayer(stat10);
        statsRepository.save(stat10);

        Stats stat11 = new Stats(player11,1,1,0,0);
        player11.addStatsToPlayer(stat11);
        statsRepository.save(stat11);

        Stats stat12 = new Stats(player12,2,0,1,0);
        player12.addStatsToPlayer(stat12);
        statsRepository.save(stat12);

        Stats stat13 = new Stats(player13,0,0,1,1);
        player13.addStatsToPlayer(stat13);
        statsRepository.save(stat13);

        Stats stat14 = new Stats(player14,2,2,0,0);
        player14.addStatsToPlayer(stat14);
        statsRepository.save(stat14);

        Rating rating1 = new Rating(player1,match1,5);
        ratingRepository.save(rating1);
    }
}

