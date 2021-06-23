import {Link} from "react-router-dom";

import './MatchDetails.css';

const UnRankedMatchDetails = ({match, teamName}) =>{

    if (!match){
        return(
            <h4>There are no upcoming matches</h4>
        )
    }

    if (match.homeScore === null){
        return(
            <>
                <Link to={`/editmatch/${match.id}`}><h4>{teamName} - {match.opposition}</h4></Link>
            </>
        )
    }

    if (!match.homeTeam){
        return(
        <>
            <hr/>
            <h4>{teamName} {match.homeScore} - {match.awayScore} {match.opposition}</h4>
            <hr/>
        </>
        )
    }

    return(
        <>
            <hr/>
            <h4>{match.opposition} {match.homeScore} - {match.homeScore} {teamName}</h4>
        </>
    )
}

export default UnRankedMatchDetails;