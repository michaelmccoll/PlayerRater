import './MatchDetails.css';

const RankedMatchDetails = ({match, teamName}) =>{

    if (!match){
        return(
            <h2>Loading...</h2>
        )
    }

    if (!match.homeTeam){
        return(
        <>
            <hr/>
            <h4>{teamName} {match.homeScore} - {match.awayScore} {match.opposition}</h4>
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

export default RankedMatchDetails;