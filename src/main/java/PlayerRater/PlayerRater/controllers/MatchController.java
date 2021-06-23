package PlayerRater.PlayerRater.controllers;

import PlayerRater.PlayerRater.models.Match;
import PlayerRater.PlayerRater.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MatchController {

    @Autowired
    MatchRepository matchRepository;

    @GetMapping(value = "/matches")
    public ResponseEntity<List<Match>> getAllMatches(){
        return new ResponseEntity<>(matchRepository.findAll(),HttpStatus.OK);
    }

    @GetMapping(value = "/matches/{id}")
    public ResponseEntity getMatch(@PathVariable Long id){
        return new ResponseEntity<>(matchRepository.findById(id),HttpStatus.OK);
    }

    @PostMapping(value = "/matches")
    public ResponseEntity<Match> postMatch(@RequestBody Match match){
        matchRepository.save(match);
        return new ResponseEntity<>(match,HttpStatus.CREATED);
    }

//    @PostMapping(value = "/matches/{id}")
//    public ResponseEntity<Match> updateMatch(@RequestBody Match match){
//        matchRepository.merge(match);
//        return new ResponseEntity<>(match,HttpStatus.CREATED);
//    }

}
