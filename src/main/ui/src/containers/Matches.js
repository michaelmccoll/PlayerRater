import {useState} from 'react';
import React from 'react';
import './Matches.css';
import MatchList from '../components/Matches/MatchList';

const Matches = ({team}) => {

  const [teamName] = useState(team.name)
  const [matches] = useState(team.matches)


    return(
        <>
            <h2>Matches</h2>
                <MatchList matches={matches} teamName={teamName}/>
            <hr/>
        </>
    )
}

export default Matches;