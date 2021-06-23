package PlayerRater.PlayerRater.controllers;

import PlayerRater.PlayerRater.models.Team;
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

//    @GetMapping(value = "/team")
//    public ResponseEntity getAllTeamsAndFilters(
//            @RequestParam(required = false, name = "name") String name
//    ){
//        if (name != null){
//            return new ResponseEntity(teamRepository.findTeamByName(name), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(teamRepository.findAll(), HttpStatus.OK);
//    }

}
