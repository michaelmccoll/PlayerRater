package PlayerRater.PlayerRater.controllers;

import PlayerRater.PlayerRater.models.Rating;
import PlayerRater.PlayerRater.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RatingController {

    @Autowired
    RatingRepository ratingRepository;

    @GetMapping(value = "/ratings")
    public ResponseEntity getAllRatings(){
        return new ResponseEntity(ratingRepository.findAll(), HttpStatus.OK) ;
    }

    @GetMapping(value = "/ratings/{id}")
    public ResponseEntity getRating(@PathVariable Long id){
        return new ResponseEntity(ratingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/ratings")
    public ResponseEntity postRating(@RequestBody Rating rating){
        ratingRepository.save(rating);
        return new ResponseEntity(rating,HttpStatus.CREATED);
    }

}
