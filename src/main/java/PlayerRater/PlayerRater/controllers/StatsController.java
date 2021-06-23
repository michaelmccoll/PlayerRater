package PlayerRater.PlayerRater.controllers;

import PlayerRater.PlayerRater.models.Stats;
import PlayerRater.PlayerRater.repositories.StatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StatsController {

    @Autowired
    StatsRepository statsRepository;

    @GetMapping(value = "/stats")
    public ResponseEntity getAllStats(){
        return new ResponseEntity(statsRepository.findAll(), HttpStatus.OK) ;
    }

    @GetMapping(value = "/stats/{id}")
    public ResponseEntity getStat(@PathVariable Long id){
        return new ResponseEntity(statsRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/stats")
    public ResponseEntity postStat(@RequestBody Stats stat){
        statsRepository.save(stat);
        return new ResponseEntity(stat,HttpStatus.CREATED);
    }

}