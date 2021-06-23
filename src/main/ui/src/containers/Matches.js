import {useState, useEffect} from 'react';
import React from 'react';
import './Matches.css';
import MatchList from '../components/Matches/MatchList';

const Matches = ({teamId, playerId}) => {

    
    const [teamName, setTeamName] = useState('')
    const [matches, setMatch] = useState([])
    const [loaded, setLoaded] = useState(false);



    const getMatches = () => {
        if(playerId === 0) {
            return
        }
        fetch(`http://localhost:8080/players/${playerId}`)
        .then(res => res.json())
        .then(data => {
            setMatch(data.matches)
            setTeamName(data.team.name)
        })
        .then(() => setLoaded(true))
    }

    useEffect(()=>{
        getMatches();
    },[])

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
            <h2>Matches</h2>
            <MatchList matches={matches} teamName={teamName}/>
            <hr/>
        </>
    )
}

export default Matches;