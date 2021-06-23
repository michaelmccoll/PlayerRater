import {useState, useEffect} from 'react';
import React from 'react';
import './Stats.css';

const Stats = ({teamId,player}) => {

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

    if(!player) {
        return(
            <p>You have not selected a Player </p>
        )
    }

    return(
        <>
            <h2>Stats</h2>
            <table>
                <thead>
                    <th>Player</th>
                    <th>Games</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Rating</th>
                </thead>
               
                <tbody>
                    <tr>
                        <td>{player.first_name} {player.second_name}</td>
                        <td>{player.matches.length}</td>
                        <td>{player.stats[0].goals}</td>
                        <td>{player.stats[0].assists}</td>
                        <td>{rating}</td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default Stats;