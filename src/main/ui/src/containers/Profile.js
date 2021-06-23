import {useState, useEffect} from 'react';
import React from 'react';
import './Profile.css';
import pic from '../imgs/messi/messi.jpeg';

const Profile = ({player,playerId}) => {
    const [rating, setRating] = useState(0)

    useEffect(()=>{
        avgRating()
    }, [rating])

    const avgRating = () => {
        let sum = 0;
        for( let i = 0; i < player.ratings.length; i++ ){
            sum += player.ratings[i].rating
    }
        let aveRating = (sum / player.ratings.length)
        aveRating = aveRating.toFixed(2)
        setRating(aveRating)
    }

    return(
        <>
        <div className="profileCardWrapper">
            <img src={pic}/>
            <div className="profileCard" style={{borderColor: player.team.primaryColour}}>
                <div className="badge">
                    <img className="badge" src={player.team.badge}/>
                </div>

                <div className="games">
                    <h5>GAMES </h5>
                </div>

                <div className="goals">
                    <h5>GOALS {player.stats[0].goals}</h5>
                </div>
                
                <div className="assists">
                    <h5>ASSISTS {player.stats[0].assists}</h5>
                </div>

                <div className="POTM">
                    <h5>POTM</h5>
                </div>

                <div className="firstName">
                    <h5>{player.first_name}</h5>
                </div>
                
                <div className="secondName">
                    <h5>{player.second_name}</h5>
                </div>

                <div className="position">
                    <h5>{player.position}</h5>
                </div>
                
                <div className="rating">
                    <h5>RATING {rating}</h5>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Profile;

// {player.stats[0].assists}