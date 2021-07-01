import {useState, useEffect} from 'react';
import React from 'react';
import './Profile.css';
import pic from '../imgs/messi/messi.jpeg';

const Profile = ({player}) => {
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
            <img src={pic} alt="Profile Pic"/>
            <div className="profileCard" style={{borderColor: player.team.primaryColour}}>
                <div className="badge">
                    <img className="badge" src={player.team.badge} alt="Team Badge"/>
                </div>

                <div className="games">
                    <p><b>GAMES</b><br></br>{player.matches.length}</p>
                </div>

                <div className="goals">
                    <p><b>GOALS</b><br></br>{player.stats[0].goals}</p>
                </div>
                
                <div className="assists">
                    <p><b>ASSISTS</b><br></br>{player.stats[0].assists}</p>
                </div>

                <div className="POTM">
                    <p><b>MVP</b><br></br>{player.stats[0].assists}</p>
                </div>

                <div className="fullName" style={{backgroundColor: player.team.secondaryColour}}>
                    <h5>{player.first_name} {player.second_name}</h5>
                </div>
                
                <div className="rating">
                    <p><b>RATING</b><br></br>{rating}</p>
                </div>

                <div className="teamName" style={{color: player.team.secondaryColour}}>
                    <h5>Leith Walkers</h5>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Profile;

// {player.stats[0].assists}