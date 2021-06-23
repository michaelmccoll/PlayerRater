package PlayerRater.PlayerRater.controllers;

import PlayerRater.PlayerRater.models.Player;
import PlayerRater.PlayerRater.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping(value = "/players")
    public ResponseEntity getAllPlayers(){
        return new ResponseEntity(playerRepository.findAll(),HttpStatus.OK) ;
    }

    @GetMapping(value = "/players/{id}")
    public ResponseEntity getPlayer(@PathVariable Long id){
        return new ResponseEntity(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/players")
    public ResponseEntity postPlayer(@RequestBody Player player){
        playerRepository.save(player);
        return new ResponseEntity(player,HttpStatus.CREATED);
    }

}
