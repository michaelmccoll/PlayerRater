import {useState, useEffect} from 'react';
import React from 'react';
import './Stats.css';

const Stats = ({teamId,playerId}) => {

    const [playerName, setPlayerName] = useState('')
    const [games, setGames] = useState([])
    const [ratings, setRatings] = useState(0)
    const [rating, setRating] = useState(0)
    const [stats, setStats] = useState([])
    const [loaded, setLoaded] = useState(false);



    const getStats = () => {
        if(playerId === 0) {
            return
        }
        fetch(`http://localhost:8080/players/${playerId}`)
        .then(res => res.json())
        .then(data => {
            setStats(data.stats[0])
            setPlayerName(data.first_name + ' ' + data.second_name)
            setGames(data.matches.length)
            setRatings(data.ratings)
        })
        .then(() => setLoaded(true))
    }

    useEffect(()=>{
        getStats();
    },[])

    useEffect(()=>{
        avgRating()
    }, [ratings])

    const avgRating = () => {
        let sum = 0;
        for( let i = 0; i < ratings.length; i++ ){
            sum += ratings[i].rating
    }
        setRating(sum / ratings.length)
    }

    if(playerId === 0) {
        return(
            <p>You have not selected a Player </p>
        )
    }
    
    if(!loaded) {
        return(
            <p>...loading</p>
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
                        <td>{playerName}</td>
                        <td>{games}</td>
                        <td>{stats.goals}</td>
                        <td>{stats.assists}</td>
                        <td>{rating}</td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default Stats;

//     const [stats,setStats] = useState([])
//     const [loaded, setLoaded] = useState(false);

//     const statsNodes = playerId.teamsheet.map(player => {
//         return(
//             <tr>
//             <td>{player.first_name} {player.second_name}</td>
//             <td>{player.matches.size}</td>
//             <td>{player.goals}</td>
//             <td>{player.assists}</td>
//             <td>{player.rating}</td>
//         </tr>
//         )
//     })

//     return(
//         <div>
            
//         </div>
//         )
    
// }

// export default Stats;