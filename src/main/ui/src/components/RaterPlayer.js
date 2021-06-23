import star from '../imgs/icons/rater.png';
import starFull from '../imgs/icons/starFull.png';
import Rating from 'react-rating'
import './RaterPlayer.css';

const RaterPlayer = ({player, handleChange}) => {

    const clickEvent = (event) => {
        handleChange(event, player.id)
    }

    const rating = player.ratings.slice(-1)[0]
    console.log(rating);

    // const addRating = (player) => {
    //     fetch('localhost:3000/ratings', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //           player: player,
    //           match: match,
    //           rating: rating
    //         })
    //       })
    //       .then(response=>response.json())
    //       .then(data=>{})}

    // LINE 35 - pull out the last rating!!! This should make the images re-render
    let ratings = null
    if(rating) {
        ratings = <Rating 
             stop="10" 
             initialRating={rating.rating}
             emptySymbol={<img src={star} className="star"/>}
             fullSymbol={<img src={starFull} className="star"/>}
             onClick={clickEvent}
         /> 
     } else {
         ratings = <Rating 
             stop="10" 
             initialRating={1}
             emptySymbol={<img src={star} className="star"/>}
             fullSymbol={<img src={starFull} className="star"/>}
             onClick={clickEvent}
         /> 
     }
    

    return(
        <>
        <h4>{player.first_name} {player.second_name}</h4>
        <div className="starRating">
            {ratings}
        </div>
        </>
    )
}

export default RaterPlayer;
