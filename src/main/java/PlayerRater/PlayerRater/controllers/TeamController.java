package PlayerRater.PlayerRater.controllers;

import PlayerRater.PlayerRater.models.Team;
import PlayerRater.PlayerRater.repositories.MatchRepository;
import PlayerRater.PlayerRater.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeamController {

    @Autowired
    TeamRepository teamRepository;
    MatchRepository matchRepository;

    @GetMapping(value = "/teams")
    public ResponseEntity<List<Team>> getAllTeams(){
        return new ResponseEntity<>(teamRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/teams/{id}")
    public ResponseEntity getTeam(@PathVariable Long id){
        return new ResponseEntity<>(teamRepository.findById(id),HttpStatus.OK);
    }

    @PostMapping(value = "/teams")
    public ResponseEntity<Team> postTeam(@RequestBody Team team){
        teamRepository.save(team);
        return new ResponseEntity<>(team,HttpStatus.CREATED);
    }

}
