import UnRankedMatchDetails  from "./UnRankedMatchDetails"
import RankedMatchDetails from "./RankedMatchDetails"
import './MatchDetails.css';

const MatchList = ({matches, teamName}) => {

    const rankedMatches = matches.filter(match => match.ranked)
    const unrankedMatches = matches.filter(match => !match.ranked)
    const rankedMatchNodes = rankedMatches.map(match => {
        return(
            <RankedMatchDetails match={match} key={match.id} teamName={teamName}></RankedMatchDetails>
        )
    })

    const unrankedMatchSorted = unrankedMatches.sort((a, b) => b.date - a.date)
    const unrankedMatch = unrankedMatchSorted[0]
    
    return(
        <>
            <hr/>
            <h3>Latest Match</h3>
            <UnRankedMatchDetails match={unrankedMatch} key={unrankedMatch.id} teamName={teamName}></UnRankedMatchDetails>
            <hr/>
            <h3>Previous Matches</h3>
            {rankedMatchNodes}
        </>
    )
}

export default MatchList;

