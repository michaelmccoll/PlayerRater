import {useState} from 'react';
const EditMatch = ({match, teamName}) => {

    const [ranked, setRanked] = useState(true)
    const [homeScore, setHomeScore] = useState(null)
    const [awayScore, setAwayScore] = useState(null)
    const [teamsheet, setTeamsheet] = useState([])
    const [stats, setStats] = useState(null)
    const [ratings, setRatings] = useState(null)

    const setHomeScoreState = (event) => {
        setHomeScore(event.target.value)
    }
    
    const setAwayScoreState = (event) => {
        setAwayScore(event.target.value)
    }

    const setTeamsheetState = (event) => {
        setTeamsheet(event.target.value)   
    }


    const editMatch = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/matches/${match.id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              ranked: ranked,
              homeScore: homeScore,
              awayScore: awayScore
            })
          })
          .then(response=>response.json())
          .then(result=>{console.log('Success', result)})}

    return(
        <>
         <h3>Add Scores</h3>
            <form>
                <div>
                    <label htmlFor="newHomeScore">Home Score: </label>
                    <input onChange={setHomeScoreState} type="number" name="newHomeScore" id="newHomeScore"/>
                </div>
                <div>
                    <label htmlFor="newAwayScore">Away Score: </label>
                    <input onChange={setAwayScoreState} type="number" name="newAwayScore" id="newAwayScore"/>
                </div>
                {/* <div>
                    <label htmlFor="newTeamSheet">Home Team?: </label>
                    <input onChange={setHomeTeamState} type="checkbox" name="newMatchHomeTeam" id="newMatchHomeTeam"/>
                </div> */}
                <input onClick={editMatch} type="submit" value="submit"></input>
            </form>
        </>
    )
}

export default EditMatch;